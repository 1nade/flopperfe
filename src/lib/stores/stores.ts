import { browser } from '$app/environment';
import type { Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

const storeExample: Writable<string> = localStorageStore('storeExample', 'initialValueHere');

function updateItem(item: string, val: string) {
    if (browser) {
        localStorage.setItem(item, val);
    }
}

if (browser) {
    var name;
    var flopperToken;
    var createdAt;
    name = localStorage.getItem("username");
    flopperToken = localStorage.getItem("flopperToken");
    createdAt = localStorage.getItem("createdAt");
}
export const fUsername = name;
export const fToken = flopperToken;
export const fLoginDate = createdAt;