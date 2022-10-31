<template>
  <section class="registry">
    <h1 class="registry__title">MARVEL</h1>
    <div class="registry__wrapper p-5 flex-column d-flex">
      <form action=""
            class="registry__form form d-flex flex-column"
            ref="registryForm"
            method="post">
        <AppInput
            type="email"
            placeholder="login"
            />
        <AppInput
            type="password"
            placeholder="password"/>
        <button 
            type="button"
            class="buttons btn btn-info mt-1 mb-1"
            @click="registry($event)"
        >SIGN IN
        </button>
      </form>
    </div>
    <div class="elips"></div>
    <img class="registry__image" src="../../src/assets/img/shield.png" alt="shield">
  </section>
</template>

<script>
import AppInput from '@/components/elements/AppInput.vue';
export default {
  name: "AppRegistry",
  components: {
    AppInput,

  },

  methods: {
    registry() {
      console.log(this.$refs.registryForm);
      console.log(this.$refs.registryForm.querySelectorAll('input'));
      let form = this.$refs.registryForm;
      let inputs = form.querySelectorAll('input');
      let inputsLength = inputs.length;
      let formData = []

      inputs.forEach(function(elem){
        if (!elem.value) {
          alert('Please full the input');
        }
        else {
          formData.push(elem.value)
        }
      })

      if(formData.length == inputsLength) {
        this.$emit('app-logging'); 
      }
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/scss/loginscreen.scss";
  @import "../assets/scss/buttons.scss";
</style>


