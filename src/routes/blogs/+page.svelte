<script lang="ts">
    import type { Blog } from "$lib/types";
    import { onMount } from "svelte";
    import BlogCard from "../../components/BlogCard.svelte";

    let loading: boolean = $state(true);
    let blogs: Blog[] = $state([]);

    async function fetchData() {
        const response = await fetch("/api/blogs");
        blogs = await response.json();
        loading = false;
    }

    onMount(() => fetchData());
</script>

<h1 class="text-3xl font-bold text-center">Blogs</h1>
<br>
{#if loading}
    <p>Loading..</p>
{:else}
    {#each blogs as blog}
        <BlogCard {blog}></BlogCard>
    {/each}
{/if}