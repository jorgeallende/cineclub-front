import React from "react";
import Header from "../components/Header";
import HeroIllustration from "../assets/hero-illustration.svg";
import { Navigate, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <Header />
      <main className="p-page-container h-[calc(100vh-5rem)] flex items-center w-full">
        <div
          id="hero-left"
          className="flex-1 flex flex-col max-w-[600px] gap-11"
        >
          <div className="flex flex-col gap-6">
            <div id="hero-title" className="font-title font-black">
              <h2 className="text-5xl text-system-black">O SEU</h2>
              <h1 className="text-7xl text-system-orange">CLUBE DO LIVRO</h1>
              <h2 className="text-5xl text-system-black">VIRTUAL</h2>
            </div>

            <span
              id="hero-subtitle"
              className=" text-system-black text-2xl font-light"
            >
              Compartilhe o seus filmes favoritos com seus amigos e veja o que
              eles acham.
            </span>

            <span
              id="hero-subtitle-2"
              className="text-system-black text-2xl font-bold"
            >
              Inicie agora um clube do livro.
            </span>
          </div>

          <button
            onClick={() => {
              navigate("/register");
            }}
            className="px-20 py-5 bg-system-orange self-center rounded-2xl"
          >
            <span className="text-white font-title font-bold text-xl">
              REGISTRAR
            </span>
          </button>
          <a className="self-center underline text-system-black" href="/login">
            Já sou usuário →
          </a>
        </div>

        <div id="hero-right" className="flex-1 flex justify-end">
          <img src={HeroIllustration} alt="" />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
