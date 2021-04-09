<template>
  <div>
    <el-breadcrumb separator-class="el-icon-d-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="javaScript:;" @click="hrefModelShow">模特展示</a>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <el-container>
      <el-aside style="width: 360px">
        <div>
          <div class="model-box">
            <div class="model-img">
              <!-- <img src="../../assets/img/MoName_Bg.png" alt /> -->
            </div>
            <div class="modelText">模特展示</div>
            <div class="model-img-hand">
              <!-- <img src="../../assets/img/MoName_Bg.png" alt /> -->
            </div>
          </div>
          <ul class="uls-select">
            <li class="uls-one" @click="onClickUlsOne">
              <a href="javascript:;">
                <i class="el-icon-caret-right" :class="iClass"></i>
                <span :class="selectClass">高端模特</span>
              </a>
            </li>
          </ul>
        </div>
      </el-aside>
      <!-- -----------------------右边 ----------------------- -->
      <el-main class="main-left">
        <div class="model-box">
          <div class="model-img">
            <!-- <img src="../../assets/img/MoName_Bg.png" alt /> -->
          </div>
          <div class="modelText">模特展示</div>
          <div class="model-img-hand">
            <!-- <img src="../../assets/img/MoName_Bg.png" alt /> -->
          </div>
        </div>
        <div class="dataListImg">
          <ul class="Img-top">
            <li
              @click="onClickliOne(item.id)"
              v-for="item in modelData"
              :key="item.id"
            >
              <div class="liImg">
                <img :src="$store.state.imagePath + item.image" alt />
              </div>
              <div class="liText">
                <div>
                  <b>{{ item.price }}</b> 元
                </div>
                <p>{{ item.title }}</p>
              </div>
            </li>
            <!-- <li>
              <div class="liImg">
                <img src="../../assets/img/14385336_1563720156.jpg" alt />
              </div>
              <div class="liText">
                <div>
                  <b>1500</b> 元
                </div>
                <p>成都夜场模特</p>
              </div>
            </li>
            <li>
              <div class="liImg">
                <img src="../../assets/img/14385341_1563720196.jpg" alt />
              </div>
              <div class="liText">
                <div>
                  <b>1500</b> 元
                </div>
                <p>成都酒吧模特</p>
              </div>
            </li>
            <li>
              <div class="liImg">
                <img src="../../assets/img/14385288_1563719931.jpg" alt />
              </div>
              <div class="liText">
                <div>
                  <b>1500</b> 元
                </div>
                <p>成都夜总会模特</p>
              </div>
            </li>
            <li>
              <div class="liImg">
                <img src="../../assets/img/14385305_1563720011.jpg" alt />
              </div>
              <div class="liText">
                <div>
                  <b>1500</b> 元
                </div>
                <p>成都夜场模特</p>
              </div>
            </li>
            <li>
              <div class="liImg">
                <img src="../../assets/img/14385309_1563720062.jpg" alt />
              </div>
              <div class="liText">
                <div>
                  <b>1500</b> 元
                </div>
                <p>成都酒吧模特</p>
              </div>
            </li>-->
          </ul>
        </div>
        <!-- 分页器 -->
        <div class="pagination-box">
          <el-pagination background layout="total,slot" :total="6">
            <span class="first-pager">首页</span>
          </el-pagination>
          <el-pagination
            background
            layout="prev, pager, next,slot"
            :total="6"
            next-text="下一页"
            prev-text="上一页"
          >
            <span class="first-pager">尾页</span>
          </el-pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>



<script>
export default {
  data() {
    return {
      selectClass: "",
      iClass: "",
      liClassFlag: false,
      modelData: null,
    };
  },
  methods: {
    onClickUlsOne() {
      console.log(this.modelData);
      this.liClassFlag = !this.liClassFlag;
      if (this.liClassFlag) {
        this.iClass = "uls-i-rotate";
        this.selectClass = "uls-one-Click";
      } else {
        this.iClass = "";
        this.selectClass = "";
      }
      this.onClickliOne(1);
    },
    onClickliOne(id) {
      this.$router.push("/model/" + id);
    },
    hrefModelShow() {
      this.$router.push("/model_shows");
    },
  },
  created() {
    var url = "http://49.235.93.38:82/index.php/api/models/list";
    this.$axios.get(url).then((response) => {
      console.log(response);
      if (response.status == 200 && response.statusText == "OK") {
        this.modelData = response.data;
      }
    });
  },
};
</script>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.el-breadcrumb {
  margin: 0 auto;
  width: 1200px;
  height: 35px;
  line-height: 35px;
  color: #9f9dff;
  background-color: #eff8ff;
  text-indent: 10px;
  margin-bottom: 10px;
}
.el-breadcrumb > .el-breadcrumb__inner.is-link {
  color: red;
}
.el-breadcrumb__inner a,
/deep/ .el-breadcrumb__inner.is-link {
  color: #2090ff;
}
/deep/.el-breadcrumb__item:last-child .el-breadcrumb__inner a {
  color: #2090ff;
}
/deep/.el-icon-d-arrow-right:before {
  color: #2090ff;
}

.el-aside {
  position: relative;
  margin-right: 10px;
  box-sizing: border-box;
}

.uls-select {
  margin-top: 17px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px dotted #1e90ff;
}
.uls-select .uls-one {
  margin-top: 20px;
}
.uls-select li {
  position: relative;
  width: 100%;
  border-bottom: 1px dotted gray;
  height: 32px;
  line-height: 32px;
  margin-bottom: 5px;
}
.uls-select li span {
  margin-left: 20px;
  color: black;
  font-size: 14px;
  font-weight: 700;
}
.uls-one i {
  position: absolute;
  top: 10px;
  color: #2090ff;
}
.uls-one span:hover {
  color: #2090ff;
}
.uls-i-rotate {
  transform: rotate(45deg);
}
.uls-select li .uls-one-Click {
  color: #2090ff;
}

.model-box {
  display: flex;
  position: absolute;
  top: -1px;
  left: 5px;
}
.model-img,
.model-img-hand {
  width: 24px;
  height: 34px;
  overflow: hidden;
}
.model-img {
  background: url("../../assets/img/MoName_Bg.png") no-repeat 0 0px;
}
.model-img-hand {
  width: 40px;
  background: url("../../assets/img/MoName_Bg.png") no-repeat 0 -70px;
}
.modelText {
  text-align: center;
  padding: 0 10px 0 8px;
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  font-weight: 700;
  background-color: #1e90ff;
  color: white;
}
// .model-img-hand img {
//   position: relative;
//   top: -70px;
// }

.el-container {
  width: 1200px;
  height: 671px;
  margin: 0 auto;
}
/deep/ .el-main {
  overflow: visible;
}
.main-left {
  position: relative;
  margin-top: 17px;
  border: 1px dotted #1e90ff;
}
.main-left .model-box {
  display: flex;
  position: absolute;
  top: -18px;
  left: 5px;
  z-index: 100;
}
.main-left .model-img,
.main-left .model-img-hand {
  width: 24px;
  height: 34px;
  overflow: hidden;
}
.main-left .model-img-hand {
  width: 40px;
}
.main-left .modelText {
  text-align: center;
  padding: 0 10px 0 8px;
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  font-weight: 700;
  background-color: #1e90ff;
  color: white;
}
.main-left .model-img-hand img {
  position: relative;
  top: -70px;
}

.Img-top {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
}
.Img-top li {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 33%;
  width: 200px;
  height: 265px;
  margin-bottom: 20px;
}
.Img-top li .liImg {
  position: relative;
  width: 200px;
  height: 200px;
  border: 1px dotted gray;
}
.Img-top li .liImg img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  transform: translate(-50%, -50%);
}
.Img-top li .liText {
  width: 200px;
}
.Img-top li .liText > div {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 700;
  color: #999999;
}
.Img-top li .liText > div > b {
  color: red;
}
.Img-top li .liText > p {
  font-size: 14px;
  font-weight: 700;
  color: black;
}

.el-pagination button,
/deep/ .el-pagination span:not([class*="suffix"]) {
  font-size: 12px;
  padding: 0 5px;
  height: 24px;
  line-height: 24px;
  border: 1px solid rgb(233, 229, 229);
}
/deep/.el-pagination.is-background .btn-next,
/deep/ .el-pagination.is-background .btn-prev,
/deep/.el-pagination.is-background .el-pager li {
  background-color: white;
}
/deep/.el-pager li {
  height: 24px;
  line-height: 24px;
}
.first-pager {
  // margin: 0 10px 0 0 ;
  color: #c0c4cc;
}
.pagination-box {
  position: absolute;
  bottom: 15px;
  right: 10px;
  display: flex;
}
</style>