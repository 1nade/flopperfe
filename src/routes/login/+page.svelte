<script lang="ts">
	import PageTransitions from '../../lib/PageTransitions.svelte';
	import { modalStore, localStorageStore } from '@skeletonlabs/skeleton';
	import { onMount } from "svelte";

	if(localStorage) {
		if (localStorage.flopperToken) {
                  onMount(() => {window.open("/dashboard/user","_self")});
		}
	 }
	
	function login() {
		var emailInput = document.getElementById('email-input');
		// @ts-ignore
		var email = emailInput.value;

		var passwordInput = document.getElementById('password-input');
		// @ts-ignore
		var password = passwordInput.value;

		var url =
			'https://newapi.flopper.xyz/infinity/acct/login?email=' + email + '&password=' + password;

		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.onreadystatechange = function () {
			if (request.readyState === 4 && request.status === 200) {
				var response = JSON.parse(request.responseText);
				console.log(response);
                // check if account exists
				if (response.message == 'wow') {
					alert('Whoops! Your password is not correct');
				} else if (response.message == 'user does not exist') {
					alert('Whoops! Your account does not exist.');
				} else {
                    // create or override localStorage items
					localStorage.setItem('username', response.username);
                    localStorage.setItem('flopperToken', response.sessionId);
                    localStorage.setItem('createdAt', response.createdAt);

                    // redirect to dashbaord after login
                    window.open("/dashboard/user","_self")
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
				<h2 class="h2">Login to Flopper</h2>
			</figure>
			<div class="card p-4 w-full text-token space-y-4 variant-ghost">
				<label class="label">
					<span>Email</span>
					<input
						class="input"
						title="Email"
						type="search"
						placeholder="user@flopper.xyz"
						id="email-input"
					/>
				</label>
				<label class="label">
					<span>Password</span>
					<input class="input" title="Password" type="password" id="password-input" />
				</label>
				<div class="label">
					<a class="btn variant-ghost" on:click={login} href="/login" rel="noreferrer"> Login </a>
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
