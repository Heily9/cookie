<template>
  <div class="main-footer">

        <el-row>
          <el-col :span="24">
            <div class="bottom">
              <ul class="first-ul">
                <li><h3>友情链接</h3></li>
                <li><a href="">美食</a></li>
                <li><a href="">体质测试</a></li>
                <li><a href="">伊特</a></li>
                <li><a href="">9酷音乐网</a></li>
                <li><a href="">365音乐网</a></li>
                <li><a href="">图吧</a></li>
                <li><a href="">汽车论坛</a></li>
                <li><a href="">家居网</a></li>
              </ul>
              <ul class="last-ul">
                <li><a href="">公司简介</a></li>
                <li><a href="">关于我们</a></li>
                <li><a href="">产品下载</a></li>
                <li><a href="">加入我们</a></li>
                <li><a href="">联系我们</a></li>
                <li><a href="">商务合作</a></li>
                <li><a href="">用户协议</a></li>
                <li><a href="">网站地图</a></li>
                <li><a href="">友情链接</a></li>
              </ul>
            </div>
          </el-col>
        </el-row>
  </div>
</template>

<script>
export default {
  name : 'bottom',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.bottom {
  width: 100%;
  padding: 20px 0;
  /* height: 100px; */
  /* background: rgba(84, 92, 100,0.8) */
  background: #3E3A33;
}
.bottom h3 {
  color: rgb(255, 208, 75);
  text-align: left;
}
.bottom>ul {
  text-align: center;
  height: 50px;
  line-height: 50px;
}
.bottom li {
  display: inline-block;
  height: 50px;
  line-height: 50px;
}
.bottom a {
  text-decoration: none;
  color: #999;
}
.first-ul li{
  margin: 0 10px;
}
.last-ul {
  text-align: center;
}
.last-ul li {
  margin: 0 20px;
}
</style>
