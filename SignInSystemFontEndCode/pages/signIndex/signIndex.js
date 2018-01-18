// pages/signIndex/signIndex.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    courseName: "今日已无课",
    timerCaption: "签到时间范围:",
    signUpStartTime: '00:00',
    signUpEndTime: '00:00',
    signUpTime: 0,
    imgSrc_sign: "../../images/qiandao.png",
    courseToday: null,
    courseIndex: 0,
    date: null,
    signFlag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var timeNow = new Date();
    that.data.date = timeNow;

    var week = timeNow.getDay();
    //获取今天的上课列表
    wx.request({
      url: 'http://api/course_today',
      data: {
        x: getApp().globalData.WeChatid,
        y: week
      },
      success: function (res) {
        this.setData(
          that.data.courseToday = res.data
        )
      }
    })
  },

  checkLocation: function (e) {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },

  signUp: function (e) {
    var that = this;

    var timeNow = new Date();
    that.data.date = timeNow;
    var hour = timeNow.getHours();
    var minute = timeNow.getMinutes();
    var signUpTime = that.data.signUpTime;

    if (that.data.signFlag) {
      return
    }

    if ((hour * 60 + minute) >= signUpTime) {
      wx.showToast({
        title: '未到签到时间',
        duration: 1000,
        image: "../../images/error.png"
      })
      that.freshen()
      return
    }

    var course = that.data.courseToday[that.data.courseIndex];
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        //0.001是100米
        if ((abs(course.latitude - res.latitude) > 0.001)
          && (abs(course.longitude - res.longitude) > 0.001)) {
          wx.showToast({
            title: '您不在签到位置',
            duration: 1000,
            image: "../../images/error.png"
          })
          that.freshen()
          return
        }
      }
    })

    wx.request({
      url: 'http://api/signUp',
      data: {
        x: getApp().globalData.WeChatid,
        n: course.courseName,
        d: timeNow.getDate()
      },
      success: function (res) {
        if (res.data.code == 0) {
          wx.showModal({
            title: '签到失败',
            content: '签到失败，请再次尝试',
            success: function (res) {
              that.freshen()
            }
          })
        }
        else if (res.data.code == 1) {
          wx.showToast({
            title: '成功',
            duration: 1000,
            image: "../../images/pass.png"
          })
          this.setDate({
            signFlag: true,
            imgSrc_sign: "../../images /sign_success.png"
          })
        }
        else {
          wx.showToast({
            title: '您已签过到',
            duration: 1000,
            image: "../../images/pass.png"
          })
          this.setDate({
            signFlag: true,
            imgSrc_sign: "../../images /sign_success.png"
          })
        }
      },
      fail: function (res) {
        wx.showModal({
          title: '签到失败',
          content: '签到失败，请再次尝试',
          success: function (res) {
            that.freshen()
          }
        })
      }
    })
  },

  freshen: function () {
    var that = this;

    var timeNow = new Date();
    if (that.data.date.getDay() != timeNow.getDate()) {
      that.data.date = timeNow;
      var week = timeNow.getDay();
      wx.request({
        url: 'http://api/course_today',
        data: {
          x: getApp().globalData.WeChatid,
          y: week
        },
        success: function (res) {
          this.setData(
            this.data.courseToday = res.data
          )
        }
      })
    }

    var course = that.data.courseToday;
    var hour = timeNow.getHours();
    var minute = timeNow.getMinutes();
    var i = 0;

    for (; i < course.length; i++) {
      var signStartHour = parseInt(course[i].signUpStartTime.slice(0, 1));
      var signStartMinute = parseInt(course[i].signUpStartTime.slice(3, 4));
      var signEndHour = parseInt(course[i].signUpEndTime.slice(0, 1));
      var signEndMinute = parseInt(course[i].signUpEndTime.slice(3, 4));

      //有尚未开始的课程
      if ((hour * 60 + minute) < (signStartHour + 60 + signStartMinute)) {
        that.data = {
          courseName: course[i].courseName,
          signUpStartTime: course[i].signUpStartTime.slice(0, 5),
          signUpEndTime: course[i].signUpEndTime.slice(0, 5),
          signFlag: false,
          imgSrc_sign: "../../images/qiandao.png"
        };
        break;
      }
      //有正在签到的课且没有签过到
      else if (((hour * 60 + minute) <= (signEndtHour + 60 + signEndMinute)) && !that.data.signFlag) {
        that.data = {
          courseName: course[i].courseName,
          signUpStartTime: course[i].signUpStartTime.slice(0, 5),
          signUpEndTime: course[i].signUpEndTime.slice(0, 5),
          signUpTime: signEndtHour + 60 + signEndMinute,
          signFlag: true,
          courseIndex: i,
          imgSrc_sign: "../../images/sign_begin.png"
        };
        break;
      }
    }

    //没有需要签到的课
    if (course.length == 0 || i == course.length) {
      that.data = {
        courseName: "今日无课",
        signUpStartTime: "00:00",
        signUpEndTime: "00:00",
        timeFlag: true,
        imgSrc_sign: "../../images/qiandao.png"
      };
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.freshen();
  },


  onPullDownRefresh: function () {
    this.freshen();
  }
})
