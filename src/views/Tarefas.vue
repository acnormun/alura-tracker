<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Box v-if="listaVazia"> Bora Trabalhar! </Box>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="email"
          placeholder="Buscar tarefa..."
          v-model="filtro"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </div>
    <Tarefa
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"
      @aoTarefaClicada="selecionarTarefa"
    />
    <Modal :mostrar="tarefaSelecionada != null">
      <template v-slot:cabecalho>
        <p class="modal-card-title">Editar Tarefa</p>
        <button class="delete" aria-label="close"></button>
      </template>
      <template v-slot:miolo >
        <div class="field">
          <label for="descricaoDaTarefa" class="label"> Descrição </label>
          <input
             v-if="tarefaSelecionada != null"
            type="text"
            class="input"
            v-model="tarefaSelecionada.descricao"
            id="nomeDoProjeto"
          />
        </div>
      </template>
      <template v-slot:rodape>
        <button class="button is-success" @click="alterarTarefa">
          Salvar alterações
        </button>
        <button class="button" @click="fecharModal">Cancelar</button>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from "vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import Box from "../components/Box.vue";
import { useStore } from "@/store";
import {
  ALTERAR_TAREFA,
  CADASTRAR_TAREFA,
  OBTER_PROJETOS,
  OBTER_TAREFAS,
} from "@/store/tipo-acoes";
import ITarefa from "@/interfaces/ITarefa";
import Modal from '../components/Modal.vue'

export default defineComponent({
  name: "Tarefas",
  components: {
    Formulario,
    Tarefa,
    Box,
    Modal
  },
  data() {
    return {
      tarefaSelecionada: null as ITarefa | null,
    };
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length == 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa): void {
      this.store.dispatch(CADASTRAR_TAREFA, tarefa);
    },
    selecionarTarefa(tarefa: ITarefa) {
      this.tarefaSelecionada = tarefa;
    },
    fecharModal() {
      this.tarefaSelecionada = null;
    },
    alterarTarefa() {
      this.store
        .dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
        .then(() => this.fecharModal());
    },
  },
  setup() {
    const filtro = ref("");

    const store = useStore();
    store.dispatch(OBTER_TAREFAS);
    store.dispatch(OBTER_PROJETOS);

    watchEffect(() => {
      store.dispatch(OBTER_TAREFAS, filtro.value);
    });

    return {
      tarefas: computed(() => store.state.tarefa.tarefas),
      store,
      filtro,
    };
  },
});
</script>
