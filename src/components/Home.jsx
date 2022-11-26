import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Sbi.png";

const Home = () => {

  const navigate =  useNavigate();
  const handleClick = () => {
    navigate("/menu")
  }

  return (
    <div className=" select-none flex w-full top-0 items-center justify-center h-screen bg-black">
      <div className="flex flex-col top-0 items-center p-[2rem] mt-0 h-screen">
        <img src={logo} className="md:w-[20rem] w-[16rem]" alt="logo" />
        <h1 className="text-red-700 font-signature md:leading-7 tracking-wider font-bold mt-[4rem] md:text-6xl text-5xl">You are one step longer To Experience happiness...!!</h1>
        <button onClick={handleClick} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-white border-white border-4 hover:border-red-700 hover:bg-yellow-400 hover:text-red-700 font-extrabold bg-[#161616] text-2xl font-raleway rounded-[3rem] mt-[3rem] p-[2rem] uppercase">Order Now</button>
        <h2 className="select-none mt-[5rem] text-white">Designed with ❤️ By <a href="https://haresh-729.github.io/My_Portfolio/"><strong className="hover:text-[1.03rem] hover:text-[#136eb8] cursor-pointer "> Haresh Kurade</strong></a></h2>
      </div>
    </div>
  );
};

export default Home;
