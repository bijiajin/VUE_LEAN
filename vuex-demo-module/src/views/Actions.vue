<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>{{count}}</h2>
		<div>
			<button @click="countIncrease">+</button>
			<button @click="reduce">-</button>
			<button @click="countAddParam(100)">+100</button>
		</div>
		<div>
			<button @click="addAction">+</button>
			<button @click="reduceAction">-</button>
			<button @click="countAddParamAction">+100</button>
		</div>
	</div>
</template>

<script>
	import {mapState,mapMutations,mapActions } from 'vuex';
	export default{
		data(){
			return{
				msg:'VueX Actions 异步修改状态 '
			}
		},
		methods:{
			...mapMutations(["countIncrease","reduce","countAddParam"]),
			...mapActions(["addAction","reduceAction"]),
			countAddParamAction(){
				this.$store.dispatch('countAddParamAction');
			}
		},
		computed:mapState(["count"])
	}
</script>

<style>
</style>
