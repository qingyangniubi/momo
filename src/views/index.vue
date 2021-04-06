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
            <ul class="nav">
              <li>首页</li>
              <li>关于我们</li>
              <li>模特展示</li>
              <li>环境展示</li>
              <li>夜场新闻</li>
              <li>联系我们</li>
              <li>招聘要求</li>
              <li class="li-tel">
                <img src="../assets/img/7877635_1538278040.png" alt="" />
                <span>13688143752</span>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <!-- 身体 -->
    <el-main>Main</el-main>
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