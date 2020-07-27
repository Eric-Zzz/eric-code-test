import React from 'react';
import Enzyme from '../../../../test/enzyme_config';
import configureStore from 'redux-mock-store'
import SearchBar from './SearchBar'

const {shallow, mount, render} = Enzyme;

describe('Search Bar test', function () {
    const initialState = {};
    const mockStore = configureStore();
    let store, container;


    it('+++ render the connected search bar component ', () => {
        store = mockStore(initialState)
        container = shallow(<SearchBar store={store}/>)
        expect(container.length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
        store = mockStore(initialState)
        container = shallow(<SearchBar store={store}/>)
        expect(container.prop('output')).toEqual(initialState.output)
    });

    it('+++ h1 text is correct', () => {
        store = mockStore(initialState)
        container = render(<SearchBar store={store}/>);
        expect(container.find('.search-title').text()).toEqual('Twitter Search')
    })

});
