<template>
    <button class="infoBox" v-on:click="displayModal = !displayModal">
    <div class="infoBox">
       <img class="infoBoxImg" src="https://www.corsair.com/corsairmedia/sys_master/productcontent/blog_how-to-build-a-pc---choosing-a-case-Content-1.png">
       <h3>Case</h3>
       <h5>Metal box for your components to live in.</h5>
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