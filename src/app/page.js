"use client";

import Image from "next/image";
import { useTranslation } from 'react-i18next';
import '../i18n'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import { RiFileExcel2Fill } from "react-icons/ri";
import eu from "../../public/Eu.png";
import code from "../../public/Code2.png";
import codificador from "../../public/Codificador.jpeg";
import cinemark from "../../public/Cinemark.png";
import mapa from "../../public/Mapa.jpeg";
import conectavel from "../../public/Conectavel.jpeg";
// import curriculo from "../../public/dev.pdf";
import { useState } from "react";
import { IconContext } from "react-icons";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TypeAnimation } from "react-type-animation";
import i18n from 'i18next';

export default function Home() {
  const TAMANHO_ICONES = 12;

  const [darkMode, setDarkMode] = useState(false);

  const [language, setLanguage] = useState(i18n.language);

  const handleChange = (event) => {
    const newValue = event.target.value;
    i18n.changeLanguage(newValue);
    setLanguage(newValue); 
    console.log("Idioma alterado para:", newValue);
  };

  const { t } = useTranslation()
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
              <li className="flex gap-2">
                <a
                  className="bg-gradient-to-r from-red-500 to-red-500 text-white px-4 py-2 rounded-md ml-8"
                  href="/Dev.pdf"
                  download
                >
                  Currículo
                </a>
                <FormControl sx={{ minWidth: 120,  background: "linear-gradient(to right, #f56565, #f56565)" }} size="small">
                  <InputLabel id="demo-select-small-label" sx={{ color: "white" }}>Idioma</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Idioma"
                    onChange={handleChange}
                    MenuProps={{
                      sx:{
                        color: "white",
                      }
                    }}
                  >
                    <MenuItem value="pt">pt-BR</MenuItem>
                    <MenuItem value="es">es-ES</MenuItem>
                    <MenuItem value="en">es-US</MenuItem>
                    <MenuItem value="ja">ja</MenuItem>
                  </Select>
                </FormControl>
              </li>
            </ul>
          </nav>
          <section className="text-center">
            <TypeAnimation
            key={language} 
              sequence={[
                t("PQEU.Tx1"),
                1000,
                t("PQEU.Tx2"),
                1000,
                t("PQEU.Tx3"),
                1000,
                t("PQEU.Tx4"),
                1000,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className={"text-2xl dark:text-white"}
            ></TypeAnimation>
            <div className="flex justify-center p-3 rounded-md object-cover ">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3c6t_VzAfec?si=ynk9KsduwPxEh9yO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </section>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-red-600 font-medium md:text-6xl dark:text-red-500">
              Gabriel Ferreira Amorim
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              {t("Eu.Curso")}
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              {t("Eu.Tx1")}
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
          <div className="relative mx-auto bg-gradient-to-b from-red-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={eu} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">{t("Eu.Sobre_Mim")}</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              {t("Eu.Tx2")}{" "}
              <a
                className="text-red-500 underline"
                href="https://pt.wikipedia.org/wiki/S%C3%A3o_Mateus_(distrito_de_S%C3%A3o_Paulo)"
                target="_black"
              >
                São Mateus
              </a>
              {t("Eu.Tx21")}{" "}
              <a
                className="text-red-500 underline"
                href="https://www.cps.sp.gov.br/fatecs/fatec-zona-leste/"
                target="_black"
              >
                Fatec Zona Leste
              </a>
              {t("Eu.Tx22")}{" "}
              <a
                className="text-red-500 underline"
                href="https://www.cps.sp.gov.br/etecs/etec-de-sapopemba-sapopemba/"
                target="_black"
              >
                ETEC Sapopemba
              </a>
              {t("Eu.Tx23")}{" "}
              <a
                className="text-red-500 underline"
                href="https://www.cps.sp.gov.br/etecs/etec-de-guaianazes-guaianazes/"
                target="_black"
              >
              ETEC Guaianazes
              </a>{" "}
              {t("Eu.Tx25")}{" "}
              <a className="text-red-500 underline" target="_black" href="https://www.sp.senac.br/senac-lapa-tito">
              Senac Lapa Tito.
              </a>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
            {t("Eu.Tx26")}
            </p>
          </div>
          <div className="lg:flex gap-10 justify-center">
            <div className="text-center shadow hover:shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="w-auto flex justify-center">
                <Image src={code} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                {t("Eu.Langs")}
              </h3>
              <p>
                {t("Eu.Tx3")}
              </p>
              <div className="my-6 flex justify-center gap-1 text-red-500">
                <IoLogoJavascript size={32} />
                <FaJava size={32} />
                <IoLogoPython size={32} />
                <DiMysql size={32} />
                <RiFileExcel2Fill size={32} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">{t("Eu.Portfolio")}</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              {t("Eu.Tx4")}{" "}
              <span className="text-red-500">{t("Eu.Tx41")}</span>{t("Eu.Tx42")}{" "}
              <span className="text-red-500">
                {t("Eu.Tx43")}
              </span>{" "}
              {t("Eu.Tx44")}
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              {t("Eu.Tx45")}
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div
              className="basis-1/3 flex-1 border-4 border-stone-700 rounded-md p-2 dark:border-stone-50"
            >
              <a href="https://github.com/Bieelogrom" target="_black">
              <Image
                src={codificador}
                className="rounded-lg object-cover hover:opacity-50 transition ease-in-out duration-500"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                title="Projeto de Aprendizado"
              />
              </a>
            </div>
            <div
              className="basis-1/3 flex-1 border-4 border-stone-700 rounded-md p-2 dark:border-stone-50"
            >
              <a href="https://github.com/Bieelogrom" target="_black">
              <Image
                src={cinemark}
                className="rounded-lg object-cover hover:opacity-50 transition ease-in-out duration-500"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                title="Projeto de Aprendizado"
              />
              </a>
            </div>
            <div
              className="basis-1/3 flex-1 border-4 border-stone-700 rounded-md p-2 dark:border-stone-50"
            >
              <a href="https://bieelogrom.github.io/MapaDeCarreira/" target="_black">
              <Image
                src={mapa}
                className="rounded-lg object-cover hover:opacity-50 transition ease-in-out duration-500"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                title="Mapa de Carreira"
              />
               </a>
            </div>
            <div
              className="basis-1/3 flex-1 border-4 border-stone-700 rounded-md p-2 dark:border-stone-50"
            >
              <a href="https://beacons.ai/conectavel" target="_black">
              <Image
                src={conectavel}
                className="rounded-lg object-cover hover:opacity-50 transition ease-in-out duration-500"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                title="Conectável"
              />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
