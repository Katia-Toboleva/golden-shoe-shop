import React, { useState } from 'react';
import { Button,
  Icon,
  Text,
  Row,
  Column,
  Carousel,
  ColorSelector,
  SizeSelector,
  Image,
  QuantitySelector,
} from '@components';

import styles from './view-item.scss';

const ViewItem = ({ onModalAction, onCloseModalAction, item }) => {
  const [colorSelected, setColorSelected] = useState(item.colors[0]);
  const [sizeSelected, setSizeSelected] = useState(item.sizes[0]);
  const [sizeGuide, setSizeGuide] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const selectedOptions = {
    color: colorSelected,
    size: sizeSelected,
    quantity,
  };

  const onColorSelect = (color) => {
    setColorSelected(color);
  };

  const handleSizeSelect = (size) => {
    setSizeSelected(size);
  };

  const handleSizeGuide = () => {
    setSizeGuide(!sizeGuide);
  };

  const handleQuanityChange = (e) => {
    const itemSelected = item.availability.filter((i) => i.color === colorSelected && i.size === sizeSelected)[0];
    const value = Number(e.target.value);

    if (value <= Number(itemSelected.quantity)) {
      setQuantity(value);
    }
  };

  return (
    <div
      className={styles['view-item']}
      onClick={(e) => e.stopPropagation()}
    >
      <Row>
        <Column>
          <div className={styles['view-item__carousel']}>
            <Carousel images={item.images.filter((i) => i.color === colorSelected)} />
          </div>
        </Column>
        <div className={styles.right}>
          <Column>
            <Row justifyContent="space-between">
              <Column>
                <Text text={item.name} transform="uppercase" display="block" />
                <Text text={item.description} display="block" />
              </Column>
              <Column>
                <Text text={`£${item.price}`} display="block" weight="bold" />
              </Column>
            </Row>
            <ColorSelector
              colors={item.colors}
              onColorSelect={onColorSelect}
              colorSelected={colorSelected}
            />
            <SizeSelector
              sizeSelected={sizeSelected}
              sizes={item.sizes}
              onSizeSelect={handleSizeSelect}
              availability={item.availability.filter((i) => i.quantity !== 0 && i.color === colorSelected)}
              onSizeGuide={handleSizeGuide}
            />
            <QuantitySelector quantity={quantity} onQuantityChange={handleQuanityChange} />
            {sizeGuide && (
              <div className={styles.sizes}>
                <Image src="https://i.ytimg.com/vi/n4-Q24a3DEM/maxresdefault.jpg"/>
              </div>
            )}
            <Button
              padded
              theme="black"
              onClick={() => onModalAction('add-item', {
              itemId: item._id,
              selectedOptions,
            })}
            >
              <Text text="Add to bag" transform="uppercase" color="white" />
            </Button>
          </Column>
        </div>
      </Row>

      <div className={styles['view-item__close-button']}>
        <Button onClick={sizeGuide ? handleSizeGuide : () => onCloseModalAction('close')}>
          <Icon icon="close" theme="grey" size="x-large" />
        </Button>
      </div>
    </div>
  );
};

export default ViewItem;
