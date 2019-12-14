<template>
  <div class="sampleApp">
    <div class="sampleApp-buttons">
      <div
        class="sampleApp-buttons-addUser"
        @click="addUser">
        <div class="sampleApp-buttons-addUser-text">
          {{ 'Add User' }}
        </div>
      </div>
      <div
        class="sampleApp-buttons-removeUser"
        @click="removeUser">
        {{ 'Remove User' }}
      </div>
    </div>
    <Users :users="users" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { getUserList } from '@/api';
import Users from './Users';

export default {
  name: 'SampleApp',
  components: {
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
  margin: 10px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 80px;
  overflow: hidden;

  &-buttons {
    height: 50px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;

    &-addUser, &-removeUser {
      width: 150px;
      height: 50px;
      font-weight: bold;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      user-select: none;

      &:hover {
        color: white;
        cursor: pointer;
      }
    }

    &-addUser {
      background-color: #90ee90;

      &:hover {
        background-color: #48B748;
      }

      &:active {
        background-color: #008000;
      }
    }

    &-removeUser {
      background-color: #f08080;

      &:hover {
        background-color: #F84040;
      }

      &:active {
        background-color: #ff0000;
      }
    }
  }
}
</style>
