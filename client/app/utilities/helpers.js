export const findImage = (color, images) => images.find(el => el.color === color).urls[0];

export const calculateSubtotal = (arr) => arr.reduce((acc, currentVal) => acc + (currentVal.price * currentVal.selectedOptions.quantity), 0);

export const calculateTotal = (arr, tax) => {
  const subtotal = calculateSubtotal(arr);
  return !tax ? subtotal : (subtotal * tax + subtotal);
};