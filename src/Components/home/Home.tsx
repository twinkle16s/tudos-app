import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

interface Todo {
  title: string;
  Desc: string;
  sno: number;
}

function Home() {
  const [title, setTitle] = useState<string>("");
  const [todo, setTodo] = useState<string>("");
  const [list, setList] = useState<Todo[]>([]);
  const [edit, setEdit] = useState<Todo | null>(null);

  const handleClick = () => {
    if (todo !== "" && title !== "") {
      if (edit) {
        const updatedList = list.map((item) =>
          item.sno === edit.sno ? { ...item, title, Desc: todo } : item
        );
        setList(updatedList);
        setEdit(null);
      } else {
        setList([...list, { Desc: todo, title, sno: list.length + 1 }]);
      }
      setTodo("");
      setTitle("");
    }
  };

  const handleEdit = (item: Todo) => {
    setTitle(item.title);
    setTodo(item.Desc);
    setEdit(item);
  };

  const handleDelete = (sno: number) => {
    setList((updateList) => updateList.filter((item) => item.sno !== sno));
  };

  return (
    <div className="container">
        <h1 className="text">Todo List</h1>
        <form className="input-div">
          <input
            type="text"
            placeholder="Add title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Add Todo"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <div className="btn1" onClick={handleClick}>
            <Link to="/" className="btnLink">
              <i className="fa-solid fa-plus"></i>
            </Link>
          </div>
        </form>

      <div className="table">
        <div className="table-heading">
          <div>Sno</div>
          <div>Title</div>
          <div>Desc</div>
          <div>Action</div>
        </div>
        {list.map((item, index) => {
          return (
            <div className="heading" key={item.sno}>
              <div>{index + 1}</div>
              <div>{item.title}</div>
              <div>{item.Desc}</div>
              <div>
                <div className="btn2">
                  <i
                    className="fas fa-pencil-alt icons"
                    onClick={() => handleEdit(item)}
                  ></i>
                  <i
                    className="fa-solid fa-trash d-icon"
                    onClick={() => handleDelete(item.sno)}
                  ></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;