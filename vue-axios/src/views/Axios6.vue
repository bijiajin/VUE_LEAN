<template>
  <div class="home">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
/*
axios拦截器
在请求或响应被处理前拦截它们
分为：请求拦截器，响应拦截器
*/

import axios from 'axios'
import { config } from 'vue/types/umd';
export default {
  name: 'Axios6',
  data(){
    return {
      msg:"Axios拦截器的配置 "
    }
  },
  created(){
    //请求拦截器
    axios.interceptors.request.use(config=>{
      //在发送请求前做些什么
      return config;
    },err=>{
      //在请求错误的时候做些什么
      return Promise.reject(err);

    });

    //响应拦截器
    axios.interceptors.response.use(res=>{
      //请求成功响应数据处理,数据将被返回到.then()方法中
      return res;
    },err=>{
      //响应错误 做些什么  错误数据将被返回到.catch()中。
      return Promise.reject(err);
    });

    //取消拦截器,
    let exqut = 
    axios.interceptors.request.use(config=>{
      config.headers={
        auth:true
      }
      return config;
    });
    axios.interceptors.request.eject(exqut);

    //实际实例   登录（token:'身份信息'）  开发过程中，一般都是给实例添加拦截器或者其他内容
    let ins = axios.create({});
    ins.interceptors.request.use(config=>{
      config.headers.token = '';
      return config;
    });



  }
}
</script>
