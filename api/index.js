import request from '@/utils/request'

export default {
    //查询热门课程和名师
  getIndexData() {
    return request({
      url: '/examination/couese/list?pageSize=10&pageNum=1',
      method: 'get'
    })
  }
}
