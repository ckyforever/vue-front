import request from '@/utils/request'

export default {
  getUserFileList(userId) {
    return request({
      url:'examination/flie/list?userId=' + userId,
      method:'get'
    })
  },
  downloadFile(filePath) {
    return request({
      url:'/common/download/resource?resource=' + filePath,
      method:'get'
    })
  }
}
