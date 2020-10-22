<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>{{count}}</h2>
		<div>
			<button @click="countIncrease">+</button>
			<button @click="reduce">-</button>
			<button @click="countAddParam(100)">+100</button>
		</div>
	</div>
</template>

<script>
	import {mapState,mapMutations } from 'vuex';
	export default{
		data(){
			return{
				msg:'VueX Mutations 修改状态 '
			}
		},
		methods:mapMutations(["countIncrease","reduce","countAddParam"]),
		computed:mapState(["count"])
	}
</script>

<style>
</style>
