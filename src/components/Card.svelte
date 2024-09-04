<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let className: string;
  export let img: string;
</script>

<div
  class="{className} border-t-4 row-span-2 flex flex-col justify-between w-card h-card p-6 lg:p-8 rounded-lg shadow-lg duration-100 hover:scale-105 bg-white"
>
  <div class="text-left flex flex-col gap-2">
    <h1 class="font-semibold text-xl">
      {title}
    </h1>
    <p class="text-sm text-neutral-very-dark-blue opacity-50">
      {subtitle}
    </p>
  </div>
  <div class="flex justify-end items-center flex-row w-full {className}">
    <img src={img} alt={title} width={64} height={64} loading="lazy" />
  </div>
</div>
