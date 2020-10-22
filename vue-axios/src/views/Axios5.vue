<template>
  <div class="home">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
// axios实例配置参数有哪些

import axios from 'axios'
export default {
  name: 'Axios5',
  data(){
    return {
      msg:"Axios 在开发中的实际配置 "
    }
  },
  created(){
    /*
    开发中的实际配置
    在日常工作中，axios的配置一般都是根据实例进行配置的，如：
    1.多个接口地址的情况 http://localhost:9090   http://localhost:9091
    
    */
   let ins1 = axios.create({
     baseURL:'http://localhost:9090',
     timeout:1000
   });

   let ins2 = axios.create({
     baseURL:'http://localhost:9091',
     timeout:3000
   });

   //实例1  baseURL,timeout,url,method,params 
   ins1.get('/contactList',{
     params:{}
   }).then(res=>{
     console.log(res);
   })

   //实例2   baseURL,timeout,url,method
   ins2.get('/orderLsit',{
     timeout:5000
   }).then(res=>{
     console.log(res)
   })

  }
}
</script>
