<template>
  <!-- 首页 -->
  <div class="main_container">
    <!-- banner start -->
    <div class="j-banner">
      <div class="j-banner-image">
        <img
          :src="$store.state.imagePath + bgImgArr[0].image"
          alt=""
          class="j-b-i"
        />
        <div class="j-introduce w1200">
          <div class="j-product">
            <h3>
              全场所有啤酒均可享受买二送一，还有更多豪礼等着你!
              <br />当晚本包间消费满6666以上，当晚可赠送豪华名宿酒店一套，限当天使用。
            </h3>
            <p>小包低消1080元 中包低消1280 大包低消1380 豪包低消2680</p>
          </div>
          <div class="j-code">
            <img v-lazy="require('../../assets/img/image_2.png')" alt="" />
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

    <!-- ENVIRONMENTAL DISPLAY start -->
    <div class="w1200">
      <div class="j-display">
        <div class="j-top">
          <h1>ENVIRONMENTAL DISPLAY</h1>
          <p>环境/AMBIENT</p>
          <div class="j-hr"></div>
        </div>
        <div class="j-private animated" id="dowebok">
          <ul>
            <li>
              <div class="j-magnify">
                <img src="../../assets/img/image_p1.jpg" alt="" />
              </div>
              <h3>成都夜总会环境</h3>
              <p>联系人：周经理</p>
              <p>手 机：13688143752（微信同号）</p>
              <p class="j-p10">地 址：成都</p>
              <div class="j-align">
                <div class="j-align-left">
                  <img v-lazy="require('../../assets/img/icon_1.png')" alt="" />
                  <span>：夜场模特</span>
                </div>
                <div class="j-align-right">
                  <img
                    v-lazy="require('../../assets/img/icon_2.png')"
                    alt=""
                  /><span>：1203人</span>
                </div>
              </div>
            </li>
            <li>
              <div class="j-magnify">
                <img src="../../assets/img/image_7.jpeg" alt="" />
              </div>
              <h3>成都夜场环境</h3>
              <p>联系人：周经理</p>
              <p>手 机：13688143752（微信同号）</p>
              <p class="j-p10">地 址：成都</p>
              <div class="j-align">
                <div class="j-align-left">
                  <img v-lazy="require('../../assets/img/icon_1.png')" alt="" />
                  <span>：夜场模特</span>
                </div>
                <div class="j-align-right">
                  <img
                    v-lazy="require('../../assets/img/icon_2.png')"
                    alt=""
                  /><span>：1203人</span>
                </div>
              </div>
            </li>
            <li>
              <div class="j-magnify">
                <img src="../../assets/img/image_p2.jpeg" alt="" />
              </div>
              <h3>成都酒吧环境</h3>
              <p>联系人：周经理</p>
              <p>手 机：13688143752（微信同号）</p>
              <p class="j-p10">地 址：成都</p>
              <div class="j-align">
                <div class="j-align-left">
                  <img v-lazy="require('../../assets/img/icon_1.png')" alt="" />
                  <span>：夜场模特</span>
                </div>
                <div class="j-align-right">
                  <img
                    v-lazy="require('../../assets/img/icon_2.png')"
                    alt=""
                  /><span>：1203人</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="j-examine">
          <a href="">查看更多</a>
        </div>
      </div>
    </div>
    <!-- ENVIRONMENTAL DISPLAY end -->

    <!-- 锦缘国际夜总会 start -->
    <div class="j-international">
      <div class="w1200">
        <div class="j-about">
          <div class="j-row_11">
            <div class="j-animated animated" id="dowebok">
              <p class="j-about-p">关于/ABOUT</p>
            </div>
            <h2 class="animated j-rotateIn" id="dowebok">锦缘国际夜总会</h2>
            <p class="p-play animated" id="dowebok">
              成都夜总会，成都夜场，成都酒吧各种模特佳丽【13688143752】，设备齐<br />全，装修高端，资源丰富，生意每天开到爆，欢迎随时预定包厢
            </p>
            <a href="">了解详情</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 锦缘国际夜总会 end -->

    <!-- 模特部分 start -->
    <div class="w1200">
      <div class="j-blur">
        <div class="j-trademark animated" id="dowebok">
          <h2>高端KTV夜总会模特</h2>
          <div class="j-hr"></div>
        </div>
        <div class="j-inner">
          <div class="animated j-slideInLeft" id="dowebok">
            <ul>
              <li>
                <div class="j-scale-1">
                  <img v-lazy="require('../../assets/img/bell_1.jpg')" alt="" />
                </div>
                <p>成都夜总会模特</p>
              </li>
              <li>
                <div class="j-scale-1">
                  <img
                    v-lazy="require('../../assets/img/belle_2.jpg')"
                    alt=""
                  />
                </div>
                <p>成都夜场模特</p>
              </li>
              <li>
                <div class="j-scale-1">
                  <img
                    v-lazy="require('../../assets/img/belle_3.jpg')"
                    alt=""
                  />
                </div>
                <p>成都酒吧模特</p>
              </li>
            </ul>
          </div>
          <div class="animated j-slideInRight" id="dowebok">
            <ul>
              <li>
                <div class="j-scale-1">
                  <img
                    v-lazy="require('../../assets/img/belle_4.jpg')"
                    alt=""
                  />
                </div>
                <p>成都夜总会模特</p>
              </li>
              <li>
                <div class="j-scale-1">
                  <img
                    v-lazy="require('../../assets/img/belle_5.jpg')"
                    alt=""
                  />
                </div>
                <p>成都夜场模特</p>
              </li>
              <li>
                <div class="j-scale-1">
                  <img
                    v-lazy="require('../../assets/img/belle_6.jpg')"
                    alt=""
                  />
                </div>
                <p>成都酒吧模特</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 模特部分 end -->

    <!-- 新闻资讯  start-->
    <div class="j-journalism">
      <div class="w1200">
        <div class="j-journalism-title animated" id="dowebok">
          <h2>新闻咨询</h2>
          <p>T E A C H E R</p>
          <div class="j-hr"></div>
        </div>
        <div class="j-play-item">
          <div class="j-img-left animated" id="dowebok">
            <img v-lazy="require('../../assets/img/image-110.jpeg')" alt="" />
          </div>
          <div class="j-right animated" id="dowebok">
            <div class="j-right-1 j-shift">
              <div class="j-divs">
                <i></i>
                <h3>夜场招聘男士面试要求怎么和领班相处</h3>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网络简历其实和纸质简历差别不大，在写网络简历的时候，也应<br />当要引起重视，如今是一个网络信息时代，因此网络简历也是被很多<br />HR看好的，那么一份优秀网络简历的标准是
                </p>
              </div>
              <span>2018-08-23</span>
            </div>
            <div class="j-right-1 j-great">
              <div class="j-doraem">
                <div class="j-image-play">
                  <img v-lazy="require('../../assets/img/img-1.png')" alt="" />
                </div>
                <div class="j-divs j-model">
                  <i></i>
                  <h3>夜总会招聘模特条件改掉这些习惯</h3>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夜总会模特丰厚的薪资，总会吸引着无数青春<br />靓的女孩前来应聘，当然，这些青春靓丽的女孩儿<br />在应聘之前，心中也会有一丝忧虑，总担心自己无<br />法胜任这份工作，无法应聘成功
                  </p>
                </div>
              </div>
              <span>2018-08-23</span>
            </div>
            <div class="j-right-1 j-great">
              <div class="j-doraem">
                <div class="j-image-play">
                  <img v-lazy="require('../../assets/img/img-1.png')" alt="" />
                </div>
                <div class="j-divs j-model">
                  <i></i>
                  <h3>夜场模特说话技巧如何打动面试官</h3>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;夜场是很多女孩儿的梦想摇篮，女孩的很多梦想<br />都可以在这个摇篮中实现，所以越来越多的女孩<br />都想在夜场工作，毕竟在这里可以赚取她们想要的<br />工资，这里可以让她们过上，她
                  </p>
                </div>
              </div>
              <span>2018-08-23</span>
            </div>
            <div class="j-right-1 j-great">
              <div class="j-doraem">
                <div class="j-image-play j-img-bottom">
                  <img v-lazy="require('../../assets/img/img-2.png')" alt="" />
                </div>
                <div class="j-divs j-model">
                  <i></i>
                  <h3>夜场招聘找不到工作原因不同类型面试</h3>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;之所以现在有很多应届毕业生他们会找不到工<br />作，主要是因为他们不知道到底是哪一些原因促成<br />大学生就业难，所以没有办法针对性，结合自我的<br />实际情况去调整，那么，大学生
                  </p>
                </div>
              </div>
              <span>2018-08-23</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 新闻资讯  end-->
  </div>
</template>
<script>
import animate from "../../assets/js/index";
export default {
  data() {
    return {
      bgImgArr: [
        {
          image: "",
        },
      ],
    };
  },
  created() {
    window.onscroll = animate.setAnimated;
    const url = "http://49.235.93.38:82/index.php/api/carousel_map/list";
    this.$axios
      .get(url)
      .then((response) => {
        this.bgImgArr = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  animate,
  destroyed() {
    window.onscroll = null;
  },
};
</script>
<style scoped>
@import "../../assets/css/animate.min.css";
@import "../../assets/css/index.css";
</style>