<script lang="ts">
    import { type Project } from "$lib/types";
    import TagLabel from "./TagLabel.svelte";
    let { project } = $props();
</script>

<div
    class="rounded-xl bg-gray-950 p-4 flex flex-col transition duration-150 ease-in-out hover:scale-110"
>
    <h1 class="text-xl font-bold">{project.name}</h1>
    <p>{project.description}</p>
    <div class="mt-auto">
        <div class="flex flex-row gap-0.5">
            {#each project.tags as tag}
                <TagLabel {tag} />
            {/each}
        </div>
    </div>
</div>
