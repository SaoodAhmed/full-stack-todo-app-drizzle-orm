
import React from "react";

const getData = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/todos`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.ok);
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const TodoList = async () => {
  const res = await getData();
  console.log(res);
  return (
    <div className="max-h-[350px] overflow-auto mb-4 ">
   
    {res.data.map((items: any) => (
        <div className="px-2 py-4 flex bg-slate-100 items-center gap-x-4 my-4 shadow rounded-lg">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6.5" cy="6.5" r="6.5" fill="#FF512F" />
          </svg>
          <p className="font-medium">{items.task}</p>
        </div>
      ))}
    </div>
      

  );
};

export default TodoList;
