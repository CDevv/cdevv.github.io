<script lang="ts">
    import { type Project } from "$lib/types";
    import { onMount } from "svelte";
    import ProjectCard from "../../components/ProjectCard.svelte";

    let projects: Project[] = $state([]);
    $inspect(projects).with(console.log);

    let loading = $state(true);

    async function fetchProjects() {
        const response = await fetch("/projects");
        projects = await response.json();
        loading = false;
    }

    onMount(() => fetchProjects());
</script>

<h1 class="text-3xl font-bold text-center">My Projects</h1>
<br>
{#if loading}
    <h1>Loading..</h1>
{:else}
    <div class="grid grid-cols-2 gap-2.5 grid-rows-[30vh_30vh]">
        {#each projects as project}
            <ProjectCard {project} />
        {/each}
    </div>
{/if}
