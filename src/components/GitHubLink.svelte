<script>
    import Icon from "@iconify/svelte";
    let { href } = $props();
</script>

<a {href} class="flex flex-row gap-1 max-w-fit border-2 rounded p-0.5 bg-github border-github-dark hover:bg-github-dark">   
    <Icon icon="simple-icons:github" width="24" height="24" /> Github
</a>