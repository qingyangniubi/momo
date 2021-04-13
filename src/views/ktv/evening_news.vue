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
          <div class="lj-customModuleRow">
            <div class="lx-box">
              <div class="l-icon-one"></div>
              <a href="javascript:;" @click="onClickevening"
                ><h5>夜场新闻</h5></a
              >
            </div>
            <div class="l-journalism">
              <div class="box-hzi">
                <div class="l-dot"></div>
                <a href="javascript:;"><h5>长沙夜场</h5></a>
              </div>
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
                    @click="onClicksju(item.id)"
                  >
                    <div class="l-dot"></div>
                    <a href="javascript:;">{{ item.title }}</a>
                  </li>
                </ul>
              </div>
              <div class="l-paging">
                <el-button disabled class="bled"
                  >共有{{ pageSizeSum }}页</el-button
                >
                <el-button type="primary" plain :disabled="firstDisabled"
                  >首页</el-button
                >
                <el-pagination
                  background
                  small
                  layout="prev, pager, next"
                  :total="pageSum"
                  prev-text="上一页"
                  next-text="下一页"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                >
                </el-pagination>
                <el-button
                  type="primary"
                  plain
                  class="rih"
                  :disabled="lastDisabled"
                  >尾页</el-button
                >
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped src="@/assets/css/evening.css">
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      information: [],
      pageNumber: 1,
      pageSize: 21,
      pageSum: null,
      pageSizeSum: null,
      firstDisabled: true,
      lastDisabled: false,
    };
  },
  created() {
    axios.get("/index.php/api/journalism/list").then((res) => {
      this.pageSum = res.data.length;
      this.pageSizeSum = Math.ceil(this.pageSum / this.pageSize);
      if (this.pageSizeSum == 1) {
        this.lastDisabled = true;
      } else {
        this.lastDisabled = false;
      }
    });
    axios
      .get("/index.php/api/journalism/list?pageNumber=1&pageSize=21")
      .then((res) => {
        this.information = res.data;
      });
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      axios
        .get(
          "/index.php/api/journalism/list?pageNumber=" + val + "&pageSize=21"
        )
        .then((res) => {
          this.information = res.data;
        });
      console.log(`当前页: ${val}`);
      if (val == 1) {
        this.firstDisabled = true;
      } else {
        this.firstDisabled = false;
      }
      if (val == this.pageSizeSum) {
        this.lastDisabled = true;
      } else {
        this.lastDisabled = false;
      }
    },
    onClickevening: function () {
      this.$router.push("/evening_news");
      console.log(12);
    },
    onClicksju: function (id) {
      console.log(id);
      this.$router.push("/chengdu_evening/" + id);
    },
  },
};
</script>