import React, { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { DLT } from "../redux/actions/action";
import logo from "../assets/Swaad_Logo.png"


const NavBar = () => {

  const [price1, setPrice] = useState(0);

  const getdata = useSelector((state)=> state.cartreducer.carts);

  const dispatch = useDispatch();
  const dlt = (id) => {
    dispatch(DLT(id));
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate("/");
  }

  const total = ()=> {
    let price = 0;
    let qnt= 0;
    getdata.map((element)=>{
      price = element.price + price * element.qnty;
      qnt = element.qnty;
    });
    setPrice(price);
  }
  

  useEffect(()=>{
    total();
  },[total]);

  return (
    <div className="select-none top-0 flex sticky z-50 justify-between items-center w-full h-20 px-4 text-white bg-[#161616]">
      <div className="flex flex-row">
        <img src={logo} alt="logo" />
        <button onClick={()=>navigate("/menu")}>
          <h1 className="px-4 cursor-pointer uppercase font-raleway font-medium text-gray-500 hover:scale-105 duration-200">ADD TO CART</h1>
        </button>
        <button onClick={handleClick1}>
          <h1 className="px-4 cursor-pointer uppercase font-raleway font-medium text-gray-500 hover:scale-105 duration-200">HOME</h1>
        </button>
      </div>
      <Badge
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        badgeContent={getdata.length}
        color="primary"
        className="mr-[2rem]"
      >
        <i
          className="select-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 fa-solid fa-cart-shopping cursor-pointer "
          style={{ fontSize: 25 }}
        ></i>
      </Badge>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >

        {
          getdata.length ?(
          <div className="select-none flex flex-col p-4">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <h1 className="ml-[.5rem]">Photo</h1> 
                <h1 className="ml-[6rem]"> Restaurant Name</h1>
              </div>
              <hr className="w-full mx-[.2rem] h-[.2rem] border-1 bg-black"></hr>
              <div className="flex flex-col">
                {
                  getdata.map((e)=>{
                    return( 
                      <div className="select-none flex border-2 rounded-xl pb-[1.5rem] px-[1rem] mt-[1rem]">
                        <i onClick={()=>dlt(e.id)} className="fas fa-trash cursor-pointer absolute mt-2 right-8 text-[#F23307]"></i>
                      <table className="mt-[2rem]">
                      <tr>
                        <td>
                          <NavLink to={`/cart/${e.id}`} onClick={handleClose}><img className="h-[6rem] w-[7rem]" src={e.imgdata} alt="food" /></NavLink>
                        </td>
                        <td className="pl-[.7rem]">
                          <p><strong>Restraunt Name: </strong>{e.rname}</p>
                          <p><strong>Price: </strong> ₹ {e.price }</p>
                          <p><strong>Quantity:</strong>  {e.qnty}</p>
                        </td>
                      </tr>
                    </table>
                    </div>
                    )})
                }
              </div>
              <div className="flex flex-col text-[1rem]">
                <hr className="w-full mt-[1rem] mx-[.2rem] h-[.2rem] border-1 bg-black"></hr>
                <h1 className="ml-[.5rem] "><strong>Total: ₹ {price1}</strong></h1>
              </div>
            </div>

          </div>) :(<div className="flex flex-row mt-[2rem] px-[2rem]">
            <p className="mt-[1rem]">Your Cart is Empty</p>
            <img className="w-[3rem]" src="https://raw.githubusercontent.com/harsh17112000/react_redux_cart_youtube/main/public/cart.gif" alt="cartgif"/>
          </div>)
        }

        <div className="card_details p-3 flex justify-center align-items-center">
            <i onClick={handleClose} className="fas fa-close absolute top-3 right-4 cursor-pointer text-[1.5rem]"></i>
        </div>
      </Menu>
    </div>
  );
};

export default NavBar;
