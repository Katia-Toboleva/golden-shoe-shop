/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  DefaultPageWrapper, Items, Spinner, Filters, Modal, Text,
} from '@components';

import { sortItems } from '../../utilities/helpers';

import { fetchItem } from '../item-container/state/actions';
import { fetchItems } from '../items-container/state/actions';

const WomensContainer = (props) => {
  const { fetchItemRequestStatus, item } = props.item;
  const { fetchItemsRequestStatus, items } = props.items;
  const [typeFilterSelected, setTypeFilterSelected] = useState(undefined);
  const [sizeFilterSelected, setSizeFilterSelected] = useState(undefined);
  const [colorFilterSelected, setColorFilterSelected] = useState(undefined);
  const [sortFilterSelected, setSortFilterSelected] = useState(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filtersApplied, setFiltersApplied] = useState(false);

  useEffect(() => {
    props.fetchItems({
      category: 'womens',
    });
    setSortFilterSelected('All');
  }, []);

  useEffect(() => {
    if (fetchItemRequestStatus === 'success') {
      setIsModalVisible(true);
    }
  }, [fetchItemRequestStatus]);

  const handleFilterClick = (value, label) => {
    if (label === 'type') {
      setTypeFilterSelected(value);
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
    props.fetchItems({
      category: 'womens',
      type: typeFilterSelected,
      size: sizeFilterSelected,
      color: colorFilterSelected,
    });
  };

  const handleFiltersReset = () => {
    setFiltersApplied(false);
    setTypeFilterSelected(undefined);
    setSizeFilterSelected(undefined);
    setColorFilterSelected(undefined);

    props.fetchItems({
      category: 'womens',
    });
  };

  return (
    <>
      <DefaultPageWrapper
        pageActive="womens"
      >
        <Filters
          onFilterClick={handleFilterClick}
          onApply={typeFilterSelected || sizeFilterSelected || colorFilterSelected ? handleApplyClick : null}
          onReset={handleFiltersReset}
          typeFilterSelected={typeFilterSelected}
          sizeFilterSelected={sizeFilterSelected}
          colorFilterSelected={colorFilterSelected}
          sortFilterSelected={sortFilterSelected}
          filtersApplied={filtersApplied}
        />
        {fetchItemsRequestStatus === 'rejected' && <div>Error!</div>}
        {fetchItemsRequestStatus === 'pending' && <Spinner />}
        {fetchItemsRequestStatus === 'success' && items && (
          <Items
            items={sortFilterSelected
              ? sortItems(items, sortFilterSelected)
              : items}
            onItemClick={handleItemClick}
          />
        )}
        {fetchItemsRequestStatus === 'success' && !items.length && (
          <Text
            text="Sorry, no items matching your criteria found, please modify the search criteria."
            weight="bold"
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
