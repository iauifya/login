<template>
    <header-logo />
    <div class="welcome mt-10">
        <div class="container">
            <h2>Hi,<strong>{{ userName }}</strong> 歡迎回來</h2>
            <v-btn @click="signOut" rounded="xs" size="large" color="lime-darken-3" class="btn mt-2">登出</v-btn>
        </div>
    </div>
</template>
  
<script setup>
// @ is an alias to /src
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';
import HeaderLogo from '../components/HeaderLogo.vue';
const userName = ref('');
const router = useRouter();
defineComponent({
    HeaderLogo
})
onMounted(() => {
    userName.value = window.localStorage.getItem('userEmail');
})

function signOut(){
    window.localStorage.removeItem('userEmail')
    router.push({path:'/login'});
}

</script>
