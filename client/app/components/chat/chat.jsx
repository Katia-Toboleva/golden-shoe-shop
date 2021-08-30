import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Icon, Text } from '@components';
import styles from './styles.scss';

import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Chat = withRouter(({ active, history }) => {
  const [openChat, setOpenChat] = useState(false);

  const handleFaq = () => {
    history.push('/faq');
  };

  return (
    <div className={styles.container}>
      <Button
        onClick={() => setOpenChat(!openChat)}
        round
        theme="orange"
      >
        <Icon icon="chat" theme="white" size="large" />
      </Button>
      {openChat && (
        <div className={cx('chat', {
          'center': !active,
        })}>
          {!active && (
            <>
              <Text text="Sorry we are not currently online " />
              <Text text="Customer service times 9.00-17.00" />
              <div className={styles.buttons}>
                <Button onClick={handleFaq} theme="black" padded>
                  <Text text="FAQs" color="white" />
                </Button>
                <Button theme="black" padded>
                  <Text text="Email Us" color="white"/>
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
});

export default Chat;
