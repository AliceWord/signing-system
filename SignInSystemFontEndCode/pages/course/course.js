// pages/course/course.js


var flag = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"qqq",
    showView: true,
    sys_height: 0,
    sessionHeight: 75,
    img_src: '../../images/course.png',
    week: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    schedule_top: ["一", "二", "三", "四", "五", "六", "日"],
    weekSlected: 0,
    sessionArr: [{ session: 1, time: "8:00" }, { session: 2, time: "8:50" }, { session: 3, time: "9:50" },
    { session: 4, time: "10:40" }, { session: 5, time: "11:30" }, { session: 6, time: "13:30" }, { session: 7, time: "14:20" },
    { session: 8, time: "15:20" }, { session: 9, time: "16:10" }, { session: 10, time: "17:05" },
    { session: 11, time: "17:55" }, { session: 12, time: "19:20" }, { session: 13, time: "20:10" }],
    schedule_line: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    session: [{ day: 1, Section: 6, duringTime: 2, CourseName: "组合数学", TeachingBuiLding: "主楼-101", session_selectNum: 162, session_duringWeek: 18 },
    { day: 1, Section: 1, duringTime: 2, CourseName: "高等网络", TeachingBuiLding: "四教-203", session_selectNum: 94, session_duringWeek: 16 },
    { day: 2, Section: 10, duringTime: 2, CourseName: "微机设计", TeachingBuiLding: "三教-304", session_selectNum: 38, session_duringWeek: 18 },
    { day: 3, Section: 4, duringTime: 2, CourseName: "人机交互", TeachingBuiLding: "三教-111", session_selectNum: 51, session_duringWeek: 8 },
    { day: 4, Section: 6, duringTime: 3, CourseName: "软件工程", TeachingBuiLding: "六教-413", session_selectNum: 35, session_duringWeek: 18 },
    { day: 5, Section: 3, duringTime: 2, CourseName: "嵌入式设计", TeachingBuiLding: "五教-521", session_selectNum: 27, session_duringWeek: 18 },
    { day: 6, Section: 9, duringTime: 2, CourseName: "王者荣耀", TeachingBuiLding: "宿舍-017", session_selectNum: 5, session_duringWeek: 18 }
    ],
    session_color: ["#EE3A8C", "#FFC125", "#B23AEE", "#97FFFF", "#76EE00", "#4876FF", "#EE7600"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var curDate = new Date();
    var year = curDate.getFullYear();
    var month = curDate.getMonth() + 1;
    var day = curDate.getDate();

    wx.request({
      url: 'http://127.0.0.1:8080/SignInSystem/test', //仅为示例，并非真实的接口地址
      data: {
         
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
        that.setData({
          name:res.data[0].department
      })
      console.log(name+'222')
      }
    })

    // console.log("newSignUpJs " + year + "-" + month + "-" + day);
    // wx.request({
    //   url: 'http://api/course_now',
    //   data: {
    //     x: WeChatid,
    //     y: year,
    //     m: month,
    //     d: day
    //   },
    //   success: function (res) {
    //     that.setData({
    //       session: res.data.session,
    //       showView: (res.data.type == 1 ? true : false)
    //     })
    //   }
    // })
  },

  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },

  //---------------框架代码-----------------------
  // imgTStart:function(e){
  //     this.setData({
  //       img_src: '../../images/course_teacher.png'
  //     })
  // },
  // imgTEnd: function (e) {
  //   this.setData({
  //     img_src: '../../images/course.png'
  //   })
  // },
  //-----------------------------------------------

  /**
   * Select week
   */
  weekSelect: function (e) {
    var that = this;
    // wx.request({
    //   url: 'http://api/course_week',
    //   data: {
    //     x: WeChatid,
    //     y: e.detail.value//教学周
    //   },
    //   success: function (res) {
    //     that.setData({
    //       weekSlected: e.detail.value,
    //       session: res.data.session
    //     })
    //   }
    // })
  },

  /**
   * Navigate to Page"courseAdd"
   */
  courseAdd: function (e) {
    wx.navigateTo({
      url: '../courseAdd/courseAdd?paraSession=' + JSON.stringify(this.data.session)
      + '&paraColor=' + JSON.stringify(this.data.session_color),
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