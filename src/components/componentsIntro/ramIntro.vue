<template>
    <div class="infoBox" v-on:click="displayModal = true">
       <img class="infoBoxImg" src="https://www.pngkit.com/png/full/234-2344430_ram-stick-png-fujitsu-dimm-240-pin.png">
       <h3>RAM</h3>
       <h5>Special type of memory thats needed really really fast</h5>
       <modal v-if="displayModal">
           <template v-slot:header>
                <h3>custom header</h3>
            </template>
           <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perferendis repellendus error cumque fuga sit ab. Eaque nostrum nemo, explicabo impedit iure alias magni consequatur voluptates quidem?</h3>
       </modal> 
    </div>
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