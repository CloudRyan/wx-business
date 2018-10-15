import wepy from 'wepy';
import tip from './tip';

const login = (backFun) =>{
  if(!wepy.getStorageSync('code')){// || !wepy.getStorageSync('token')
    wepy.login({
      success: function(res) {
        wepy.setStorageSync('code', res.code);
        backFun && backFun();
      }
    });
  }else{
    backFun && backFun();
  }
}
export const wxRequest = (params = {}, url, cllback, isload) => {
  isload || tip.loading();
  login(()=>{
    let data = params.query || {};
    data.reqSource = 'lite';
    url+= url.indexOf('?') != -1 ? '&' : '?';
    url+= 'token='+wepy.getStorageSync('token');
    url+= '&code='+wepy.getStorageSync('code');
    wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/json' },
        success: res => {
          isload || tip.loaded();
          if(res.data.status == 200){
            cllback && cllback(res.data);
            if(res.data && res.data.data && url.indexOf('liteLogin.do')!=-1){
              wepy.setStorageSync('token', res.data.data);
            }
          }else if(res.data && res.data.status && res.data.status == 401){
            tip.error(res.data.msg);
            setTimeout(()=>{
              wepy.clearStorageSync();
              wx.reLaunch({
                url: 'login?page=true'
              });
            },2000);
          }else{
            tip.error(res.data.msg);
            console.error('wxRequest:error',res);
            // setTimeout(()=>{
            //   wepy.clearStorageSync();
            //   wx.reLaunch({
            //     url: 'login?page=true'
            //   });
            // },2000);
          }
        },
        fail: res=> {
          isload || tip.loaded();
          if(res.data){
            tip.error(res.data.msg);
          }else{
            tip.error('请求超时');
          }
          console.error('wxRequest:fail',res);
          //-----test
          // tip.error('手机测试',function(){
          //   wepy.switchTab({
          //     url: 'home'
          //   })
          // });
          //------
        },
        complete: res => {

        }
    });
  })
};
