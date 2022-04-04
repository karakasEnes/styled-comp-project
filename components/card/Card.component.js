import { CardStyled } from './Card.styled';

export default function CardComponent({ id, title, body, image }) {
  return (
    <CardStyled layout={id % 2 === 0 && 'row-reverse'}>
      <div className='content'>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>

      <div className='img-container'>
        <img src={`images/${image}`} />
      </div>
    </CardStyled>
  );
}
