import React from 'react';
import Enzyme from '../../../../test/enzyme_config';
import configureStore from 'redux-mock-store'
import UserProfile from './UserProfile'

const {shallow, mount, render} = Enzyme;

describe('User Profile test', function () {
    const initialState = {
        user: {
            selectedUser: {
                id: 25073877,
                id_str: '25073877',
                name: 'Donald J. Trump',
                screen_name: 'realDonaldTrump',
                location: 'Washington, DC',
                description: '45th President of the United States of America🇺🇸',
                url: 'https://t.co/OMxB0x7xC5',
                followers_count: 84162905,
                friends_count: 50,
                profile_image_url: 'http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/25073877/1595058372',
            }
        }
    };
    const mockStore = configureStore();
    let store, container;


    it('+++ render the connected search bar component ', () => {
        store = mockStore(initialState);
        container = shallow(<UserProfile store={store}/>);
        expect(container.length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
        store = mockStore(initialState);
        container = shallow(<UserProfile store={store}/>);
        expect(container.prop('output')).toEqual(initialState.output)
    });

    it('+++ following count is correct', () => {
        store = mockStore(initialState);
        container = render(<UserProfile store={store}/>);
        expect(container.find('.following').text()).toEqual('50 Following')
    });

    it('+++ follower count is correct', () => {
        store = mockStore(initialState);
        container = render(<UserProfile store={store}/>);
        expect(container.find('.followers').text()).toEqual('84162905 Followers')
    });

    it('+++ user name  is correct', () => {
        store = mockStore(initialState);
        container = render(<UserProfile store={store}/>);
        expect(container.find('.card-user-name').text()).toEqual('Donald J. Trump')
    })


});
