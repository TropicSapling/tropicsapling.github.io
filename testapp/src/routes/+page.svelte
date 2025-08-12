<svelte:head>
	<title>test</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=David+Libre|Yatra+One">
</svelte:head>

<script lang="ts">
	let test: number = 123;
</script>

<div class="relative h-full text-white">
	<img src="img/299H.jpg" class="absolute object-cover w-full h-full -z-1" alt="Man holding sapling">
	<div class="px-[2%] portrait:pt-[10%]">
		<h1>TropicSapling</h1>
		<p class="portrait:text-center">
			<em><q class="font-bold text-2xl">Simplicity is the ultimate sophistication</q></em>
			<br><br>
			<span class="font-normal text-[small]">- Leonardo da Vinci</span>
		</p>

		<a href="" class="grid absolute left-0 w-full bottom-[10%] invert-1 animate-[jump 4s infinite]">
			<img src="img/angle-double-down.svg" alt="scroll arrow">
			<!-- Credit to FontAwesome, license: https://fontawesome.com/license -->
		</a>
	</div>
</div>
