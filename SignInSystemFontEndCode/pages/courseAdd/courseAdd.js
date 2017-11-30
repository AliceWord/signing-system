// pages/courseAdd/courseAdd.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    session:[],
    session_color:[],
    mine:"王丹阳"
  },

  /**
   * 生命周期函数--监听页面加载
   * Get and parse para...
   */
  onLoad: function (options) {
    this.setData({
      session: JSON.parse(options.paraSession),
      session_color:JSON.parse(options.paraColor)
    })
  },

  /**
   * Navigate to Page "signNumDetails"
   */
  navigateToDetails:function(e){
    console.log(e)
    var session_name=e.target.dataset.item
    wx.navigateTo({
      url: '../signNumDetails/signNumDetails?session_name=' + session_name,
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