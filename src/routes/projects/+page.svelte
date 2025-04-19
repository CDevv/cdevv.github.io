<script>
    /**
     * @type {never[]}
     */
    let projects = $state([]);

    $inspect(projects).with(console.log);

    async function roll() {
        const response = await fetch("/projects");
        projects = await response.json();
    }
</script>

<h1 class="text-3xl font-bold">Projects page</h1>
<p>{projects}</p>
<button onclick={roll}>Roll</button>