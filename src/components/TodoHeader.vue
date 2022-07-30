<template>
  <header class="header">
    <h1 :style="{color:fontColor}">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="add"
      @keydown.enter="enterFn"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('todolist')
const { mapState: mapStateColor } = createNamespacedHelpers('color')
export default {
  data() {
    return {
      add: ''
    }
  },
  computed: {
    ...mapState(['todolist']),
    ...mapStateColor(['fontColor'])
  },
  methods: {
    ...mapActions(['addtodolist']),
    enterFn(e) {
      console.log(e.target.value)
      const obj = {
        name: this.add,
        done: false,
        id: this.todolist.length + 1
      }
      this.addtodolist(obj)
      e.target.value = ''
    }
  }
}
</script>
