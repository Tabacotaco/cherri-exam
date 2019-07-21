<template>
  <div class="note-popover dropdown-menu dropdown-menu-right p-0" :class="{ show }">
    <div class="arrow" />

    <ul class="list-group border-0 px-1">
      <li class="list-group-item">
        <textarea rows="3" class="form-control" />

        <button type="button" class="btn btn-block add-btn mt-2">
          {{$t('ADD_MESSAGE')}}
        </button>
      </li>
      <li class="list-group-item">
        <div class="card">
          <div class="card-header px-2 pt-2 pb-0">
            <strong class="mr-auto">2019/07/15</strong>
            <small>13:45</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="card-body p-2">
            備忘訊息 1
          </div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="card">
          <div class="card-header px-2 pt-2 pb-0">
            <strong class="mr-auto">2019/07/13</strong>
            <small>14:45</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="card-body p-2">
            備忘訊息 2
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component({})
  export default class NotePopover extends Vue {

    @Prop({ default: false })
    private show!: boolean;
  }
</script>

<style lang="scss">
  div.note-popover {
    margin-top: 8px;

    & > div.arrow {
      top: calc((.5rem + 1px) * -1);
      right: 5px;
      position: absolute;
      display: block;
      width: 1rem;
      height: .5rem;
      margin: 0 .3rem;

      &::before {
        top: 0;
        border-width: 0 .5rem .5rem .5rem;
        border-bottom-color: rgba(0,0,0,.25) !important;
        position: absolute;
        display: block;
        content: "";
        border-color: transparent;
        border-style: solid;
      }

      &::after {
        top: 1px;
        border-width: 0 .5rem .5rem .5rem;
        border-bottom-color: #fff !important;
        position: absolute;
        display: block;
        content: "";
        border-color: transparent;
        border-style: solid;
      }
    }

    & > ul.list-group > li {
      border: 0;
      padding-left: .25rem;
      padding-right: .25rem; 

      &:first-child {
        border-bottom: 1px solid #4A90E2 !important;
        margin-bottom: 1px;
      }

      div.card {
        border: 1px solid #4A90E2;

        & > div.card-header {
          background-color: inherit;
          border-bottom: 0;
        }
      }
    }

    button.add-btn {
      background-color: #4A90E2;
      color: white;
    }
  }
</style>
