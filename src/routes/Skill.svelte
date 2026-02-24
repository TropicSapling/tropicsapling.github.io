<script lang="ts">
	let {name, desc, tint} = $props();
</script>

<div class="bg-white/16 border border-white/24 rounded-xl p-4 backdrop-blur-xs">
	<div class="flex justify-between items-start mb-3">
		<div><h3 class="font-medium">{name}</h3><p class="text-xs text-gray-900">{desc}</p></div>
	</div>
	<div class="h-2 bg-white/32 rounded-full overflow-hidden">
		<div class="{tint} h-full transition-all"></div>
	</div>
</div>
