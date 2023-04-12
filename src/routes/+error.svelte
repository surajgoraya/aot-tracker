<script>
    // @ts-nocheck
    import { page } from "$app/stores";
    import Footer from "../components/common/Footer.svelte";
    import Nav from "../components/common/Nav.svelte";
</script>

<svelte:head>
    <title>{$page.error?.message} - Has Interframe Watched AOT Today?</title>
</svelte:head>

<Nav/>
<main class="container">
    <hgroup>
        <h1>Error {$page.status.toString()}</h1>
        <h2>something went wrong - {$page.error?.message.toLocaleLowerCase()}</h2>
    </hgroup>
</main>
<Footer/>
