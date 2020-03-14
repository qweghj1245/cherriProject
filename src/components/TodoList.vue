<template>
  <div class="todo-list bg-white">
    <div class="content p-24">
      <textarea class="text-area p-8 pl-16 pr-16" placeholder="輸入訊息..." v-model="message" />
      <div
        class="add-button mt-8 bg-primary p-8 text-center text-white"
        @click="addNewItem"
      >{{$t('__add')}}</div>
      <div class="sperator mt-16 mb-16" />
      <div class="list-wrap">
        <div class="list pt-8 pb-8 p-16 mb-8" v-for="item in todoList" :key="item.id">
          <div class="add-time text-primary mb-16">{{item.createAt}}</div>
          <div class="msg">{{item.message}}</div>
          <img
            :src="require('@/assets/img/ic_close2.png')"
            class="close"
            @click="deleteItem(item.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  computed: {
    todoList() {
      return this.$store.state.todoList.filter(
        item => item.user === this.$route.params.id,
      );
    },
  },
  data() {
    return {
      message: '',
    };
  },
  methods: {
    addNewItem() {
      if (!this.message) return;
      let item = {
        id: this.randomCode(10),
        user: this.$route.params.id,
        createAt: moment(Date.now()).format('YYYY/MM/DD HH:mm'),
        message: this.message,
      };
      this.$store.commit('setTodoList', item);
      this.message = '';
    },
    deleteItem(id) {
      this.$store.commit('deleteTodoList', id);
    },
    randomCode(len) {
      const key =
        'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
      let code = '';
      for (let index = 0; index < len; index++) {
        code += key.charAt(Math.floor(Math.random() * key.length));
      }
      return code;
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  position: absolute;
  top: calc(100% + 16px);
  right: 8px;
  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 15px 25px 15px;
    border-color: transparent transparent $color-white transparent;
    filter: drop-shadow(0px -4px 3px rgba(0, 0, 0, 0.1));
    position: absolute;
    bottom: 100%;
    right: 24px;
  }
  .content {
    border-radius: 3px;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
    width: 400px;
    .text-area {
      @include size(100%, 120px);
      resize: none;
      font-size: 20px;
      border-color: $color-primary;
      &:focus {
        outline: 0;
      }
    }
    .sperator {
      @include size(100%, 1px);
      background: $color-light-green;
    }
    .list {
      border: solid 1px $color-light-green;
      position: relative;
      &:last-child {
        margin-bottom: 0;
      }
      .close {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 12px;
        cursor: pointer;
      }
    }
  }
  .list-wrap {
    max-height: 300px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .add-button {
    cursor: pointer;
  }
}
</style>