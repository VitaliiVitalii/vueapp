<template>
    <section class="main">
        <AppRegistry v-if="isLogged" @app-logging="logOut" />
        <AppCharacters v-else></AppCharacters>
    </section>
</template>
<script>
import AppRegistry from '@/components/AppRegistry.vue';
import AppCharacters from '@/components/AppCharacters.vue';

export default {
    name: 'AppHome',

    data() {
        return {
            isLogged: true,
            formLoginTitle: 'Log In',
        }
    },

    methods: {
        loginIn() {
            this.isLogged = true
        },

        logOut() {
            this.isLogged = false
        }

    },

    components: {
        AppRegistry,
        AppCharacters,

    }

}
</script>
<style lang="scss">

</style>