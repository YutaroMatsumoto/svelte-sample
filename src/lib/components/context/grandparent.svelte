<script lang="ts">
	import { setCount, getCount } from '../context';
	// set context
	setCount();

	// get the count
	const count = getCount();

	function updateCount(event: WheelEvent) {
		event.deltaY < 0 ? ($count += 1) : ($count -= 1);
	}

	$: console.log($count);
	$: console.log('contextの動きを見たい');
</script>

<div on:wheel={updateCount} class="container">
	<p>Child: {$count}</p>
	<slot />
</div>
