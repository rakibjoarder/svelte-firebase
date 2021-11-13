<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let tabItems;
    export let activeTab;
</script>

<div class="nav">
    <ul>
        {#each tabItems as item}
            <li
                class
                on:click={() => {
                    dispatch("changeTab", item);
                }}
            >
                <div class:active={activeTab == item}>{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .nav {
        margin: auto;
    }
    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li {
        margin: 0 16px;
        font-size: 18px;
        color: #555;
        cursor: pointer;
    }
    .active {
        color: orange;
        border-bottom: 2px solid orange;
    }
</style>
