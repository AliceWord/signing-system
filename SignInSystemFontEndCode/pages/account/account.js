// pages/account/account.js
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:null,
    userId:null,
    school:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  //获取对应输入信息
  userNameInput:function(e){
    console.log(e);
    this.setData({
      userName:e.detail.value
    });
    console.log(this.data.userName)
  },
  userIdInput:function(e){
    this.setData({
      userId:e.detail.value
    })
  },
  schoolInput:function(e){
    this.setData({
      school:e.detail.value
    })
  },
  teacherIdentify:function(e){
    wx.navigateTo({
      url: '../../pages/teacherIdentify/teacherIdentify'
    })
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
  
  }
})