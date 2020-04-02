import styled from 'styled-components';

export const Container = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.gray};
  height: 35px;
  font-size: 16px;
  padding: 5px 10px;
`;
