<template>
  <div class="users">
    <template v-for="user in users">
      <UserCard :key="user._id" :user="user" />
    </template>
  </div>
</template>

<script>
import UserCard from './UserCard';

export default {
  name: 'Users',
  components: {
    UserCard,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
.users {
  align-content: flex-start;
  display: flex;
  flex-flow: row wrap;
  height: 95%;
  overflow-y: auto;
  width: 100%;
}
</style>
