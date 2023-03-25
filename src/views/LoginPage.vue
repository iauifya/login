<template>
    <div class="">
        <!-- <h2>這是登入頁</h2> -->
        <header-logo />
        <login-Form />
        <slider-container />
        
    </div>
</template>
  
<script setup>
import { defineComponent } from 'vue';
import LoginForm from '../components/LoginForm.vue';
import SliderContainer from '../components/SliderContainer.vue';
import HeaderLogo from '../components/HeaderLogo.vue';
// export default defineComponent({
//     components: {
//         LoginForm,
//         SliderContainer
//     }
// })
defineComponent({
    LoginForm,
    SliderContainer,
    HeaderLogo
})
</script>
<style src="../assets/css/style.css" scoped></style>