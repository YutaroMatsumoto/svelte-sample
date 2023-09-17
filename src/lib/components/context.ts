import { writable, type Writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

type Context = Writable<number>;

export function setCount() {
	const count = writable<number>(0);
	setContext('count', count);
}

export function getCount() {
	return getContext<Context>('count');
}
