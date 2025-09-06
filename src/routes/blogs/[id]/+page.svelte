<script>
    import TagLabel from '../../../components/TagLabel.svelte';

    let { data } = $props();
</script>

<a class="block rounded max-w-fit secondary-theme p-2 duration-150 hover:bg-gray-900 hover:-translate-y-2" href="/blogs">Go Back.</a>
<br>
<h1 class="text-3xl font-bold">{data.name}</h1>
<p class="text-gray-200">{data.date}</p>
<p class="text-gray-200">Tags: </p>
<div class="text-gray-200 flex flex-row gap-1 align-middle">
    {#each data.tags as tag}
        <TagLabel {tag}></TagLabel>
    {/each}
</div>
<br>
<p class="text-xl">{data.content}</p>