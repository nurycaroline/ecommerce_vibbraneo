import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-end;

  textarea,
  input {
    width: 100%;
    height: 35px;
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    color: ${({ theme }) => theme.colors.secondary};
    padding-left: 5px;
  }

  label + label {
    margin-top: 20px;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;

  input {
    display: none;
  }

  p {
    flex-basis: 100%;
  }

  label {
    margin-top: 0 !important;
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
`;

export const LabelName = styled.p``;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  padding: 20px;
`;

export const LabelRadio = styled.label`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 15px 30px;

  ${props =>
    props.active &&
    css`
      color: #fff;
      background-color: ${({ theme }) => theme.colors.secondary};
    `}
`;

export const ButtonSave = styled.button`
  flex-basis: 100%;
  max-width: 153px;
  height: 40px;
  margin-left: auto;
`;
