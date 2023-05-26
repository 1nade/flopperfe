<script>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import { AppShell, AppBar, Modal } from '@skeletonlabs/skeleton';
    import Nav from '../../lib/Nav.svelte';
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="w-52 bg-surface-500/10 p-4">
    <svelte:fragment slot="sidebarLeft">
        <Nav />
    </svelte:fragment>
    <svelte:fragment slot="footer"></svelte:fragment>
	<slot />
</AppShell>
<Modal />

<style lang="postcss">
    .gradient-heading {
        @apply bg-clip-text text-transparent box-decoration-clone;
        /* Direction */
        @apply bg-gradient-to-br;
        /* Color Stops */
        @apply from-primary-500 via-tertiary-500 to-secondary-500;
    }
</style>