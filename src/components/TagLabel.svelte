<script>
    import Icon from "@iconify/svelte";
    let { tag } = $props();
</script>

<p class="flex flex-row p-0.5 gap-1 rounded border-2 item-tag">
    <Icon icon="devicon:{tag.name.toLowerCase()}" height="24" width="24"/> {tag.name}
</p>