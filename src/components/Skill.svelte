<script>
    import Icon from "@iconify/svelte";

    let { icon, title } = $props();
</script>

<div class="secondary-theme flex flex-col gap-1 p-3 text-center content duration-110 hover:scale-110">
    <Icon icon="devicon:{icon}" width="110"/>
    <p>{title}</p>
</div>
