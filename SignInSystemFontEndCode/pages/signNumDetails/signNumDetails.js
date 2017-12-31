// pages/signNumDetails/signNumDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    session_name:null,
    arr_avatar: [{ src: 1, name: "赵丽颖", stuNum: 2017081232, signNum: 13 }, { src: 2, name: "霍建华", stuNum: 2017080806, signNum: 6}, 
      { src: 3, name: "于冰", stuNum: 2017082111, signNum: 11 }, { src: 4, name: "陈晓", stuNum: 2017080628, signNum:10}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      session_name: options.session_name
    })
    wx.setNavigationBarTitle({
      title: this.data.session_name+' - 详情',
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