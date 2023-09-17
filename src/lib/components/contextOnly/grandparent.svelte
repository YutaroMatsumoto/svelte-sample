<script lang="ts">
	import { setContext } from 'svelte';
	const count = setContext('sampleCount', 1);
	function updateCount() {
		setContext('sampleCount', count + 1);
	}
</script>

<button on:click={updateCount}>button</button>
<div>
	<p>Grandarent: {count}</p>
	<slot />
</div>
