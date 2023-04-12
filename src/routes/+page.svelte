<script lang="ts">
    import type { ResultType } from "$lib/types/ResultType";
    import type { AnimeResult } from "$lib/types/MALResults";
    import Anime from "../components/Anime.svelte";
    import Error from "../components/Error.svelte";
    import Loading from "../components/Loading.svelte";
    import { fade, slide } from "svelte/transition";
    import Footer from "../components/common/Footer.svelte";
    import Nav from "../components/common/Nav.svelte";

    export let data: APIResult;
</script>

<svelte:head>
    <title>{`Has Interframe Watched AOT Today?`}</title>
    <meta
        name="description"
        content={`Born out of Beardgel's disappointment, this app was created to check if Interframe has watched AOT
    today. So has he?`}
    />
    {#if data.watched_today}
        <meta
            property="og:image"
            content="https://aot.surajgoraya.ca/aot_yes.jpg"
        />
    {/if}
    {#if !data.watched_today}
        <meta
            property="og:image"
            content="https://aot.surajgoraya.ca/aot_no.jpg"
        />
    {/if}
    <meta
        property="og:description"
        content="Born out of Beardgel's disappointment, this app was created to check if Interframe has watched AOT
        today. So has he?"
    />
    <meta property="og:title" content="Has Interframe Watched AOT Today?" />
</svelte:head>
{#if data.error}
    <div class="container">
        <Error />
    </div>
{/if}
{#if !data.error}
    <Nav/>
    <header class="container">
        <hgroup>
            <h1>Interframe's AOT Progress</h1>
            <h2>
                This app was created to check if Interframe has watched AOT
                today. This might be my worst decision yet. All data is pulled
                live from <a href="https://myanimelist.net/animelist/interframe"
                    >Interframe's MAL List</a
                >. <br /><br />Data is current as of {new Date(
                    Date.now()
                ).toLocaleTimeString("en-CA")}
            </h2>
        </hgroup>
    </header>
    <main class="container">
        <hgroup class="row">
            <h5>So, has Interframe Watched AOT Today?</h5>
            <p>{data.watched_today === false ? "Nope." : "YES!"}</p>
        </hgroup>
        <hr />
        <div class="grid" transition:slide|local>
            {#if data.anime}
                {#each data.anime as animeRes}
                    <Anime
                        title={animeRes.node.title}
                        pictureURL={animeRes.node.main_picture.large}
                        epsWatched={animeRes.list_status.num_episodes_watched}
                        status={animeRes.list_status.status}
                    />
                {/each}
            {/if}
        </div>
    </main>
{/if}
<Footer/>

<style>
    main {
        margin-top: -4.5em;
    }
</style>
