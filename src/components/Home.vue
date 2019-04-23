<template>
  <div class="home">
    <!-- <top></top> -->
      <div class="container">
        <!-- 轮播 -->
        <el-row>
          <el-col :span="24">
            <div class="block">
              <el-carousel trigger="click" height="350px" indicator-position="outside">
                <el-carousel-item>
                  <h3><img src="../../static/img/banner1.jpg" alt=""></h3>
                </el-carousel-item>
                <el-carousel-item>
                  <h3><img src="../../static/img/banner2.jpg" alt=""></h3>
                </el-carousel-item>
                <el-carousel-item>
                  <h3><img src="../../static/img/banner3.jpg" alt=""></h3>
                </el-carousel-item>
                <el-carousel-item>
                  <h3><img src="../../static/img/banner4.jpg" alt=""></h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <h2>热门菜谱</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="block">
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods1.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods2.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods3.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods4.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods5.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods6.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods7.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods8.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <h2>推荐菜谱</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="block">
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods1.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods2.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods3.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods4.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods5.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods6.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods7.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
              <el-col :span="6">
                <ul class="block-ul">
                  <li><img src="../../static/img/foods8.jpg" alt=""></li>
                  <li><h3>title</h3><span>name</span></li>
                </ul>
              </el-col>
            </div>
          </el-col>
        </el-row>
        <!-- footer -->
         <el-row>
          <el-col :span="24">
            <div class="text">
              <p>不再为吃什么而烦恼</p>
              <p>不再错失美味</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- <login-con></login-con> -->
      <!-- 登录弹框 -->

  </div>
</template>
<script>
export default {
  name: "home",
  // components: { Top },
  data() {
    return {
      inputValue: "",
      Recently: "",
      RecentlyArr: [],
      dialogVisibleLogin: false,
      dialogVisibleReginster : false,
      activeIndex2 : '1'
    };
  },
  methods: {
    loginMethod() {
      this.dialogVisibleLogin = true;
    },
    registerMethod() {
      this.dialogVisibleReginster = true
    },
    handleClose() {
      this.dialogVisibleLogin = false;
      this.dialogVisibleReginster = false;
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-dialog__body {
  height: 350px !important;
}
/* .container {
  padding: 0 120px;
} */
.block {
  padding: 0 120px;
}
.block img {
  width: 100%;
  height: 350px;
}
h2 {
  color: rgb(255, 208, 75);
}
.block-ul {
  padding: 0 10px;
}
.block-ul img {
  width: 100%;
  height: 250px;
}
.block-ul h3 {
  padding: 0;
  margin: 0;
}
.block-ul span {
  display: inline-block;
  text-align: center;
}

.text {
  margin: 30px auto;
  padding: 5px 0;
  width: 60%;
  background: rgb(255, 208, 75);
}
/* .text p {
  font-size: 18px;
} */
</style>
