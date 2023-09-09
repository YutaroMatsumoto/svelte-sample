<script lang="ts">
	export let count: number;
	$: console.log('child:', count);
</script>

<div class="container">
	<p>Child: {count}</p>
	<slot />
</div>
