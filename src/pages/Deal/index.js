import React, { useState, useEffect } from 'react';
import Page from './Page';

import Service from '../../services';

function Deal() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const loadDeals = async () => {
      const res = await Service.Deal.postSearch({});
      setDeals(res);
    };
    loadDeals();
  }, []);

  return <Page deals={deals} />;
}

export default Deal;
