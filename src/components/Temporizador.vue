<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
                   <Cronometro :tempoEmSegundos="tempoEmSegundos"/>
                    <button class="button" @click="iniciar" :disabled="cronometroRodando">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>Play</span>
                    </button>
                    <button class="button" @click="finalizar" :disabled="!cronometroRodando">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>Stop</span>
                    </button>
                </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue'

export default defineComponent({
    name: 'Temporizador',
    emits:['aoTemporizadorFinalizado'],
    components: {
        Cronometro
    },
    data(){
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    
    methods: {
        iniciar(){
            this.cronometro = setInterval(()=>{
                this.tempoEmSegundos+=1;
                this.cronometroRodando=true;
            },1000)
        },
        finalizar(){

            clearInterval(this.cronometro);
            this.cronometroRodando=false;
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }


    }
})
</script>