import React from 'react';

import { Container, Deals, Offers, OffersItem } from './styles';

export default function MyDeal({ deals, offers }) {
  return (
    <Container>
      <div>
        <h1>Minhas negociacoes</h1>
        <Deals>
          {deals &&
            deals.length > 0 &&
            deals.map((deal, i) => (
              <li key={i}>
                <a href={`deal/:id`}>{deal.description}</a>
              </li>
            ))}
        </Deals>
      </div>
      <br />
      <div>
        <h1>Minhas Ofertas</h1>
        <Offers>
          {offers &&
            offers.length > 0 &&
            offers.map((offer, i) => (
              <OffersItem accepted={offer.accepted} key={i}>
                <p>{offer.description}</p>
                <p>
                  {offer.accepted === null
                    ? 'Aguardando'
                    : offer.accepted
                    ? 'Aceita'
                    : 'Negada'}
                </p>
              </OffersItem>
            ))}
        </Offers>
      </div>
    </Container>
  );
}
