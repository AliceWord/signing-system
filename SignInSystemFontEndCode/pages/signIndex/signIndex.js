// pages/signIndex/signIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course: "组合数学",
    timerCaption: "签到时间范围:",
    timer: 10000,
    clock: '09:50-12:15',
    imgSrc_signBegin: "../../images/qiandao.png",
    imgSrc_signSuccess: "../../images/sign_success.png",
    imgSrc_signFail: "../../images/sign_fail.png",
    latitude_self: null,
    longitude_self: null,
    flag_sign: false,
    weidu: null,
    jingdu: null,
    //从服务器获取时间
    nian: null,
    yue: null,
    ri: null,
    xiaoshi1: null,
    xiaoshi2: null,
    fenzhong1: null,
    fenzhong2: null,
    flag: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that=this;
    // wx.getSystemInfo({//设置该页面下半部分的高度。
    //   success: function(res) {
    //     console.log(res);
    //     that.setData({//这里必须用that...
    //       secondHeight: (res.windowHeight - 200) * 750/res.windowWidth    //详见日志‘尺寸转换’
    //     })
    //   },
    // });
    // console.log(this.data.secondHeight);
    /**
    * 返回课程名称
    */
    wx.request({
      url: 'http://12355:808080/efsgsd/vxvx',
      data: {

      },
      success: function (res) {
        this.setData([
          this.course = res.data.course
        ])
      }
    })



    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
      }
    })
  },
  checkLocation: function (e) {
    var that = this;
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
  }
  ,
  imgChange: function (e) {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        that.data.latitude_self = res.latitude;
        that.data.longitude_self = res.longitude;
        console.log('Latitude is ' + that.data.latitude_self);
        console.log('Longitude is ' + that.data.longitude_self)
      }
    })

    wx.showModal({
      title: '签到失败',
      content: '未在指定的签到时间范围',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })



    // this.setData({
    //   imgSrc_signBegin: this.data.imgSrc_signSuccess,
    //   flag_sign:true
    // })
  },

  /* ---------------显示签到时间范围------------------ */
  showtime: function (that) {
    that.setData()
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onshow开始执行')
    var that = this
    wx.request({
      url: '',
      data: {
        // userId: app.globalData.userId
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log('onshowwx.request success')
        console.log(res)
        var key = String(res.data.code)
        console.log(key.charAt(key.length - 1))
        //如果当前没有签到，设flag为0
        if (key.charAt(key.length - 1) != 1) {
          that.setData({
            flag: 0
          })
        }
        else {
          //获取现在的时间
          console.log('进入到获取时间阶段了')
          var tim = new Date()
          console.log('先输出一下tim Date变量' + tim)
          var nian = tim.getFullYear()
          var yue = tim.getMonth() + 1
          var ri = tim.getDate()
          var xiaoshi = tim.getHours()
          var fenzhong = tim.getMinutes()
          console.log('当前时间用于判断有没有签到任务：' + nian + '/' + yue + '/' + ri + ' ' + xiaoshi + ':' + fenzhong)
          //先把所有信息拉下来，一个一个比对时间
          //如果时间在范围里，获取projectId
          for (var i = 0; i < res.data.resultList.length; i++) {
            console.log('获取到的数组长度' + res.data.resultList.length)
            var start = res.data.resultList[i].startTime
            var end = res.data.resultList[i].endTime
            //转化开始时间
            var d = new Date(start)
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var day = d.getDate();
            var hour = d.getHours();
            var minute = d.getMinutes();
            console.log('服务器获取到的开始时间' + year + '/' + month + '/' + day + ' ' + hour + ':' + minute)
            //转化结束时间
            var m = new Date(end)
            var hh = m.getHours(); //结束小时
            var mm = m.getMinutes(); //结束分钟
            console.log('结束的小时是' + hh + '结束的分钟是' + mm)
            //开始比对时间
            if (nian == year) {
              //年相等，继续匹配
              console.log('年相等，继续匹配')
              if (yue == month) {
                //年不等，设置flag
                if (ri == day) {
                  console.log('日相等，继续匹配')
                  //日相等，继续匹配
                  if (xiaoshi == hour) {
                    //小时相等，继续匹配
                    if (xiaoshi < hh) {
                      //跨小时的签到，分钟小于60就可以了
                      if (fenzhong < 60) {
                        /////////////////////
                        //就是这个了，取projectId
                        console.log(res.data.resultList[i].projectId)
                        that.setData({
                          id: res.data.resultList[i].projectId,
                          flag: 1
                        })
                      }
                    }
                    else {
                      //不是跨小时的签到，继续判断
                      console.log('小时相等，继续匹配')
                      if (fenzhong < minute) {
                        //分钟小于开始时间
                        console.log('分钟小于开始时间，不行')
                        console.log('这个失败的项目id是：' + res.data.resultList[i].projectId)
                        ////
                        /////////
                        //太早了，稍等一会就可以签到了，可以做提示，先设置为没有签到
                        that.setData({
                          flag: 0
                        })
                      }
                      else {
                        //分钟大于等于开始时间，可能存在签到，判断是不是小于结束时间
                        console.log('分钟大于等于开始时间，可能存在签到')
                        console.log('结束的分钟是：' + mm)
                        if (fenzhong < mm) {
                          /////////////////////
                          //就是这个了，取projectId
                          console.log(res.data.resultList[i].projectId)
                          that.setData({
                            id: res.data.resultList[i].projectId,
                            flag: 1
                          })
                        }
                        else {
                          ////////
                          ///分钟过了，迟到了
                          console.log('分钟过了，迟到了')
                          that.setData({
                            flag: 0
                          })
                        }
                      }
                    }

                  }
                  //小时不相等，如果小于，还有签到的可能性
                  else if (xiaoshi < hour) {
                    var a = fenzhong + xiaoshi
                    var b = hour + minute + 1
                    if (a <= b) {
                      //就是这个了，取projectId
                      console.log(res.data.resultList[i].projectId)
                      that.setData({
                        id: res.data.resultList[i].projectId,
                        flag: 1
                      })
                    }
                    else {
                      console.log('这个失败的项目id是：' + res.data.resultList[i].projectId)
                      //小时不等，设置flag
                      that.setData({
                        flag: 0
                      })
                    }
                  }
                  else {
                    console.log('小时大了，如果在结束范围内，还是可以签到')
                    // // console.log('这个失败的项目id是：' + res.data.resultList[i].projectId)
                    // //小时不等，设置flag
                    // that.setData({
                    //     flag: 0
                    // })
                    var a = fenzhong + xiaoshi
                    var b = hour + minute + 1
                    if (a <= b) {
                      //就是这个了，取projectId
                      console.log(res.data.resultList[i].projectId)
                      that.setData({
                        id: res.data.resultList[i].projectId,
                        flag: 1
                      })
                    }
                    else {
                      console.log('小时大了，失败')
                      that.setData({
                        flag: 0
                      })
                    }
                  }
                }
                else {
                  console.log('日不相等，结束匹配')
                  console.log('这个失败的项目id是：' + res.data.resultList[i].projectId)
                  //日不等，设置flag
                  that.setData({
                    flag: 0
                  })
                }
              }
              else {
                //月不等，设置flag
                that.setData({
                  flag: 0
                })
              }
            }
            else {
              //年不等，设置flag
              that.setData({
                flag: 0
              })
            }
            ///////////////////开始比对时间反括号
          }
        }

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
