<template>
  <div class="classification">
    <div class="block">
      <!-- <el-row>
        <el-col>
          <h3>菜单</h3>
        </el-col>
      </el-row> -->
      <el-row>
        <el-col :span="24">
          <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="本周最受欢迎" name="first">
            <el-row>
              <el-col :span="8">
                <el-card :body-style="{ padding: '5px' }">
                  <img src="../../../static/img/banner1.jpg" class="image" alt="">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <!-- <el-button type="text" class="button">点击查看</el-button> -->
                    </div>
                  </div>
                </el-card>
              </el-col>
              <!-- list -->
              <el-col :span="8">
                <el-card :body-style="{ padding: '5px' }">
                  <img src="../../../static/img/banner1.jpg" class="image" alt="">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <!-- <el-button type="text" class="button">点击查看</el-button> -->
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '5px' }">
                  <img src="../../../static/img/banner1.jpg" class="image" alt="">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <!-- <el-button type="text" class="button">点击查看</el-button> -->
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '5px' }">
                  <img src="../../../static/img/banner1.jpg" class="image" alt="">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <!-- <el-button type="text" class="button">点击查看</el-button> -->
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '5px' }">
                  <img src="../../../static/img/banner1.jpg" class="image" alt="">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <!-- <el-button type="text" class="button">点击查看</el-button> -->
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card :body-style="{ padding: '5px' }">
                  <img src="../../../static/img/banner1.jpg" class="image" alt="">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">点赞</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="新秀菜谱" name="second">肉禽类</el-tab-pane>
          <el-tab-pane label="往期头条" name="third">水产品类</el-tab-pane>
          <el-tab-pane label="厨房101" name="fourth">蔬菜类</el-tab-pane>
          <el-tab-pane label="月季最佳" name="five">果品类</el-tab-pane>
          <el-tab-pane label="最新创建" name="six">米面豆乳</el-tab-pane>
          <el-tab-pane label="流行菜单" name="seven">米面豆乳</el-tab-pane>
        </el-tabs>
        </el-col>
      </el-row>
    <el-row>
    </el-row>
    <el-row>
    </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name : 'classification',
  data() {
    return {
      activeName : 'first',
      hotMenuArr : [

      ],
      currentDate: new Date()
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
p {
  /* height: 35px; */
  /* line-height: 35px; */
  padding: 10px 0;
}
p:hover {
  background: #ccc;
  cursor: pointer;
}
/*=====kapian=====*/
.time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>


