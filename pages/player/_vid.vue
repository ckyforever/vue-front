<template>
  <div>

    <!-- 阿里云视频播放器样式 -->
    <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css">
    <!-- 阿里云视频播放器脚本 -->
    <script charset="utf-8" type="text/javascript" src="https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js"/>

    <!-- 定义播放器dom -->
    <div id="J_prismPlayer" class="prism-player"/>
  </div>
</template>
<script>
import vod from '@/api/vod'

export default {
  asyncData({params, error}) {
    return vod.getVideo(params.vid)
      .then(response => {
        console.log(response.data.data)
        return {
          video: response.data.data
        }
      })
  },
  mounted() { //页面渲染之后  created
    new Aliplayer({
      id: 'J_prismPlayer',
      //vid: this.vid, // 视频id
      source: 'http://localhost:8080' + this.video.videoPath,
      // source:"rtsp://192.168.0.132:8554/mjpeg/1",
      width: '100%',
      height: '500px',
      // 以下可选设置
      cover: 'http://guli.shop/photo/banner/1525939573202.jpg', // 封面
      qualitySort:'asc', // 清晰度排序
      mediaType:'video', // 返回音频还是视频
      autoplay:false, // 自动播放
      isLive: false, // 直播
      rePlay:false, // 循环播放
      preload: true,
      controlBarVisibility:'hover', // 控制条的显示方式：鼠标悬停
      useH5Prism:true, // 播放器类型：html5
  },

    function (player) {
      console.log('播放器创建成功')
    }

  )
  }

}
</script>
