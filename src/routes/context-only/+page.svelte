<script lang="ts">
	import Child from '$lib/components/contextOnly/child.svelte';
	import Grandparent from '$lib/components/contextOnly/grandparent.svelte';
	import Parent from '$lib/components/contextOnly/parent.svelte';

	// let count = 0;
	// function updateCount(event: WheelEvent) {
	// 	event.deltaY < 0 ? (count += 1) : (count -= 1);
	// }
	// $: console.log('page:', count);

	// $: console.log(getCount());
</script>

<h1>Context Sample Page</h1>

<!-- bindってなんだっけ -->
<!-- <div on:wheel={updateCount}> -->
<Grandparent>
	<Parent>
		<Child />
	</Parent>
</Grandparent>
<p>========================</p>
<Grandparent>
	<Parent>
		<Child />
	</Parent>
</Grandparent>
