import React from "react";
import styled from "styled-components";
const NavContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:15px;
  background-color: black;
  position: fixed;
   top: 0;
   left: 0;
 
} 
.nav-title h1{
  color: white;
  font-family: 'Averia Serif Libre', serif;
  background-color: black;

}
`
const Navbar: React.FC = () => {
  return (
    <>
      <NavContainer>
        <div className="nav-title">
          <h1>Todos</h1>
        </div>
      </NavContainer>
    </>
  );
}

export default Navbar;
