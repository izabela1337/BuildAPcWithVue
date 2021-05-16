<template>
    <button class="infoBox" v-on:click="displayModal = !displayModal">
    <div class="infoBox">
       <img class="infoBoxImg" src="https://images.samsung.com/is/image/samsung/p6pim/pl/mz-77e4t0b-eu/gallery/pl-870-evo-sata-3-2-5-ssd-387314-mz-77e4t0b-eu-thumb-435723540?$LazyLoad_Home_IMG$">
       <h3>Disk Drive</h3>
       <h5>A place for your precious files to stay</h5>
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
    object-fit: contain;
}
</style>