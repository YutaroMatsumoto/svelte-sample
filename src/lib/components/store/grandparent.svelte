<script lang="ts">
	import { count } from '../store';

	function updateCount() {
		count.set(($count += 1));
	}
</script>

<button on:click={updateCount} class="container"> button </button>
<div class="container">
	<!-- <div class="container"> -->
	<p>Grandparent: {$count}</p>
	<slot />
</div>
