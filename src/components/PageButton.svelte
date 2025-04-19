<script>
    let { title, href } = $props();
</script>

<a {href} class="block h-full grow">
    <button class="bg-gray-950 rounded-xl p-4 text-2xl font-bold container">
        {title}
    </button>
</a>