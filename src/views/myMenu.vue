<template>
  <!-- 首页 -->
  <el-container>
    <!-- 头部 -->
    <header>
      <div class="header-box w1200">
        <el-row>
          <el-col :span="5">
            <img
              class="logo"
              src="../assets/img/20771839_1609920594.png"
              alt=""
            />
          </el-col>
          <el-col :span="19">
            <el-menu
              mode="horizontal"
              class="nav"
              active-text-color="#409EFF"
              text-color="#333"
              :router="true"
              default-active="/index"
            >
              <el-menu-item index="/index">首页</el-menu-item>
              <el-menu-item index="/about_us">关于我们</el-menu-item>
              <el-menu-item index="/model_shows">模特展示</el-menu-item>
              <el-menu-item index="/environment_show">环境展示</el-menu-item>
              <el-menu-item index="/evening_news">夜场新闻</el-menu-item>
              <el-menu-item index="/contact_us">联系我们</el-menu-item>
              <el-menu-item index="/recruitment_requirements"
                >招聘要求</el-menu-item
              >
              <el-menu-item class="li-tel"
                ><img src="../assets/img/7877635_1538278040.png" alt="" />
                <span>13688143752</span></el-menu-item
              >
              <div class="line"></div>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </header>
    <!-- 身体 -->
    <el-main>
      <router-view></router-view>
    </el-main>
    <!-- 尾部 -->
    <el-footer height="auto">
      <div class="footer_main w1200">
        <div class="footer_main_r">
          <h2 style="font-family: 微软雅黑" class="ev-text-title-2">
            锦缘国际夜总会
          </h2>
          <div class="footer_greeting">
            <p>
              成都夜总会，成都夜场，成都酒吧各种模特佳丽【13688143752】，设备齐全，装修高端，资源丰富，生意每天开到爆，欢迎随时预定包厢
            </p>
          </div>
          <div class="footer_msg">
            <p>咨询电话：13688143752</p>
            <p>公司地址：高端夜场夜总会</p>
          </div>
        </div>
        <div class="footer_main_l">
          <div class="ev-pic">
            <img src="@/assets/img/20772430_1609926138.png" alt="" />
          </div>
          <p>关注加好友更优惠</p>
        </div>
      </div>
      <div class="footer_copy w1200">
        <p>
          Copyright @ 2021. All rights reserved.高端夜场夜总会 版权所有.
          京ICP备11058096号
        </p>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../assets/css/common.css";
</style>