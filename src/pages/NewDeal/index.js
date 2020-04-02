import React from 'react';

import Page from './Page';

import Service from '../../services';

function NewDeal() {
  const addNewDeal = async data => {
    await Service.Deal.postNewDeal({ ...data });
  };

  return <Page addNewDeal={addNewDeal} />;
}

export default NewDeal;
