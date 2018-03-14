<template>
	<div class="side">
		<Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
			<Menu  theme="dark" width="auto" :open-names="['1']">
				<Submenu name="1">
					<template slot="title">
						<Icon type="ios-navigate"></Icon>
						Item 1
					</template>
					<router-link to="/form">
						<MenuItem name="1-1"> 
							form
						</MenuItem>
					</router-link>
					<router-link to="/table">
						<MenuItem name="1-2"> 
							table
						</MenuItem>
					</router-link>

					<router-link to="/chart">
						<MenuItem name="1-3"> 
							chart
						</MenuItem>
					</router-link>
				</Submenu>
				
			</Menu>
		</Sider>
	</div>
</template>
<script>
</script>