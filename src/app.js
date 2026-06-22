class ToDoApp {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(descricao) {
        const tarefa = {
            id: this.tarefas.length + 1,
            descricao: descricao,
            concluida: false
        };

        this.tarefas.push(tarefa);

        return tarefa;
    }

    listarTarefas() {
        return this.tarefas;
    }

    concluirTarefa(id) {
        const tarefa = this.tarefas.find(t => t.id === id);

        if (!tarefa) {
            return false;
        }

        tarefa.concluida = true;

        return true;
    }

    removerTarefa(id) {
        const tamanhoAntes = this.tarefas.length;

        this.tarefas = this.tarefas.filter(
            tarefa => tarefa.id !== id
        );

        return this.tarefas.length < tamanhoAntes;
    }
}

module.exports = ToDoApp;

