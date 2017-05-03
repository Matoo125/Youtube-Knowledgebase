<template>
	<nav class="nav has-shadow">
	  <div class="container">
	  	<div class="nav-left">
		    <router-link :to="{ name: 'Channels' }" class="nav-item">
		      <h2>Youtube Knowledgebase</h2>
		    </router-link>		   
		  </div>

		  <div class="nav-center">
		    <a class="nav-item" href="https://github.com/Matoo125/Youtube-Knowledgebase" target="_blank">
		      <span class="icon">
		        <i class="fa fa-github"></i>
		      </span>
		    </a>
		  </div>

		  <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
		  <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
		  <span class="nav-toggle">
		    <span></span>
		    <span></span>
		    <span></span>
		  </span>

		  <!-- This "nav-menu" is hidden on mobile -->
		  <!-- Add the modifier "is-active" to display it on mobile -->
		  <div class="nav-right nav-menu">
		    <router-link :to="{ name: 'Channels' }" class="nav-item">
		      Home
		    </router-link>
		  </div>
	  </div>
	</nav>
</template>


<script>
export default {
  name: 'Navigation'
}
</script>
<style lang="scss">
nav {
	margin-bottom: 50px;
	background-color: green;
}
</style>
