<template>
  <div class="home">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
// 并发请求： 同时处理多个请求，并统一处理返回值

import axios from 'axios'
export default {
  name: 'Axios2',
  data(){
    return {
      msg:"Axios 并发请求 "
    }
  },
  created(){
    // 统一请求：axios.all（）   统一处理：axios.spread()
    axios.all(
      [
        axios.get('/data.json'),
        axios.get('/city.json'),
      ]
    ).then(
      axios.spread((dataRes,cityRes)=>{
        console.log(dataRes,cityRes);
      })
    )
  }
}
</script>
