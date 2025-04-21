<script>
    let { children } = $props();
    import "../app.css";
    import MainCard from "../components/MainCard.svelte";
</script>
<style>
    :global(body) {
        /* this will apply to <body> */
        font-family: "Nunito";
    }
</style>

<title>nikodev page!</title>

<div class="ml-0 mr-0 mt-16 mb-16 lg:ml-72 lg:mr-72 text-white">
    <MainCard>
        {@render children()}
    </MainCard>
</div>
