<template>
  <div class="ascapApp">
    <Membership />
  </div>
</template>

<script>
import Membership from './Membership';

export default {
  name: 'AscapApp',
  components: {
    Membership,
  },
};
</script>

<style lang='scss' scoped>
.ascapApp {
  font-family: 'Circular Book', sans-serif;
  bottom: 0;
  left: 0;
  margin: 0.625rem;
  position: relative;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
}
</style>
