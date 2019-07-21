import { Module } from 'vuex';
import VuexStore from '@/services/store';


export default class VuexModule<S> {

  constructor(
    readonly path: string,
    private module: Module<S, any>
  ) {}

  doRegister(): void {
    VuexStore.registerModule(this.path, this.module);
  }
}
