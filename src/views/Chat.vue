<template>
  <div class="chat">
    <nav class="header-chat navbar navbar-expand-sm shadow-sm">
      <span class="navbar-brand mr-auto">
        <img :src="EmptyImg" class="mr-1 friend-img rounded-circle">
        {{friend.name}}
      </span>

      <button class="navbar-toggler" type="button" :data-target="`#${navbarID}`" data-toggle="collapse"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :id="navbarID">
        <form class="control-btns form-inline ml-auto">
          <button type="button" class="btn rounded-circle mr-2" v-bs-collapse="{ id: searchID, isToggle: true }"
            :class="{
              'btn-light border': searchOn,
              'btn-link border-0': !searchOn
            }">

            <img :src="SearchBtn" class="rounded-circle" />
          </button>

          <div ref="dropdown" class="dropdown">
            <button type="button" class="btn rounded-circle" :id="noteID" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false" :class="{
                'btn-light border': noteOn,
                'btn-link border-0': !noteOn
              }">

              <img :src="NoteBtn" class="rounded-circle" />
            </button>

            <NotePopover :aria-labelledby="noteID" />
          </div>
        </form>
      </div>
    </nav>

    <div class="modal-header p-0" v-bs-collapse="{ id: searchID, isExpanded: searchOn }">
      <div class="container mt-1">
        <div class="row">
          <input type="text" class="col form-control mr-auto" v-model="params" :placeholder="$t('PLACEHOLDER_SEARCH')"
            @keypress.enter="doSearch()" />

          <span class="col form-control text-right result text-secondary">
            {{$t('SEARCH_RESULT', { count: searchResults.length })}}
          </span>

          <button type="button" class="close-search-btn btn p-0 rounded-circle mr-1" @click="doCloseSearch()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>

    <div class="modal-body d-flex align-items-end">
      <div class="container">
        <div v-for="(msg, index) in messages" :key="index" class="row" :class="{
          'justify-content-end': userID === msg.sender,
          'justify-content-start': userID !== msg.sender
        }">
          <div class="col" :class="{
            'text-right': userID === msg.sender,
            'text-left': userID !== msg.sender
          }">
            <span :ref="`msg-${index}`" class="rounded-pill py-2 px-3" :class="{
              'self-content': userID === msg.sender
            }">
              {{msg.content}}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <span class="text-secondary mr-auto">{{$t('PLACEHOLDER_MESSAGE')}}</span>

      <button type="button" class="btn btn-link border-0 note-btn">
        <img :src="SentBtn" class="rounded-circle" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import UUID from 'uuid/v4';
  import $ from 'jquery';
  import VuexStore from '@/services/store';
  
  import BsCollapse from '@/directives/BsCollapse';
  import { ILoginInfo, IFriend, IMessage } from '@/services/models/exam.data';
  import NotePopover from '@/views/components/NotePopover.vue';

  import EmptyImg from '@/assets/imgs/empty.jpg';
  import SearchBtn from '@/assets/imgs/ic_search.png';
  import NoteBtn from '@/assets/imgs/ic_note.png';
  import SentBtn from '@/assets/imgs/ic_sent.png';


  @Component({
    inject: {
      EmptyImg: {default: () => EmptyImg},
      SearchBtn: {default: () => SearchBtn},
      NoteBtn: {default: () => NoteBtn},
      SentBtn: {default: () => SentBtn}
    },
    directives: {
      BsCollapse
    },
    components: {
      NotePopover
    }
  })
  export default class Chat extends Vue {
    private navbarID: string = UUID();
    private searchID: string = UUID();
    private noteID: string = UUID();

    private searchOn: boolean = false;
    private noteOn: boolean = false;

    private params: string = '';
    private searchResults: IMessage[] = [];

    @Prop()
    private id!: string;

    get state(): ILoginInfo {
      return (VuexStore.state as { ExamData: ILoginInfo }).ExamData;
    }

    get userID(): string {
      return this.state.id;
    }

    get friend(): IFriend {
      return this.state.friends.filter(({ id }) => id === this.id)[0];
    }

    get messages(): IMessage[] {
      return this.friend.messages;
    }

    mounted(): void {
      $(this.$refs.dropdown)
        .on('show.bs.dropdown', () => this.noteOn = true)
        .on('hidden.bs.dropdown', () => this.noteOn = false);
    }

    doCloseSearch(): void {
      ($(`#${this.searchID}`) as any).collapse('hide');
    }

    doSearch(): void {
      if (window.getSelection) {
        const selection = window.getSelection();

        if (selection) {
          selection.removeAllRanges();

          this.searchResults = this.messages.filter((msg: IMessage, i: number) => {
            if (msg.content.indexOf(this.params) < 0)
              return false;

            const targetEl = $(this.$refs[`msg-${i}`])[0];
            const range = document.createRange();

            range.selectNodeContents(targetEl as Node);
            selection.addRange(range);

            return true;
          });
        }
      } else {
        console.warn('Could not select text in node: Unsupported browser.');
      }
    }
  }
</script>

<style lang="scss">
  div.chat {
    & > nav.header-chat {
      img.friend-img {
        border: 1px solid #4A90E2;
        width: 36px;
        height: 36px;
        margin-top: -2px;
        margin-bottom: -2px;
      }
    }

    button.btn {
      padding: 4px;
      border-color: #4A90E2 !important;

      & > img {
        width: 28px;
      }
    }

    & > div {
      &.modal-header, &.modal-body, &.modal-footer {
        border-color: #4A90E2 !important;
      }

      &.modal-header {
        .form-control {
          background-color: rgba(0, 0, 0, 0) !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          border: 0 !important;
          border-color: inherit !important;

          &.result {
            max-width: 130px;
          }
        }

        button.close-search-btn {
          width: 1.5rem;
          height: 1.5rem;
          margin-top: .375rem;
          line-height: .5;
          color: white;
          background-color: #4A90E2;
        }
      }

      &.modal-body {
        height: calc(100vh - 216px);
        overflow-y: auto;

        span.rounded-pill {
          border: 1px solid #4A90E2;
          display: inline-flex;
          margin: .25rem 0;

          &.self-content {
            background-color: #4A90E2;
            color: white;
          }

          &::selection {
            background-color: #ffc107;
          }
        }
      }

      &.modal-footer {
        padding: 8px 16px;
      }
    }
  }
</style>
