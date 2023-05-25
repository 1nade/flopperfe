<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<figure>
			<span class="badge variant-ghost-secondary absolute -top-5 -right-12 z-10">S13.40-9.10</span>
			<h2 class="h2">Welcome to Flopper!</h2>
		</figure>
		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
			<img src="https://static.wikia.nocookie.net/fortnite/images/4/4f/Orange_Flopper_-_Floppers_-_Fortnite.png" />
		</figure>
		<!-- / -->
		<div class="flex justify-center space-x-2">
			<a
				class="btn variant-ghost-secondary"
				href="https://discord.gg/flopper"
				target="_blank"
				rel="noreferrer"
			>
				Get Started
			</a>
		</div>
	</div>
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
