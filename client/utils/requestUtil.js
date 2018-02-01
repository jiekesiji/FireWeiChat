var qcloud = require('../vendor/wafer2-client-sdk/index');

/**
 * post 请求
 */
function postRequest(value, requestUrl, resSuccess, resError) {
  qcloud.request({
    url: requestUrl,
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: value,
    success(reslut) {
      resSuccess(reslut);
    },
    fail(error) {
      resError(error);
    }
  });
}


function getResult() {

}



module.exports = { postRequest };