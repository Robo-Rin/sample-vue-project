<template>
  <div class="cards">
    <slot />
  </div>
</template>

<style lang='scss' scoped>
.cards {
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: flex-start;
}
</style>
