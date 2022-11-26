const URL = "https://teachablemachine.withgoogle.com/models/srhvRHVyJ/";

const samePoseCount = 10; // 같은 포즈 5번 이상 나올 시 포즈 변경된 것으로 간주
const posePredictPecent = 0.75; // 포즈 확률 0.7 이상일 시 해당 포즈로 간주

let model, webcam, ctx, labelContainer, maxPredictions;
let poseList = [];
let state_pose = 'None';
let before_pose = 'None';
let my_pose = 'None';
let count = 0;
let if_first_stand = false;
let if_myPose = false;

var startTime = new Date().getTime();

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Setup WebCam
    const size = 300;
    const flip = true; // flip webcam
    webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);
    const canvas = document.getElementById("canvas");
    canvas.width = size; canvas.height = size;
    ctx = canvas.getContext("2d");
}

async function loop(timestamp) {
    webcam.update(); // update WebCam frame
    await predict();
    window.requestAnimationFrame(loop);
    checkTime();
}

// Time
function checkTime() {
    let time = document.getElementById("time");
    var nowTime = new Date().getTime()
    var newTime = new Date(nowTime - startTime)
    var min = newTime.getMinutes()
    var sec = newTime.getSeconds()
    if (min < 10) min = "0" + min
    if (sec < 10) sec = "0" + sec
    time.innerHTML = min + ":" + sec
}

// Delay func
function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

// Save in state_pose array
async function pose_state(){
    before_pose = poseList[poseList.length - 1];

    // Tutorial
    let radio_exercise_dict = {
        'item-1': 'stand',
        'item-2': 'squat',
        'item-3': 'jump with arms',
        'item-4': 'right side exercise',
        'item-5': 'left side exercise',
    };
    let radio_id_dict = {
        'item-1': 0,
        'item-2': 1,
        'item-3': 2,
        'item-4': 3,
        'item-5': 4,
    };

    let tutorialInput = document.querySelector('input[name="slider"]:checked');
    if (tutorialInput !== null) {
        radio_state = tutorialInput.id;
        slider = document.getElementsByName('slider');
        i = radio_id_dict[radio_state];
        if (state_pose === radio_exercise_dict[radio_state]) {
            i++;
            i = i % slider.length;
            slider[i].checked = true;
        }
    }
    //radio_state = document.querySelector('input[name="slider"]:checked').id;
    // slider = document.getElementsByName('slider');
    // i = radio_id_dict[radio_state];
    // if (state_pose === radio_exercise_dict[radio_state]) {
    //     i++;
    //     i = i % slider.length;
    //     slider[i].checked = true;
    // }

    if (count === samePoseCount) {
        state_pose = poseList[poseList.length - 1];
        console.log("state_pose : " + state_pose);
        count = 0;
        poseList = [];
        poseChanged();
    }

    if (poseList[poseList.length - 1] === before_pose) count++;
    else count = 0;
}

// Stand -> Pose
async function poseChanged(){
    if (state_pose === 'stand' && !if_first_stand){
        if_first_stand = true;
    }
    else if (state_pose !== 'stand' && if_first_stand){
        my_pose = state_pose;
        if_myPose = true;
    }
    else if (state_pose === 'stand' && if_first_stand && if_myPose) {
        moveCharacterByPose();
        if_first_stand = false;
        if_myPose = false;
        my_pose = 'None';
    }
}

// Move Character
async function moveCharacterByPose(){
    console.log("my_pose:", my_pose);
    if (my_pose === 'squat'){
        MazeGame.moveCharacter("down");
        console.log("down");
    }
    else if (my_pose === 'right side exercise'){
        MazeGame.moveCharacter("right");
        console.log("right");
    }
    else if (my_pose === 'left side exercise'){
        MazeGame.moveCharacter("left");
        console.log("left");
    }
    else if (my_pose === 'jump with arms'){
        MazeGame.moveCharacter("up");
        console.log("up");
    }
}

async function predict() {
    const progressBarContainer = document.querySelectorAll('.progress-bar__container');
    const progressBar = document.querySelectorAll('.progress-bar');
    /* Prediction 1: run input through posenet */
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    /* Prediction 2: run input through teachable machine classification model */
    const prediction = await model.predict(posenetOutput);
    for (let i = 0; i < maxPredictions; i++) {
        if (prediction[i].probability.toFixed(2) > posePredictPecent) {
            poseList.push(prediction[i].className);
            pose_state();
        }
        let state = prediction[i].probability.toFixed(2) * 100;
        if (state > posePredictPecent * 100) {
            gsap.to(progressBar[i], {
                x: `${state}%`,
                backgroundColor: '#f6c66b',
                onComplete: () => {
                    progressBarContainer[i].style.boxShadow = '0 0 5px #414141';
                }
            });
        } else {
            gsap.to(progressBar[i], {
                x: `${state}%`,
                backgroundColor: '#414141',
                onComplete: () => {
                    progressBarContainer[i].style.boxShadow = '0 0 5px #414141';
                }
            });
        }
    }
    drawPose(pose);
}

// Draw Keypoints & Skeleton
function drawPose(pose) {
    if (webcam.canvas) {
        ctx.drawImage(webcam.canvas, 0, 0);
        if (pose) {
            const minPartConfidence = 0.5;
            tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
            tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
        }
    }
}

init();