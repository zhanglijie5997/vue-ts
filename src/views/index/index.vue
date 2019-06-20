<template>
  <div class="index">
    <Titles :titles="titles"/>
    <indexHeader/>
    <h1 @click="_showTotol">{{user}}</h1>
    <button @click="_showNotify">notify</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject, Provide } from "vue-property-decorator";
import { toast } from "../../utils/toast/toast";
import  Titles  from "../../components/header/titles.vue";
import { notify } from "../../utils/notify/notify";

@Component({
  components: {
    indexHeader: () => import("./indexHeader/indexHeader.vue"),
    Titles
  }
})
export default class Index extends Vue {
  @Provide() private user: string = "zlj";
  private titles: string = "/index";
  async mounted() {
    // alert(1111);
  }
  private async _showTotol(): Promise<any> {
    toast("success", "成功", 1500);
  }
  private _showNotify() {
    notify('success');
  }
}
</script>

<style scoped>
</style>