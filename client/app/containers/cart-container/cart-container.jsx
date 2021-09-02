/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  DefaultPageWrapper, Spinner, Cart,
} from '@components';
import { calculateSubtotal } from '../../utilities/helpers';

import * as itemActions from '../item-container/state/actions';
import { fetchItem } from '../item-container/state/api';

const CartContainer = (props) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [fetchItemsRequestStatus, setFetchItemsRequest] = useState(true);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length) {
      try {
        setFetchItemsRequest('pending');
        const fetchData = async (id) => await fetchItem(id).then(r => r.json());

        //  NOTE: refetching selected items for getting latest availability
        const recheckItemAvailability = async () => {
          const arr = [];

          for (const { itemId, selectedOptions } of cart) {
            const latestItemObj = await fetchData(itemId);

            const { availability } = latestItemObj;

            const itemIndex = availability.findIndex((el) => selectedOptions.color === el.color
              && selectedOptions.size === el.size
              && selectedOptions.quantity <= el.quantity);

            let finalLatestObj;

            if (itemIndex !== -1) {
              finalLatestObj = {
                ...latestItemObj,
                selectedOptions,
                isItemAvailable: true,
              };
            } else {
              finalLatestObj = {
                ...latestItemObj,
                selectedOptions,
                isItemAvailable: false,
              };
            }

            arr.push(finalLatestObj);
          }
          setCheckedItems(arr);
        };

        recheckItemAvailability();
        setFetchItemsRequest('success');
      } catch (error) {
        console.log(error);
        setFetchItemsRequest('rejected');
        throw Error;
      }
    }
  }, []);

  const handleCheckoutButtonClick = () => {
    // Note: future implementation of checkout and payment process here
  };

  return (
    <>
      <DefaultPageWrapper
        pageActive="cart"
      >
        {fetchItemsRequestStatus === 'rejected' && <div>Error!</div>}
        {(fetchItemsRequestStatus === 'pending' || !checkedItems.length) && <Spinner />}
        {fetchItemsRequestStatus === 'success' && !!checkedItems.length && (
          <>
            <Cart
              items={checkedItems}
              subtotal={calculateSubtotal(checkedItems)}
              onCheckoutButtonClick={handleCheckoutButtonClick}
            />
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
