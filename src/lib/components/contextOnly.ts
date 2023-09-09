import { getContext, setContext } from 'svelte';

export function setCount() {
	const count = 1;
	setContext('count', count);
}

export function getCount() {
	return getContext<number>('count');
}

// ============================
