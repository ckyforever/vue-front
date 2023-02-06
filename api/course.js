import request from '@/utils/request'
import * as url from "url";

export default {
  //条件分页课程查询的方法
  getCourseList(page, limit, searchObj) {
    return request({
      url: `examination/course/list?pageNum=${page}&pageSize=${limit}`,
      method: 'get',
      data: searchObj
    })
  },
  //查询所有分类的方法
  getAllSubject() {
    return request({
      url: '/eduservice/subject/getAllSubject',
      method: 'get'
    })
  },
  //课程详情的方法
  getCourseInfo(id) {
    return request({
      url: '/examination/course/' + id,
      method: 'get'
    })
  },

  //获取课程视频信息
  getCourseDetail(id) {
    return request({
      url: '/examination/courseDetail/getCourseDetail/' + id,
      method: 'get'
    })

  }

}
