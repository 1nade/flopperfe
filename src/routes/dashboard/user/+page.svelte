<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<script lang="ts">
	import PageTransitions from '../../../lib/PageTransitions.svelte';
	import { onMount } from "svelte";

	let username: string | null;
	let creationDate: string | null;

	onMount(() => {
    	if(typeof window !== 'undefined') {
 	   		username = localStorage.getItem('username');
			creationDate = localStorage.getItem('createdAt')
    	}
	});
</script>

<div class="container mx-auto p-8 space-y-8">
	<PageTransitions>
		<h1 class="h1">
			<h1
				class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
			>
				Dashboard
			</h1>
		</h1>
		<h4>
			
		</h4>
		<section>
			<div class="card p-20 container mx-auto space-y-8 variant-ghost">
				<h2 class="h2" id="nameTitle">Welcome, {username}!</h2>
				<p>You logged in at: {creationDate}</p>
			</div>
			<div class="card p-20 container mx-auto space-y-8 variant-ghost">
				<h2 class="h2">item shop</h2>
				<p>TODO:</p>
				<p>Setup Item shop ui</p>
			</div>
		</section>
	</PageTransitions>
</div>

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
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
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
