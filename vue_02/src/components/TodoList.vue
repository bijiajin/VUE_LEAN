<template>
	<div>
		<div>
			<input class="item" v-model="inputValue"/>
			<button @click="handleSubmit">提交</button>
		</div>
		<ul>
			<!-- <li v-for="(item,index) of list" :key="index">{{item}}</li> -->
			<TodoItem
			v-for="(item,index) of list"
			:key="index"
			:index="index"
			:content="item"
			@delete="delItem"
			></TodoItem>
		</ul>
	</div>
</template>

<script>
	import TodoItem from './TodoItem.vue'
	export default {
		components:{
			TodoItem
		},
		data (){
			return {
				inputValue:'',
				list:[]
			}
		},
		methods:{
			handleSubmit (){
				this.$data.list.push(this.$data.inputValue);
				this.$data.inputValue = '';
			},
			delItem (index){
				this.list.splice(index,1);
			}
		}
	}
</script>

<style>
</style>
