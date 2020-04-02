import styled from 'styled-components';

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 60px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 60px;
  }

  li + li {
    margin-left: 20px;
  }
`;

export const Item = styled.li`
  a {
    font-size: 16px;
    font-weight: bold;
    color: ${props =>
      props.active
        ? props.theme.colors.secondary
        : props.theme.colors.blue};
  }
`;
