<template>
  <div class="sampleApp">
    <UserButtons>
      <UserButton :onClickAction="addUser" :buttonText="'Add User'" :colorScheme="'Green'" />
      <UserButton :onClickAction="removeUser" :buttonText="'Remove User'" :colorScheme="'Red'" />
    </UserButtons>
    <Users :users="users" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { getUserList } from '@/api';
import UserButtons from './UserButtons';
import UserButton from './UserButton';
import Users from './Users';

export default {
  name: 'SampleApp',
  components: {
    UserButtons,
    UserButton,
    Users,
  },
  async mounted() {
    if (!this.data?.length) {
      const data = await getUserList();
      this.loadData(data);
    }
  },
  computed: {
    ...mapState([ 'data', 'numUsers' ]),
    users() {
      return this.data?.slice(0, this.numUsers) || [];
    },
  },
  methods: {
    ...mapActions([ 'addUser', 'removeUser', 'loadData' ]),
  },
};
</script>

<style scoped lang="scss">
.sampleApp {
  bottom: 0;
  left: 0;
  margin: 10px;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 80px;
}
</style>
