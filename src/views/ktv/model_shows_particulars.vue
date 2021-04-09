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
      <el-aside style="width: 360px">
        <div>
          <div class="show">
            <img src="../../assets/img/MoHead_Bg.png" alt />
            <span>模特展示</span>
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
        <div class="show">
          <img src="../../assets/img/MoHead_Bg.png" alt />
          <span>详细说明</span>
        </div>
        <!-- 详细 放大镜 -->
        <div class="magnifyingGlass-box">
          <div>
            <div
              class="glass-left"
              ref="big"
              @mouseenter="onMouseEnter"
              @mouseleave="leave"
            >
              <img :src="$store.state.imagePath + modelDataList.image" alt />
              <div
                class="coating"
                ref="small"
                v-show="isShow"
                @mousemove="onMouseMoveSmall($event)"
              ></div>
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
            <div class="showImg-box" v-show="isShow">
              <div class="showImg">
                <img :src="$store.state.imagePath + modelDataList.image" alt />
              </div>
            </div>
            <div class="glass-right-text">{{ modelDataList.title }}</div>
            <div class="money">
              <span>价格</span>
              <b>{{ modelDataList.price }}</b>
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
            <img :src="$store.state.imagePath + modelDataList.image" alt />
          </div>
        </div>
        <!-- 相关产品 -->
        <div class="relatedProducts">
          <div class="relatedProducts-top">相关产品</div>
          <div class="relatedProducts-bom">
            <!-- 轮播图 -->
            <el-carousel :interval="4000" type="card" height="250px">
              <el-carousel-item
                v-for="(item, index) in productListData"
                :key="item.id"
              >
                <div class="lbt-box" @click="onClickdata(item, index)">
                  <div class="lbt-box-img">
                    <img :src="$store.state.imagePath + item.image" alt />
                  </div>
                  <p>{{ item.price }}元</p>
                  <h3>{{ item.title }}</h3>
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
      storeData: [], //全部数据
      liClassFlag: false,
      modelDataList: {}, //指定的数据
      productListData: null, //轮播图数据
      imgSrc01: "",
      isShow: false, //蒙层显示隐藏
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
    onClickdata(item, index) {
      console.log(item, index);
      this.modelDataList = item;
    },
    //移入事件
    onMouseEnter() {
      this.isShow = true;
    },
    //移出事件
    leave() {
      this.isShow = false;
    },
    //移动小盒子
    onMouseMoveSmall(e) {
      // var max =  this.$refs.big.offsetHeight - this.$refs.small.offsetWidth;
      // var min = 0;

      var sX = this.$refs.small.getBoundingClientRect().left;
      var sY = this.$refs.small.getBoundingClientRect().top;
      var smallX = e.clientX;
      var smallY = e.clientY;
      var x = smallX - sX;
      var y = smallY - sY;
      console.log(x, y);
      this.$refs.small.style.left = x + "px";
      this.$refs.small.style.top = y + "px";
    },
  },
  created() {
    let id = this.$route.params.id;
    var url = "http://49.235.93.38:82/index.php/api/models/list";
    this.$axios.get(url).then((response) => {
      if (response.status == 200 && response.statusText == "OK") {
        this.storeData = response.data;
        let list = this.storeData.filter((val) => val.id == id);
        this.modelDataList = list[0];
        console.log(this.modelDataList);
        this.storeData.splice(id - 1, 1);
        this.productListData = this.storeData;
      }
    });
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
.uls-one span:hover {
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
.glass-left .coating {
  position: absolute;
  left: 0;
  top: 0;
  width: 150px;
  height: 150px;
  background-color: rgba(254, 204, 135, 0.5);
  z-index: 100;
}
.glass-left img {
  // height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.showImg-box {
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 300px;
  background-color: skyblue;
  overflow: hidden;
}
.showImg {
  position: absolute;
  left: 0;
  top: 0;
  width: 844px;
  height: 844px;
  background-color: red;
}
.showImg img {
  width: 600px;
  height: 800px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.glass-right {
  position: relative;
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
.explain-bom img {
  margin: 5px 0;
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
  background-color: rgba(240, 241, 243, 0.1);
}

.lbt-box-img {
  position: relative;
  height: 180px;
}
.lbt-box-img img {
  height: 180px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.lbt-box p {
  color: red;
  font-weight: 700;
}
</style>