import React, { useState } from 'react';
import { Text } from '@components';

import styles from './styles.scss';

const questions = [
  {
    question: 'Delivery Dates and Times',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra lorem sit amet elit rutrum blandit. Donec at laoreet lorem. Pellentesque vitae ipsum id velit venenatis ultrices id vitae magna. Sed iaculis, est ut tincidunt hendrerit, est felis aliquet magna, quis consectetur arcu risus vitae sem. Vestibulum luctus maximus eros eu auctor. Donec maximus nisi ac ipsum lobortis fringilla. Sed ligula tortor, venenatis ut felis ut, pretium lacinia ligula. Integer ut ultricies leo. In accumsan erat ac quam dapibus, sed rutrum nulla malesuada. Suspendisse potenti.',
  },
  {
    question: 'Returns',
    answer: 'Mauris sodales scelerisque maximus. Phasellus maximus nisl mi, quis ullamcorper urna maximus vel. Cras fringilla purus vehicula, posuere mauris non, porta mi. Donec blandit pretium ligula ut elementum. In rutrum libero in enim faucibus, et gravida enim lacinia. Fusce magna est, mattis vel semper non, dictum in tellus. Quisque maximus at elit a sodales. Maecenas non tempor ante, vitae molestie erat. Aenean in convallis mi. In dapibus est non mauris dictum dignissim. Sed fringilla accumsan hendrerit. Proin hendrerit semper varius. Phasellus sit amet viverra mauris. Donec in velit interdum, condimentum leo sit amet, ultricies neque. Proin posuere nunc non massa porttitor convallis. Ut mollis leo et euismod efficitur.',
  },
  {
    question: 'What is my size?',
    answer: '',
    image: 'https://i.ytimg.com/vi/n4-Q24a3DEM/maxresdefault.jpg',
  },
  {
    question: 'Contact',
    answer: 'Telephone: 07452410124 - Email: contact@goldenshoes.co.uk or chat with us in our',
    link: 'Online Chat',
  },
  {
    question: 'Locations',
    answer: '',
    image: 'https://developers.google.com/maps/solutions/images/store-locator/maps.png',
  },
  {
    question: 'Opening Hours',
    answer: 'Mon-Fri: 9.00-20.30 Sat: 8.30-23.00 Sun: 10.00-17.00 (Please note all the stores would be closed on Chistmas and New Years day)',
  },
];

const Questions = () => {
  const [itemsClicked, setItemsClicked] = useState([]);

  const handleItemClick = (item) => {
    if (itemsClicked.includes(item)) {
      setItemsClicked(itemsClicked.filter((i) => i !== item));
    } else {
      setItemsClicked([...itemsClicked, item]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Text text="FAQs" weight="bold" size="xlarge"/>
      </div>
      <div className={styles.body}>
        {questions.map((item) => (
          <>
            <div className={styles.question} onClick={() => handleItemClick(item.question)}>
              <Text text={item.question} weight="bold" size="large" />
              <Text text={itemsClicked.includes(item.question) ? '-' : '+'} wight="bold" size="large" />
            </div>
            {itemsClicked.includes(item.question) && (
              <div className={styles.answer}>
                {item.answer ? (
                  <>
                    <p>{item.answer}</p>
                    <span className={styles.link}>{item.link ? item.link : ''}</span>
                  </>
                ) : <img src={item.image} alt="image" /> }
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Questions;
