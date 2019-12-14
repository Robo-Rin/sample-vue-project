<template>
  <div class="userCardPicture">
    <img :src="imagePath">
  </div>
</template>

<script>
export default {
  name: 'UserCardPicture',
  props: {
    fruit: {
      type: String,
      required: true,
    },
  },
  computed: {
    imagePath() {
      return require(`../assets/fruit/${this.fruit}.png`);
    },
  },
};
</script>

<style lang='scss' scoped>
.userCardPicture {
  width: 96px;
  height: 96px;
  margin: 0 10px 10px 0;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;

  img {
    height: 100%;
    max-width: 94px;
    max-height: 94px;
    background-color: white;
    border-radius: 10px;
  }
}
</style>
