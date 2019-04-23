<template>
  <div class="health">
    <div class="block">
      <el-row>
        <el-col>
          <h3>健康饮食</h3>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="最新发布" name="first">
            <ul>
              <li v-for="(item,index) in healthArr" :key="index">
                <h4>{{ item.title }}</h4>
                <p>{{ item.content }}</p>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="最新推荐" name="second"></el-tab-pane>
          <el-tab-pane label="饮食常识" name="third"></el-tab-pane>
          <el-tab-pane label="瘦身美容" name="fourth"></el-tab-pane>
          <el-tab-pane label="母婴饮食" name="five"></el-tab-pane>
          <el-tab-pane label="食疗食补" name="six"></el-tab-pane>
        </el-tabs>
        </el-col>
        <el-col :span="8">
          <div class="img-con"><img src="../../../static/img/jingdong1.jpeg" alt=""></div>
          <div class="img-con"><img src="../../../static/img/jingdong1.jpeg" alt=""></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name : 'health',
  data() {
    return {
        activeName : 'first',
        healthArr : [
          { id : 1, title : '健康养生正当时', content : 'wwwwcsv三次短发 i 的is 的 v 那点事'},
          {id : 2,title : '鸡翅',content : 'wwwwcsv三次短发 i 的is 的 v 那点事'},
          {id : 3,title : '鸡蛋',content : 'wwwwcsv三次短发 i 的is 的 v 那点事'},
          {id : 4,title : '鸡蛋',content : 'wwwwcsv三次短发 i 的is 的 v 那点事'},

        ]
    }
  },
  methods : {
    handleClick() {

    }
  }
}
</script>

<style scoped>
.block {
  padding: 0 120px;
  min-height: 550px;
}
h3 {
  color: red;
  text-align: left;
  /* border-bottom: 1px solid #ccc; */
  padding: 0 0 5px 0 ;
}
h4 {
  text-align: left;
}
p {
  text-align: left;
  color: #999;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
p:hover {
  /* background: #ccc; */
  cursor: pointer;
}
.img-con {
  padding: 15px;
  width: 100%;
  height: 200px;
}
.img-con>img {
  width: 100%;
  height: 100%;;
}
</style>


