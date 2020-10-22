<template>
  <div class="home">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
// axios实例
//后端接口地址有多个，并且超时是从不一样

import axios from 'axios'
export default {
  name: 'Axios3',
  data(){
    return {
      msg:"Axios 实例 "
    }
  },
  created(){
    let instance = axios.create({
      baseURL:'http://localhost:8080',
      timeout:1000
    });

    let instance2 = axios.create({
      baseURL:'http://localhost:9090',
      timeout:5000
    });

    instance.get('/data.json').then(res=>{
      console.log(res);
    })

    instance2.get('/city.json').then(res=>{
      console.log(res);
    })

  }
}
</script>
