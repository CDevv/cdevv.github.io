<script>
    import Icon from "@iconify/svelte";
    let { href } = $props();
</script>

<a {href} class="flex flex-row gap-1 max-w-fit border-2 rounded p-0.5 bg-itchio border-itchio-dark hover:bg-itchio-dark">
    <Icon icon="simple-icons:itchdotio" width="24" height="24" /> itch.io
</a>