<script>
    import Icon from "@iconify/svelte";
    let { tag } = $props();
</script>

<p class="flex flex-row p-0.5 gap-1 rounded border-2 bg-{tag.toLowerCase()} border-blue-950">
    <Icon icon="devicon:{tag.toLowerCase()}" height="24" width="24"/> {tag}
</p>