import Image from "next/image";
import TodoList from "./components/todoList";
import AddTodos from "./components/addTodos";

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-prmary to-scondary h-screen flex items-center justify-center">

      <div className="px-6 py-4 bg-white/50 w-full max-w-lg rounded-xl">

        <TodoList/>
        <AddTodos/>
        <div className="h-1.5 w-1/2 mx-auto bg-neutral-950 rounded"></div>


      </div>

    </main>
  );
}
