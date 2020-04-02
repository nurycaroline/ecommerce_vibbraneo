import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Form,
  RadioGroup,
  Error,
  LabelRadio,
  Block,
  LabelName,
  ButtonSave,
} from './styles';

export default function Page({ addNewDeal }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const required = register({ required: true });
  const onSubmit = data => {
    addNewDeal(data);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Block>
          <LabelName>Tipo de Negociacao</LabelName>
          <RadioGroup>
            <LabelRadio active={watch('type') === '1'}>
              <span>Venda</span>
              <input
                type='radio'
                radioGroup='typeDeal'
                name='type'
                ref={required}
                value='1'
              />
            </LabelRadio>
            <LabelRadio active={watch('type') === '2'}>
              <span>Troca</span>
              <input
                type='radio'
                radioGroup='typeDeal'
                name='type'
                ref={required}
                value='2'
              />
            </LabelRadio>
            <LabelRadio active={watch('type') === '3'}>
              <span>Deseja</span>
              <input
                type='radio'
                radioGroup='typeDeal'
                name='type'
                ref={required}
                value='3'
              />
            </LabelRadio>
            {errors.type && <Error>Este campo é obrigatório</Error>}
          </RadioGroup>
          <label>
            <span>Descrição:</span>
            <textarea name='description' ref={required} />
            {errors.description && (
              <Error>Este campo é obrigatório</Error>
            )}
          </label>

          <label>
            <span>Troco por:</span>
            <input name='trade_for' ref={register} />
            {errors.trade_for && (
              <Error>Este campo é obrigatório</Error>
            )}
          </label>
          <label>
            <span>Valor:</span>
            <input name='value' ref={register} />
            {errors.value && <Error>Este campo é obrigatório</Error>}
          </label>
        </Block>

        <Block>
          <label>
            <span>CEP:</span>
            <input name='zip_code' ref={required} />
            {errors.zip_code && (
              <Error>Este campo é obrigatório</Error>
            )}
          </label>

          <label>
            <span>Endereço:</span>
            <input name='address' ref={required} />
            {errors.address && (
              <Error>Este campo é obrigatório</Error>
            )}
          </label>

          <label>
            <span>Cidade:</span>
            <input name='city' ref={required} />
            {errors.city && <Error>Este campo é obrigatório</Error>}
          </label>

          <label>
            <span>Estado:</span>
            <input name='state' ref={required} />
            {errors.state && <Error>Este campo é obrigatório</Error>}
          </label>
        </Block>

        <ButtonSave type='submit'>Adicionar Negociação</ButtonSave>
      </Form>
    </Container>
  );
}
