export const findImage = (color, images) => images.find(el => el.color === color).urls[0];

export const calculateSubtotal = (arr) => arr.reduce((acc, currentVal) => {
  // If item is not available, its price is not added to the total
  if (!currentVal.isItemAvailable) {
    return acc;
  }

  return acc + (currentVal.price * currentVal.selectedOptions.quantity);
}, 0);

export const calculateTotal = (arr, tax) => {
  const subtotal = calculateSubtotal(arr);
  return !tax ? subtotal : (subtotal * tax + subtotal);
};

export const sortItems = (items, filter) => {
  if (filter === 'Price low-high') {
    return items.sort((a, b) => (a.price > b.price && 1) || -1);
  }

  if (filter === 'Price high-low') {
    return items.sort((a, b) => (a.price < b.price && 1) || -1);
  }

  if (filter === 'In stock') {
    return items.filter(item => item.availability.length);
  }

  return items;
};
