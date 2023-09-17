<script lang="ts">
	import Child from '$lib/components/store/child.svelte';
	import Grandparent from '$lib/components/store/grandparent.svelte';
	import Parent from '$lib/components/store/parent.svelte';

	// let count = 0;
	// function updateCount(event: WheelEvent) {
	// 	event.deltaY < 0 ? (count += 1) : (count -= 1);
	// }
	// $: console.log('page:', count);
</script>

<h1>Store Sample Page</h1>

<!-- bindってなんだっけ -->
<!-- <div on:wheel={updateCount}> -->
<Grandparent>
	<Parent>
		<Child />
	</Parent>
</Grandparent>
<Grandparent>
	<Parent>
		<Child />
	</Parent>
</Grandparent>
