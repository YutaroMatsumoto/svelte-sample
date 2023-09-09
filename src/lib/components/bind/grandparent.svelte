<script lang="ts">
	export let count: number;

	function updateCount(event: WheelEvent) {
		event.deltaY < 0 ? (count += 1) : (count -= 1);
	}

	$: console.log('grand:', count);
</script>

<div on:wheel={updateCount} class="container">
	<!-- <div class="container"> -->
	<p>Grandparent: {count}</p>
	<slot />
</div>
