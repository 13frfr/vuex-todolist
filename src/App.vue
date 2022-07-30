<template>
  <div>
    <VButton
      @click.native="getCode"
      :text="codeMsg"
      :readonly="sendFlag"
      style="width: 35%"
    />
  </div>
</template>

<script>
import VButton from './components/MyButton.vue'
export default {
  data() {
    return {
      codeMsg: '按钮'
    }
  },
  components: {
    VButton
  },

  created() {},

  methods: {
    getCode() {
      alert('点击按钮')
    }
  }
}
</script>

<style scoped></style>
