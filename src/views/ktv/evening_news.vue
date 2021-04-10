<template>
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
    <!-- 夜场新闻 -->
    <div class="l-w">
      <el-row>
        <el-col>
          <div class="l-nav">
            <div class="l-icon"></div>
            <a href="javascript:;" @click="$router.push('/index')"
              ><h4>首页</h4></a
            >
            <a href="javascript:;" @click="onClickevening"
              ><h4>>> 夜场新闻</h4></a
            >
          </div>
          <div class="l-MoBody">
            <div class="l-text-list-module">
              <ul class="l-xd">
                <li class="f-lex" v-for="(item,index) in information" :key="index" @click="onClicksju(item.id)">
                  <div class="l-dot"></div>
                  <a href="javascript:;">{{item.title}}</a>
                </li>
              </ul>
            </div>
            <div class="lx-box">
              <div class="l-icon-one"></div>
              <a href="javascript:;" @click="onClickevening"
                ><h5>夜场新闻</h5></a
              >
            </div>
            <div class="l-MoBody">
              <div class="l-text-list-module">
                <ul class="l-xd">
                  <li
                    class="f-lex"
                    v-for="(item, index) in information"
                    :key="index"
                    @click="onClicksju"
                  >
                    <div class="l-dot"></div>
                    <a href="javascript:;">{{ item.title }}</a>
                  </li>
                </ul>
              </div>
              <div class="l-paging">
                <el-button disabled class="bled">共有3页</el-button>
                <el-button type="primary" plain>首页</el-button>
                <el-pagination
                  background
                  small
                  layout="prev, pager, next"
                  :total="30"
                  prev-text="上一页"
                  next-text="下一页"
                >
                </el-pagination>
                <el-button type="primary" plain class="rih">尾页</el-button>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/evening.css";
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      information: [],
    };
  },
  created() {
    axios
      .get("http://49.235.93.38:82/index.php/api/journalism/list")
      .then((res) => {
        this.information = res.data;
      });
  },
  methods: {
    onClickevening: function () {
      this.$router.push("/evening_news");
      console.log(12);
    },
    onClicksju:function(id){
      this.$router.push("/chengdu_evening/"+ id);
    }
  },
};
</script>