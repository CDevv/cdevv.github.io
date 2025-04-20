<script>
    import Icon from "@iconify/svelte";

    let { icon, href, title } = $props();
</script>

<a {href} class="flex flex-row items-center justify-center p-2 gap-2 rounded-xl bg-gray-950 duration-150 hover:bg-gray-900 hover:-translate-y-2 text-3xl font-bold">
    <Icon icon="simple-icons:{icon}" width="36" height="36" /> {title}
</a>