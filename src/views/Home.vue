<template>
  <div class="home">
    <div id="welecomeMessageBox">
        <h1>LET'S BUILD A COMPUTER
            <router-link to="/introduction">
                <icon-base class="arrowContinue" width="120" height="120" icon-name="ArrowRight"><icon-arrow-right /></icon-base>
            </router-link>
        </h1>
    </div>
  </div>
</template>

<script>
import iconBase from '@/components/iconBase.vue'
import iconArrowRight from "@/components/icons/iconArrowRight.vue"

export default {
    components: {
        iconBase,
        iconArrowRight
    }
}
</script>
<style>
#welecomeMessageBox{
    font-size: 48pt;
    display: grid;
    place-items: center;
    color: white;
}
.arrowContinue{
    color: white;
}
.arrowContinue:hover {
    transition: transform .3s ease-in;
    transform: scale(1.2);
}
.infoBox{
    background: rgba(25, 25, 25, 0.5);
    border-radius: 10px;
    margin: 10px;
    color: white;
    font-family: 'Dosis', sans-serif;
    border-color: black;
}
</style>
