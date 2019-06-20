<template>
  <div class="user">
    <Titles :titles="titles"/>
   
  </div>
</template>

<script lang="ts">
import types from "../../types/index";

import  Titles  from "../../components/header/titles.vue";

import {
  Prop,
  Vue,
  Provide,
  Inject,
  Model,
  Watch,
  Component
} from "vue-property-decorator"
// import Component from 'vue-class-component'
import { State, Mutation, Action } from "vuex-class"

// import  from ''
@Component({
  components: {
    // input
  
    Titles
    // Header
  }
})
export default class Login extends Vue {
  // data
  private titles: string = '/titles';
  
}
</script>

<style scoped>

</style>