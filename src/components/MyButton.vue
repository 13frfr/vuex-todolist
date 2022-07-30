<template>
  <div
    :class="[
      readonly ? 'readonly-hover' : '',
      appointment ? 'appointment-style' : '',
      ghost ? 'primary-ghost' : ''
    ]"
    class="button-wrap"
  >
    {{ text }}
  </div>
</template>

<script type="text/ecmascript-6">
export default {
// 所有得样式都根据使用情况，根据props来传
  props: ['text', 'readonly', 'appointment', 'ghost']
}
</script>

<style scoped lang="less">
.button-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 40px;
  background-color: pink;
  border-radius: 3px;
  cursor: pointer;
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: #57a3f3;
  }
}
.appointment-style {
  &:hover {
    background-color: #3f7dd7;
  }
}
.primary-ghost {
  color: #57a3f3;
  border: 1px solid #57a3f3;
  background-color: #fff;
  &:hover {
    background-color: rgba(81, 151, 252, 0.2);
  }
}
.readonly-hover {
  color: #afc0d4;
  border-color: #afc0d4;
}
.readonly-hover:hover {
  background: #ffffff;
  cursor: not-allowed;
}
</style>
