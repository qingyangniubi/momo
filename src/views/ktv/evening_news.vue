<template>
  <!-- 夜场新闻 -->
  <div class="l-w">
    <el-row>
      <el-col>
        <div class="l-nav">
          <div class="l-icon"></div>
          <a href="javascript:;" @click="$router.push('/index')"
            ><h4>首页</h4></a
          >
          <a href="javascript:;" @click="onClickevening"><h4>>> 夜场新闻</h4></a>
        </div>
        <div class="lj-customModuleRow">
          <div class="lx-box">
            <div class="l-icon-one"></div>
            <a href="javascript:;" @click="onClickevening"><h5>夜场新闻</h5></a>
          </div>
          <div class="l-journalism">
            <div class="box-hzi">
              <div class="l-dot"></div>
              <a href="javascript:;"><h5>成都夜场</h5></a>
            </div>
          </div>
          <div class="lx-box">
            <div class="l-icon-one"></div>
            <a href="javascript:;" @click="onClickevening"><h5>夜场新闻</h5></a>
          </div>
          <div class="l-MoBody">
            <div class="l-text-list-module">
              <ul class="l-xd">
                <li class="f-lex" v-for="(item,index) in information" :key="index" @click="onClicksju">
                  <div class="l-dot"></div>
                  <a href="javascript:;">{{item.title}}</a>
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
</template>
<style scoped>
@import "../../assets/css/evening.css";
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      information:[]
    };
  },
  created() {
    axios.get("http://49.235.93.38:82/index.php/api/journalism/list").then((res)=>{
      this.information = res.data;
    })
  },
  methods: {
    onClickevening:function(){
      this.$router.push("/evening_news");
      console.log(12);
    },
    onClicksju:function(){
      this.$router.push("/chengdu_evening");
    }
  },
};
</script>