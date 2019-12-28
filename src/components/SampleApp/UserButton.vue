<template>
  <div
    class="userButton"
    :class="lowerCaseColorScheme"
    @click="onClickAction">
    <div class="button-text">
      {{ buttonText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserButton',
  props: {
    onClickAction: {
      type: Function,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    colorScheme: {
      type: String,
      required: true,
      validator: function(val) {
        return ['green', 'red'].includes(val?.toLowerCase());
      },
    },
  },
  computed: {
    lowerCaseColorScheme() {
      return this.colorScheme?.toLowerCase();
    },
  },
};
</script>

<style lang='scss' scoped>
.userButton {
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  font-weight: bold;
  height: 50px;
  justify-content: center;
  user-select: none;
  width: 150px;

  &:hover {
    color: white;
    cursor: pointer;
  }

  &.green {
    background-color: #90ee90;

    &:hover {
      background-color: #48B748;
    }

    &:active {
      background-color: #008000;
    }
  }

  &.red {
    background-color: #f08080;

    &:hover {
      background-color: #F55151;
    }

    &:active {
      background-color: #ff0000;
    }
  }
}
</style>
