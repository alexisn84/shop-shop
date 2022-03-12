//import our actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../utils/actions';

import { reducer  } from '../utils/reducers';

//create a sample of what our global state will look like
const initiateState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
};

//test to update a products list
test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initiateState, {
        type: UPDATE_PRODUCTS,
        products: [{}, {}]
    });

    expect(newState.products.length).toBe(2);
    expect(initiateState.products.length).toBe(0);
});

//tst to update_categories
test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initiateState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    });

    expect(newState.categories.length).toBe(2);
    expect(initiateState.categories.length).toBe(1);
});

//update current category test
test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initiateState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: '2'
    });

    expect(newState.currentCategory).toBe('2');
    expect(initiateState.currentCategory).toBe('1');
});