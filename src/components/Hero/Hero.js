import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenidos a <br />
        Mi Porfolio 
      </SectionTitle>
      <SectionText>
        Hola !👋 Mi nombre es Javier soy un Junior FrontEnd Developer con prioridad por el Mobile First, practicas modernas que eleven productividad y
        calidad del código, iniciado en el stack MERN, shadowing a Seniors Devs americanos y participando
        activamente en proyectos de Ecommerce y Marketing como contratista.
      </SectionText>
      <Button onClick={() => window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=dev.javifernandez@gmail.com"}>Contactame</Button>
    </LeftSection>
  </Section>
);

export default Hero;