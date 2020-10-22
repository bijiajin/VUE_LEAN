<template>
  <div class="home">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
/*
  Axios请求方法：get post put patch delete
  get:    获取数据
  post:   提交数据（表单提交+文件上传）
  put:    更新数据（所有数据推送到后端）
  patch:  更新数据（只将修改的数据推送到后端）
  delete: 删除数据
*/
import axios from 'axios'

export default {
  name: 'Axios1',
  data(){
    return {
      msg:"Vue Axios Page 1"
    }
  },
  created(){
    // get 请求的两种方法 http://localhost:8080/data.json?id=12
    axios.get('/data.json',{params:{id:12}}).then((res)=>{
      console.log("数据返回-1",res);
    });
    axios({
      method:'get',
      url:'/data.json',
      params:{
        id:12
      }
    }).then((res)=>{
      console.log("数据返回-2",res);
    });

    //post
    //application/json
    let data = {id:12};
    axios.post('/post',data).then((res)=>{
      console.log("post-1",res);
    });
    axios({
      method:'POST',
      url:'/post',
      data:data
    }).then((res)=>{
      console.log("post-2",res);
    })

     //form-data 表单提交（图片上传，文件上传）
     let formData = new FormData();
     for(let key in data){
       formData.append(key,data[key]);
     }
     axios.post('/post',formData).then((res)=>{
      console.log("post-1",res);
    });

    //put请求
    axios.put('/put',data).then(res=>{
      console.log(res);
    })

    //patch请求
    axios.patch('/patch',data).then(res=>{
      console.log(res);
    })

    //delete 请求
    // 参数在地址中
    axios.delete('/delete',{
      params:{
        id:12
      }
    }).then(res=>{
      console.log(res);
    })
    // 参数不在地址中
    axios.delete('/delete',{
      data:{
        id:12
      }
    }).then(res=>{
      console.log(res);
    })

    axios({
      method:'delete',
      url:'/delete',
      params:{},//地址中的参数
      data:{}//非地址中的参数
    }).then(res=>{
      console.log(res);
    })

  }
}
</script>
