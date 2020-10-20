<template>
	<li class="item" @click="handleDelete">{{index+1}}_{{content}}</li>
</template>

<script>
	export default {
		props:['index','content'],
		methods:{
			handleDelete (){
				this.$emit('delete',this.index);
			}
		}
	}
</script>

<style scoped>
	.item{
		color: green;
	}
</style>
