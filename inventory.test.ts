import { getItem, calculateTotalPrice, laptop, broccoli, Item } from "./inventory";

test('get item id 1', () => {
    expect(getItem(1)).toEqual(laptop)
});

test('broccoli is not equal to laptop', () => {
    expect(broccoli).not.toEqual(laptop)
});

test('checks total value of stock of item 1', () => {
    expect(calculateTotalPrice(0)).toEqual({itemName: 'broccoli', totalPrice: 6000})
});