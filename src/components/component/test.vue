<template>
  <div class="test">
    <h2>{{ USER_MSG }}瞅瞅</h2>
  </div>
</template>

<script lang="tsx">
import { Vue, Prop , Component} from "vue-property-decorator";


@Component
export default class Test extends Vue {
  @Prop({type:String})
  USER_MSG!: string
  private user_msg: string = "";
}
</script>

<style scoped>
</style>