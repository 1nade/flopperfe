<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
    import PageTransitions from "../../lib/PageTransitions.svelte";
    function register()
    {
        alert('Hello from register()!');
    }
</script>
<div class="container h-full mx-auto flex justify-center items-center">
    <PageTransitions>
        <div class="space-y-10 text-center flex flex-col items-center">
            <figure>
                <h2 class="h2">Register to Flopper</h2>
            </figure>
            <div class="card p-4 w-full text-token space-y-4 variant-ghost">
                <label class="label">
                    <span>Username</span>
                    <input class="input" title="Username" type="search" placeholder="xX_FortniteGamer69_Xx" />
                </label>
                <label class="label">
                    <span>Email</span>
                    <input class="input" title="Email" type="email" placeholder="user@flopper.xyz" autocomplete="email" />
                </label>
                <label class="label">
                    <span>Password</span>
                    <input class="input" title="Password" type="password" />
                </label>
                <div class="label">
                    <a
                    class="btn variant-ghost"
                    on:click={register}
                    href="/login/registered/"
                    rel="noreferrer"
                    >
                        Register
                    </a>
                </div>
            </div>
        </div>
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
