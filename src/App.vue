<template>
  <div id="app">

    <div class="tabBar">
      <Header/>
    </div>
    <div class="views">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlives"/>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlives"/>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/header.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>
<style scoped>

.views {
  width: 100%;
}
.tabBar {
  display: block;
  width: 100vw;
}
</style>
