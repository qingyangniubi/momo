<template>
  <!-- 首页 -->
  <el-container>
    <!-- 头部 -->
    <el-header>
      <div class="header-box">
        <el-row>
          <el-col :span="5">
            <img
              class="logo"
              src="../assets/img/20771839_1609920594.png"
              alt=""
            />
          </el-col>
          <el-col :span="19">
            <el-menu mode="horizontal" class="nav" :router="true">
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
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <!-- 身体 -->
    <el-main>
      <router-view></router-view>
    </el-main>
    <!-- 尾部 -->
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../assets/css/common.css";
</style>