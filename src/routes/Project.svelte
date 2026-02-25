<script lang="ts">
	let {name, link, imag} = $props();
</script>

<a href="{link}" class="hover:*:w-full block bg-center bg-cover {imag} outline outline-green-500 shadow-sm shadow-green-500/50">
	<div class="w-30 h-full transition-[width] duration-700 float-right flex justify-center items-center landscape:w-90 opacity-80 bg-linear-45 from-black to-neutral-800/100">
		<h2 class="text-center text-xl 2xl:text-3xl text-white font-['David_Libre',_serif]">{name}</h2>
	</div>
</a>
