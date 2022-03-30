<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { beforeUpdate, onMount } from 'svelte';
	import GitHubCorner from 'svelte-github-corner';
	import Button from '$lib/linkButton.svelte';

	let scores = [];
	let gameOn = false;
	let screenY: number;
	let screenX: number;
	let shipWidht = 60;
	let shipHeight = 60;
	let shipLeft = 0;
	let shipTop = 0;
	let shipSpeed = 30;
	type Projectile = { x: number; y: number; visible: boolean };
	type Enemy = { x: number; y: number };

	let enemies: Enemy[] = [];
	let projectiles: Projectile[] = [];

	let explosions: { x: number; y: number; timeLeft: number }[] = [];
	let menu: HTMLElement;
	let infoMenu: HTMLElement;
	let linkedin: HTMLElement;
	let cv: HTMLElement;
	let github: HTMLElement;
	let titleText = 'NIRO ÅHMAN';
	let titleTextArray = titleText.split('');
	let titleTextElements: HTMLElement[] = Array(titleTextArray.length);

	let introText = 'Front-end oriented full stack developer with head in the clouds.';
	let introTextArray = introText.split('');
	let introTextElements: HTMLElement[] = Array(introTextArray.length);

	function handleKeydown(e: KeyboardEvent) {
		if (gameOn) {
			console.log(e);

			switch (e.code) {
				case 'KeyD':
				case 'ArrowRight':
					shipLeft += shipSpeed;
					break;
				case 'KeyA':
				case 'ArrowLeft':
					shipLeft -= shipSpeed;
					break;
				case 'KeyS':
				case 'ArrowDown':
					shipTop += shipSpeed;
					break;
				case 'KeyW':
				case 'ArrowUp':
					shipTop -= shipSpeed;
					break;
				case 'Space':
					projectiles = [
						...projectiles,
						{ x: shipLeft + shipWidht / 2, y: shipTop - 30, visible: true }
					];
					console.log(enemies);
					break;
				case 'Escape':
					break;
			}
		}
	}

	function updateProjectiles() {
		let newProjectiles = [];
		for (let i = 0; i < projectiles.length; i++) {
			let projectile = projectiles[i];
			projectile.y -= 15;
			if (projectile.y > 0 && projectile.visible) {
				newProjectiles.push(projectile);
			}
		}
		projectiles = newProjectiles;
	}

	function checkIfElementDestroyed() {
		for (let i = 0; i < projectiles.length; i++) {
			projectileOverlaps(menu, projectiles[i]);
			projectileOverlaps(infoMenu, projectiles[i]);
			projectileOverlaps(github, projectiles[i]);
			projectileOverlaps(linkedin, projectiles[i]);
			projectileOverlaps(cv, projectiles[i]);

			for (let j = 0; j < titleTextElements.length; j++) {
				projectileOverlaps(titleTextElements[j], projectiles[i]);
			}
			for (let k = 0; k < introTextElements.length; k++) {
				projectileOverlaps(introTextElements[k], projectiles[i]);
			}
		}
	}

	function projectileOverlaps(el1: HTMLElement, projectile: Projectile) {
		const domRect1 = el1.getBoundingClientRect();

		if (
			domRect1.right >= projectile.x &&
			domRect1.bottom >= projectile.y &&
			domRect1.left <= projectile.x
		) {
			explosions = [...explosions, { x: projectile.x, y: projectile.y, timeLeft: 4 }];
			el1.remove();
			projectile.visible = false;
		}
	}

	function checkIfExplosionEnded() {
		let newExplosions = [];
		for (let k = 0; k < explosions.length; k++) {
			if (explosions[k].timeLeft > 0) {
				let explosion = explosions[k];

				explosion.timeLeft -= 1;
				newExplosions.push(explosion);
			}
			explosions = newExplosions;
		}
	}
	let rendered = false;

	onMount(() => {
		shipLeft = screenX / 2 - shipWidht / 2;
		shipTop = screenY - 200 - shipHeight / 2;
		rendered = true;
		fetch('/scores')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				scores = data;
			});
	});

	let ms = 40;
	const gameClock = () => {
		updateProjectiles();
		checkIfElementDestroyed();
		checkIfExplosionEnded();
	};

	let clear;
	$: {
		clearInterval(clear);
		clear = setInterval(gameClock, ms);
	}
</script>

<svelte:window
	on:keydown|preventDefault={handleKeydown}
	bind:innerWidth={screenX}
	bind:innerHeight={screenY}
/>
<main>
	<div class="wrapper">
		<div class="githubContainer" bind:this={github}>
			<GitHubCorner
				href="https://github.com/vollehman/nirofi"
				title="This page in github"
				ariaLabel="Click here for riches"
				target="_blank"
				corner="topRight"
				style="z-index: 42;"
				--ghc-bg="white"
				--ghc-color="black"
			/>
		</div>

		<h1>
			{#each titleTextArray as char, i}
				<span bind:this={titleTextElements[i]}>{char}</span>
			{/each}
		</h1>

		<p>
			{#each introTextArray as char, i}
				<span bind:this={introTextElements[i]}>{char}</span>
			{/each}
		</p>
		<div class="linkButtonRow">
			<div bind:this={linkedin}>
				<Button url="https://www.linkedin.com/in/niroahman/" text="LinkedIn" />
			</div>
			<div bind:this={cv}>
				<Button url="Niro_Åhman_CV_en" text="Download CV" />
			</div>
		</div>

		{#if gameOn}
			<div
				in:fly={{ y: screenY, delay: 100, duration: 1000 }}
				out:fly={{ y: -screenY, delay: 100, duration: 1000 }}
				class="spaceship"
				style="position: absolute; left: {shipLeft}px; top: {shipTop}px"
			>
				<img src="ship.png" alt="ship" width={shipWidht} height={shipHeight} />
			</div>
			<div
				bind:this={menu}
				in:fly={{ x: 220, duration: 1500 }}
				out:fly={{ x: 220, duration: 1500 }}
				class="menu"
				style="left: {screenX - 220}px; top: {screenY / 2 - 25}px"
			>
				<button on:click={() => (gameOn = !gameOn)}>reset</button>
				<div>Ship speed</div>
				<input type="range" bind:value={shipSpeed} min="10" max="100" />
				<div>Game speed</div>
				<input type="range" bind:value={ms} min="5" max="100" />
			</div>
			<div
				bind:this={infoMenu}
				in:fly={{ x: 220, duration: 1500 }}
				out:fly={{ x: 220, duration: 1500 }}
				class="menu"
				style="left: {screenX - 220}px; top: {screenY / 2 - 225}px"
			>
				<div>Arrows / wasd: move</div>
				<div>Space: fire</div>
				<div>F5: reset</div>
			</div>
		{:else if rendered}
			<div
				in:fly={{ y: screenY, delay: 0, duration: 1500 }}
				out:fly={{ y: -screenY, delay: 100, duration: 1000 }}
				class="startButton"
				style="top: {screenY - 300}px"
				on:click={() => (gameOn = !gameOn)}
			>
				Boring? Launch ship!
			</div>
		{/if}
		{#each enemies as { x, y }, i}
			<div class="enemy" style="position: absolute; left: {x}px; top: {y}px">
				<img src="niro.jpeg" alt="enemy" width={shipWidht} height={shipHeight} />
			</div>{/each}
		{#each projectiles as { x, y, visible }, i}
			<div
				class="projectile"
				style="position: absolute; left: {x}px; top: {y}px; visible={visible}"
			>
				<img src="projectile.png" alt="projectile" width={10} height={30} />
			</div>{/each}
		<div class="" />
		{#each explosions as { x, y }, i}
			<div
				transition:fade={{ duration: 80 }}
				style="position: absolute; left: {x - 30}px; top: {y - 30}px; "
			>
				<img src="explosion.png" alt="" width={60} height={60} />
			</div>
		{/each}
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

	h1 {
		margin-top: 100px;
		color: rgb(255, 0, 119);
		font-family: 'Press Start 2P', cursive;
		font-size: 72px;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		background-color: black;
		color: white;
		font-family: 'Press Start 2P', cursive;
		font-size: 14px;
	}
	.startButton {
		position: absolute;
		padding: 20px;
		border: 3px solid rgb(255, 0, 119);
		background-color: rgba(255, 0, 119, 0.5);
		font-size: 2em;
		color: white;
		font-family: 'Press Start 2P', cursive;
		border-bottom: 6px inset rgba(0, 0, 0, 0.5);
		border-left: 6px inset rgba(0, 0, 0, 0.5);
		border-right: 6px inset rgba(255, 255, 255, 0.5);
		border-top: 6px inset rgba(255, 255, 255, 0.5);
	}
	.startButton:hover {
		background-color: rgba(255, 0, 119, 0.6);
	}

	.menu {
		position: absolute;
		width: 200px;
		height: 150px;
		border-top: 2px solid rgb(255, 0, 119);
		border-left: 2px solid rgb(255, 0, 119);
		border-bottom: 2px solid rgb(255, 0, 119);
		background-color: rgba(255, 0, 119, 0.5);
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.linkButtonRow {
		margin-top: 200px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		width: 600px;
	}

	.githubContainer {
		width: 66px;
		height: 66px;
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
