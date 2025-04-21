<script>
    import Icon from "@iconify/svelte";

    let { icon, title } = $props();
</script>

<div class="flex flex-col gap-1 p-3 text-center rounded-xl bg-gray-950 content duration-110 hover:scale-110">
    <Icon icon="devicon:{icon}" width="110"/>
    <p>{title}</p>
</div>
