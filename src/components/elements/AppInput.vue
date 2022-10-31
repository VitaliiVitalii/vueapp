<template>
  <div class="form-floating mb-2">
    <input class="input" :type="type" :class="classAttr" id="floatingInput" placeholder="placeholder">
    <label class="label" for="floatingInput">{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  name: "AppInput",
  props: {
    type: {
      type: String,
      required: false,
      default: 'text'

    },
    classAttr: {
      type: String,
      required: false,
      default: 'form-control'

    },
    placeholder: {
      type: String,
      required: false,
      default: 'My default value of placeholder'

    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/input.scss';

</style>
