<svelte:head>
	<title>TropicSapling</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=David+Libre|Yatra+One">
</svelte:head>

<svelte:window on:wheel|nonpassive|preventDefault={handleScroll} />

<script lang="ts">
	import Project from './Project.svelte'
	import Skill   from './Skill.svelte'
	import Contact from './Contact.svelte'

	import {projects, skills, contacts} from './consts.ts'

	let scroll = 0;

	// Always scroll the entire window height
	function handleScroll(e) {
		scroll += e.deltaY < 0 ? -window.innerHeight : window.innerHeight;
		scroll  = Math.round(scroll/window.innerHeight) * window.innerHeight;
		scroll  = Math.min(scroll, document.documentElement.scrollHeight);
		scroll  = Math.max(scroll, 0);

		scrollTo({top: scroll, behavior: "smooth"})
	}

	// Smooth scrolling for anchors
	function handleAnchor(e) {
		scroll = document.querySelector(e.currentTarget.getAttribute("href")).offsetTop;

		scrollTo({top: scroll, behavior: "smooth"})
	}
</script>

<!-- SECTION 1 - LANDING -->
<section class="relative h-svh text-white">
	<img src="img/forest.jpg" class="absolute object-cover w-full h-full -z-1" alt="spring tree">
	<div class="p-8 landscape:p-2 landscape:2xl:p-8 landscape:2xl:pr-12 h-full backdrop-blur-xs 2xl:backdrop-blur-none">
		<div class="flex flex-col">
			<h1 class="text-4xl 2xl:text-7xl font-['Yatra_One',_cursive] text-center 2xl:text-right text-white drop-shadow-2xl 2xl:mb-6">
				Hi, I'm TropicSapling
			</h1>
			<p class="2xl:text-3xl text-center 2xl:text-right text-gray-100 2xl:leading-relaxed drop-shadow-lg font-light 2xl:w-2xl ml-auto">
				I'm a Swedish programmer and engineer who loves to explore and tinker with technology.
				<br><br>
				I have been building apps, tools and websites since the mid-2010s across the full stack within domains such as automation, security and design.
				<br><br>
				This is my personal website giving a short overview of who I am, what I do and where you can find me.
			</p>
		</div>

		<a href="#projects" class="grid absolute left-0 w-full bottom-1/10 invert-100 animate-[jump_4s_infinite]" on:click|preventDefault={handleAnchor}>
			<!-- Credit to FontAwesome, license: https://fontawesome.com/license -->
			<img src="img/angle-double-down.svg" alt="scroll arrow" class="justify-self-center w-8 2xl:w-12">
		</a>
	</div>
</section>

<section class="relative h-svh text-white" id="projects">
	<img src="img/stars.jpg" class="absolute object-cover w-full h-full -z-1" alt="rainy nature">
	<div class="p-8 2xl:px-40 2xl:py-16 grid grid-rows-[min-content] gap-8 h-full">
		<h1 class="text-center text-4xl 2xl:text-7xl font-['Yatra_One',_cursive] drop-shadow-2xl">Projects</h1>
		{#each projects as {name, link, imag}}
			<Project {name} {link} {imag} />
		{/each}
	</div>
</section>

<!-- SECTION 3 - SKILLS -->
<section class="relative min-h-fit landscape:h-svh" id="skills">
	<img src="img/palm.jpg" class="absolute object-cover w-full h-full -z-1" alt="palm tree and sky">
	<div class="p-8 2xl:px-40 2xl:py-16">
		<h1 class="text-center text-4xl 2xl:text-7xl font-['Yatra_One',_cursive]">Skills</h1>

		<div class="pt-8 grid gap-6 landscape:grid-cols-3 max-w-6xl mx-auto">
			<div class="landscape:col-span-1 bg-gradient-to-br from-white/12 to-white/8 border border-white/24 rounded-2xl p-6 shadow-md inset-shadow-xs">
				<h2 class="text-2xl font-semibold">What I bring</h2>
				<p class="text-sm text-gray-900 mt-2 leading-relaxed">Clean code, reliable systems, and delightful UX.</p>
				<div class="pt-4 flex gap-2 flex-wrap">
					<span class="text-xs bg-emerald-600/20 text-emerald-700 px-2 py-1 rounded-full">Curious</span>
					<span class="text-xs bg-sky-600/20 text-sky-700 px-2 py-1 rounded-full">Goal-oriented</span>
					<span class="text-xs bg-rose-600/20 text-rose-700 px-2 py-1 rounded-full">Creative</span>
				</div>
			</div>

			<div class="landscape:col-span-2 grid gap-4 landscape:grid-cols-2">
				{#each skills as {name, desc, tint}}
					<Skill {name} {desc} {tint} />
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- SECTION 4 - CONTACT -->
<section class="relative h-lvh" id="contact">
	<img src="img/rainforest.jpg" class="absolute object-cover w-full h-full -z-1" alt="Rainforest">
	<div class="p-8 2xl:px-40 2xl:py-16">
		<h1 class="text-center text-4xl 2xl:text-7xl font-['Yatra_One',_cursive]">Contact Me</h1>
		<div class="portrait:pt-8 2xl:pt-8 max-w-4xl mx-auto grid gap-6 landscape:grid-cols-3 items-center">
			<div class="p-6 text-center">
				<h2 class="text-lg font-semibold">Get in touch</h2>
				<p class="text-sm text-gray-900 font-medium">Open to work, collaborations, and friendly chats.</p>
				<a href="mailto:hello@tropicsapling.com" class="mt-4 inline-block bg-emerald-500 text-white px-4 py-2 rounded-full shadow">hello@tropicsapling.com</a>
			</div>

			<div class="landscape:col-span-2 grid grid-rows-2 landscape:grid-cols-2 gap-4">
				{#each contacts as {site, href, user, icon}}
					<Contact {site} {href} {user} {icon} />
				{/each}
			</div>
		</div>
	</div>
</section>
