<script lang="ts">
	import { count, getCountStore } from '../store';

	const countStore = getCountStore();
	$: console.log('child:', $count);
</script>

<div class="container">
	<p>Child: {$countStore}</p>
	<slot />
</div>
