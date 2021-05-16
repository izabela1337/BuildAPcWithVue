<template>
    <button class="infoBox" v-on:click="displayModal = !displayModal">
    <div>
       <img class="infoBoxImg" src="https://www.amd.com/system/files/2019-06/237107-rx5700-gpu-gallery3-1260x709.png">
       <h3>GPU</h3>
       <h5>Graphic Processing Unit, the part responsible for the images on the screen</h5>
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