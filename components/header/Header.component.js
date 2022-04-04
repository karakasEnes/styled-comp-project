import ButtonComponent from '../button/Button.component';
import ContainerComponent from '../container/Container.component';
import HeroComponent from '../hero/Hero.component';
import { HeaderStyled, LogoC, NavC } from './Header.styled';

export default function HeaderComponent() {
  return (
    <HeaderStyled>
      <ContainerComponent>
        <NavC>
          <LogoC src='images/logo.svg' alt='mylogo' />
          <ButtonComponent>Try It Free</ButtonComponent>
        </NavC>

        <HeroComponent />
      </ContainerComponent>
    </HeaderStyled>
  );
}
