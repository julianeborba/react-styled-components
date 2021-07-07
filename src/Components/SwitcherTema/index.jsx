import React from "react";
import { ImgIcone } from "../UI";
import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";

const claro = <ImgIcone src={themeOn} alt="Tema Claro"></ImgIcone>;
const escuro = <ImgIcone src={themeOff} alt="Tema Escuro"></ImgIcone>;

export default ({ tema }) => (tema ? escuro : claro);
