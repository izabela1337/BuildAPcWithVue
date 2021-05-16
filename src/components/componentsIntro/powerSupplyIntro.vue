<template>
    <button class="infoBox" v-on:click="displayModal = !displayModal">
    <div>
       <img class="infoBoxImg" src="https://www.vortez.net/index.php?ct=news&action=file&id=2890">
       <h3>Power Supply</h3>
       <h5>The part responsible for supplying other pieces with sweet, juicy electricity</h5>
       <div v-if="displayModal">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perferendis repellendus error cumque fuga sit ab. Eaque nostrum nemo, explicabo impedit iure alias magni consequatur voluptates quidem?</h3>
        </div> 
    </div>
    </button>
</template>
<script>
export default {
    data(){
        return {
            displayModal: false
        }
    }
}
</script>
<style lang="scss">
.infoBoxImg{
    height: 50%;
    width: 50%;
}
</style>