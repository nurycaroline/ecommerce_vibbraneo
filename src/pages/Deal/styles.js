import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
`;

export const Cads = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 30px auto 0 auto;
  max-width: 980px;

  li + li {
    margin-left: 40px;
  }
`;

export const Card = styled.li`
  width: 250px;
  height: 370px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  ${props =>
    props.type === 1 &&
    css`
      box-shadow: 2px 3px 6px rgba(2, 178, 242, 0.25);
    `}
  ${props =>
    props.type === 2 &&
    css`
      box-shadow: 2px 3px 6px rgba(55, 186, 174, 0.25);
    `}
  ${props =>
    props.type === 3 &&
    css`
      box-shadow: 2px 3px 6px rgba(106, 176, 85, 0.25);
    `}
`;

export const Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`;

export const Description = styled.p``;

export const Address = styled.p``;
