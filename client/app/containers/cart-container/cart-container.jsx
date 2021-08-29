import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  DefaultPageWrapper,
} from '@components';
import * as cartActions from './state/actions';

const CartContainer = ({ state, actions }) => {
  const { cart } = state;

  // REMOVE THIS LINE WHEN IMPLEMENTING FETCH
  const itemsInCart = [1, 1, 1, 1, 1, 1, 1];
  //= ==========================================

  useEffect(() => {
    actions.getCart();
  }, []);

  return (
    <>
      <DefaultPageWrapper
        pageActive="women"
        itemsInCart={itemsInCart}
      >
        {/* <Cart /> */}

      </DefaultPageWrapper>
    </>
  );
};

const mapStateToProps = ({ cart }) => ({
  state: cart,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
