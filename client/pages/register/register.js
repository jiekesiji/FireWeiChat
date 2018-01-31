// pages/register/register.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
      checkBoxChecked:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onBackPress: function () {
    wx.navigateTo({
      url: '../login/login',
    })
  },

  //监听checkbox  改变提交按钮的样式
  checkboxChange: function (e) {
    this.setData({
      checkBoxChecked: e.detail.value.length != 0
    });
  },
  //发起注册申请
  register: function (e) {
    var value = e.detail.value;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)

    if (!(value.telNum)) {
      util.showWarn('请填写电话号码!');
      return;
    }

    if (!(value.nickName)) {
      util.showWarn('请填写用户名!');
      return;
    }

    if (!(value.firstPsw)) {
      util.showWarn('请填写创建密码!');
      return;
    }

    if (!(value.secondPsw)) {
      util.showWarn('请再次输入密码!');
      return;
    }

    if (value.secondPsw !== value.firstPsw) {
      util.showWarn('密码输入有误!');
      return;
    }

    util.showBusy('请求中...')
    qcloud.request({
      url: config.service.registerUrl,
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: value,
      success(reslut){

      },
      fail(error){

      }
    });

  }
})