// pages/course/course.js


var flag=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sys_height:0,
    sessionHeight:75,
    img_src: '../../images/course.png',
    week: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
    schedule_top:["一","二","三","四","五","六","日"],
    weekSlected:0,
    sessionArr: [{ session: 1, time: "8:00" }, { session: 2, time: "8:50" }, { session: 3, time: "9:50" },
      { session: 4, time: "10:40" }, { session: 5, time: "11:30" }, { session: 6, time: "13:30" }, { session: 7, time: "14:20" },
      { session: 8, time: "15:20" }, { session: 9, time: "16:10" }, { session: 10, time: "17:05" },
      { session: 11, time: "17:55" }, { session: 12, time: "19:20" }, { session: 13, time: "20:10" }],
    schedule_line: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13],
    session: [{ session_day: 1, session_course: 6, session_duringTime: 2, session_name: "组合数学", session_address:"主楼-101",session_selectNum:162,session_duringWeek:18},
      { session_day: 1, session_course: 1, session_duringTime: 2, session_name: "高等网络", session_address: "四教-203", session_selectNum: 94, session_duringWeek: 16},
      { session_day: 2, session_course: 10, session_duringTime: 1, session_name: "微机设计", session_address: "三教-304", session_selectNum: 38, session_duringWeek: 18 },
      { session_day: 3, session_course: 4, session_duringTime: 2, session_name: "人机交互", session_address: "三教-111", session_selectNum: 51, session_duringWeek: 8},
      { session_day: 4, session_course: 6, session_duringTime: 3, session_name: "软件工程", session_address: "六教-413", session_selectNum: 35, session_duringWeek: 18},
      { session_day: 5, session_course: 3, session_duringTime: 2, session_name: "嵌入式设计", session_address: "五教-521", session_selectNum: 27, session_duringWeek: 18},
      { session_day: 6, session_course: 9, session_duringTime: 1, session_name: "王者荣耀", session_address: "宿舍-017", session_selectNum: 5, session_duringWeek: 18}
      ],
    session_color: ["#EE3A8C", "#FFC125", "#B23AEE", "#97FFFF", "#76EE00", "#4876FF","#EE7600"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //Get xxxHeight and convert to 'rpx'
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sys_height: res.windowHeight / res.windowWidth * 750//(res.windowHeight / res.windowWidth * 750 - 140) / 13
        })
      },
    });
    
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
  weekSelect:function(e){
    this.setData({
      weekSlected:e.detail.value
    })
  },

  /**
   * Navigate to Page"courseAdd"
   */
  courseAdd:function(e){
    wx.navigateTo({
      url: '../courseAdd/courseAdd?paraSession='+JSON.stringify(this.data.session)
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