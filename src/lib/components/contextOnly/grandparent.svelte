<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { setCount, getCount } from '../contextOnly';
	setCount();
	const count = getCount();
	console.log(count);

	function updateCount(event: WheelEvent) {
		console.log('updateは動いてる');
		event.deltaY < 0 ? setContext('count', count + 1) : setContext('count', count + 1);
	}

	$: console.log(getCount());
	$: console.log(count);
	$: console.log('contextの動きを見たい');

	// onMount(() => console.log(count));
</script>

<div on:wheel={updateCount} class="container">
	<p>Child: {count}</p>
	<slot />
</div>
