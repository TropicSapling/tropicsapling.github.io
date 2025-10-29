<script lang="ts">
	let {site, href, user, icon} = $props();
</script>

<a href={href} class="flex items-center gap-4 bg-white/4 border border-white/6 rounded-xl p-4 hover:scale-[1.02] transition" target="_blank" rel="noopener">
	<div class="text-2xl" aria-hidden="true">{icon}</div>
	<div>
		<div class="font-medium">{site}</div>
		<div class="text-xs text-gray-400">{user}</div>
	</div>
</a>
