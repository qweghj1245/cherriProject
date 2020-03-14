<template>
  <div class="chat-room">
    <div class="chat-header bg-white flex-row justify-between align-center p-16 pl-24 pr-24">
      <div class="flex-row align-center">
        <div class="head mr-8" />
        <div class="name font-bold">保羅</div>
      </div>
      <div class="flex-row">
        <div class="icon-wrap mr-16 p-8" :class="{'active': showSearch}" @click="toggleShowSearch">
          <img :src="require('@/assets/img/ic_search.png')" />
        </div>
        <div
          class="icon-wrap p-8"
          :class="{'active': showTodoList}"
          @click="showTodoList = !showTodoList"
        >
          <img :src="require('@/assets/img/ic_note.png')" />
        </div>
      </div>
      <todo-list v-show="showTodoList" />
    </div>
    <div class="search flex-row align-center p-16" :class="{'show': showSearch}">
      <input type="text" class="search-input p-8" v-model="searchText" />
      <div class="about mr-24 text-grey">{{searchCount}}則相關訊息</div>
      <img :src="require('@/assets/img/ic_close1.png')" class="close" @click="searchText=''" />
    </div>
    <div class="msessages flex-column justify-end align-end">
      <div
        class="bg-primary msg p-8 pl-24 pr-24 mb-8 text-white"
        v-for="(msg, idx) in userMsg"
        :key="idx"
        v-html="msg"
      />
    </div>
    <div class="input-group p-16 flex-row">
      <input type="text" class="set-msg" placeholder="輸入訊息..." />
      <img :src="require('@/assets/img/ic_sent.png')" class="sent" />
    </div>
  </div>
</template>

<script>
import { userMessage } from '@/lib/user.js';
import TodoList from '@/components/TodoList.vue';
export default {
  components: {
    TodoList,
  },
  computed: {
    userMsg() {
      let messageList = userMessage[this.activeUser].message;
      if (this.searchText && this.searchText.length > 0) {
        return messageList.map(item => {
          let replaceReg = new RegExp(this.searchText, 'g');
          let replaceString =
            '<span class="search-text" style="background:yellow;color:black">' +
            this.searchText +
            '</span>';
          return item.replace(replaceReg, replaceString);
        });
      }
      return this.activeUser ? userMessage[this.activeUser].message : '';
    },
    searchCount() {
      let count = 0;
      userMessage[this.activeUser].message.forEach(item => {
        if (
          this.searchText &&
          this.searchText.length &&
          item.includes(this.searchText)
        )
          count++;
      });
      return count;
    },
    activeUser() {
      return this.$store.state.activeUser;
    },
  },
  data() {
    return {
      showTodoList: false,
      showSearch: false,
      searchText: '',
    };
  },
  methods: {
    setActiveUser() {
      this.$store.commit('setActiveUser', this.$route.params.id);
    },
    toggleShowSearch() {
      this.showSearch = !this.showSearch;
    },
  },
  created() {
    this.setActiveUser();
  },
  watch: {
    $route() {
      this.setActiveUser();
    },
  },
};
</script>

<style lang="scss" scoped>
.chat-room {
  height: calc(100% - 80px);
  .chat-header {
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
    .head {
      @include size(50px, 50px);
      border-radius: 50%;
      border: solid 1px $color-light-green;
    }
    .name {
      font-size: 24px;
    }
    .icon-wrap {
      @include size(50px, 50px);
      border-radius: 50%;
      cursor: pointer;
      border: solid 1px transparent;
      &:hover {
        border-color: rgba($color-grey, 0.4);
        background: $color-light-grey;
      }
      &.active {
        border-color: rgba($color-grey, 0.4);
        background: $color-light-grey;
      }
      & > img {
        width: 100%;
      }
    }
  }
  .search {
    border-bottom: solid 1px $color-light-green;
    transform: translateY(-78px);
    position: relative;
    z-index: 0;
    transition-duration: .2s;
    &.show {
      transform: translateY(0px);
    }
    .search-input {
      width: 100%;
      font-size: 20px;
      border: 0;
      &:focus {
        outline: 0;
      }
    }
    .about {
      white-space: nowrap;
      height: 100%;
      font-size: 20px;
      font-weight: 400;
    }
    .close {
      width: 28px;
      cursor: pointer;
    }
  }
  .msessages {
    height: calc(100% - 231px);
    padding: 32px 24px;
    padding-top: 0;
    overflow-y: auto;
    .msg {
      margin-left: auto;
      display: inline-block;
      border-radius: 50px;
    }
  }
  .input-group {
    border-top: solid 1px $color-light-green;
    .set-msg {
      font-size: 20px;
      width: 100%;
      border: 0;
      &:focus {
        outline: 0;
      }
    }
    .sent {
      width: 40px;
      cursor: pointer;
    }
  }
}
</style>