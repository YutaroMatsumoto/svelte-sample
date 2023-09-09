<script lang="ts">
	import { count, getCountStore } from '../store';

	function updateCount(event: WheelEvent) {
		event.deltaY < 0 ? count.set(($countStore += 1)) : ($countStore -= 1);
	}

	const countStore = getCountStore();

	$: console.log('grand:', $count);
</script>

<div on:wheel={updateCount} class="container">
	<!-- <div class="container"> -->
	<p>Grandparent: {$countStore}</p>
	<slot />
</div>
