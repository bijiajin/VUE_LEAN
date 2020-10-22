<template>
  <div class="home">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'Axios5',
  data(){
    return {
      msg:"Axios取消请求 "
    }
  },
  created(){
    /*
    取消请求
    用于取消当前正在进行http请求的请求
    */

   //1. 定义一个请求tokensource
   let source = axios.CancelToken.source();

   //2. 在请求配置中将CancelToken 的token配置到请求实例中
   axios.get('/data.json',{
     cancelToken:source.token
   }).then(res=>{
     console.log(res);
   }).catch(err=>{
     console.log(err);
   });

   //3.取消请求
   source.cancel('cancel http');

   //实例：  在生么样的情况下可能用到取消请求。
  }
}
</script>
