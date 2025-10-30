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

	<div class="pt-8 grid gap-6 landscape:grid-cols-3 max-w-6xl mx-auto">
		<div class="landscape:col-span-1 bg-gradient-to-br from-white/3 to-white/2 border border-white/6 rounded-2xl p-6 shadow-md inset-shadow-xs">
			<h2 class="text-2xl font-semibold">What I bring</h2>
			<p class="text-sm text-gray-900 mt-2 leading-relaxed">Clean code, reliable systems, and delightful UX.</p>
			<div class="mt-4 flex gap-2 flex-wrap">
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

<!-- SECTION 5 - CONTACT -->
<section class="relative h-screen p-8 landscape:px-40 landscape:py-16" id="contact">
	<h1 class="text-center text-4xl landscape:text-7xl font-['Yatra_One',_cursive]">Contact Me</h1>
	<div class="mt-8 max-w-4xl mx-auto grid gap-6 landscape:grid-cols-3 items-center">
		<div class="landscape:col-span-1 bg-gradient-to-br from-white/3 to-white/2 border border-white/6 rounded-2xl p-6 text-center">
			<h2 class="text-lg font-semibold">Get in touch</h2>
			<p class="text-sm text-gray-900 font-medium mt-2">Open to work, collaborations, and friendly chats.</p>
			<a href="mailto:hello@tropicsapling.com" class="mt-4 inline-block bg-emerald-500 text-white px-4 py-2 rounded-full shadow">hello@tropicsapling.com</a>
		</div>

		<div class="landscape:col-span-2 grid grid-cols-2 gap-4">
			{#each contacts as {site, href, user, icon}}
				<Contact {site} {href} {user} {icon} />
			{/each}
		</div>
	</div>

	<div class="mt-8 max-w-4xl mx-auto relative rounded-2xl p-6 overflow-hidden shadow-md bg-[url('https://images.unsplash.com/photo-1506765515384-028b60a970df')] bg-cover bg-center">
		<div class="absolute inset-0 bg-black/45"></div>
		<div class="relative text-center">
			<h3 class="text-lg font-semibold text-white">Let's build something together</h3>
			<p class="text-sm text-white/90 mt-2">Have an idea or a project? Get in touch and I'll respond within a few days.</p>
			<div class="mt-4 flex items-center justify-center gap-3 flex-wrap">
				<a href="mailto:hello@tropicsapling.com" class="bg-white text-indigo-900 px-4 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition">Email me</a>
				<a href="#projects" class="text-sm text-white/90" on:click|preventDefault={handleAnchor}>See my work →</a>
			</div>
		</div>
	</div>
</section>
