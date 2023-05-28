<script>
    import PageTransitions from "../../lib/PageTransitions.svelte";
    import { onMount } from "svelte";
    import { browser } from "$app/environment";

    if(localStorage) {
		if (localStorage.flopperToken) {
            onMount(() => {window.open("/dashboard/user","_self")});
		}
	}

    function register() {
        var usernameInput = document.getElementById('username-input');
        // @ts-ignore
        var username = usernameInput.value;

        var emailInput = document.getElementById('email-input');
        // @ts-ignore
        var email = emailInput.value;

        var passwordInput = document.getElementById('password-input');
        // @ts-ignore
        var password = passwordInput.value;

        var url =
			'https://newapi.flopper.xyz/infinity/email/verify?email=' + email + '&password=' + password + "&username=" + username;

		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.onreadystatechange = function () {
			if (request.readyState === 4 && request.status === 200) {
				var response = JSON.parse(request.responseText);
				console.log(response);
                // check if account exists
				if (response.code == 500) {
					alert('Whoops! Your email is not valid. If this problem persists, please contact support@flopper.xyz or join our discord at discord.gg/flopper.');
				} else if (response.code == 200) {
					if (browser) {
						// redirect to dashboard after register
						window.open("/","_self");
                        alert("Account created! Check your inbox for a verification email.");
					}
				} else {
                    alert('Whoops! An unknown error has occured. Please try again in a few moments.')
                }
			}
		};
		request.send();
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
                    <input id="username-input" class="input" title="Username" type="search" placeholder="xX_FortniteGamer69_Xx" />
                </label>
                <label class="label">
                    <span>Email</span>
                    <input id="email-input" class="input" title="Email" type="email" placeholder="user@flopper.xyz" autocomplete="email" />
                </label>
                <label class="label">
                    <span>Password</span>
                    <input id="password-input" class="input" title="Password" type="password" />
                </label>
                <div class="label">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a
                    class="btn variant-ghost"
                    rel="noreferrer"
                    on:click={register}
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
