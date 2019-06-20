<template>
  <div class="index">
    <van-tabbar v-model="active" class="tabbar" fixed @change="_choicPage">
      <van-tabbar-item
        route
        v-for="(item,index) in tabBarList"
        :key="index"
        :icon="item.icon"
        :to="item.to"
      >{{ item.name }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Card, TabbarItem, Button } from "vant";
/**
 * 可以使用require引入图片
 */
declare function require(string: any): any;

import { Component, Vue, Provide, Model, Watch } from "vue-property-decorator";
import { Mutation, State } from "vuex-class";
import types from "../../types/index";
@Component({
  components: {
    vanCard: Card,
    vanTabbarItem: TabbarItem,
    vanButton: Button
  }
})
export default class Index extends Vue {
  @State("page") page!: number; //显示那个页码
  @Mutation(types.CHOIC_PAGE) setToken!: Function;
  private img = require("@/assets/logo2.png"); // logo
  // 导航数组
  private tabBarList: object[] = [
    { to: "/index", name: "首页", img: "", icon: "home-o" },
    { to: "/find", name: "发现", img: "", icon: "search" },
    { to: "/user", name: "用户中心", img: "", icon: "friends-o" },
    { to: "/login", name: "设置", img: "", icon: "setting-o" }
  ];
  private active: number = 0; // 默认选择导航栏

  private created(): void {
    this.page;
    this.active = this.page;

    // console.log(this.page, 999998888);
  }
  // 选择导航
  private _choicPage() {
    this.setToken(this.active);
  }

  @Watch("page", { deep: true })
  changePage(newVal: number,oldValue: number): void {
    this.active = newVal;
  }
}
</script>

<style scoped>

</style>