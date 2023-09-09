import { writable } from 'svelte/store';

export const count = writable(0);

// storeだけでもcontextのようなことができるか確かめてみる
export function getCountStore() {
	const storeCount = writable<number>(0);
	return storeCount;
}
