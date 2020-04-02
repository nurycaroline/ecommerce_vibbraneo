import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 60px;

  img {
    width: 144px;
  }
`;

export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  cursor: pointer;

  img {
    width: 20px;
  }
`;
