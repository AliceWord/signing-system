// pages/account/account.js
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Wechatid: 'jywang',
    userInfo: {},
    hasUserInfo: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    genderDialogStatus: false,
    // session:{
    //   Type: 2,
    //   StudentName: '',
    //   Studentid: 'P17',
    //   SchoolName: '清华'
    // }
    session:{
      type:'2',
      studentName: 'qw',
      studentId: 'P17',
      schoolName: '清华'
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
//获取头像昵称
  onLoad: function () {
    var that = this;
 
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
       // hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    
    
  },

  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
    
  accountEdit: function (e) {
    wx.navigateTo({
      url: '../accountEdit/accountEdit',
    })
  },

  showGenderDialog() {
    const that = this;
    that.setData({ 
      genderDialogStatus: true 
    });
  },
  hidenGenderDialog() {
    const that = this;
    that.setData({ genderDialogStatus: false });
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
    var that = this;
    wx.request({
      url: "http://127.0.0.1:8080/SignInSystem/getUserInfo",
      data: {
        Wechatid: 'jywang'
      },
      success: function (res) {
        console.log(res);
        console.log(res.data.schoolName);
        that.setData({
          session: res.data
        })
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