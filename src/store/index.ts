import { projeto } from './modulos/projeto/index';
import { OBTER_TAREFAS, CADASTRAR_TAREFA, ALTERAR_TAREFA } from "./tipo-acoes";
import { INotificacao } from "@/interfaces/INotificacao";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import {
  NOTIFICAR,
  DEFINIR_TAREFAS,
  ADICIONA_TAREFAS,
  ALTERA_TAREFA,
} from "./tipo-mutacoes";
import http from "@/http";
import ITarefa from "@/interfaces/ITarefa";
import {EstadoProjeto} from './modulos/projeto'

export interface Estado {
  projeto: EstadoProjeto,
  tarefas: ITarefa[];
  notificacoes: INotificacao[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projeto: {
      projetos: [],
    },
    tarefas: [],
    notificacoes: [],
  },
  mutations: {
    [DEFINIR_TAREFAS](state, tarefas: ITarefa[]) {
      state.tarefas = tarefas;
    },
    [ADICIONA_TAREFAS](state, tarefa: ITarefa) {
      state.tarefas.push(tarefa);
    },
    [ALTERA_TAREFA](state, tarefa: ITarefa) {
      const index = state.tarefas.findIndex((t) => t.id == tarefa.id);
      state.tarefas[index] = tarefa;
    },
    [NOTIFICAR](state, novaNotificacao: INotificacao) {
      novaNotificacao.id = new Date().getTime();
      state.notificacoes.push(novaNotificacao);

      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(
          (notificacao) => notificacao.id != novaNotificacao.id
        );
      }, 3000);
    },
  },
  actions: {
    [OBTER_TAREFAS]({ commit }) {
      http
        .get("/tarefas/")
        .then((response) => commit(DEFINIR_TAREFAS, response.data));
    },
    [CADASTRAR_TAREFA]({ commit }, tarefa: ITarefa) {
      return http
        .post("/tarefas", tarefa)
        .then((resposta) => commit(ADICIONA_TAREFAS, resposta.data));
    },
    [ALTERAR_TAREFA]({ commit }, tarefa: ITarefa) {
      return http
        .put(`/tarefas/${tarefa.id}`, tarefa)
        .then((resposta) => commit(ALTERA_TAREFA, tarefa));
    },
  },
  modules: {
    projeto
  }
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
