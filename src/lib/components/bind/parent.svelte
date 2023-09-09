<script lang="ts">
	export let count: number;

	$: console.log('parent:', count);
</script>

<div class="container">
	<p>Parent: {count}</p>
	<slot />
</div>
