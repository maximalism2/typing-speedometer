<script>
    import { getRandomColor } from './randomColor'

    export let startChar = '';
    let value = '';

    const color = getRandomColor()
</script>

<label>
    {startChar}
    <input type="text" bind:value>
</label>

<div style="padding-left: 1em; background: {color};">
    {#each value.split('') as char}
        <svelte:self startChar={char} />
    {/each}
</div>

