<template>
  <div class="index">
      <h1>
          index
          {{ user }}
      </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
@Component
export default class IndexHeader extends Vue {
  @Inject() readonly user!: string;
};
</script>

<style scoped>
</style>