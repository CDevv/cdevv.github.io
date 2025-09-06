<script>
    let { children } = $props();
    import { page } from '$app/state';
    import Icon from '@iconify/svelte';
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

<div class="main-layout top-0 left-0 min-w-screen min-h-screen absolute">
    <div class="ml-0 mr-0 mt-16 mb-16 lg:ml-72 lg:mr-72 text-white">
        <div class="window-bar flex justify-between items-center p-1 px-2 rounded-t-lg">
            <h1 class="text-xl">{page.url.pathname}</h1>
            <div class="min-h-full flex items-center gap-1">
                <button class="bar-button min-w-fit transition duration-100 hover:-translate-y-2">
                    <Icon icon="material-symbols:minimize" width="24" height="24" />
                </button>
                <button class="bar-button min-w-fit transition duration-100 hover:-translate-y-2">
                    <Icon icon="material-symbols:close" width="24" height="24" />
                </button>
            </div>
        </div>
        <MainCard>
            {@render children()}
        </MainCard>
    </div>
</div>