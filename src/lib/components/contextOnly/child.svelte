<script lang="ts">
	import { getCount } from '../contextOnly';

	const count = getCount();
</script>

<div class="container">
	<p>Child: {count}</p>
	<slot />
</div>
