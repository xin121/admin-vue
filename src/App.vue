<template>
 <div id="app">
 		<Top></Top>
		<Side></Side>
		
		<div class="con" id="con">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Side from './components/nav/Side.vue'
	import Top from './components/nav/Top.vue'
export default{
    components:{
        Side,
        Top
    },
    name: 'app'
}
</script>

<style>

</style>
