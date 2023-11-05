import React, { useState } from "react";
// import "./Home.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";

const Container = styled.div`
  background-color: rgb(71, 189, 183);
  height: 100vh;
  width: 100vw;
  padding-top: 2px;
`
const Text = styled.h1`
text-align: center;
font-family: "Lobster", sans-serif;
letter-spacing: 3px;
color: white;
font-size: 45px;
margin-top: 75px;
`

const Input = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 620px;
    height: 20px;
    margin-top: 20px;
    border: 2px solid black;
    border-radius: 5px;
    padding: 20px;
  }
  .btn1 {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 15px 0px 20px 0px;
    font-size: 50px;
    text-align: center;
    background-color: rgb(63, 61, 61);
  }
  .btnLink {
    color: white;
    text-decoration: none;
  }
  .btn1:hover {
    cursor: pointer;
    background-color: aqua;
  }

  .btn1:hover {
    cursor: pointer;
  }
  
@media screen and (max-width: 760px) {
      input {
      width: 480px;
      height: 20px;
    }
`
const Table = styled.div`
.table {
  margin-top: 30px;
  display: grid;
  gap: 10px;
  font-family: "Playpen Sans", cursive;
}
.table-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(29, 78, 77);
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin:5px 89px;
}
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(42, 126, 122);
  color: #fff;
  padding: 8px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  margin: 0px 90px;
  border-radius: 5px;
}
.heading:hover{
  background-color: rgb(30, 143, 143);
}

@media screen and (max-width: 760px) {
  .table-heading {
    margin: 5px 50px;
  }
  .heading {
    padding: 8px;
    margin: 0px 50px;
  }
}
`

const Button = styled.div`
  margin-top: 10px;
  color: rgb(27, 27, 27);
  font-size: 30px;
  .d-icon:hover {
    color: rgb(14, 99, 114);
  }
  .icons {
    margin-right: 7px;
  }
  .icons:hover {
    color: rgb(14, 99, 114);
  }
`
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
  const[showAlert, setShowAlert] = useState<boolean>(true);

  const handleClick = () => {
    if (todo !== "" && title !== "") {
      if (edit) {
        const updatedList = list.map((item) =>
          item.sno === edit.sno ? { ...item, title, Desc: todo } : item
        );
        setList(updatedList);
        setEdit(null);
        setShowAlert(true);
      } else {
        setList([...list, { Desc: todo, title, sno: list.length + 1 }]);
      }
      setTodo("");
      setTitle("");
    }
  };
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 100000);
  
    }
  }, [showAlert]);

  const handleEdit = (item: Todo) => {
    setTitle(item.title);
    setTodo(item.Desc);
    setEdit(item);
  };

  const handleDelete = (sno: number) => {
    setList((updateList) => updateList.filter((item) => item.sno !== sno));
  };

  return (
    <Container>
      <Text>Todo List</Text>
      <Input>
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
      </Input>

      <Table>
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
                <Button>
                  <i
                    className="fas fa-pencil-alt icons"
                    onClick={() => handleEdit(item)}
                  ></i>
                  <i
                    className="fa-solid fa-trash d-icon"
                    onClick={() => handleDelete(item.sno)}
                  ></i>
                </Button>
              </div>
            </div>
          );
        })}
      </Table>
    </Container>
  );
}

export default Home;
