<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
	import PageTransitions from '../../lib/PageTransitions.svelte';
	import { fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import OnMountTransition from '../../lib/PageTransitions.svelte';

	let loaded = false;
	onMount(() => loaded = true);
</script>
<head>
	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta2/css/all.css">
	<title>Flopper | Verified!</title>
</head>
<!-- Load check -->
{#if loaded}
<div class="container h-full mx-auto flex justify-center items-center">
	<OnMountTransition>
		<div class="space-y-10 text-center flex flex-col items-center">
            
			<section class="img-bg" />
			<figure>
				<h2 class="h2">You're Verified!</h2>
                <h4 class="h4">Welcome to Flopper.</h4>
			</figure>
			<div class="flex justify-center space-x-2">
				<a
					class="btn variant-ghost-secondary"
					href="http://flopper.xyz/dashboard"
					target="_blank"
					rel="noreferrer"
				>
					Go to Dashboard
				</a>
                <a
					class="btn variant-ghost-secondary"
					href="http://flopper.xyz/download"
					target="_blank"
					rel="noreferrer"
				>
					Download Flopper
				</a>
                <a
					class="btn variant-ghost-secondary"
					href="http://flopper.xyz/donate"
					target="_blank"
					rel="noreferrer"
				>
					Donate
				</a>
                <a
					class="btn variant-ghost-secondary"
					href="https://discord.gg/flopper"
					target="_blank"
					rel="noreferrer"
				>
					Join our Discord
				</a>
			</div>
		</div>
		<!--
		TODO fix spacing between icons	

		<div class="space-y-5 h-full mx-auto flex justify-center items-center">
			<a href="https://discord.gg/flopper"><p class="fab fa-discord mr-3"></p></a>
			<a href="https://github.com/z4xi"><p class="fab fa-youtube mr-3"></p></a>
		</div>
		-->
	</OnMountTransition>
</div>
{/if}

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
