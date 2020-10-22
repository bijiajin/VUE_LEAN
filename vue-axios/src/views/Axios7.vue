<template>
  <div class="home">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
/*
axios错误处理
在请求错误是进行的处理
*/

import axios from 'axios'
import { config } from 'vue/types/umd';
export default {
  name: 'Axios7',
  data(){
    return {
      msg:"Axios错误处理 "
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

    //数据请求
    axios.get('/data.json').then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })

    //列子：在实际开发过程中，一般添加统一错误处理
    let ins = axios.create({});
    ins.interceptors.request.use(config=>{
      return config;
    },err=>{
      //请求错误  一般http状态码以4开头，常见：401 超时  404 接口不存在
      $("#modal").show();
      setTimeout(()=>{
        $("#modal").hide();
      },2000);
      return Promise.reject(err);
    });
    ins.interceptors.response.use(res=>{
      return res;
    },err=>{
      //相应错误处理 一般http状态码以5开头 常见：500 系统错误 502 系统重启 
      $("#modal").show();
      setTimeout(()=>{
        $("#modal").hide();
      },2000);
      return Promise.reject(err);
    });

    ins.get('/data.json').then(res=>{
      console.log(res);
    }).catch(err=>{
      //如果错误需要特殊处理，在这里处理一下。
      console.log(res);
    });

  }
}
</script>
