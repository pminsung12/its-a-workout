const path = require('path');

//우리 앱이 실행할 수 있게 하는 파일의 경로 반환
module.exports = path.dirname(require.main.filename);