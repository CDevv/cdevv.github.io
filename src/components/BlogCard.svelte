<script>
    import TagLabel from "./TagLabel.svelte";

    let { blog } = $props();
</script>

<a class="flex flex-col p-4 min-h-[20vh] secondary-theme cursor-pointer duration-150 hover:-translate-y-2"
href="/blogs/{blog.id}">
    <h1 class="text-2xl font-bold hover:underline">{blog.name}</h1>
    <div class="mt-auto flex flex-col gap-1">
        <div class="flex flex-row">
            {#each blog.tags as tag}
                <TagLabel {tag}></TagLabel>
            {/each}
        </div>
        <p>{blog.date}</p>
    </div>
</a>