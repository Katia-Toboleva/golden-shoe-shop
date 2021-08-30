/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  DefaultPageWrapper, Items, Spinner, Filters, Modal,
} from '@components';

import { fetchItem } from '../item-container/state/actions';
import { fetchItems } from '../items-container/state/actions';

const WomensContainer = (props) => {
  const { fetchItemRequestStatus, item } = props.item;
  const { fetchItemsRequestStatus, items } = props.items;
  const [womanFilterSelected, setWomanFilterSelected] = useState(undefined);
  const [sizeFilterSelected, setSizeFilterSelected] = useState(undefined);
  const [colorFilterSelected, setColorFilterSelected] = useState(undefined);
  const [priceFilterSelected, setPriceFilterSelected] = useState(undefined);
  const [sortFilterSelected, setSortFilterSelected] = useState(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    props.fetchItems('woman');
  }, []);

  useEffect(() => {
    if (fetchItemRequestStatus === 'success') {
      setIsModalVisible(true);
    }
    props.fetchItems('woman');
  }, [fetchItemRequestStatus]);

  const handleFilterClick = (value, label) => {
    if (label === 'women') {
      setWomanFilterSelected(value);
    }
    if (label === 'size') {
      setSizeFilterSelected(value);
    }
    if (label === 'colour') {
      setColorFilterSelected(value);
    }
    if (label === 'price') {
      setPriceFilterSelected(value);
    }
    if (label === 'sort') {
      setSortFilterSelected(value);
    }
  };

  const handleItemClick = (id) => {
    props.fetchItem(id);
  };

  const handleModalAction = (action, selectedItem) => {
    if (action === 'close') {
      setIsModalVisible(false);
    }
    if (action === 'add-item') {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      localStorage.setItem('cart', JSON.stringify([...cartItems, selectedItem]));
    }
  };

  return (
    <>
      {fetchItemRequestStatus === 'rejected' && <div>Error!</div>}
      {fetchItemRequestStatus === 'pending' && <Spinner />}
      {fetchItemRequestStatus === 'success' && (
        <Modal
          panel={{
            type: 'view-item',
            props: item,
          }}
          visible={isModalVisible}
          theme="view-item"
          size="full-page"
          onAction={handleModalAction}
        />
      )}
      <DefaultPageWrapper
        pageActive="women"
      >
        <Filters
          onFilterClick={handleFilterClick}
          womanFilterSelected={womanFilterSelected}
          sizeFilterSelected={sizeFilterSelected}
          colorFilterSelected={colorFilterSelected}
          priceFilterSelected={priceFilterSelected}
          sortFilterSelected={sortFilterSelected}
        />
        {fetchItemsRequestStatus === 'rejected' && <div>Error!</div>}
        {fetchItemsRequestStatus === 'pending' && <Spinner />}
        {fetchItemsRequestStatus === 'success' && (
          <Items
            items={items}
            onItemClick={handleItemClick}
          />
        )}
      </DefaultPageWrapper>
    </>

  );
};

const mapStateToProps = ({ item, items }) => ({
  item,
  items,
});

const mapDispatchToProps = ({
  fetchItem,
  fetchItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(WomensContainer);
