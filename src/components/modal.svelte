<script>
    export let showModal = false;
</script>

{#if showModal}
    <main>
        <div class="backdrop" {showModal} on:click|self>
            <div class="modal"><slot /></div>
        </div>
    </main>
{/if}

<style>
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(87, 85, 85, 0.6);
    }
    .modal {
        padding: 20px;
        text-align: center;
        background-color: white;
        max-width: 200px;
        border-radius: 10px;
        margin: 10% auto;
    }
</style>
