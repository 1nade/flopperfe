<script lang="ts">
    import PageTransitions from "../../../lib/PageTransitions.svelte";
    import { type ModalSettings, modalStore } from "@skeletonlabs/skeleton";
	import { onMount } from "svelte";
	import { browser } from "$app/environment";

	let username: string | null;

	onMount(() => {
    	if(typeof window !== 'undefined') {
 	   		username = localStorage.getItem('username');
    	}
	});

	function changeUsername() {
		var usernameInput = document.getElementById('username-input');
        // @ts-ignore
        var username = usernameInput.value;
		var flopperToken;
		
		if (browser) {
			flopperToken = localStorage.getItem('flopperToken');
		}

        var url =
			'https://newapi.flopper.xyz/infinity/api/name/change?newName=' + username + '&sessionId=' + flopperToken;

		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.onreadystatechange = function () {
			if (request.readyState === 4 && request.status === 200) {
				var response = JSON.parse(request.responseText);
				console.log(response);
                // check if account exists
				if (response.message == "invalid sessionId") {
					alert('Whoops! Your session ID is not valid. Please try again in a few moments. If this problem persists, contact support@flopper.xyz or join our discord at discord.gg/flopper.');
				} else {
                    alert('Username successfully changed to: ' + username + '!');
                }
			}
		};
		request.send();
	}

	function resetPassword() {
		var passwordInput = document.getElementById('password-input');
        // @ts-ignore
        var password = passwordInput.value;
		var flopperToken;
		
		if (browser) {
			flopperToken = localStorage.getItem('flopperToken');
		}

        var url = 'https://newapi.flopper.xyz/infinity/api/password/change?newPassword=' + password + '&sessionId=' + flopperToken;

		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.onreadystatechange = function () {
			if (request.readyState === 4 && request.status === 200) {
				var response = JSON.parse(request.responseText);
				console.log(response);
				console.log(url);
                // check if account exists
				if (response.message == "invalid sessionId") {
					alert('Whoops! Your session ID is not valid. Please try again in a few moments. If this problem persists, contact support@flopper.xyz or join our discord at discord.gg/flopper.');
				} else {
                    alert('Password successfully changed!');
                }
			}
		};
		request.send();
	}
</script>

<head>
	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta2/css/all.css">
	<title>Flopper | Settings</title>
</head>

<div class="container mx-auto p-8 space-y-8">
    <PageTransitions>
        <h1 class="h1">
            <h1 class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone">Settings</h1>
        </h1>
		<h2>
			ㅤ
		</h2>
        <section>
            <div class="card p-20 container mx-auto space-y-8 variant-ghost">
				<h2 class="h2">
					User Settings
				</h2>
				<div class="space-y-5">
					<h3>Change Username</h3>
					<input class="input variant-ghost" title="Change Username" type="text" id="username-input" placeholder="Username" />
					<div class="label">
						<!-- svelte-ignore a11y-missing-attribute -->
						<a
						class="btn variant-ghost"
						rel="noreferrer"
						on:click={changeUsername}
						href="/dashboard/settings"
						>
							Change
						</a>
					</div> 
				</div>
				<div class="space-y-5">
					<h3>Reset Password</h3>
					<input class="input variant-ghost" title="Reset Password" type="password" id="password-input" placeholder="Password" />
					<div class="label">
						<!-- svelte-ignore a11y-missing-attribute -->
						<a
						class="btn variant-ghost"
						rel="noreferrer"
						on:click={changeUsername}
						href="/dashboard/settings"
						>
							Reset
						</a>
					</div> 
				</div>
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