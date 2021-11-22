import { createStore } from "solid-js/store";

export interface Todo {
  name: string;
  isDone: boolean;
}

export const [store, setTodos] = createStore({
  todos: [
    {
      name: "Learn Solid",
      isDone: false,
    },
  ],
  get getTodos(): Todo[] {
    return this.todos;
  },
  get doneTodos(): Todo[] {
    return this.todos.filter((t) => t.isDone);
  },
});

export const onToggleTodo = (index: number) => () => {
  setTodos("todos", index, "isDone", !store.todos[index].isDone);
};

export const onAddTodo = (name: string) => {
  if (name) {
    setTodos("todos", (t) => [...t, { name, isDone: false }]);
  }
};
