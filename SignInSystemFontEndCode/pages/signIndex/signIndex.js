// pages/signIndex/signIndex.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    //secondHeight:0,
    course:"组合数学",
    timerCaption:"距离到结束还有",
    timer:10000,
    clock:'',
    imgSrc_signBegin:"../../images/sign_begin.png",
    imgSrc_signSuccess: "../../images/sign_success.png",
    latitude_self:null,
    longitude_self:null
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
    
    // 渲染倒计时时钟
    this.count_down(this);
  },

  imgChange:function(e){
    var that=this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        that.data.latitude_self = res.latitude;
        that.data.longitude_self = res.longitude;
        console.log('Latitude is '+that.data.latitude_self);
        console.log('Longitude is '+that.data.longitude_self)
      }
    })
    
    this.setData({
      imgSrc_signBegin: this.data.imgSrc_signSuccess
    })
  },

  /* ---------------毫秒级倒计时------------------ */
  count_down:function(that) {
    that.setData({
      clock: that.date_format(that.data.timer)//普通函数缺省的this默认是全局Window对象。
    });
    if (that.data.timer <= 0) {
      that.setData({
        clock: "已经截止"
      });
      // timeout则跳出递归
      return;
    }
    setTimeout(function () {
      // 放在最后--
      that.data.timer -= 10;
      that.count_down(that);//回调函数必须用that
    }
      , 10)
},

  date_format: function (timer) {
    // 秒数
    var second = Math.floor(timer / 1000);
    // 小时位
    var hr = Math.floor(second / 3600);
    // 分钟位
    var min = this.fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
    // 秒位
    var sec = this.fill_zero_prefix((second - hr * 3600 - min * 60));// equal to => var sec = second % 60;
    // 毫秒位，保留2位
    var micro_sec = this.fill_zero_prefix(Math.floor((timer % 1000) / 10));
    return hr + ":" + min + ":" + sec + " " + micro_sec;
  },
  fill_zero_prefix:function(num) {
    return num < 10 ? "0" + num : num
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