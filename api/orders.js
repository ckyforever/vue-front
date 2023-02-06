import request from '@/utils/request'

export default {

  getUserIsBuy(courseId, userId) {
    return request({
      url: '/examination/integral/getUserIsBuy',
      method: 'post',
      data: {courseId: courseId, userId: userId}
    })
  },

  userBuy(courseId,userId) {
    return request({
      url: '/examination/integral/buy',
      method: 'post',
      data: {courseId: courseId, userId: userId}
    })
  }
}
