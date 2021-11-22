import { Component, For } from "solid-js";
import { store, onAddTodo, onToggleTodo } from "./todos.store";

let todoRef: HTMLInputElement;

export const Todos: Component = () => {
  return (
    <div class="flex my-10 flex-col border-4 border-light-blue-400">
      <div class="py-4 px-4">
        <input
          ref={(el) => (todoRef = el)}
          class="w-100 h-8 p-4 border-4 border-indigo-400 border-opacity-100"
          type="text"
          placeholder="Enter a Todo"
          onKeyPress={(e) => {
            e.which === 13 && onAddTodo(todoRef.value);
          }}
        />
      </div>
      <For each={store.getTodos}>
        {(todo, index) => (
          <div class="flex items-center justify-items-center flex-row space-x-4 px-4 py-4">
            <input
              type={"checkbox"}
              class="w-4 h-4 border-2 border-indigo-400"
              checked={todo.isDone}
              onChange={onToggleTodo(index())}
            />
            <span class={`${todo.isDone ? "line-through" : ""} text-lg`}>
              {todo.name}
            </span>
          </div>
        )}
      </For>
    </div>
  );
};
