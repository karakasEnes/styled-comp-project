import CardComponent from '../card/Card.component';
import { CardsStyled } from './Cards.styled';
import ContainerComponent from '../container/Container.component';

export default function CardsComponent(props) {
  return (
    <ContainerComponent>
      <CardsStyled>
        {props.content.map((item) => {
          return <CardComponent key={item.id} {...item} />;
        })}
      </CardsStyled>
    </ContainerComponent>
  );
}
