export const findImage = (color, images) => images.find(el => el.color === color).urls[0];

export const calculateSubtotal = (arr) => arr.reduce((acc, currentVal) => acc + (currentVal.price * currentVal.selectedOptions.quantity), 0);

export const calculateTotal = (arr, tax) => {
  const subtotal = calculateSubtotal(arr);
  return !tax ? subtotal : (subtotal * tax + subtotal);
};

export const sortItems = (items, sortFilterSelected) => {
  if (sortFilterSelected === 'Price low-high') {
    return items.sort((a, b) => (a.price > b.price && 1) || -1);
  }

  if (sortFilterSelected === 'Price high-low') {
    return items.sort((a, b) => (a.price < b.price && 1) || -1);
  }

  return items;
};