<script lang="ts">
    import { type Project } from "$lib/types";
    import GitHubLink from "./GitHubLink.svelte";
    import ItchIoLink from "./ItchIoLink.svelte";
    import TagLabel from "./TagLabel.svelte";
    let { project } = $props();
</script>

<div
    class="rounded-xl bg-gray-950 p-4 min-h-[30vh] flex flex-col transition duration-150 ease-in-out hover:scale-110"
>
    <h1 class="text-xl font-bold">{project.name}</h1>
    <p>{project.description}</p>
    <div class="mt-auto flex flex-col gap-1">
        <div class="flex flex-row gap-1">
            <GitHubLink href={project.github} />
            {#if project.itchio}
                <ItchIoLink href={project.itchio} />
            {/if}
        </div>
        <div class="flex flex-wrap gap-0.5">
            {#each project.tags as tag}
                <TagLabel {tag} />
            {/each}
        </div>
    </div>
</div>
