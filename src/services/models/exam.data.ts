import VuexModule from '@/services/vuex.module';
import Data from '@/assets/data/data.json';


export interface IMessage { sender: string; content: string; }
export interface IFriend { id: string; name: string; subject?: string; messages: IMessage[]; }
export interface ILoginInfo { id: string; userName: string; friends: IFriend[]; }

export default new VuexModule<ILoginInfo>('ExamData', {
  state: Data
});
