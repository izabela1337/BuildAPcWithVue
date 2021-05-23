<template>
    <div>
        <div id="prevButton">
            <button class="navButtons" @click="goBack">Back</button>
        </div>
        <div id="nextButton">
            <button class="navButtons" @click="goForward()">Next</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            nextPath: String,
            prevPath: String,
            sitesOrder: ["/", "/introduction", "/setup", "/games"]
        }
    },
    methods:{
        goForward(){
            let currentPath = this.$router.currentRoute._value.fullPath;
            this.sitesOrder.forEach((element, index) => {
                if (currentPath == element.toString()) {
                    return this.$router.push(this.sitesOrder[index+1])
                }else{
                    console.log(this.sitesOrder[index+1])
                }
            })
        },
        goBack(){
            let currentPath = this.$router.currentRoute._value.fullPath;
             this.sitesOrder.forEach((element, index) => {
                if (currentPath == element.toString()) {
                    return this.$router.push(this.sitesOrder[index-1])
                }else{
                    console.log(this.sitesOrder[index])
                }
            })
        }
    }
}
</script>
<style lang="scss">
#prevButton {
    position: absolute;
    bottom: 30px;
    left: 20px
}
#nextButton{
    position: absolute;
    bottom: 30px;
    right: 20px
}
.navButtons{
    background-color:transparent;
	border-radius:9px;
	border:1px solid #ffffff;
	display:inline-block;
	font-size:20px;
	padding:16px 31px;
	text-decoration:none;
    color: white;
}
.navButtons:hover {
    transition: all .3s ease-in-out;
    color: black;
    background: white;
}
</style>