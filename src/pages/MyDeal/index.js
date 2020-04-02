import React, { useState, useEffect } from 'react';

import Service from '../../services';

import Page from './Page';

function MyDeal() {
  const [deals, setDeals] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const loadMyDealsOffers = async () => {
      const { deals, offers } = await Service.User.getDeals();
      setDeals(deals);
      setOffers(offers);
    };
    loadMyDealsOffers();
  }, []);

  return <Page deals={deals} offers={offers} />;
}

export default MyDeal;
