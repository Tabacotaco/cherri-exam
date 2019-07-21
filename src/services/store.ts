import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import ExamDataModel from '@/services/models/exam.data';

Vue.use(Vuex);
export default new Store({});
ExamDataModel.doRegister();
