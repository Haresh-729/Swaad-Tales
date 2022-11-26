import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD,DLT, REMOVE } from "../redux/actions/action";
import "./style.css"

const CardDetails = () => {

  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getdata = useSelector((state)=> state.cartreducer.carts);
  let {id} = useParams();

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id === id;
    });
    setData(comparedata);
  }

  useEffect(()=>{
    compare();
  },[id])

  const dlt = (id) => {
    dispatch(DLT(id));
    navigate("/");
  }

  const send = (e) =>{
    dispatch(ADD(e));
  }

  const remove = (items) =>{
    dispatch(REMOVE(items));
  }

  return (
    <div className=" w-full md:h-screen bg-black xl:items-center xl:flex xl:flex-col py-[5rem]">
      <div className="overflow-y-scroll w-full scrollbar-hide h-full mx-5 flex flex-col items-center">
      <h2 className="text-2xl text-red-700 font-bold mt-[2rem]">Item Details Page</h2>
      {
        getdata.map((element)=> {
          return(
              <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 flex flex-col hover:shadow-white border-2 rounded-[3rem] p-[2rem] items-center md:flex-row mt-[2rem] ">
                <div className=" flex md:flex-row flex-col text-white p-2 mx-[3rem]  items-center shadow-md">
                  <img className="w-[20rem]" src={element.imgdata} alt="itemimg" />
                  <div className="flex flex-col ml-[2rem] text-white items-start gap-6">
                    <p><strong>Restaurant:</strong> {element.rname}</p>          
                    <p className=""><strong>Price: </strong>₹ {element.price}</p>           
                    <p><strong>Dishes:</strong> {element.address}</p>           
                    <p><strong>Total: </strong>₹ {element.price * element.qnty}</p>
                    <div className="flex flex-row justify-between bg-gray-400  w-[4rem] h-[2rem] cursor-pointer">
                      <h1 className="font-bold text-xl" onClick={element.qnty<=1 ?() => dlt(element.id) : ()=>remove(element)}>-</h1>
                      <h1 className="font-bold text-xl">{element.qnty}</h1>
                      <h1 className="font-bold text-xl" onClick={()=>send(element)}>+</h1>
                    </div>           
                  </div>
                  <div className="flex flex-col ml-[2rem] items-start gap-6">
                    <p><strong>Rating:</strong><span className="bg-[#0D9219] ml-[1rem] pl-2 px-1 rounded-[1rem] text-white">{element.rating} ★</span></p>           
                    <p><strong>Order Review: </strong> {element.somedata} <br className="md:hidden"/> within a week</p>           
                    <p><strong>Remove:</strong><i onClick={()=>dlt(element.id)} className="fa-solid fa-trash text-[#F23307] cursor-pointer ml-[1rem] text-xl"></i></p>                   
                  </div>
                </div>
              </div>
          )
        })
      }
      </div>
      <h2 className="mt-[3rem] text-white">Designed with ❤️ By <a href="https://haresh-729.github.io/My_Portfolio/"><strong className="hover:text-[1.03rem] hover:text-[#136eb8] cursor-pointer "> Haresh Kurade</strong></a></h2>
    </div>
  );
};

export default CardDetails;
