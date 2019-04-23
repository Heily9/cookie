<template>
  <div class="menuall">
    <div class="block">
      <el-row>
        <el-col>
          <h3>分类浏览</h3>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="热门专题" name="first">
            <el-row>
              <el-col :span="8">
                <h4>特色小吃</h4>
                <ul>
                  <li>小吃</li>
                  <li>酱</li>
                  <li>沙拉</li>
                  <li>凉菜</li>
                </ul>
              </el-col>
              <el-col :span="8">
                <h4>特色小吃</h4>
                <ul>
                  <li>小吃</li>
                  <li>酱</li>
                  <li>沙拉</li>
                  <li>凉菜</li>
                </ul>
              </el-col>
              <el-col :span="8">
                <h4>特色小吃</h4>
                <ul>
                  <li>小吃</li>
                  <li>酱</li>
                  <li>沙拉</li>
                  <li>凉菜</li>
                </ul>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="烘焙甜品饮料" name="second"></el-tab-pane>
          <el-tab-pane label="肉类" name="third">水产品类</el-tab-pane>
          <el-tab-pane label="蔬菜水果" name="fourth">蔬菜类</el-tab-pane>
          <el-tab-pane label="糖粥主食" name="five">果品类</el-tab-pane>
          <el-tab-pane label="口味特色" name="six">米面豆乳</el-tab-pane>
          <el-tab-pane label="水产" name="seven">米面豆乳</el-tab-pane>
          <el-tab-pane label="蛋奶豆制品" name="eight">米面豆乳</el-tab-pane>
          <el-tab-pane label="米面干果腌咸" name="nine">米面豆乳</el-tab-pane>
        </el-tabs>
        </el-col>
      </el-row>
    <el-row>
      <!-- <el-col :span="24">
          <h3>食材分类</h3>
      </el-col> -->
    </el-row>
    <el-row>
      <!-- <el-col :span="4"><p class="p-title">时令与热门</p></el-col>
      <el-col :span="20">
        <ul>
          <li v-for="(item, index) in hotMenuArr" :key="index">
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </el-col> -->
    </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name : 'menuAll',
  data() {
    return {
      activeName : 'first',
      MenuArr : [{

      }]  // 菜谱
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
  color: #CC4729;
  text-align: left;
  /* border-bottom: 1px solid #ccc; */
  padding: 0 0 5px 0 ;
}
p {
  /* height: 35px; */
  /* line-height: 35px; */
  padding: 10px 0;
}
p:hover {
  background: #ccc;
  cursor: pointer;
}
h4 {
  color: #909090;
}
ul {
  width: 100%;
  min-height: 300px;
}
li {
  /* width: 25%; */
  display: inline-block;
  margin: 0 5px;
}
</style>


