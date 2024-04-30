/** @format */

import { Link } from "react-router-dom";
import linkedin from "../assets/link.png";
import git from "../assets/git.png";
import face from "../assets/face.png";
import foto from "../assets/foto.jpg"
import * as S from "./styled";

export default function Header() {
  return (
    <S.Header>
      <S.BoxLogo>
      <img src={foto} alt="" />
        <S.Title>Vinicius Pimentel</S.Title>
        <S.Text>Front-end Developer</S.Text>
      </S.BoxLogo>
      <S.BoxMenu>
        <ul>
          <S.Lista linha="1px solid white">
            <Link to="/">Inicio</Link>
          </S.Lista>
          <S.Lista>
            <Link to="/sobre">Sobre mim</Link>
          </S.Lista>
          <S.Lista>
            <Link to="/projetos">Projetos</Link>
          </S.Lista>
        </ul>
      </S.BoxMenu>
      <S.BoxIcon>
        <a href="" target="blank">
          <img src={linkedin} alt="" />
        </a>
        <a href="">        
          <img className="borda" src={git} alt="" />
        </a>
        <a href="">         
       <img src={face} alt="" />
        </a>
        <input type="email" placeholder="@exemplo"/>
      </S.BoxIcon>
    </S.Header>
  );
}
