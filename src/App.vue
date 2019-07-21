<template>
  <div id="app" class="row no-gutters">
    <div class="col-sm-5 col-md-4 shadow-sm h-sm-100">
      <nav class="nav flex-column nav-pills">
        <a class="navbar-brand font-weight-bold" @click="onSwitchFriendOn()">
          {{$t('FRIEND_LIST', {count: friends.length})}}
        </a>

        <div class="collapse friend-list" :class="{ show: isXsSize() ? friendOn : true }">
          <router-link v-for="friend in friends" :key="friend.id" :to="`/chat/${friend.id}`" class="nav-link media">
            <img :src="EmptyImg" class="mr-3 friend-img rounded-circle">

            <div class="media-body">
              <h5 class="mt-0 font-weight-bold">{{friend.name}}</h5>
              {{friend.subject}}
            </div>
          </router-link>
        </div>
      </nav>
    </div>

    <div class="col-sm-7 col-md-8">
      <nav class="header-bar navbar navbar-dark navbar-expand-md">
        <router-link class="navbar-brand font-weight-bold mr-auto" to="/">
          Cherri Chat
        </router-link>

        <button class="navbar-toggler" type="button" @click="onSwitchNabar()">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse header" :class="{ show: navbarOn }">
          <ul class="language navbar-nav ml-md-auto">
            <li class="nav-item rounded-pill border border-white px-3 mr-1" :class="{ active: language === 'zh-tw' }">
              <a class="nav-link py-1" @click="setLocaleMessages('zh-tw')">中文</a>
            </li>

            <li class="nav-item rounded-pill border border-white px-3" :class="{ active: language === 'en-us' }">
              <a class="nav-link py-1" @click="setLocaleMessages('en-us')">English</a>
            </li>
          </ul>

          <form class="user-info form-inline ml-3 px-3 text-white">
            <img :src="EmptyImg" class="user-img rounded-circle mr-2" />
            {{userName}}
          </form>
        </div>
      </nav>

      <router-view v-if="isXsSize() ? viewOn : true" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import VuexStore from '@/services/store';
  import Router from '@/router';

  import i18n, { setLocaleMessages } from '@/services/i18n.service';
  import { ILoginInfo, IFriend } from '@/services/models/exam.data';

  import EmptyImg from '@/assets/imgs/empty.jpg';

  import $ from 'jquery';
  import 'popper.js';
  import 'hammerjs';
  import 'bootstrap';


  @Component({
    inject: {
      EmptyImg: {default: () => EmptyImg},
      setLocaleMessages: { default: () => setLocaleMessages }
    }
  })
  export default class App extends Vue {
    private friendOn: boolean = true;
    private viewOn: boolean = false;
    private navbarOn: boolean = false;

    private mainWidth: number = document.body.clientWidth;

    get state(): ILoginInfo {
      return (VuexStore.state as { ExamData: ILoginInfo }).ExamData;
    }

    get userName(): string {
      return this.state.userName;
    }

    get friends(): IFriend[] {
      return this.state.friends;
    }

    get chatName(): string {
      return 'chat' === this.$router.currentRoute.name ?
        this.$router.currentRoute.params.friend : '';
    }

    get language(): string {
      return i18n.locale;
    }

    mounted(): void {
      this.mainWidth = document.body.clientWidth;

      $(window).off('resize').on('resize', () => this.mainWidth = document.body.clientWidth);
    }

    private isXsSize(): boolean {
      return this.mainWidth < 576;
    }

    private onSwitchNabar(): void {
      this.navbarOn = !this.navbarOn;
      this.onSwitchFriendOn(false);
    }

    private onSwitchFriendOn(on: boolean = !this.friendOn): void {
      this.friendOn = this.isXsSize() ? on : this.friendOn;
      this.viewOn = this.isXsSize() ? !this.friendOn : this.viewOn;
      this.navbarOn = this.isXsSize() && this.friendOn ? false : this.navbarOn;
    }
  }
</script>


<style lang="scss">
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

  @media (min-width: 576px) {
    #app {
      height: 100vh;
    }
  }

  #app {
    font-family: -apple-system,BlinkMacSystemFont,"Microsoft JhengHei", "Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";

    a.nav-link:not(.disabled) {
      cursor: pointer;
    }

    nav.nav.nav-pills {
      @media (max-width: 575px) {
        div.collapse.friend-list {
          height: calc(100vh - 112px);
          overflow-y: auto;
        }
      }

      & > a.navbar-brand, & > div.collapse > a.nav-link {
        border-bottom: 1px solid #4A90E2;
        margin: 0;
        border-radius: 0;
        padding: .5rem 1rem;
      }

      a.navbar-brand {
        cursor: pointer;
        padding-top: .8125rem;
        padding-bottom: .8125rem;
        margin-top: -1px;
      }

      a.nav-link {
        background-color: inherit !important;

        &.router-link-active {
          color: white !important;
          background-color: #4A90E2 !important;
        }

        img.friend-img {
          border: 1px solid #4A90E2;
          width: 56px;
          height: 56px;
        }

        &:not(.router-link-active) div.media-body {
          color: #6c757d;
          & > h5 {
            color: #343a40;
          }
        }
      }
    }

    nav.header-bar {
      background-color: #4A90E2 !important;

      ul.language {
        flex-direction: row !important;

        & > li {
          margin-top: -1px;
          margin-bottom: -1px;
          color: white;

          &.active {
            background-color: white;
            color: #4A90E2 !important;
          }

          & > a {
            color: inherit !important;
          }
        }
      }

      @media (min-width: 768px) {
        form.user-info {
          margin-top: -.5rem;
          margin-bottom: -.5rem;
          height: 56px;
          border-left: 1px solid white;
        }
      }

      @media (max-width: 767px) {
        div.navbar-collapse.header {
          display: flex !important;
          margin-top: .5rem;

          &:not(.show) {
            display: none !important;
          }

          ul.language {
            display: inline-flex;
            margin-right: auto;
          }

          form.user-info {
            display: inline-block;
          }
        }
      }

      form.user-info {
        img.user-img {
          border: 1px solid #4A90E2;
          width: 38px;
          height: 38px;
        }
      }
    }
  }
</style>
