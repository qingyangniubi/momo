<template>
  <!-- 首页 -->
  <el-container>
    <!-- 侧边导航 -->
    <div class="sidebar" ref="sidebar">
      <div class="onlineList">
        <em
          class="online_close"
          id="onlineClose"
          title="关闭"
          @click="clickShow"
        ></em>
        <div
          class="online_open"
          id="onlineOpen"
          @mouseover="mouseoverShow"
          v-show="showFlag"
        ></div>
        <div
          id="online_tel_icon"
          class="online_icon"
          @click="
            phoneFlag = true;
            formFlag = false;
          "
        >
          <div class="pic"><img src="../assets/img/online_tel.png" /></div>
          <span class="name">电话直呼</span>
          <div class="pop-up contact" v-show="phoneFlag">
            <div class="arrows"></div>
            <dl>
              <dt>联系我们:</dt>
              <dd>136684654</dd>
            </dl>
            <div class="shut" @click.stop="phoneFlag = false"></div>
          </div>
        </div>
        <div
          id="online_message_icon"
          class="online_icon"
          @click="
            formFlag = true;
            phoneFlag = false;
          "
        >
          <div class="pic"><img src="../assets/img/online_message.png" /></div>
          <span class="name">在线留言</span>
          <div class="pop-up pop-up-form" v-show="formFlag">
            <div class="arrows"></div>
            <el-form
              :model="form"
              :rules="rules"
              ref="numberValidateForm"
              label-width="75px"
              class="leaveWordForm"
              inline-message
            >
              <el-input
                type="textarea"
                maxlength="50"
                placeholder="您好，如果您对我公司产品感兴趣，请点些留言，谢谢!(限50个汉字)"
                show-word-limit
                v-model="form.textarea"
              ></el-input>
              <el-form-item
                label="您的姓名:"
                prop="name"
                :rules="[
                  { required: true, message: '请输入姓名', trigger: 'blur' },
                  { min: 2, message: '长度在2个字符以上', trigger: 'blur' },
                ]"
              >
                <el-input
                  v-model="form.name"
                  placeholder="请输入您的姓名"
                ></el-input>
              </el-form-item>
              <el-form-item
                prop="email"
                label="您的邮箱:"
                :rules="[
                  {
                    required: true,
                    message: '请输入邮箱地址',
                    trigger: 'blur',
                  },
                  {
                    type: 'email',
                    message: '请输入正确的邮箱地址',
                    trigger: ['blur', 'change'],
                  },
                ]"
              >
                <el-input
                  v-model="form.email"
                  placeholder="请输入您的邮箱"
                ></el-input>
              </el-form-item>
              <el-form-item label="您的电话:" prop="phone">
                <el-input
                  type="phone"
                  v-model.number="form.phone"
                  autocomplete="off"
                  placeholder="请输入您的电话"
                ></el-input>
              </el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form>
            <div class="shut" @click.stop="formFlag = false"></div>
          </div>
        </div>
        <div id="online_email_icon" class="online_icon">
          <div class="pic">
            <a href="mailto:260208989@qq.com"
              ><img src="../assets/img/online_email.png"
            /></a>
          </div>
          <span class="name">发送邮件</span>
        </div>
      </div>
    </div>

    <!-- 回到顶部 -->
    <div
      class="backTop_Z"
      id="backTop"
      @click="backTop"
      v-show="backTopFlag"
    ></div>
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
              :default-active="route"
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
                <span>13688143752 </span>
              </el-menu-item>
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
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;
      if (!value) {
        return callback(new Error("电话号码不能为空"));
      }
      setTimeout(() => {
        // Number.isInteger是es6验证数字是否为整数的方法,但是我实际用的时候输入的数字总是识别成字符串
        // 所以我就在前面加了一个+实现隐式转换
        if (!Number.isInteger(+value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (phoneReg.test(value)) {
            callback();
          } else {
            callback(new Error("电话号码格式不正确"));
          }
        }
      }, 100);
    };
    return {
      route: "",
      backTopFlag: false,
      showFlag: true,
      form: {
        textarea: "",
        name: "",
        email: "",
        phone: "",
      },
      rules: {
        phone: [{ validator: checkPhone, trigger: ["blur", "change"] }],
      },
      phoneFlag: false,
      formFlag: false,
    };
  },
  created: function () {
    this.route = location.hash.substring(1);
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll);
  },
  watch: {
    // 监听路由改变
    $route: "getPath",
  },
  methods: {
    onSubmit() {
      // 提交留言
    },
    getScroll() {
      // 回到顶部按钮是否显示
      var winTop = document.documentElement.scrollTop;
      if (winTop > 150) {
        this.backTopFlag = true;
      } else {
        this.backTopFlag = false;
      }
    },
    getPath() {
      // 路由改变导航栏高亮显示跟随改变
      switch (this.$route.path) {
        case "/index":
          this.route = this.$route.path;
          break;
        case "/about_us":
          this.route = this.$route.path;
          break;
        case "/model_shows":
          this.route = this.$route.path;
          break;
        case "/environment_show":
          this.route = this.$route.path;

          break;
        case "/evening_news":
          this.route = this.$route.path;
          break;
        case "/contact_us":
          this.route = this.$route.path;
          break;
        case "/recruitment_requirements":
          this.route = this.$route.path;
          break;
      }
    },
    backTop() {
      // 回到顶部
      var timer = setInterval(function () {
        var x = document.body.scrollTop || document.documentElement.scrollTop;
        var juli = (0 - x) / 10;
        juli = juli > 0 ? Math.ceil(juli) : Math.floor(juli);
        if (x <= 0) {
          clearInterval(timer);
        } else {
          window.scroll(0, x + juli);
        }
      }, 20);
    },
    mouseoverShow() {
      // 侧边栏移入显示
      this.showFlag = false;
      this.$refs.sidebar.style.right = 0;
    },

    clickShow() {
      // 侧边栏点击隐藏
      this.$refs.sidebar.style.right = "-100px";
      this.showFlag = true;
    },
  },
};
</script>

<style scoped>
@import "~@/assets/css/common.css";
</style>