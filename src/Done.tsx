import { Component, createMemo, createSignal, For } from "solid-js";
import { store, Todo, onToggleTodo } from "./todos.store";

export const Done: Component = () => {
  const pendingTodos = createMemo(
    () => store.getTodos.length - store.doneTodos.length
  );
  return (
    <div class="flex flex-col space-x-4 my-10 px-4 border-4 border-light-blue-400">
      <div class="py-4">
        <h2 class="text-lg font-bold text-center">Done</h2>
      </div>
      <div class="flex flex-col">
        <For each={store.doneTodos}>
          {(todo: Todo, index) =>
            todo.isDone && (
              <span class="py-2" onClick={onToggleTodo(index())}>
                {todo.name}
              </span>
            )
          }
        </For>
      </div>
      <span>{`Pending Todos: ${pendingTodos()}`}</span>
    </div>
  );
};
