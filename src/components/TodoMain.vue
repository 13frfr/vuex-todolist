<template>
  <div>
    <ul class="todo-list" v-for="item in todolist" :key="item.id">
      <!-- completed: 完成的类名 -->
      <li class="completed">
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>{{ item.name }}</label>
          <button class="destroy" @click="delFn(item)"></button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('todolist')
export default {
  data() {
    return {
    }
  },
  created() {
    console.log(this.todolist)
  },
  computed: {
    ...mapState(['todolist'])
  },
  methods: {
    ...mapActions(['deltodolist']),
    delFn(item) {
      this.deltodolist(item)
    }
  }
}
</script>
