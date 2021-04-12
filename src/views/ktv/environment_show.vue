<template>
  <!-- 环境展示 -->
  <div>
    <!-- banner start -->
    <div class="j-banner">
      <div class="j-banner-image">
        <div class="j-introduce w1200">
          <div class="j-product">
            <h3>
              全场所有啤酒均可享受买二送一，还有更多豪礼等着你!
              <br />当晚本包间消费满6666以上，当晚可赠送豪华名宿酒店一套，限当天使用。
            </h3>
            <p>小包低消1080元 中包低消1280 大包低消1380 豪包低消2680</p>
          </div>
          <div class="j-code">
            <img src="@/assets/img/image_2.png" alt="" />
          </div>
          <div class="j-relation">
            <span>T：13688143752</span>
          </div>
          <div class="j-cur">
            <span class="j-span"></span>
          </div>
        </div>
      </div>
    </div>
    <!-- banner end -->

    <!-- 环境展示 start -->
    <div class="w1200">
      <div class="j-atmosphere">
        <a href="">首页</a>
        <span>&gt;&gt;</span>
        <em>环境展示</em>
      </div>
      <div class="j-night">
        <a href="">夜场环境</a>
      </div>
      <div class="j-private">
        <ul class="clearfix">
          <li>
            <img src="@/assets/img/image_12.jpeg" alt="" />
            <span>成都夜总会</span>
          </li>
          <li>
            <img src="@/assets/img/image_7.jpeg" alt="" />
            <span>成都市场</span>
          </li>
          <li>
            <img src="@/assets/img/image_13.jpeg" alt="" />
            <span>成都酒吧</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 环境展示 end -->

    <!-- 翻页部分 start -->
    <div class="j-page">
      <div class="w1200">
        <div class="j-page-go">
          <span>共有一页</span>
          <i>首页</i>
          <span>上一页</span>
          <em>1</em>
          <i>下一页</i>
          <span>尾页</span>
        </div>
      </div>
    </div>
    <!-- 翻页部分 end -->
  </div>
</template>

<script>
export default {
    data(){
      return{

      }
    },
    methods:{
      onClickList(){
        this.$router.push("ktvenvironmentShowList");
      }
    }
}
</script>


<style scoped>
@import "~@/assets/css/environment_show.css";
</style>