<template>
    <button class="infoBox" v-on:click="displayModal = !displayModal">
    <div>
       <img class="infoBoxImg" src="https://www.amd.com/system/files/2018-11/10788-ryzen-chip-left-angle-960x548.png">
       <h3>CPU</h3>
       <h5>Central Processing Unit, bassicly the brain of your system</h5>
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
    width: auto;
}
</style>