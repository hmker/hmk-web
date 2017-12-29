<template>
  <div class="login">
    <div class="logo">
      <h1>hmk</h1>
    </div>
    <el-form ref="loginForm" :model="loginForm" :rules="rules" label-width="50px">
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">登录</el-button>
        <el-button @click="handleRegist">新用户注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
 
<script>
export default {
  name: 'login',
  data () {
    var validateName = (rule, value, callback) => {
      if (value.trim() === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
        region: ''
      },
      rules: {
        username: [
          { validator: validateName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          let args = [
            this.loginForm.username,
            this.loginForm.password
          ]
          this.$store.dispatch('login', args).then(() => {
            this.$router.push('/main')
          }, err => {
            this.$message.error(err.message)
          })
        }
      })
    },
    handleRegist () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
.login {
  position: absolute;
  width: 360px;
  height: 300px;
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 10px 20px 10px 10px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.logo {
  text-align: center;
}
</style>