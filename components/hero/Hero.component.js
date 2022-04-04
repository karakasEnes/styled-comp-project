import ButtonComponent from '../button/Button.component';
import { HeroStyled, ImageC } from './Hero.styled';

export default function HeroComponent() {
  return (
    <HeroStyled>
      <div>
        <h1>Build The Community Your Fans Will Love</h1>

        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>

        <ButtonComponent bg='#ff0099' color='#fff'>
          Get Started For Free
        </ButtonComponent>
      </div>

      <ImageC src='images/illustration-mockups.svg' alt='no-image' />
    </HeroStyled>
  );
}
