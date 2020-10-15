<template>
	<div class="classA">
		<h2> {{msg}}</h2>
	</div>
</template>

<script>
export default {
	name:"HelloVue",
	props:{
		msg:String
	}
}
</script>

<style>
.classA{
	color: orange;
}
</style>
