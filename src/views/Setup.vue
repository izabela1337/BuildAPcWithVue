<template>
    <div id="resolutionScreen">
        <div>
            <h1 id="resolutionMessage">Choose preferred screen resolution</h1>
        </div>
        <div id="resolutionOptions">
            <div v-for="item in resolutions" v-bind:key="item">
                <button class="resolutionButton">
                    {{item}}
                </button>
            </div>
        </div>
    <overlay />
    </div>
</template>
<script>
import overlay from "@/components/overlay.vue";

export default {
    data(){
        return{
            resolutions: ["720p", "1080p", "1440p", "4K"]
        }
    },
    components: {
        overlay
    }
}
</script>
<style lang="scss">
#resolutionScreen {
    display:grid;
    grid-template-columns: 50% 50%;
}
#resolutionMessage{
    font-size: 48pt;
    display: grid;
    place-items: center;
    color: white;
}
#resolutionOptions{
    display: grid;
    place-items: center;
    grid-gap: 10px;
}
.resolutionButton{
	background-color:transparent;
	border-radius:9px;
	border:1px solid #ffffff;
	display:inline-block;
	font-size:20px;
	padding:16px 31px;
	text-decoration:none;
    color: white;
}
.resolutionButton:hover{
    transition: all .3s ease-in-out;
    color: black;
    background: white;
}

</style>