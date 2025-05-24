<script setup>
import {useRouter} from 'vue-router';

const router = useRouter()
function saberMais() {
    try{
        router.push({name: 'sobre'})
        console.log("Botão ele ficou levado para a pagina de Sobre")
    }
    catch(error){
        console.error("Houve um erro com o botão", error)
    }
    
}

</script>

<template>
    <main>
        <div class="text-center mt-8">
            <h1 class="text-white py-7 mb-7 text-5xl font-bold font-serif hover:text-green-700">Seja Bem-Vindo</h1>
            <p class="text-white text-2xl font-semibold font-serif">Olá, meu nome é Pedro Yudi</p>
            <p class="text-white text-2xl font-semibold font-serif">Hoje vamo falar um pouco da minha trajetória</p>
            <p class="text-white text-2xl font-semibold font-serif ">Aqui vamos te mostrar tudo sobre mim</p>
            <div class="">
                <button @click="saberMais" class="bg-black w-auto hover:bg-green-700 rounded-2xl py-2 pl-3 pr-3  mt-9">
                    <p class="text-2xl font-bold font-serif text-white">Clique para saber mais</p>
                </button>
            </div>
        </div>
    </main>
</template>