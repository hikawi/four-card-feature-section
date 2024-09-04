<script lang="ts">
  import Card from "./Card.svelte";

  const cards = [
    {
      title: "Supervisor",
      subtitle: "Monitors activity to identify project roadblocks",
      color: "border-primary-cyan",
      img: "/icon-supervisor.svg",
    },
    {
      title: "Team Builder",
      subtitle: "Scans our talent network to create the optimal team for your project",
      color: "border-primary-red",
      img: "/icon-team-builder.svg",
    },
    {
      title: "Calculator",
      subtitle: "Uses data from past projects to provide better delivery estimates",
      color: "border-primary-blue",
      img: "/icon-calculator.svg",
    },
    {
      title: "Karma",
      subtitle: "Regularly evaluates our talent to ensure quality",
      color: "border-primary-orange",
      img: "/icon-karma.svg",
    },
  ];
  const classes = ["col-start-1 row-start-2", "row-start-1 col-start-2", "col-start-3 row-start-2", "row-start-3 col-start-2"];

  let startIndex = 0;
  $: currentCycle = [...cards.slice(startIndex, startIndex + 4), ...cards.slice(0, startIndex)];

  function cycleBackwards() {
    startIndex = (startIndex + 1) % cards.length;
  }

  function cycleForward() {
    startIndex = (startIndex - 1 + cards.length) % cards.length;
  }
</script>

<div class="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-4 gap-x-8 gap-y-8 duration-150">
  {#each currentCycle as { title, subtitle, color, img }, i}
    <Card {title} {subtitle} className="{classes[i]} {color}" {img} />
  {/each}
  <div class="absolute top-4 w-full left-0 gap-4 flex flex-row items-center justify-around px-8">
    <button class="w-48 rounded-lg px-4 py-2 bg-neutral-very-dark-blue text-white hover:bg-neutral-800" on:click={cycleForward}>
      Clockwise
    </button>
    <button class="w-48 rounded-lg px-4 py-2 bg-neutral-very-dark-blue text-white hover:bg-neutral-800" on:click={cycleBackwards}>
      Counterclockwise
    </button>
  </div>
</div>
