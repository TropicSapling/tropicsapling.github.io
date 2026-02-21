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
<section class="relative h-screen text-white">
	<img src="img/forest.jpg" class="absolute object-cover w-full h-full -z-1" alt="Man holding sapling">
	<div class="p-8 pr-12 h-full portrait:backdrop-blur-xs">
		<div class="flex flex-col">
			<h1 class="text-4xl landscape:text-7xl font-['Yatra_One',_cursive] text-center landscape:text-right text-white drop-shadow-2xl mb-6">
				Hi, I'm TropicSapling
			</h1>
			<p class="landscape:text-3xl text-center landscape:text-right text-gray-100 leading-relaxed drop-shadow-lg font-light landscape:w-2xl ml-auto">
				I'm a Swedish programmer and engineer who loves to explore and tinker with technology.
				<br><br>
				I have been building apps, tools and websites since the mid-2010s across the full stack within domains such as automation, security and design.
				<br><br>
				This is my personal website giving a short overview of who I am, what I do and where you can find me.
			</p>
		</div>

		<a href="#projects" class="grid absolute left-0 w-full bottom-1/10 invert-100 animate-[jump_4s_infinite]" on:click|preventDefault={handleAnchor}>
			<!-- Credit to FontAwesome, license: https://fontawesome.com/license -->
			<img src="img/angle-double-down.svg" alt="scroll arrow" class="justify-self-center w-8 landscape:w-12">
		</a>
	</div>
</section>

<!-- SECTION 2 - PROJECTS -->
<section class="grid grid-rows-[min-content] gap-8 relative h-screen p-8 landscape:px-40 landscape:py-16" id="projects">
	<h1 class="text-center text-4xl landscape:text-7xl font-['Yatra_One',_cursive]">Projects</h1>
	{#each projects as {name, link, imag}}
		<Project {name} {link} {imag} />
	{/each}
</section>

<!-- SECTION 3 - SKILLS -->
<section class="relative h-screen p-8 landscape:px-40 landscape:py-16" id="skills">
	<h1 class="text-center text-4xl landscape:text-7xl font-['Yatra_One',_cursive]">Skills</h1>

	<div class="pt-8 grid gap-6 landscape:grid-cols-3 max-w-6xl mx-auto">
		<div class="landscape:col-span-1 bg-gradient-to-br from-white/3 to-white/2 border border-white/6 rounded-2xl p-6 shadow-md inset-shadow-xs">
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
</section>

<!-- SECTION 4 - CONTACT -->
<section class="relative h-screen" id="contact">
	<!-- background image -->
	<img src="img/garden.jpg" class="absolute object-cover w-full h-full -z-1" alt="Garden">

	<!-- fade overlay -->
	<div class="absolute w-full h-3/10 -z-1 bg-white"></div>
	<div class="absolute top-3/10 w-full h-6/10 -z-1 grid grid-rows-3">
		<div class="h-full bg-linear-to-b from-white to-white/83"></div>
		<div class="h-full bg-linear-to-b from-white/83 to-white/50"></div>
		<div class="h-full bg-linear-to-b from-white/50 to-white/0"></div>
	</div>

	<!-- actual content -->
	<div class="p-8 landscape:px-40 landscape:py-16">
		<h1 class="text-center text-4xl landscape:text-7xl font-['Yatra_One',_cursive]">Contact Me</h1>
		<div class="pt-8 max-w-4xl mx-auto grid gap-6 landscape:grid-cols-3 items-center">
			<div class="landscape:col-span-1 bg-gradient-to-br from-white/3 to-white/2 border border-white/6 rounded-2xl p-6 text-center">
				<h2 class="text-lg font-semibold">Get in touch</h2>
				<p class="text-sm text-gray-900 font-medium">Open to work, collaborations, and friendly chats.</p>
				<a href="mailto:hello@tropicsapling.com" class="mt-4 inline-block bg-emerald-500 text-white px-4 py-2 rounded-full shadow">hello@tropicsapling.com</a>
			</div>

			<div class="landscape:col-span-2 grid grid-cols-2 gap-4">
				{#each contacts as {site, href, user, icon}}
					<Contact {site} {href} {user} {icon} />
				{/each}
			</div>
		</div>
	</div>
</section>
