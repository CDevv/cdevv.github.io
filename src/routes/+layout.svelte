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

<div class="ml-72 mr-72 mt-32 text-white">
    <MainCard>
        {@render children()}
    </MainCard>
</div>
