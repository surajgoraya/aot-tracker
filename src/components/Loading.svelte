<div class="AOT_loading">
    <i class="AOT_loading__icon bi bi-grip-horizontal"></i>
    <div class="AOT_loading__information">
        <h4 class="AOT_loading__information__Title">fetching...</h4>
        <p class="AOT_loading__information__Descrip">Contacting MAL API & Calculating flop.</p>
    </div>
</div>

<style>
    .AOT_loading {
        display: grid;
        opacity: 0.75;
        grid-template-columns: .7fr auto;
        grid-template-rows: auto;
        gap: 1rem;
    }
    .AOT_loading__icon {
        animation: loading 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0ms infinite;
        font-size: 5rem;
        margin-top: 3rem;
    }
    .AOT_loading__information{
        display: flex;
        flex-direction: column;
    }

    @keyframes loading {
        0% {
            transform:translateY(0px);
            opacity: 0;
        }
        50% {
            opacity: 100;
            transform:translateY(10px);
        }
        75% {

            transform:translateY(-5px);
        }
        100% {
            opacity: 0;
        }
    }
</style>