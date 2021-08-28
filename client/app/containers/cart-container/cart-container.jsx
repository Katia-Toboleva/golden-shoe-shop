import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from './state/actions';

const CartContainer = ({ state, actions }) => {
  const { cart } = state;

  useEffect(() => {
    actions.getCart();
  }, []);

  return (
    <>
      {/* <Cart /> */}
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
