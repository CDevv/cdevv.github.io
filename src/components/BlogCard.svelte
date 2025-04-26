<script>
    let { blog } = $props();
</script>

<a class="flex flex-col p-4 min-h-[20vh] rounded-xl bg-gray-950 cursor-pointer duration-150 hover:scale-110"
href="/blogs/{blog.id}">
    <h1 class="text-2xl font-bold hover:underline">{blog.title}</h1>
    <div class="mt-auto flex flex-col gap-1">
        <div class="flex flex-row">
            {#each blog.tags as tag}
                <p class="rounded p-0.5 bg-transparent border-1 border-gray-900">{tag}</p>
            {/each}
        </div>
        <p>{blog.datetime}</p>
    </div>
</a>