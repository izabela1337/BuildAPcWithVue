<template>
    <button class="infoBox" v-on:click="displayModal = !displayModal">
    <div>
        <img class="infoBoxImg" src="https://storage-asset.msi.com/event/2020/mb/amd-550-motherboard/images/msi-mag_b550_tomahawk-3d3_rgb.png">
        <h3>Motherboard</h3>
        <h5>The enavaiorment for all the other componets, as well as your periperlials.</h5>
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
    height: auto;
    width: 50%;
}
</style>