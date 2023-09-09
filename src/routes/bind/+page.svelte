<script lang="ts">
	import Child from '$lib/components/bind/child.svelte';
	import Grandparent from '$lib/components/bind/grandparent.svelte';
	import Parent from '$lib/components/bind/parent.svelte';

	let count = 0;
	function updateCount(event: WheelEvent) {
		event.deltaY < 0 ? (count += 1) : (count -= 1);
	}
	$: console.log('page:', count);
</script>

<h1>Sample Page</h1>

<!-- bindってなんだっけ -->
<!-- <div on:wheel={updateCount}> -->
<Grandparent bind:count>
	<Parent {count}>
		<Child {count} />
	</Parent>
</Grandparent>
<!-- </div> -->
