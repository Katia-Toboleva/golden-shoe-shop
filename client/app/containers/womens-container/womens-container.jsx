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
  const [sortFilterSelected, setSortFilterSelected] = useState(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filtersApplied, setFiltersApplied] = useState(false);

  useEffect(() => {
    props.fetchItems('woman');
  }, []);

  useEffect(() => {
    if (fetchItemRequestStatus === 'success') {
      setIsModalVisible(true);
    }
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
    if (label === 'sort') {
      setSortFilterSelected(value);
    }
  };

  const handleItemClick = async (id) => {
    props.fetchItem(id);
  };

  const handleModalAction = (action, selectedItem) => {
    if (action === 'close') {
      setIsModalVisible(false);
    }
    if (action === 'add-item') {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

      let itemsArr;

      if (cartItems.length) {
        const sameItemIndex = cartItems.findIndex(cartItem => (
          selectedItem.itemId === cartItem.itemId
          && selectedItem.selectedOptions.color === cartItem.selectedOptions.color
          && selectedItem.selectedOptions.size === cartItem.selectedOptions.size));

        if (sameItemIndex !== -1) {
          const sameItemObj = cartItems[sameItemIndex];
          const remainingArr = [
            ...cartItems.slice(0, sameItemIndex), ...cartItems.slice(sameItemIndex + 1),
          ];

          const newObj = {
            ...sameItemObj,
            selectedOptions: {
              ...sameItemObj.selectedOptions,
              quantity:
              sameItemObj.selectedOptions.quantity + selectedItem.selectedOptions.quantity,
            },
          };

          itemsArr = [...remainingArr, newObj];
        } else {
          itemsArr = [...cartItems, selectedItem];
        }
      } else {
        itemsArr = [...cartItems, selectedItem];
      }

      localStorage.setItem('cart', JSON.stringify(itemsArr));
      setIsModalVisible(false);
    }
  };

  const handleApplyClick = () => {
    setFiltersApplied(true);
    // TODO SEND TO API THE FOLLOWING OBJ
    const obj = {
      woman: womanFIlterSelected,
      size: sizeFilterSelected,
      color: colorFilterSelected,
    };
    //============================
  };

  const handleFiltersReset = () => {
    setFiltersApplied(false);
    setWomanFilterSelected(undefined);
    setSizeFilterSelected(undefined);
    setColorFilterSelected(undefined);
  };


  return (
    <>
      <DefaultPageWrapper
        pageActive="women"
      >
        <Filters
          onFilterClick={handleFilterClick}
          onApply={womanFilterSelected || sizeFilterSelected || colorFilterSelected ? handleApplyClick : null}
          onReset={handleFiltersReset}
          womanFilterSelected={womanFilterSelected}
          sizeFilterSelected={sizeFilterSelected}
          colorFilterSelected={colorFilterSelected}
          sortFilterSelected={sortFilterSelected}
          filtersApplied={filtersApplied}
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
      {fetchItemRequestStatus === 'rejected' && <div>Error!</div>}
      {fetchItemRequestStatus === 'pending' && <Spinner />}
      {fetchItemRequestStatus === 'success' && item && !!Object.keys(item).length && (
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
