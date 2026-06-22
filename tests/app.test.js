const ToDoApp = require("../src/app");

describe("ToDo App", () => {

    test("deve adicionar tarefa", () => {
        const app = new ToDoApp();

        app.adicionarTarefa("Estudar DevOps");

        expect(app.listarTarefas().length).toBe(1);
    });

    test("deve concluir tarefa", () => {
        const app = new ToDoApp();

        app.adicionarTarefa("Checkpoint 3");

        app.concluirTarefa(1);

        expect(
            app.listarTarefas()[0].concluida
        ).toBe(true);
    });

    test("deve remover tarefa", () => {
        const app = new ToDoApp();

        app.adicionarTarefa("Teste");

        app.removerTarefa(1);

        expect(
            app.listarTarefas().length
        ).toBe(0);
    });

});