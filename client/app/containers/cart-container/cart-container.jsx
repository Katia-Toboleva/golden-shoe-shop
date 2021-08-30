/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable object-shorthand */
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  DefaultPageWrapper, Spinner, Cart, Text,
} from '@components';

import * as itemActions from '../item-container/state/actions';
import { fetchItem } from '../item-container/state/api';

const CartContainer = ({ actions, state }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [fetchItemsRequestStatus, setFetchItemsRequest] = useState(null);

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
              && selectedOptions.size === el.size && el.quantity > 0);

            let finalLatestObj;

            if (itemIndex !== -1) {
              finalLatestObj = {
                ...latestItemObj,
                selectedOptions: selectedOptions,
                isItemAvailable: true,
              };
            } else {
              finalLatestObj = {
                ...latestItemObj,
                selectedOptions: selectedOptions,
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

  return (
    <>
      <DefaultPageWrapper
        pageActive="cart"
      >
        {fetchItemsRequestStatus === 'rejected' && <div>Error!</div>}
        {fetchItemsRequestStatus === 'pending' && <Spinner />}
        {fetchItemsRequestStatus === 'success' && (
        <>
          {/* <Cart /> */}
          {checkedItems.map((el, i) => (
            <Text text={el.name} />

          ))}
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
