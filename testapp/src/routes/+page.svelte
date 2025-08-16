<svelte:head>
	<title>test</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=David+Libre|Yatra+One">
</svelte:head>

<script lang="ts">
	let test: number = 123;
</script>

<div class="relative h-screen text-white">
	<img src="img/299H.jpg" class="absolute object-cover w-full h-full -z-1" alt="Man holding sapling">
	<div class="px-[2%] portrait:pt-[10%]">
		<h1 class="text-[6em] font-['Yatra_One',_cursive] portrait:text-center portrait:text-[8em]">TropicSapling</h1>
		<p class="font-['David_Libre',_serif] portrait:text-center">
			<em><q class="font-bold text-[1.5em] portrait:text-[2.5em]">Simplicity is the ultimate sophistication</q></em>
			<br>
			<span class="font-normal text-[small] portrait:text-[large]">- Leonardo da Vinci</span>
		</p>

		<a href="" class="grid absolute left-0 w-full bottom-[10%] invert-100 animate-[jump_4s_infinite]">
			<img src="img/angle-double-down.svg" alt="scroll arrow" class="justify-self-center w-[3em] portrait:w-[6em]">
			<!-- Credit to FontAwesome, license: https://fontawesome.com/license -->
		</a>
	</div>
</div>
