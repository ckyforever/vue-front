import request from '@/utils/request'

export default {
    //根据手机号发验证码
  sendCode(phone) {
    return request({
      url: `/examination/users/getVertifyCode?phoneNumber=${phone}`,
      method: 'get'
    })
  },

  //注册的方法
  registerMember(formItem) {
    return request({
      url: `/examination/users/register`,
      method: 'post',
      data: formItem
    })
  }

}
