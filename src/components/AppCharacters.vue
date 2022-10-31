<template>
    <section class="characters">
        <div class="characters__inner-search">
        <app-filter-button
            @filter-by-query="filteredByQ($event)"
            @filter-reset="resetMethod"
        >
        </app-filter-button>
        </div>
        <div v-if="mySearchResult">Sorry Search is Empty</div>
        <div class="container text-center">
        <div class="cards row row-cols-xxl-3 row-cols-md-6 justify-content-xxl-between justify-content-md-center">
            <div
            class="characters__card col-md-6"
            v-for="character in characters"
            :key="character"
            >
            <h3 class="characters__name">{{ character.name }}</h3>
            <router-link
                class="character__link"
                :to="{ name: 'character', params: { id: character.id } }"
            >
                <button class="buttons" type="button" name="button">view</button>
            </router-link>
            </div>
        </div>
        </div>
        <div class="elips"></div>
    </section>
</template>
<script>
import { publicKey } from "../marvel";
import axios from "axios";
import AppFilterBtn from "@/components/elements/AppFilterBtn.vue";
export default {
    name: "AppCharacters",

    components: {
        "app-filter-button": AppFilterBtn,
    },

    data() {
        return {
            characters: [],

        };
    },

    mounted() {
        this.getCharacters();
    },

    methods: {
        getCharacters: function () {
            axios
                .get(`http://gateway.marvel.com/v1/public/characters?apikey=${publicKey}`)
                .then((result) => {
                    result.data.data.results.forEach((item) => {
                        console.log(item);
                        this.characters.push(item);
                    });
                })

                .catch((error) => {
                    console.log(error);
                });
        },
        filteredByQ(searchPhrase) {
            let mySearchResult = this.characters.filter((elem) =>
                elem.name.includes(searchPhrase)
            );
            console.log(mySearchResult.length);

            mySearchResult.length === 0
                ? (this.mySearchResult = true)
                : (this.characters = mySearchResult);
        },

        resetMethod() {
            this.$router.go(this.$router.currentRoute);
        },

    },

}
</script>
<style scoped lang="scss">
@import "../assets/scss/characters.scss";
@import "../assets/scss/buttons.scss";

.elips {
    position: absolute;
    width: 1440px;
    height: 1440px;
    left: -720px;
    top: 611px;

    background: #b81c1c;
    filter: blur(750px);
}

.cards {
    gap: 20px;
}
</style>
