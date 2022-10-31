<template>
    <section class="character" >
        <img class="character__image" :src="url" alt="">
            <div class="character__inner" v-for="char in character" :key="char">
                <h3 class="character__greeting">Hello, I Am {{char.name}}</h3>
                <p>{{char.description}}</p>
            </div>
        <router-link to="/characters">
        <button class="buttons" type="button" name="button">
            Back
        </button> 
        </router-link>
    </section>
</template>
<script>
import { publicKey } from '../marvel'
import axios from 'axios'
export default {
    name: 'AppCharacter',

    data() {
        return {
            character: [],
            url: '',
            size: 'standard_fantastic.jpg', 
        }
    },

    mounted(){
        this.getCharacter();
        
    },

    methods: {

        getCharacter: function () {

            let characterId = this.$route.params.id;

            axios
                .get(`http://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${publicKey}`)
                .then((result) => {
                    result.data.data.results.forEach(item => {

                        this.character.push(item)

                        this.url = `${item.thumbnail.path}/${this.size}`

                        console.log(this.url)
                    });
                    console.log(result)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        
    },
        
}
</script>
<style scoped lang="scss">
@import "../assets/scss/character.scss";
@import "../assets/scss/buttons.scss";
        .elips {
            position: absolute;
            width: 1440px;
            height: 1440px;
            left: -720px;
            top: 611px;
    
            background: #B81C1C;
            filter: blur(750px);
        }
</style>

