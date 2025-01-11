import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
 <Container>
  <Div1>
    <Link href="/">
    <a style={{ display:"flex",alignItems:"center",color:"white", marginBottom:"20px"}}>
    <DiCssdeck size="3rem"/> <Span>JavierFernandez</Span>
    </a>
    </Link>
  </Div1>
  <Div2>
    <li>
      <Link href="#projects">
      <NavLink>Proyectos</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
      <NavLink>Tecnologias</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
      <NavLink>Sobre Mi</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
    <SocialIcons href="https://github.com/JavierFernandez136">
    <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/javier-fernandez-0426aa224/">
    <AiFillLinkedin size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://www.instagram.com/jevycantina/?next=%2F&hl=es-la">
    <AiFillInstagram size="3rem"/>
    </SocialIcons>
  </Div3>
 </Container>
);

export default Header;
