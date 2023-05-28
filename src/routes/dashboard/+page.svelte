<script>
    import { onMount } from "svelte";
    import { browser } from "$app/environment";

    if (browser) {
        if (localStorage.getItem('flopperToken') && localStorage.getItem('flopperToken') != "undefined") {
            onMount(() => {window.open("/dashboard/user","_self")});
        } else {
            onMount(() => {window.open("/login","_self")});
        }
    }
</script>