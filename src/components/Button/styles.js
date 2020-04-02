import styled, { css } from 'styled-components';

export const Container = styled.button`
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 35px;

  ${props =>
    props.variant === 'primary' &&
    css`
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.secondary};
    `}
  ${props =>
    props.variant === 'secondary' &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
      border: 1px solid ${({ theme }) => theme.colors.secondary};
    `}
`;
