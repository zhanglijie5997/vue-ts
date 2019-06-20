<template>
  <div class="index">
    {{ checked }}
    <h1 @click="returnValue(2)">{{ USER_MSG }}%%%</h1>
    <input type="text" @input="changed($event)" v-model="userPutStr">
    {{ username }}555
  </div>
</template>

<script lang="tsx">
import {
  Component,
  Vue,
  Model,
  Prop,
  Emit,
  Inject
} from "vue-property-decorator";
import Login from "../login.vue";
import { index } from "../../../utils/requests/request";
import { Action, State } from "vuex-class";
import log from "../../../utils/log";
@Component
export default class loginHeader extends Vue {
  @Model("checked") readonly checked!: boolean;
  @Action('changeUserMsg') changeUserMsg!: any;
  @State('peopleMsg') peopleMsg!: any;
  @Prop({ type: String })
  readonly USER_MSG!: string;
  @Inject() readonly username!: string;
  @Emit("returnValue")
  returnValue(num: number) {
    // this.$emit('returnValue',num)
    return num;
  }
  
  public count: number = 0;
  // private checked: boolean = false;
  private choic: boolean = false;
  private userPutStr: string = "";
  private created() {
    console.log(123456);
  }
  async mounted() {
    const data = await this.changeUserMsg();
    log.log(this.peopleMsg,8888)
  }
  private changed(e: any): void {
    console.log(e.target.value);
  }
  setVal(): void {}
}
</script>

<style scoped>
</style>