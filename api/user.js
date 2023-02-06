import request from "@/utils/request";

export default {
  getUserInfo(userId) {
    return request({
      url:'examination/users/'+userId,
      method:"get"
    })
  },

  getUserArticleList(userId) {
    return request({
      url:'/examination/discuss/list?userId='+userId+'&displayOrNot='+1,
      method:'get'
    })
  }
}
