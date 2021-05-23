<template>
  <div class="infoGrid">
    <div class="firstRow">
      <cpuIntro />
      <gpuIntro />
      <moboIntro />
      <ramIntro />
    </div>
    <div class="mainText">
      <h1>Here are the components you need to build a PC</h1>
      <h3>Click on them to learn more</h3>
    </div>
    <div class="lastRow">
      <powerSupplyIntro />
      <caseIntro />
      <diskIntro />
    </div>
    <overlay />
  </div>
</template>
<script>
import cpuIntro from "@/components/componentsIntro/cpuIntro.vue";
import gpuIntro from "@/components/componentsIntro/gpuIntro.vue";
import moboIntro from "@/components/componentsIntro/moboIntro.vue";
import powerSupplyIntro from "@/components/componentsIntro/powerSupplyIntro.vue";
import ramIntro from "@/components/componentsIntro/ramIntro.vue";
import caseIntro from "@/components/componentsIntro/caseIntro.vue";
import diskIntro from "@/components/componentsIntro/diskIntro.vue";
import overlay from "@/components/overlay.vue";

export default {
  components: {
    cpuIntro,
    gpuIntro,
    moboIntro,
    powerSupplyIntro,
    ramIntro,
    caseIntro,
    diskIntro,
    overlay
  }
}
</script>
<style lang="scss" scoped>
.infoGrid {
  display: grid;
  grid-gap: 20px;
  overflow: hidden;
}
.firstRow {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  max-width: 100vw;
  overflow: hidden;
}
.lastRow {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    max-width: 100vw;
  }
.mainText {
  grid-column-start: 1;
  grid-column-end: 4;
  padding-bottom: 4vh;
}
</style>
