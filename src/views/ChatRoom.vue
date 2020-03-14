<template>
  <div class="chat-room">
    <div class="chat-header flex-row justify-between align-center p-16 pl-24 pr-24">
      <div class="flex-row align-center">
        <div class="head mr-8" />
        <div class="name font-bold">保羅</div>
      </div>
      <div class="flex-row">
        <div class="icon-wrap mr-16 p-8">
          <img :src="require('@/assets/img/ic_search.png')" />
        </div>
        <div class="icon-wrap p-8">
          <img :src="require('@/assets/img/ic_note.png')" />
        </div>
      </div>
    </div>
    <div class="search flex-row align-center p-16">
      <input type="text" class="search-input p-8" />
      <div class="about mr-24 text-grey">1則相關訊息</div>
      <img :src="require('@/assets/img/ic_close1.png')" class="close" />
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
export default {
  computed: {
    userMsg() {
      return this.activeUser ? userMessage[this.activeUser].message : '';
    },
    activeUser() {
      return this.$store.state.activeUser;
    },
  },
  methods: {
    setActiveUser() {
      this.$store.commit('setActiveUser', this.$route.params.id);
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
      & > img {
        width: 100%;
      }
    }
  }
  .search {
    border-bottom: solid 1px $color-light-green;
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