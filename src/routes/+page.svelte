<script>
    import Skill from "../components/Skill.svelte";
</script>

<h1 class="text-3xl font-bold text-center">Home</h1>
<p class="text-2xl">
    I am mainly interested in game development and software development, but I
    am interested in OSDev too! You can find some of my projects in the Projects
    page. All of my repos are on my GitHub. You can also check out my itch.io.
    The links are in the Links page.
</p>
<br />
<h1 class="text-2xl font-bold">Skills</h1>
<p class="text-2xl">
    Here is a list of all languages and technologies that I have experience
    with:
</p>
<div class="flex flex-wrap gap-4">
    <Skill icon="csharp" title="C#" />
    <Skill icon="godot" title="Godot" />
    <Skill icon="c" title="C" />
    <Skill icon="cplusplus" title="C++" />
    <Skill icon="nodejs" title="NodeJS" />
    <Skill icon="lua" title="Lua" />
    <Skill icon="python" title="Python" />
</div>
<br />
<div class="hidden lg:block">
    <h1 class="text-2xl font-bold">You can get a demo of my game here!</h1>
    <iframe
        class=""
        title="TheWizardCoder itch.io Widget"
        frameborder="0"
        src="https://itch.io/embed/3289737?bg_color=c9d4fd&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=6e79a0"
        width="552"
        height="167"
        ><a href="https://nikodevv.itch.io/thewizardcoder"
            >TheWizardCoder by nikodevv</a
        ></iframe
    >
</div>
