<template>
  <div id="app" class="row no-gutters">
    <div class="col-sm-5 col-md-4 shadow-sm h-sm-100">
      <nav class="nav flex-column nav-pills">
        <span class="navbar-brand font-weight-bold" href="#">
          {{$t('FRIEND_LIST', {count: friends.length})}}
        </span>

        <router-link v-for="friend in friends" :key="friend.id" :to="`/chat/${friend.id}`" class="nav-link media">
          <img :src="EmptyImg" class="mr-3 friend-img rounded-circle">

          <div class="media-body">
            <h5 class="mt-0 font-weight-bold">{{friend.name}}</h5>
            {{friend.subject}}
          </div>
        </router-link>
      </nav>
    </div>

    <div class="col-sm-7 col-md-8">
      <nav class="header-bar navbar navbar-dark navbar-expand-md">
        <router-link class="navbar-brand font-weight-bold mr-auto" to="/">
          Cherri Chat
        </router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" :data-target="`#${navbarID}`" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" :id="navbarID">
          <ul class="language navbar-nav ml-auto">
            <li class="nav-item rounded-pill border border-white px-3 mr-md-1" :class="{ active: language === 'zh-tw' }">
              <a class="nav-link py-1" @click="setLocaleMessages('zh-tw')">中文</a>
            </li>

            <li class="nav-item rounded-pill border border-white px-3" :class="{ active: language === 'en-us' }">
              <a class="nav-link py-1" @click="setLocaleMessages('en-us')">English</a>
            </li>
          </ul>

          <form class="user-info form-inline border-left border-white ml-md-3 px-md-3 text-white">
            <img :src="EmptyImg" class="user-img rounded-circle mr-2" />
            {{userName}}
          </form>
        </div>
      </nav>

      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import UUID from 'uuid/v4';
  import VuexStore from '@/services/store';
  import Router from '@/router';

  import i18n, { setLocaleMessages } from '@/services/i18n.service';
  import { ILoginInfo, IFriend } from '@/services/models/exam.data';

  import EmptyImg from '@/assets/imgs/empty.jpg';


  @Component({
    inject: {
      EmptyImg: {default: () => EmptyImg},
      setLocaleMessages: { default: () => setLocaleMessages }
    }
  })
  export default class App extends Vue {
    private navbarID: string = UUID();

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
      & > * {
        border-bottom: 1px solid #4A90E2;
        margin: 0;
        border-radius: 0;
        padding: .5rem 1rem;
      }

      span.navbar-brand {
        padding-top: .8125rem;
        padding-bottom: .8125rem;
        margin-top: -1px;
      }

      a.nav-link {
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

      ul.language{
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

      @media (max-width: 767px) {
        ul.language > li {
          margin-top: 2px;
        }

        form.user-info {
          margin-top: .5rem;
          border-left: 0 !important;
        }
      }

      @media (min-width: 768px) {
        form.user-info {
          margin-top: -.5rem;
          margin-bottom: -.5rem;
          height: 56px;
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
