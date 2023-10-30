import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(null); 

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

  const handleEdit = (item) => {
    setTitle(item.title);
    setTodo(item.Desc);
    setEdit(item);
  };

  const handleDelete = (sno) => {
    setList((updateList) => updateList.filter((item) => item.sno !== sno));
  };

  return (
    <div className="container">
      <div className="div-container">
        <h1>Todo List</h1>
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
              <i className="fa-solid fa-plus" />
            </Link>
          </div>
        </form>
      </div>
      
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
                  />
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
