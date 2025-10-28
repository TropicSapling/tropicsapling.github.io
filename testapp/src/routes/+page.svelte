<svelte:head>
	<title>TropicSapling</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=David+Libre|Yatra+One">
</svelte:head>

<svelte:window on:wheel|nonpassive|preventDefault={handleScroll} />

<script lang="ts">
	import Project from './Project.svelte'
	import Skill   from './Skill.svelte'

	import {projects, skills} from './consts.ts'

	let scroll = 0;

	// Always scroll the entire window height
	function handleScroll(e) {
		scroll += e.deltaY < 0 ? -window.innerHeight : window.innerHeight;
		scroll  = Math.round(scroll/window.innerHeight) * window.innerHeight;
		scroll  = Math.min(scroll, document.documentElement.scrollHeight);

		scrollTo({top: scroll, behavior: "smooth"})
	}

	// Smooth scrolling for anchors
	function handleAnchor(e) {
		scroll = document.querySelector(e.currentTarget.getAttribute("href")).offsetTop;

		scrollTo({top: scroll, behavior: "smooth"})
	}
</script>

<!-- SECTION 1 - LANDING -->
<section class="relative h-screen text-white">
	<img src="img/299H.jpg" class="absolute object-cover w-full h-full -z-1" alt="Man holding sapling">
	<div class="px-5 pt-8 landscape:pt-2.5">
		<h1 class="text-4xl landscape:text-8xl font-['Yatra_One',_cursive] text-center landscape:text-left">TropicSapling</h1>
		<p class="font-['David_Libre',_serif] text-center landscape:text-left">
			<em><q class="font-bold landscape:text-2xl">Simplicity is the ultimate sophistication</q></em>
			<br>
			<span class="font-normal text-xs">- Leonardo da Vinci</span>
		</p>

		<a href="#intro" class="grid absolute left-0 w-full bottom-1/10 invert-100 animate-[jump_4s_infinite]" on:click|preventDefault={handleAnchor}>
			<!-- Credit to FontAwesome, license: https://fontawesome.com/license -->
			<img src="img/angle-double-down.svg" alt="scroll arrow" class="justify-self-center w-8 landscape:w-12">
		</a>
	</div>
</section>

<!-- SECTION 2 - INTRO -->
<section class="grid gap-20 relative h-screen bg-[linear-gradient(#be9,_#fff)] p-8 landscape:px-40 landscape:py-16" id="intro">
	<div>
		<h1 class="text-center text-4xl landscape:text-7xl font-['Yatra_One',_cursive]">Hi, I'm TropicSapling</h1>
		<p class="landscape:text-3xl text-center landscape:text-left">I'm a Swedish programmer and engineer who loves to explore and tinker with technology. Lorem ipsum dolor sit amet, ne aperiri discere definiebas vel. Etiam audiam cu per, liber volumus nostrum at eam. Ius ea eius omnis labore, his error diceret vocibus no, ut pro vero vide commune. Minim postulant sea in.</p>
	</div>

	<div>
		<h2 class="text-center text-3xl landscape:text-5xl font-['Yatra_One',_cursive]">Learn more</h2>
		<a href="#projects" class="grid left-0 w-full animate-[jump_4s_infinite]" on:click|preventDefault={handleAnchor}>
			<img src="img/angle-double-down.svg" alt="scroll arrow" class="justify-self-center w-6 landscape:w-8">
		</a>
	</div>
</section>

<!-- SECTION 3 - PROJECTS -->
<section class="grid grid-rows-[min-content] gap-8 relative h-screen p-8 landscape:px-40 landscape:py-16" id="projects">
	<h1 class="text-center text-4xl landscape:text-7xl font-['Yatra_One',_cursive]">Projects</h1>
	{#each projects as {name, link, imag}}
		<Project {name} {link} {imag} />
	{/each}
</section>

<!-- SECTION 4 - SKILLS -->
<section class="relative h-screen p-8 landscape:px-40 landscape:py-16" id="skills">
	<h1 class="text-center text-4xl landscape:text-7xl font-['Yatra_One',_cursive]">Skills</h1>

	<div class="pt-8 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
		<div class="md:col-span-1 bg-gradient-to-br from-white/3 to-white/2 border border-white/6 rounded-2xl p-6 shadow-md inset-shadow-xs">
			<h2 class="text-2xl font-semibold">What I bring</h2>
			<p class="text-sm text-gray-900 mt-2 leading-relaxed">Clean code, reliable systems, and delightful UX.</p>
			<div class="mt-4 flex gap-2 flex-wrap">
				<span class="text-xs bg-emerald-600/20 text-emerald-700 px-2 py-1 rounded-full">Curious</span>
				<span class="text-xs bg-sky-600/20 text-sky-700 px-2 py-1 rounded-full">Goal-oriented</span>
				<span class="text-xs bg-rose-600/20 text-rose-700 px-2 py-1 rounded-full">Creative</span>
			</div>
		</div>

		<div class="md:col-span-2 grid gap-4 sm:grid-cols-2">
			{#each skills as {name, desc, tint}}
				<Skill {name} {desc} {tint} />
			{/each}
		</div>
	</div>
</section>
