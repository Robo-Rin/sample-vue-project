<template>
  <div class="userButtons">
    <slot />
  </div>
</template>

<style lang='scss' scoped>
.userButtons {
  height: 50px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
}
</style>
