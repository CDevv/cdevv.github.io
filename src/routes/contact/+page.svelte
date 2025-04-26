<script>
    let publicKey = "00935eb4-ec9f-4827-a284-7131cb67ed10";
    let status = "";

    const handleSubmit = async (
        /** @type {{ currentTarget: HTMLFormElement | undefined; }} */ data,
    ) => {
        status = "Submitting..";
        const formData = new FormData(data.currentTarget);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        });

        const result = await response.json();
        if (result.success) {
            console.log(result);
            status = "Success";
        }
    };
</script>

<h1 class="text-3xl font-bold">Contact me!</h1>
<form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-2">
    <input type="hidden" name="access_key" value={publicKey} />
    <input
        class="bg-gray-800 rounded p-2 focus:border-gray-950"
        placeholder="Name.."
        type="text"
        name="name"
        required
    />
    <input
        class="bg-gray-800 rounded p-2"
        placeholder="Email.."
        type="email"
        name="email"
        required
    />
    <textarea
        class="bg-gray-800 rounded p-2"
        name="message"
        placeholder="Message.."
        required
        rows="3"
    ></textarea>
    <input
        class="bg-gray-950 rounded p-2 duration-150 hover:-translate-y-2 cursor-pointer"
        type="submit"
        value="Submit"
    />
</form>
<p>{status}</p>
