<script lang="ts">
	import { getCount } from '../context';

	const count = getCount();
</script>

<div class="container">
	<p>Parent: {$count}</p>
	<slot />
</div>
