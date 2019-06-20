<template>
  <div class="login">
    <Titles :titles="titles"/>
    <loginHeader
      v-model="checked"
      @returnValue="updateValue"
      v-bind:username.sync="username"
      :USER_MSG="USER_MSG"
    />
    {{ USER_MSG }} 22
    <p @click="add()">{{ checked }} 测试</p>
    <div>
      <a href="https://s0.2mdn.net/simgad/11061825488548865728" download="https://s0.2mdn.net/simgad/11061825488548865728" > 下载图片</a>
      <Test :USER_MSG="USER_MSG"/>
    </div>
    <router-link to="/index">首页</router-link>
  </div>
</template>

<script lang="ts">
import types from "../../types/index";

import  Titles  from "../../components/header/titles.vue";
import  Test  from "../../components/component/test.vue";
import {
  Prop,
  Vue,
  Provide,
  Inject,
  Model,
  Watch,
  Component
} from "vue-property-decorator";
// import Component from 'vue-class-component'
import { State, Mutation, Action } from "vuex-class";

// import  from ''
@Component({
  components: {
    // input
    Test,
    loginHeader: () => import("./loginHeader/loginHeader.vue"),
    Titles
    // Header
  }
})
export default class Login extends Vue {
  // data
  @Provide() private username: string = "jie222";
  @Provide() private age: number = 5;
  @State(state => state.num) stateNum!: string;
  @Mutation(types.USER_MSG) user_msg_fn!: Function;
  
  private titles: string = '/login';

  public USER_MSG: string = "zlj";
  public childNum: number = 123;
  private checked: boolean = true;
  private str: number = 0;
  private updateValue(msg: number): void {
    console.log(msg,77777);
   
  }
  // method
  private _login(): void {
    console.log(123);
  }
  // computed
  private get _computedMsg(): string {
    return this.username === "" ? "zhang" : "li";
  }

  private created() {
    this.user_msg_fn(22)
    console.log(this.stateNum,777);
    
  }
  
  // mounted
  private mounted() {
    this.username = this._computedMsg;
    this._login();
    this.addCommit();
    // this.onChoid();
    this.updateValue;
  }
  private addCommit(): void {
    // this.$store.commit(types.USER_MSG, 1);
  }
  private add(): void {
    this.checked = !this.checked;
    this.USER_MSG = 'lijie'
  }
  @Watch("checked", { deep: true })
  checkChange(newVal: any, oldVal: any): void {
    console.log(newVal);
  }

  
}
</script>

<style scoped>
.login div {
  float: left;
}
</style>