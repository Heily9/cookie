<template>
  <div class="top">
    <el-row>
      <el-col :span="24">
            <!-- <div class="menu">
              <ul>
                <li><router-link to="/home">首页</router-link></li>
                <li><router-link to="/">菜谱大全<i class="el-icon-arrow-down" style="margin-left:2px"></i></router-link></li>
                <li><router-link to="/classification">食材分类</router-link></li>
                <li><router-link to="/select">甄选美味</router-link></li>
                <li><router-link to="/health">健康饮食</router-link></li>
              </ul>
            </div> -->
          </el-col>
          <el-col :span="6">
            <h1><img src="static/img/logo1.png" alt=""></h1>
          </el-col>
          <el-col :span="6">
            <div class="search">
              <el-input placeholder="请输入内容" v-model="inputValue">
                <el-button type="danger" slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="menu">
            <ul class="Recently-search one">
              <li><router-link to="/home">首页</router-link></li>
                <li><router-link to="/menu">菜谱分类</router-link></li>
                <li><router-link to="/classification">菜单</router-link></li>
                <!-- <li><router-link to="/select">健康饮食</router-link></li> -->
                <li><router-link to="/health">作品动态</router-link></li>
            </ul>
            </div>
            <ul class="Recently-search" v-show="Recently != ''">
              <li v-for="(item,idx) in RecentlyArr" :key="idx"></li>
            </ul>
          </el-col>
          <el-col :span="6">
            <div class="login">
              <router-link to="/login">登录</router-link>
              <router-link to="/register">注册</router-link>
              <!-- <span @click="loginMethod()">登录</span>
              <span @click="registerMethod()">注册</span> -->
            </div>
          </el-col>

        </el-row>
        <!-- 导航 -->
        <el-row>

        </el-row>
  </div>
</template>

<script>
export default {
  name : 'top',
  data() {
    return {
      inputValue : '',
      Recently : '',
      RecentlyArr : []
    }
  },
  methods : {
    loginMethod() {

    },
    registerMethod() {

    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  text-align: left;
  list-style-type: none;
  padding: 0;
}
.top {
  height: 80px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  /* background: red; */
}
.top h1 {
  height: 80px;
  padding: 0;
  margin: 0;
}
.top img {
  height: 80px;
}
.search {
  height: 80px;
  line-height: 80px;
}
.login {
  height: 80px;
  line-height: 80px;
  /* text-align: left; */
}
.login a {
  color: #CC4729;
  text-decoration: none;
}
.login span {
  color: #CC4729;
  margin-right: 5px;
  cursor: pointer;
}
/*======菜单======*/
.menu {
  width: 100%;
  height: 80px;
}
/*lunbo*/
.menu>ul {
  width: 100%;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
}
.menu>ul>li {
  display: inline-block;
  margin: 0 0 0 15px;
  /* width: 25%; */
  height: 80px;
  line-height: 80px;
}
.menu>ul>li>a {
  display: block;
  text-decoration: none;
  /* color: rgb(255, 208, 75); */
  color: #CC4729;
  font-size: 16px;
  font-weight: bold;
}
</style>
