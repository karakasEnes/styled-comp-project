import ContainerComponent from '../container/Container.component';
import { FooterStyled } from './Footer.styled';

export default function FooterComponent() {
  return (
    <FooterStyled>
      <ContainerComponent>
        <img src='images/logo_white.svg' alt='' />

        <div className='container-flex'>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <p>&copy; 2021 Huddle. All rights reserved</p>
      </ContainerComponent>
    </FooterStyled>
  );
}
