<script lang="ts">
	import { count, getCountStore } from '../store';
	// import { sample } from '../context/child.svelte';

	const countStore = getCountStore();
	$: console.log('child:', $count);
</script>

<div class="container">
	<!-- {$sample} -->
	<p>Child: {$count}</p>
	<slot />
</div>
