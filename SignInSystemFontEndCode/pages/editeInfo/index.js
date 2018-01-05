const app = getApp();

Page({
    data: {
        value: '1',
        label: '1',
        key: '1'
    },
    onLoad(option) {
        const {
            label,
            value,
            key
        } = option;
        wx.setNavigationBarTitle({
            title: label
        });

        this.setData({value, label, key});
    },
    inputHandle(e) {
        const that = this;
        that.setData({
            value: e.detail.value
        });
    },
    backInfoPage() {
        wx.navigateBack();
    },
    saveInfoHandle() {
      wx.navigateBack();
      var v=this.data.value;
      var k = this.data.key;
      var w ='jywang';
      wx.request({
        url: 'http://127.0.0.1:8080/SignInSystem/editUserInfo',
        data: {
          Wechatid: w,
          value: v,
          key:k
        }
      });
      
        // const that = this;
        // const { key, value } = that.data;
        // const pages = getCurrentPages();
        // const prePage = pages[pages.length - 2];
        // wx.pro.getStorage('user')
        //     .then((user) => {
        //         const newUser = Object.assign({}, user, { [key]: value });
        //         return wx.pro.setStorage('user', newUser);
        //     })
        //     .then((otherUser) => {
        //         prePage.setData({user: otherUser});
        //         wx.navigateBack();
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
     
    }
})
