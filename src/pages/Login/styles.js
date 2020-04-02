import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100vw;
  height: 100vh;
`;

export const Form = styled.form`
  position: stick;
  margin: auto;
  width: 230px;
  height: 185px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Logo = styled.img`
  margin: 60px;
`;

export const Title = styled.h1`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const GroupButtons = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    flex-basis: 0;
    flex-grow: 1;
  }

  button + button {
    margin-left: 20px;
  }
`;
