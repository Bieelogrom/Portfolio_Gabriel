"use client";

import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import eu from "../../public/Eu.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import codificador from "../../public/Codificador.jpeg";
import cinemark from "../../public/Cinemark.png";
import mapa from "../../public/Mapa.jpeg";
import conectavel from "../../public/Conectavel.jpeg";
// import curriculo from "../../public/dev.pdf";
import { useState } from "react";
import { IconContext } from "react-icons";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const TAMANHO_ICONES = 12;

  const [darkMode, setDarkMode] = useState(false);

  const enviarParaProjeto = () => {
    location.href = "https://github.com/Bieelogrom";
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              @Gabriel.fav
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="/Dev.pdf"
                  download
                >
                  Currículo
                </a>
              </li>
            </ul>
          </nav>
          <section className="text-center">
            <TypeAnimation
              sequence={[
                "Por que deveriam me contratar?",
                1000,
                "O que me torna diferente?",
                1000,
                "O que me motiva?",
                1000,
                "O que me faz feliz?",
                1000,
                () => {
                  console.log("Teste!");
                },
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className={"text-2xl dark:text-white"}
            ></TypeAnimation>
            <div className="flex justify-center p-3">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rgCSgNakvlo?si=mFmf2yo4YLbDnLx9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </section>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-300">
              Gabriel Ferreira Amorim
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Estudante de Análise e Desenvolvimento de Sistemas
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Desenvolvedor empenhado em construir o software de melhor
              qualidade. Tenho facilidade em aprender rapidamente novas
              tecnologias e conceitos, o que me permite adaptar-me
              eficientemente a diferentes ambientes de trabalho e projetos.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.instagram.com/gabriel.fav/" target="_black">
              <AiFillInstagram className="dark:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/gabrielfav/" target="_black">
              <AiFillLinkedin className="dark:text-white" />
            </a>
            <a href="https://github.com/Bieelogrom" target="_black">
              <AiFillGithub className="dark:text-white" />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={eu} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Sobre Mim</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Olá! Sou Gabriel Ferreira Amorim, tenho 20 anos e moro em{" "}
              <a
                className="text-teal-500 underline"
                href="https://pt.wikipedia.org/wiki/S%C3%A3o_Mateus_(distrito_de_S%C3%A3o_Paulo)"
              >
                São Mateus
              </a>
              , na Zona Leste de São Paulo. Atualmente curso o 2º semestre de
              Análise e Desenvolvimento de Sistemas na,{" "}
              <a
                className="text-teal-500 underline"
                href="https://www.cps.sp.gov.br/fatecs/fatec-zona-leste/"
              >
                Fatec Zona Leste
              </a>
              . Minha trajetória começou com o técnico em Marketing na{" "}
              <a
                className="text-teal-500 underline"
                href="https://www.cps.sp.gov.br/etecs/etec-de-sapopemba-sapopemba/"
              >
                ETEC Sapopemba
              </a>
              , depois segui para Desenvolvimento de Sistemas na{" "}
              <a
                className="text-teal-500 underline"
                href="https://www.cps.sp.gov.br/etecs/etec-de-guaianazes-guaianazes/"
              >
              ETEC Guaianazes
              </a>{" "}
              e me aprofundei em Fullstack Java no {" "}
              <a className="text-teal-500 underline" href="https://www.sp.senac.br/senac-lapa-tito">
              Senac Lapa Tito.
              </a>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
            Já atuei como aprendiz no setor administrativo. Iniciei tirando dúvidas nos guichês de terminais de ônibus, mas fui gradualmente passando para a zeladoria, onde fazia controle do estoque e atendimento aos postos. Aquela experiência me ensinou bastante sobre organização, resolubilidade e tratamento com diferentes profis e pessoas.
            </p>
          </div>
          <div className="lg:flex gap-10 justify-center">
            <div className="text-center shadow hover:shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="w-auto flex justify-center">
                <Image src={code} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Linguagens, Ferramentas e Frameworks
              </h3>
              <p>
                Desenvolvendo aplicações com o que há de mais recente no
                mercado.
              </p>
              <div className="my-6 flex justify-center gap-1 text-teal-500">
                <IoLogoJavascript size={32} />
                <FaJava size={32} />
                <IoLogoPython size={32} />
                <DiMysql size={32} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Ao longo da minha carreira, participei de{" "}
              <span className="text-teal-500">diversos projetos</span> que
              exemplificam minhas habilidades e meu compromisso com a
              excelência. Cada projeto é uma{" "}
              <span className="text-teal-500">
                oportunidade de aplicar meus conhecimentos
              </span>{" "}
              e de aprender algo novo, sempre com o objetivo de superar as
              expectativas dos clientes e usuários.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Eu busco sempre aplicar o máximo de tudo que aprendi em meus
              projetos.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div
              className="basis-1/3 flex-1 border-4 border-stone-700 rounded-md p-2 dark:border-stone-50"
              onClick={enviarParaProjeto}
            >
              <Image
                src={codificador}
                className="rounded-lg object-cover hover:opacity-50 transition ease-in-out duration-500"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                title="Projeto de Aprendizado"
              />
            </div>
            <div
              className="basis-1/3 flex-1 border-4 border-stone-700 rounded-md p-2 dark:border-stone-50"
              onClick={enviarParaProjeto}
            >
              <Image
                src={cinemark}
                className="rounded-lg object-cover hover:opacity-50 transition ease-in-out duration-500"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                title="Projeto de Aprendizado"
              />
            </div>
            <div
              className="basis-1/3 flex-1 border-4 border-stone-700 rounded-md p-2 dark:border-stone-50"
              onClick={enviarParaProjeto}
            >
              <Image
                src={mapa}
                className="rounded-lg object-cover hover:opacity-50 transition ease-in-out duration-500"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                title="Mapa de Carreira"
              />
            </div>
            <div
              className="basis-1/3 flex-1 border-4 border-stone-700 rounded-md p-2 dark:border-stone-50"
              onClick={enviarParaProjeto}
            >
              <Image
                src={conectavel}
                className="rounded-lg object-cover hover:opacity-50 transition ease-in-out duration-500"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                title="Conectável"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
