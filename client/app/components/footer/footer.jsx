import React from 'react';
import Text from '../text';
import { Row, Column } from '../grid';
import Button from '../button';
import Contact from './contact';

import styles from './styles.scss';

const options = [
  {
    title: 'about',
    links: [
      'Golden Shoe',
      'Why us?',
      'Media',
      'Careers',
    ],
  },
  {
    title: 'help',
    links: [
      'FAQs',
      'Contact us',
      'Shoe size chart',
      'Store locator',
      'Track my order',
    ],
  },
  {
    title: 'terms',
    links: [
      'T&Cs',
      'Returns',
      'Cookies',
    ],
  },
];

const Footer = ({onFooterClick}) => {
  return (
    <div className={styles.container}>
      <Row direction="row" justifyContent="space-evenly">
        {options.map((item) => (
          <Column key={item.title}>
            <Text
              text={item.title}
              transform="capitalize"
              weight="bold"
              size="semismall"
            />
            {item.links.map((link) => (
              <Column key={link}>
                <Button
                  round={false}
                  onClick={() => onFooterClick(link)}
                  hoverOpacity
                >
                  <Text text={link} size="xsmall"/>
                </Button>
              </Column>
            ))}
          </Column>
        ))}
      </Row>
      <Contact />
    </div>
  );
};

export default Footer;
