<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<main>
		<div class="container">
			<slot />
		</div>
	</main>
</div>

<style>
	.container {
		padding: 20px;
	}
</style>
