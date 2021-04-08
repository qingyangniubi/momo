<template>
  <div>
    <el-breadcrumb separator-class="el-icon-d-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">模特展示</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">高端模特</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">成都夜总会模特</a>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <el-container>
      <el-aside style="width: 360px;">
        <div>
          <div class="show">
            <img src="../../assets/img/MoHead_Bg.png" alt />
            <span>模特展示</span>
          </div>
          <ul class="uls-select">
            <li class="uls-one" @click="onClickUlsOne">
              <a href="javascript:;">
                <i class="el-icon-caret-right" :class="iClass"></i>
                <span :class="selectClass" @mouseover="onClickUlsOne" @mouseout="onOutUlsOne">高端模特</span>
              </a>
            </li>
          </ul>
        </div>
      </el-aside>
      <!-- -----------------------右边 ----------------------- -->
      <el-main class="main-left">
        <div class="show">
          <img src="../../assets/img/MoHead_Bg.png" alt />
          <span>详细说明</span>
        </div>
        <!-- 详细 放大镜 -->
        <div class="magnifyingGlass-box">
          <div>
            <div class="glass-left">
              <img src="../../assets/img/14385336_1563720156.jpg" alt />
            </div>
            <div class="share">
              <ul class="share-ul">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div class="glass-right">
            <div class="glass-right-text">成都夜场模特</div>
            <div class="money">
              <span>价格</span>
              <b>1500</b>
            </div>
          </div>
        </div>
        <!-- 产品说明 -->
        <div class="explain">
          <div class="explain-top">
            <ul>
              <li>产品说明</li>
            </ul>
          </div>
          <div class="explain-bom">
            <img src="../../assets/img/14385336_1563720156.jpg" alt />
          </div>
        </div>
        <!-- 相关产品 -->
        <div class="relatedProducts">
          <div class="relatedProducts-top">相关产品</div>
          <div class="relatedProducts-bom">
            <!-- 轮播图 -->
            <el-carousel :interval="4000" type="card" height="250px">
              <el-carousel-item v-for="item in productListData" :key="item.id">
                <div class="lbt-box">
                  <div class="lbt-box-img">
                    <img :src="item.imgSrc" alt />
                  </div>
                  <p>{{item.money}}元</p>
                  <h3>{{item.productName}}</h3>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
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
      productListData: [
        {
          //产品数据 轮播图
          id: 1,
          money: 1500,
          imgSrc: require("../../assets/img/14385327_1563720105.jpg"),
          productName: "成都夜总会模特",
        },
        {
          id: 2,
          money: 1500,
          imgSrc: require("../../assets/img/14385336_1563720156.jpg"),
          productName: "成都夜总会模特",
        },
        {
          id: 3,
          money: 1500,
          imgSrc: require("../../assets/img/14385341_1563720196.jpg"),
          productName: "成都夜总会模特",
        },
        {
          id: 4,
          money: 1500,
          imgSrc: require("../../assets/img/14385288_1563719931.jpg"),
          productName: "成都夜总会模特",
        },
        {
          id: 5,
          money: 1500,
          imgSrc: require("../../assets/img/14385305_1563720011.jpg"),
          productName: "成都夜总会模特",
        },
        {
          id: 6,
          money: 1500,
          imgSrc: require("../../assets/img/14385309_1563720062.jpg"),
          productName: "成都夜总会模特",
        },
      ],
    };
  },
  methods: {
    onClickUlsOne() {
      this.liClassFlag = !this.liClassFlag;
      if (this.liClassFlag) {
        this.iClass = "uls-i-rotate";
        this.selectClass = "uls-one-Click";
      } else {
        this.iClass = "";
        this.selectClass = "";
      }
    },
    onOutUlsOne() {
      this.selectClass = "";
      this.iClass = "";
    },
  },
};
</script>


<style scoped lang="less" >
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

.el-container {
  width: 1200px;
  margin: 0 auto;
}

.el-aside {
  position: relative;
  margin-right: 10px;
  box-sizing: border-box;
}

.uls-select {
  // margin-top: 17px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px dotted #1e90ff;
}
.uls-select .uls-one {
  margin-top: 28px;
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
.uls-i-rotate {
  transform: rotate(45deg);
}
.uls-select li .uls-one-Click {
  color: #2090ff;
}

.show {
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 32px;
  margin-bottom: 10px;
  border-bottom: 2px solid #2090ff;
  box-sizing: border-box;
}
.show img {
  width: 2px;
  height: 13px;
  margin: 0 5px;
}
.show span {
  font-size: 14px;
  font-weight: 700;
  color: #2090ff;
}

.main-left {
  position: relative;
  border: 1px dotted #1e90ff;
}

.magnifyingGlass-box {
  display: flex;
  margin: 40px 5px 0;
  width: 818px;
  height: 467px;
  box-sizing: border-box;
}
.glass-left {
  position: relative;
  width: 420px;
  height: 420px;
  border: 1px solid #3b5fcb;
}
.glass-left img {
  // height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.glass-right {
  margin: 0 10px;
  width: 386px;
}
.glass-right-text {
  font-size: 16px;
  font-weight: 700;
  height: 32px;
  line-height: 32px;
}
.money {
  display: flex;
  width: 100%;
  height: 38px;
  background-color: #f9f9f9;
  line-height: 38px;
  border-radius: 3px;
}
.money > span {
  display: inline-block;
  margin: 0 20px;
  font-size: 12px;
  color: #888;
  line-height: 38px;
}
.money > b {
  color: #e53a3e;
  font-size: 24px;
  line-height: 38px;
}

.share-ul {
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
}
.share-ul li {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}
.share-ul li:nth-child(1) {
  background: url("http://static.bshare.cn/frame/images/logos/s4/weixin.png")
    no-repeat;
}
.share-ul li:nth-child(2) {
  background: url("../../assets/img/top_logos_sprite.png") no-repeat 0 -216px;
}
.share-ul li:nth-child(3) {
  background: url("../../assets/img/top_logos_sprite.png") no-repeat 0 -234px;
}
.share-ul li:nth-child(4) {
  background: url("../../assets/img/top_logos_sprite.png") no-repeat 0 -270px;
}
.share-ul li:nth-child(5) {
  background: url(http://static.bshare.cn/frame/images/logos/s4/more-style-addthis.png)
    no-repeat;
}

.explain {
  border: 1px solid #1e90ff;
  margin: 0 5px;
  width: 818px;
}
.explain-top {
  width: 100%;
  height: 31px;
  background-color: #d5f1fc;
  border-bottom: 1px solid #1e90ff;
}
.explain-top ul li {
  width: 60px;
  font-size: 12px;
  padding: 0 20px;
  height: 32px;
  line-height: 31px;
  text-align: center;
  border-right: 1px solid #1e90ff;
  background-color: #fff;
}
.explain-bom {
  padding: 0 5px;
  box-sizing: border-box;
}

.relatedProducts {
  margin: 10px 5px 15px;
  width: 818px;
  height: 325px;
  border: 1px solid #ccc;
}
.relatedProducts-top {
  width: 100%;
  height: 32px;
  line-height: 32px;
  color: #555;
  font-weight: 700;
  text-indent: 5px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}


.relatedProducts-bom {
  line-height: 30px;
  text-align: center;
}
.el-carousel__item {
  background-color: rgba(240, 241, 243,.1);
}

.lbt-box-img{
  position: relative;
  height: 180px;
}
.lbt-box-img img {
  height: 180px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.lbt-box p {
  color: red;
  font-weight: 700;
}
</style>