<template>
  <div class="home container">
    <div class="row justify-content-center">
      <div class="col-8 mt-5 text-center">
        <img :src="DefaultImg" class="img-thumbnail border-0" />
        <h4 class="font-weight-bold">{{$t('WELCOME_TO_CHAT')}}</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import DefaultImg from '@/assets/imgs/img_default.png';


  @Component({
    inject: {
      DefaultImg: { default: () => DefaultImg }
    }
  })
  export default class Home extends Vue {}
</script>

<style lang="scss">
  div.home.container {
    h4 {
      color: #4A90E2;
    }
  }
</style>

