<template>
    <div id="" class="form_pos">
        <v-sheet class="form_group mx-auto">
            <h3 class="text-center title">登入</h3>
            <v-form @submit.prevent="submit" class="text-left">
                <v-label>Work Email</v-label>
                <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" placeholder="you@company.com"></v-text-field>
                <!-- <p>{{ errorMessage }}</p> -->
                <v-label>Password</v-label>
                <v-text-field v-model="password.value.value" :error-messages="password.errorMessage.value" placeholder="最少8個字元"></v-text-field>
                <v-btn type="submit" block rounded="xs" color="lime-darken-3" class="mt-2">登入</v-btn>
                <!-- <v-btn inline-block class="mt-2">清除</v-btn> -->
            </v-form>
            <h5 class="mt-3">Trusted by the top companies.</h5>
            <div class="iconGroup">
                <img src="@/assets/img/icon/asana.svg" alt="">
                <img src="@/assets/img/icon/buzzfeed.svg" alt="">
                <img src="@/assets/img/icon/house.svg" alt="">
                <img class="small" src="@/assets/img/icon/lyft.svg" alt="">
                <img src="@/assets/img/icon/one-plus.svg" alt="">
            </div>
        </v-sheet>
    </div>
</template>

<script setup>
// @ is an alias to /src
import { ref,computed } from 'vue';
import { useField, useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
const router = useRouter();
const accounts = ref([
    { email: "mohamed@instabug.com", password: "A12345678" },
    { email: "mohamed1@instabug.com", password: "A12345678" },
    { email: "mohamed2@instabug.com", password: "A12345678" },
    { email: "mohamed3@instabug.com", password: "A12345678" },
    { email: "mohamed4@instabug.com", password: "A12345678" },
    { email: "mohamed5@instabug.com", password: "A12345678" },
    { email: "mohamed6@instabug.com", password: "A12345678" },
    { email: "mohamed7@instabug.com", password: "A12345678" },
])

// const rules = [
//     value => {
//         if (value) return
//         return '此為必填欄位'
//     }
// ]
const { handleSubmit } = useForm({
    validationSchema: {
        email(value) {
            if(!value){
                return '此為必填欄位'
            }else if(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value)) {
                return true
            }
            return '請輸入正確的Email格式' //此種寫法也ok，最後不須在寫else 直接return回去
            
            
        },
        password(value){
            if(!value){
                return '此為必填欄位'
            }else if(value?.length < 8 ) {
                return '密碼至少大於8個字元'
            } else if( /[A-Z]/.test(value) && /[0-9]/.test(value)){
                return true
            } else{
                return '密碼至少有一個英文大寫+數字'
            }

        }
    }
})
const email = useField('email')
const password = useField('password')
const submit = handleSubmit((values) => {
    // alert(JSON.stringify(values, null, 2))
    console.log(values.email);
    const status = accounts.value.filter((record)=>{
        return record.email === values.email && record.password === values.password
    });

    if(status.length <=0 ){
        
        // email.value.value = '';
        // password.value.value = ''; //如果要清空INPUT框可以這樣做
        alert('帳號或密碼不正確');
    }else{
        console.log(status); //[]
        let userName = computed(() => values.email.split('@')[0]); 
        console.log(userName);
        localStorage.setItem('userEmail',userName.value);
        router.push({path:'/welcome'});
    }
})


</script>
<style src="../assets/css/style.css" scoped></style>
<style src="../assets/css/custom.css" scoped></style>