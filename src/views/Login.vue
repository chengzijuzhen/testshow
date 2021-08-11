<template>
  <div>
    <h3>登陆界面</h3>
    <!--表单属性绑定
    使用v-model创建双向数据绑定, 用来监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
    -->
    <input type="text" placeholder="请输入用户名" v-model="loginForm.username" />
    <input type="password" placeholder="请输入密码" v-model="loginForm.password" />
    <button v-on:click="login">登录</button>
    <p><router-link to="/home">首页</router-link></p> 

  </div>
</template>

 <script>
  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        
      }
    },
    //定义了登录按钮的点击方法，即向后端 /login 接口发送数据，获得成功的响应后，页面跳转到 /home
    methods: {
      login () {
        console.log(this.loginForm.username)
        console.log(this.loginForm.password)

        if(this.loginForm.username.trim() === ''){
        alert('用户名不能为空');
        return 0;
      }
      if(this.loginForm.password.trim() === ''){
        alert('密码不能为空');
        return 0;
      }
       /**
       * post 请求
       */
        this.$axios
        //post 的异步请求，//这里一般请求后端的接口，接口返回一个json字符串
          .post('/api/login', {
            userName: this.loginForm.username,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              //将请求返回的数据赋值给info
              response => (this.info = response)
              this.$router.replace({path: '/home'})
            }
            
          this.$message({
              showClose: true,
              message: successResponse.data.message,
              type: 'success'
            });
          })         
          .catch(failResponse => {// eslint-disable-line no-unused-vars
            //console.log(error);// eslint-disable-line no-unused-vars
          })
      }
    } 
  }

// export default {
//     name: 'Login1',
//     data () {
//       return {
//         loginForm: {
//           username: '',
//           password: ''
//         },
        
//       }
//     },
//     //定义了登录按钮的点击方法，即向后端 /login 接口发送数据，获得成功的响应后，页面跳转到 /home
//     methods: {
//       login1 () {
//         console.log(this.loginForm.username)
//         console.log(this.loginForm.password)
//       /**
//        * get 请求
//        */
//       this.$axios.get('http://localhost:9091/api/login1?userName=admin&password=123456')
//         .then(successResponse => {
//             if (successResponse.data.code === 200) {
//               //将请求返回的数据赋值给info
//               response => (this.info = response)
//               this.$router.replace({path: '/home'})
//             }            
//           this.$message({
//               showClose: true,
//               message: successResponse.data.message,
//               type: 'success'
//             });
//           })         
//           .catch(failResponse => {// eslint-disable-line no-unused-vars
//             //console.log(error);// eslint-disable-line no-unused-vars
//           })  
//    }
//  }
// }
</script>


<style>
.login-wrap {
  text-align: center;
}
h3 {
  text-align: center;
}
span {
  text-align: center;
}
input {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}

p {
  color: red;
  text-align: center;
}

button {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
}

span {
  cursor: pointer;
}

span:hover {
  color: #41b883;
}
</style>
