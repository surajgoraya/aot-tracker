<script lang="ts">
    export let title : string;
    export let pictureURL : string;
    export let epsWatched: number;
    export let status: string;

    $: badgeStyling = status==='completed' ? `watched` : status==='watching' ? `watching` : `pending`
</script>

<div class="anime_element">
    <img src={pictureURL} class="anime_element__picture" alt={title + " cover image"}/>
    <div class="anime_element__info">
        <h4 class="anime_element__picture__title">{title}</h4>
        <p class="anime_element__picture__progress">EP(s): <b>{epsWatched}</b></p>
        <p class="anime_element__picture__status"><i class={`anime_element__picture__status__badge ${badgeStyling}`}>{status.toLocaleUpperCase()}</i></p>
    </div>
</div>

<style>
    .anime_element {
        margin: 1rem 0 0 0;
        display: flex;
        gap: 1rem;
    }

    .anime_element__picture {
        aspect-ratio: 16/0;
        height: 200px;
        max-width: 130px;
        min-width: 130px;
    }
    .anime_element__info{
        min-height: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
    }
    .anime_element__picture__title{
        margin-top: 0;
        margin-bottom: .5rem;
    }
    .anime_element__picture__progress{
        margin: 0;
        /* flex: 1; */
    }
    .anime_element__picture__status{
        /* margin-top: .75rem; */
        margin: .5rem 0 0 -.3rem;
        
    }
    .anime_element__picture__status__badge{
        padding: .2rem .5rem;
        font-size: .75rem;
        font-weight: 200;
        /* border: 0 transparent; */
        /* border-radius: 50px; */
    }
    .watched {
        color: #ffffff;
        background-color: var(--primary-focus);
    }
    .watching {
        color: #ffffff;
        background-color: var(--primary-hover);
        
    }
</style>