<template>
    <div id="gamesScreen">
        <div>
            <h1 id="gamesMessage">Choose games you wish to play, up to three.</h1>
        </div>
        <div id="gamesSearch">
            <div v-for="data in games" v-bind:key="data">
                <input type="checkbox" :id=data.title >
                <label :for=data.title>{{data.title}}</label>

            </div>
        </div>
    <overlay />
    </div>
</template>
<script>
import gameData from '@/assets/games.json'
import overlay from "@/components/overlay.vue";

export default {
    data(){
        return{
            games: gameData
        }
    },
    components: {
        overlay
    }
}
</script>
<style lang="scss">
#gamesScreen {
    display:grid;
    grid-template-columns: 50% 50%;
    place-items: center;
}
#gamesMessage{
    font-size: 48pt;
    display: grid;
    place-items: center;
    color: white;
}
#gamesSearch{
    font-size: 30px;
    display: grid;
    place-items: center;
    grid-gap: 10px;
}
</style>