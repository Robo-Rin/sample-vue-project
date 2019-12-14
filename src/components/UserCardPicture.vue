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
  align-items: center;
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  height: 96px;
  justify-content: center;
  margin: 0 10px 10px 0;
  width: 96px;

  img {
    background-color: white;
    border-radius: 10px;
    height: 100%;
    max-height: 94px;
    max-width: 94px;
  }
}
</style>
