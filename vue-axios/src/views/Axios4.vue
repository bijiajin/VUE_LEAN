<template>
  <div class="home">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
// axios实例配置参数有哪些

import axios from 'axios'
export default {
  name: 'Axios4',
  data(){
    return {
      msg:"Axios 实例的相关配置 "
    }
  },
  created(){
    /*
    let instance = axios.create({
      baseURL:'http://localhost:8080',//请求的域名，基本地址
      timeout:1000,//请求超时时长（ms）
      url:'',//请求路径 “、data.json”
      method:'',//请求方法 get post put patch delete
      headers:{
        token:""
      },//设置请求头
      params:{},//会将请求参数拼接到url地址中
      data:{},//会将请求参数放到请求实体中
    });
    */
   
    //1.axios全局配置（低）
    axios.defaults.timeout = 1000

    //2.axiox实例配置 （中）
    let ins = axios.create();
    ins.defaults.timeout=3000

    //3.axiox请求配置 (高)
    ins.get('/data.json',{timeout:5000}).then(res=>{
      console.log(res);
    })
  }
}
</script>
