<script>
    let { children } = $props();
    import "../app.css";
    import MainCard from "../components/MainCard.svelte";
</script>

<title>nikodev page!</title>
{@render children()}

<div class="ml-72 mr-72 mt-32 text-white">
    <MainCard />
</div>
