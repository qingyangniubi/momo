<template>
  <div>
    <div class="customModuleRow"></div>
    <div class="l-w-two">
      <div class="l-nav-two">
        <div class="l-icon-two"></div>
        <a href="javascript:;" @click="$router.push('/index')"><h4>首页</h4></a>
        <a href="javascript:;" @click="onClickevening"><h4>>> 夜场新闻</h4></a>
        <a href="javascript:;" @click="onClickevening"><h4>>> 成都夜场</h4></a>
        <span><i>>></i> 夜场招聘平面模特抓住面试机会</span>
      </div>
      <div class="chengdu-box">
        <div class="chengdu-l">
          <a href="javascript:;">成都夜场</a>
        </div>
        <div class="chengdu-r">
          <div class="chengdu-txet">{{informationl.title}}</div>
          <div class="writing"><i>{{informationl.content}}</i></div>
          <img :src="msg + informationl.image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../assets/css/chengdu_evening.css";
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      informationl: [],
      msg: 'http://49.235.93.38:82/'
    };
  },
  methods: {
    onClickevening: function () {
      this.$router.push("/evening_news");
    },
  },
  created() {
    axios
      .get("http://49.235.93.38:82/index.php/api/journalism/list").then((res) => {
        this.informationl = res.data[0];
        console.log(this.informationl);
      });
  },
};
</script>