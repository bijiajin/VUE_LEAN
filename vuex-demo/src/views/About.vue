<template>
  <div class="about">
    <h1>{{msg}}</h1>
	<h3>{{$store.state.count}}</h3>
	<div>
		<button @click="add">+</button>
		<button @click="reduce">-</button>
		<button @click="countAddParam">+100</button>
	</div>
  </div>
</template>
<script>
	export default{
		data(){
			return{
				msg:'This is an Vuex page'
			}
		},
		methods:{
			add:function(){
				this.$store.commit("countIncrease");
			},
			reduce:function(){
				this.$store.commit("reduce");
			},
			countAddParam:function(){
				this.$store.commit("countAddParam",100);
			}
		}
	}
</script>
