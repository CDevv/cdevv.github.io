<script lang="ts">
    import MasonryGallery from "../../components/MasonryGallery.svelte";

    export let data;
    const { items } = data;
</script>

<h1 class="text-3xl text-center">Fanarts!</h1>

<MasonryGallery {items}></MasonryGallery>
