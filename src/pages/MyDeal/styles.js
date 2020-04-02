import styled, { css } from 'styled-components';

const ThreeDots = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
`;

export const Container = styled.div`
  padding: 20px;

  h1 {
    margin-bottom: 10px;
  }
`;

export const Deals = styled.ul`
  li {
    width: 70%;
    ${ThreeDots}

    a {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const Offers = styled.ul`
  li + li {
    margin-top: 10px;
  }
`;

export const OffersItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 10px;

  p:nth-child(1) {
    width: 70%;
    ${ThreeDots}
  }
  p:nth-child(2) {
    width: 10%;
    text-align: center;
  }

  ${props =>
    props.accepted === false &&
    css`
      background-color: ${({ theme }) => theme.colors.redLight};
    `}

  ${props =>
    props.accepted &&
    css`
      background-color: ${({ theme }) => theme.colors.greenLight};
    `}
`;
