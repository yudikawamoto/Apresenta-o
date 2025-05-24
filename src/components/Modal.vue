<script setup>
import { ref } from 'vue';

const imagens = [
  '../../public/Computador.jpg',
  '../../public/Imagem de pequeno basquete.jpg',
  '../../public/Compuatdor3.jpg',
  '../../public/corrida.jpg',
  '../../public/familia.jpg',
  '../../public/familia2.jpg',
  '../../public/igreja.jpg',
]

const imagemAberta = ref(null)

function abrirImagem(index){
   imagemAberta.value = index  
}

function fecharModal(){
    imagemAberta.value = null
}

function nextImage(){
    if( imagemAberta.value < imagens.length -1){
        imagemAberta.value ++
    }
}
function prevImage(){
    if(imagemAberta.value > 0){
        imagemAberta.value --
    }
}
</script>

