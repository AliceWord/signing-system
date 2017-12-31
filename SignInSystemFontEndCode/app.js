//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: function (loginCode) {
        var appid = 'wx5dd7160a249b6c95'; //填写微信小程序appid
        var secret = 'b130f2b7ce78b03958b3a89d5ec11886'; //填写微信小程序secret

        //调用request请求api转换登录凭证
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=‘+<code></code>appid+’&secret=‘+secret+’&grant_type=authorization_code&js_code=' + loginCode.code,
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            this.setData({ 
            WeChatid:res.data.openid //获取openid
            })
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    WeChatid:null,
    userInfo: null,
    userName:null,
    userId:null,
    school:null
  }
})