// pages/courseAdd/courseAdd.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'123',
    startWeek:1,
    endWeek:14,
    courseName:'',
    // session: [],
    
    mine: "王丹阳",
    // session: [{ selected: true, Courseid: 123, day: 1, Section: 6, duringTime: 2, CourseName: "组合数学", TeacherName: "王老师", TeachingBuiLding: "主楼-101", session_selectNum: 162, startWeek: 1, endWeek: 18 }, { selected: true, Courseid: 124, day: 3, Section: 1, duringTime: 2, CourseName: "高等网络", TeacherName: "王老师", TeachingBuiLding: "主楼-111", session_selectNum: 102, startWeek: 4, endWeek: 18 }

    // ],
    session:[{classRoom:"",courseName:"123",date:"",period:"",section:"",reachingBuilding:"",selectNum:"",date:""}],
    session_color: ["#EE3A8C", "#FFC125", "#B23AEE", "#97FFFF", "#76EE00", "#4876FF", "#EE7600"]

  },

  /**
   * 生命周期函数--监听页面加载
   * Get and parse para...
   */
  onLoad: function (options) {
    
  },

  selected_change: function (e) {
    var that = this;
    wx.request({
      url: 'http://api/course_change',
      data: {
        x: WeChatid,
        y: e.target.dataset.item
      }
    })
  },

  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    console.log(this.data.inputValue)
  },

  course_search: function (e) {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8080/SignInSystem/courseSearch',
      data: {
        courseName: that.data.inputValue
      },
      success: function (res) {
        that.setData({
          session: res.data
        })
        console.log(res)
      }
    })
  },
  /**
   * Navigate to Page "signNumDetails"
   */
  // navigateToDetails: function (e) {
  //   console.log(e)
  //   var session_name = e.target.dataset.item
  //   wx.navigateTo({
  //     url: '../signNumDetails/signNumDetails?session_name=' + session_name,
  //   })
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8080/SignInSystem/getCourseWeek',
      data: {
        Wechatid: getApp().globalData.WeChatid
      },
      success: function (res) {
        that.setData({
          session: res.data
        })
        console.log(res);
      }
    })
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