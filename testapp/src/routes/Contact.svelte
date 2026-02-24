<script lang="ts">
	let {site, href, user, icon} = $props();
</script>

<a href={href} class="flex items-center gap-4 p-4 hover:scale-[1.02] transition" target="_blank" rel="noopener">
	<img src='img/{icon}' class="w-8" alt="icon">
	<div>
		<div class="font-medium">{site}</div>
		<div class="text-xs text-gray-600">{user}</div>
	</div>
</a>
