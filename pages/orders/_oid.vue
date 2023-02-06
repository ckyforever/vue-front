<template>
  <div class="Page Confirm">
    <div class="Title">
      <h1 class="fl f18">订单确认</h1>
      <img src="~/assets/img/cart_setp2.png" class="fr">
      <div class="clear"></div>
    </div>
    <form name="flowForm" id="flowForm" method="post" action="">
      <table class="GoodList">
        <tbody>
        <tr>
          <th class="name">商品</th>
          <th class="price">积分数</th>
        </tr>
        </tbody>
        <tbody>
        <!-- <tr>
          <td colspan="3" class="Title red f18 fb"><p>限时折扣</p></td>
        </tr> -->
        <tr>
          <td colspan="3" class="teacher">讲师：{{ order.teacherName }}</td>
        </tr>
        <tr class="good">
          <td class="name First">
            <a target="_blank" :href="'https://localhost:3000/course/'+order.id">
              <img :src="'http://localhost:8080' + order.coverPicturePath"></a>
            <div class="goodInfo">
              <input type="hidden" class="ids ids_14502" value="14502">
              <a target="_blank" :href="'http://localhost:3000/course/'+ order.id">{{ order.courseName }}</a>
            </div>
          </td>
          <td class="price">
            <p><strong>{{ order.requiredIntegral }}</strong></p>
            <!-- <span class="discName red">限时8折</span> -->
          </td>
        </tr>
        <tr>
          <td class="Billing tr" colspan="3">
            <div class="tr">
              <p>共 <strong class="red">1</strong> 件商品，合计<span
                class="red f20">￥<strong>{{ order.requiredIntegral }}</strong></span></p>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="Finish">
        <div class="fr" id="AgreeDiv">

          <label for="Agree"><p class="on"><input type="checkbox" checked="checked">我已阅读并同意<a href="javascript:"
                                                                                                     target="_blank">《谷粒学院购买协议》</a>
          </p></label>
        </div>
        <div class="clear"></div>
        <div class="Main fl">
          <div class="fl">
            <a :href="'/course/'+order.courseId">返回课程详情页</a>
          </div>
          <div class="fr">
            <p>共 <strong class="red">1</strong> 件商品，合计<span class="red f20">￥<strong
              id="AllPrice">{{ order.requiredIntegral }}</strong></span></p>
          </div>
        </div>
        <input name="score" value="0" type="hidden" id="usedScore">
        <button class="fr redb" type="button" id="submitPay" @click="toPay()">购买</button>
        <div class="clear"></div>
      </div>
    </form>
  </div>
</template>
<script>
import ordersApi from '@/api/orders'
import courseApi from "@/api/course";
import cookie from "js-cookie";

export default {
  asyncData({params, error}) {
    return courseApi.getCourseInfo(params.oid)
      .then(response => {
        return {order: response.data.data}
      })
  },
  data() {
    return {
      userId: -1,
      courseId: -1
    }
  },
  methods: {
    //去支付
    toPay() {
      ordersApi.userBuy(this.order.id, parseInt(cookie.get('userId')))
        .then(response => {
          if (response.data.code !== 200) {
            this.$message.error(response.data.msg)
            return
          }
          this.$router.push({path: '/orders/' + this.order.id})
        })
    }
  }
}
</script>
