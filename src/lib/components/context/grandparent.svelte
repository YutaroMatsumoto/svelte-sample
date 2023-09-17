<script lang="ts">
	import { setCount, getCount } from '../context';
	setCount();

	const count = getCount();

	function updateCount() {
		$count += 1;
	}
</script>

<button on:click={updateCount} class="container"> button </button>
<p>Grandarent: {$count}</p>
<slot />
