<script lang="ts">
	import Child from '$lib/components/context/child.svelte';
	import Grandparent from '$lib/components/context/grandparent.svelte';
	import Parent from '$lib/components/context/parent.svelte';
	import { setCount, getCount } from '$lib/components/context';

	// let count = 0;
	// function updateCount(event: WheelEvent) {
	// 	event.deltaY < 0 ? (count += 1) : (count -= 1);
	// }
	// $: console.log('page:', count);

	$: console.log(getCount());
</script>

<h1>Context Sample Page</h1>

<!-- bindってなんだっけ -->
<!-- <div on:wheel={updateCount}> -->
<Grandparent>
	<Parent>
		<Child />
	</Parent>
</Grandparent>
<!-- </div> -->
========================
<Grandparent>
	<Parent>
		<Child />
	</Parent>
</Grandparent>
