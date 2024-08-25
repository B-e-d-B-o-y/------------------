<template>
<Header></Header>
<RouterView></RouterView>
<Footers></Footers>
</template>

<script setup>
import Header from './components/header.vue'
import Footers from './components/footer.vue'
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
