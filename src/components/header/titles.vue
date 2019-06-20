<template>
  <div class="titles">
    <router-link :to="{path:titles}" tag="span">{{ link }}</router-link>
  </div>
</template>

<script lang="ts">
import { Card, TabbarItem, Button } from "vant";
/**
 * 可以使用require引入图片
 */
declare function require(string: any): any;

import { Component, Vue, Provide, Model, Prop } from "vue-property-decorator";
@Component({
  name: "titles",
  components: {
    vanCard: Card,
    vanTabbarItem: TabbarItem,
    vanButton: Button
  }
})
export default class Index extends Vue {
  @Prop({ type: String }) readonly titles!: string;

  private link: string = "";
  public mounted(): void {
    switch (this.titles) {
      case "/login":
        this.link = "登陆";
        break;
      case '/index' :
        this.link = '首页'
        break;
      default:
        break;
    }
  }
}
</script>

<style scoped>
.titles {
  width: 100vw;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #0909f1a6;
  color: white;
  text-decoration: none;
  cursor: pointer;
}
</style>