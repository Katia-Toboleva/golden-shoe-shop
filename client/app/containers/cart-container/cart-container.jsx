import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  DefaultPageWrapper, Spinner, Cart,
} from '@components';

import * as itemActions from '../item-container/state/actions';
import { fetchItem } from '../item-container/state/api';
import items from '../../components/items';

const CartContainer = ({ actions, state }) => {
  const { item, fetchItemRequestStatus } = state;
  const { checkedItems, setCheckedItems } = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    //  NOTE: refetching for getting latest availability
    if (cart.length) {
      const fetchData = async (itemId) => {

          await fetchItem(itemId).then(r => r.json());
      };

      cart.map(el => fetchData(el.itemId));
      console.log(item);
    }
  }, []);

  console.log(checkedItems, 'checkedItems');

  return (
    <>
      <DefaultPageWrapper
        pageActive="cart"
      >
        {fetchItemRequestStatus === 'rejected' && <div>Error!</div>}
        {fetchItemRequestStatus === 'pending' && <Spinner />}
        {fetchItemRequestStatus === 'success' && (
          <>
            <Cart />
            <div>{item.name}</div>
          </>
        )}
      </DefaultPageWrapper>
    </>
  );
};

const mapStateToProps = ({ item }) => ({
  state: item,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(itemActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
