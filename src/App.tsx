import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todoText, setTodoText] = useState<string>("");
  interface Todo {
    id: number;
    text: string;
    edit: boolean;
  }
  const [list, setList] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>();
  const Id = useRef<number>(0);
  const [editText, setEditText] = useState<string>("");

  function addList(): void {
    setList((prev) => [
      ...prev,
      { id: Id.current, text: todoText, edit: false },
    ]);
    Id.current++;
  }

  function deleteList(id: number): void {
    setList((prev) => prev.filter((l) => l.id !== id));
  }

  function saveEditList() {
    if (editId === null) return;

    setList((prev) =>
      prev.map((list) =>
        list.id === editId ? { ...list, text: editText } : list
      )
    );

    setEditId(null); // 👈 edit modundan çık
    setEditText("");
  }

  return (
    <>
      <h1 className="text-xl text-center mt-10">TO-DO APP</h1>
      <div className="grid items-center justify-items-center m-10">
        <div className="w-5/6">
          <input
            placeholder="görev girin"
            className="m-1 bg-amber-50 text-gray-900 w-6/8 rounded-md p-1"
            value={todoText}
            onChange={(e) => {
              setTodoText(e.target.value);
            }}
          ></input>
          <button
            className="bg-blue-700 p-1 rounded-md w-1/8 ml-1"
            onClick={() => addList()}
          >
            ekle
          </button>
        </div>

        <ul className="w-5/6 m-3">
          {list.map((l, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-1 m-1 bg-gray-500 rounded-md w-full text-black "
            >
              {editId === l.id ? (
                <>
                  <input
                    placeholder={l.text}
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  ></input>
                  <button
                    className="bg-blue-500 rounded-md w-1/8 m-0.5"
                    onClick={() => saveEditList()}
                  >
                    save
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <p className="w-7/8">{l.text}</p>
                  <button
                    className="bg-blue-500 rounded-md w-1/8 m-0.5"
                    onClick={() => deleteList(l.id)}
                  >
                    delete
                  </button>
                  <button
                    className="bg-gray-200 rounded-md w-1/8 m-0.5"
                    onClick={() => {
                      setEditId(l.id);
                    }}
                  >
                    edit
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

//akış
/*
1. edit moduna geç(listeden inputa dön,kaydet butonu ekle)
2. yazıyı düzenle
3. kaydet
*/
