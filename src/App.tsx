import { Component, For } from "solid-js";
import { Todos } from "./Todos";
import { Done } from "./Done";

const App: Component = () => {
  return (
    <div class="md">
      <h2 class="text-lg font-bold text-center">Solid TODO APP</h2>
      <div class="flex flex-row space-x-5 px-5">
        <Todos />
        <Done />
      </div>
    </div>
  );
};

export default App;
