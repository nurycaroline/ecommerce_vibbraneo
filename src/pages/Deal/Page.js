import React from 'react';

import {
  Container,
  Cads,
  Card,
  Images,
  Description,
  Address,
} from './styles';

export default function Page({ deals }) {
  return (
    <Container>
      <Cads>
        {deals &&
          deals.length > 0 &&
          deals.map(d => (
            <Card key={d.id} type={d.type}>
              <Images>
                {d.photos &&
                  d.photos.length > 0 &&
                  d.photos.map((p, i) => <img key={i} src={p.src} />)}
              </Images>

              <Description>{d.description}</Description>
              <Address>
                {d.location.city} - {d.location.state}
              </Address>

              <p>
                {d.type === 2 ? 'Troco por: ' : 'Valor: '}
                <strong>
                  {d.type === 2 ? d.trade_for : d.value}
                </strong>
              </p>
            </Card>
          ))}
      </Cads>
    </Container>
  );
}
