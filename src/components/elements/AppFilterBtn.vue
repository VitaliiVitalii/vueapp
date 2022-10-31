<template>
  <AppInput class="search" type="text" placeholder="search" @keyup.enter="searchApp($event)"/>
  <button class="buttons reset__button btn  btn__filter" @click="resetData"> Reset </button>
</template>

<script>
import AppInput from '@/components/elements/AppInput.vue'
export default {
  name: 'AppFilterBtn',
  components: {
    AppInput,
  },
  methods: {

    resetData() {
      this.$emit('filter-reset');
    },

    searchApp(event) {
      let filterString = event.target.value
      console.log(event.target.value);
      this.$emit('filter-by-query', filterString)
    }
  }

}

</script>

<style scoped lang="scss">
@import '../../assets/scss/buttons.scss';
.search {
  display: inline-block;
  width: 100%;
  margin-left: 10px;

}


</style>
