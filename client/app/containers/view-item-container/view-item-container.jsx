import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ViewItem, Spinner } from '@components';
import * as actions from './state/view-item-container.actions';

const ViewItemContainer = (props) => {
  const { state } = props;
  const { item, fetchItemRequestStatus } = state;
  const { id } = useParams();

  useEffect(() => {
    props.actions.fetchItem(id);
  }, [id]);

  return (
    <>
      {fetchItemRequestStatus === 'rejected' && <div>Error!</div>}
      {fetchItemRequestStatus === 'pending' && <Spinner />}
      {fetchItemRequestStatus === 'success' && (
        <ViewItem
          id={id}
          title={item.title}
          description={item.description}
          images={item.images}
        />
      )}
    </>
  );
};

const mapStateToProps = ({ viewItem }) => ({
  state: viewItem,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewItemContainer);
