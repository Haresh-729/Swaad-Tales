import React from 'react'
import "./style.css";
import Cardsdata from './CardData';
import { useDispatch } from 'react-redux';
import { ADD } from "../redux/actions/action";

const Card = () => {

    const dispatch = useDispatch();

    const send = (e) =>{
        dispatch(ADD(e));
    }

  return (
    <div className=" w-full bg-black h-full xl:items-center xl:flex xl:flex-col">
        <div className="select-none max-w-screen-xl p-2 flex flex-col justify-center w-full h-full">
        <h1 className="font-extrabold text-3xl">Swaad Meals</h1>
        <div className="grid md:grid-cols-3 gap-5 justify-center items-center">
        {Cardsdata.map((element, id) => (
                <div key={id} className="rounded-[3rem] w-[22rem] text-white p-1.5 cursor-pointer flex items-center justify-center hover:shadow-lg hover:shadow-[#ffeb3b]">
                    <div className="flex border-2 border-[#ffeb3b] rounded-[3rem] hover:border-0 m-[1rem] p-[1rem]">
                        <div className=" rounded-md w-[18rem] h-full">
                        <img
                            className="rounded-[2rem] h-[16rem] w-[20rem]"
                            src={element.imgdata}
                            alt="trend"
                        />
                        <div className="flex flex-row gap-1 items-center mt-[1rem]">
                            <h1 className="font-bold">{element.rname}</h1>
                        </div>
                        <div className="flex flex-row mt-3 items-center">
                            <div>
                            <h1 className="font-bold">Price: ₹ {element.price}</h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-full">
                            <button onClick={() => send(element)} className="bg-[#1aadf1] w-full justify-center rounded-[1.7rem] px-3 py-2 items-center mt-[1rem] font-bold text-xl hover:bg-[#56c7fc]">
                                Add to Cart
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                ))}
        </div>
            <h2 className="my-[3rem] text-white">Designed with ❤️ By <a href="https://haresh-729.github.io/My_Portfolio/"><strong className="hover:text-[1.03rem] hover:text-[#136eb8] cursor-pointer "> Haresh Kurade</strong></a></h2>
        </div>
    </div>
  )
}

export default Card
