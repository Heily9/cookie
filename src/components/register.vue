<template>
    <div class="register">
      <el-row>
        <el-col :span="24">
          <p class="register-text">注册一个新的账号</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form ref="formReginster" :model="formReginster" label-width="80px">
            <el-form-item label="用户名">
              <el-input v-model="formReginster.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="formReginster.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input v-model="formReginster.repetPassword"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-checkbox v-model="checkedRegister">我已阅读并同意《厨房里注册使用协议》</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button>注册</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
</template>
<script>
export default {
    name : 'register',
    data() {
        return {
            formReginster : {
                name : '',
                password : '',
                repetPassword : ''
            },
            checkedRegister : true
        }
    }
}
</script>
<style scoped>
.register {
  min-height: 350px;
  width: 40%;
  margin: 100px auto;
}
.register-text {
  margin-bottom: 20px;
  font-size: 18px;
}
.el-button {
  width: 196px;
}
</style>


