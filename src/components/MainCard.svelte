<script>
    import ProfilePic from "./ProfilePic.svelte";
    import MainInfo from "./MainInfo.svelte";
    import PageButton from "./PageButton.svelte";
    let { children } = $props();
</script>

<div class="bg-gray-900 rounded-xl p-6 flex flex-col gap-5">
    <div id="main-info" class="flex">
        <ProfilePic />
        <MainInfo />
    </div>
    <div id="navbar" class="flex justify-stretch items-stretch gap-5">
        <PageButton title="Home" href="/" />
        <PageButton title="Projects" href="/projects" />
    </div>
    <div id="page-content">
        {@render children()}
    </div>
</div>
