/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://kwqxmmoe.qcloud.la';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 登录地址，用于建立会话
        loginUrl: `${host}/fire/login`,

        //获取当前微信用户信息
        getWeiChatUserInfo:`${host}/fire/getWeiChatUserInfo`,

       //注册地址
       registerUrl:`${host}/fire/register`
    }
};

module.exports = config;
