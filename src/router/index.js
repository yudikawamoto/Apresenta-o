import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contato from '../views/Contato.vue'
import Sobre from '../views/Sobre.vue'
import CursoFuutros from '@/views/Curso.fuutros.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contato',
      name: 'contato',

      component:Contato,
    },
    {
      path: '/sobre',
      name: 'sobre',

      component:Sobre,
    },
    {
      path: '/',
      name: 'home',

      component:Home
    },
    {
      path: '/cursos',
      name: 'curFuturos',

      component:CursoFuutros
    }
    
],
})

export default router
