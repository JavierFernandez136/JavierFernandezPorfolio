import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Llame</LinkTitle>
          <LinkItem href="https://wa.me/541132446159" target="_blank" rel="noopener noreferrer">1132446159</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="https://mail.google.com/mail/?view=cm&fs=1&to=dev.javifernandez@gmail.com"
            target="_blank"
            rel="noopener noreferrer">dev.javifernandez@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>JavierFernandezPorfolio</Slogan>
        </CompanyContainer>
        <SocialContainer>
       <SocialIcons href="https://github.com/JavierFernandez136">
           <AiFillGithub size="3rem"/>
           </SocialIcons>
           <SocialIcons href="https://www.linkedin.com/in/javier-fernandez-0426aa224/">
           <AiFillLinkedin size="3rem"/>
           </SocialIcons>
           <SocialIcons href="https://www.instagram.com/jevycantina/?next=%2F&hl=es-la">
           <AiFillInstagram size="3rem"/>
           </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
