<script lang="ts">
	import { count, getCountStore } from '../store';

	const countStore = getCountStore();
	$: console.log('parent:', $count);
</script>

<div class="container">
	<p>Parent: {$countStore}</p>
	<slot />
</div>
