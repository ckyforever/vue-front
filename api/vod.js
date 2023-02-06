import request from '@/utils/request'
export default {
  getVideo(vid) {
    return request({
      url: `examination/courseDetail/${vid}`,
      method: 'get'
    })
  }

}
