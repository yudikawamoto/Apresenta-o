<template>
    <nav class="bg-green-950 text-white py-4 px-9 flex justify-between items-center">
        <h1 class="text-lg font-serif font-bold">Apresentação</h1>
        <ul class="flex gap-6">
            <li>
                <router-link to="/" class="hover:underline font-serif">Home</router-link>
            </li>
            <li>
                <router-link to="/cursos" class="hover:underline font-serif">Proximos Cursos</router-link>
            </li>
            <li>
                <router-link to="/Contato" class="hover:underline font-serif">Contato</router-link>
            </li>
        </ul>
    </nav>
</template>