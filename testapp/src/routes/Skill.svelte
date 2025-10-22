<script lang="ts">
	let {name, desc, fill, c} = $props();
</script>

<div class="bg-white/4 border border-white/6 rounded-xl p-4">
	<div class="flex justify-between items-start mb-3">
		<div><h3 class="font-medium">{name}</h3><p class="text-xs text-gray-400">{desc}</p></div>
	</div>
	<div class="h-2 bg-white/8 rounded-full overflow-hidden">
		<div class="{c} h-full transition-all" style="width:{fill}%"></div>
	</div>
</div>
