<script>
    let { data } = $props();
</script>

<a class="block rounded max-w-fit bg-gray-950 p-2 duration-150 hover:bg-gray-900 hover:-translate-y-2" href="/blogs">Go Back.</a>
<br>
<h1 class="text-3xl font-bold">{data.title}</h1>
<p class="text-gray-200">{data.datetime}</p>
<p class="text-gray-200">Tags: </p>
<div class="text-gray-200 flex flex-row gap-1 align-middle">
    {#each data.tags as tag}
        <p class="rounded p-0.5 bg-transparent border-1 border-gray-950">{tag}</p>
    {/each}
</div>
<br>
<p class="text-xl">{data.content}</p>