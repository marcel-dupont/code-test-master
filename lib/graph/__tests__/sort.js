import simpleSort from '../utils/simpleSort';
import properties from '../utils/properties';

/* eslint-disable no-undef */

test('sorts properties in correct order, by sortKey id', () => {
  const sortedArray = [
    {
      address: '.1 address',
      id: '1',
      location: {
        lat: '51.608049',
        lng: '-0.1096416',
      },
    }, {
      address: '2 address',
      id: '2',
      location: {
        lat: '51.5075601',
        lng: '-0.1077025',
      },
    }, {
      address: '10 address',
      id: '3',
      location: {
        lat: '54.9439441',
        lng: '-3.9222086',
      },
    }, {
      address: '1 address',
      id: '4',
      location: {
        lat: '50.7669',
        lng: '0.280939',
      },
    }, {
      address: '12 address',
      id: '5',
      location: {
        lat: '40.4334536',
        lng: '-3.689207',
      },
    }, {
      address: '11 address',
      id: '6',
      location: {
        lat: '52.52000659',
        lng: '13.404954',
      },
    }, {
      address: '21 address',
      id: '7',
      location: {
        lat: '51.4861134',
        lng: '-0.21469',
      },
    },
  ];

  const sorted = simpleSort({ properties, sortKey: 'id' });
  expect(sorted).toEqual(sortedArray);
});

test('sorts properties in correct order, by sortKey address', () => {
  const sortedArray = [
    {
      address: '.1 address',
      id: '1',
      location: {
        lat: '51.608049',
        lng: '-0.1096416',
      },
    }, {
      address: '1 address',
      id: '4',
      location: {
        lat: '50.7669',
        lng: '0.280939',
      },
    }, {
      address: '2 address',
      id: '2',
      location: {
        lat: '51.5075601',
        lng: '-0.1077025',
      },
    }, {
      address: '10 address',
      id: '3',
      location: {
        lat: '54.9439441',
        lng: '-3.9222086',
      },
    }, {
      address: '11 address',
      id: '6',
      location: {
        lat: '52.52000659',
        lng: '13.404954',
      },
    }, {
      address: '12 address',
      id: '5',
      location: {
        lat: '40.4334536',
        lng: '-3.689207',
      },
    }, {
      address: '21 address',
      id: '7',
      location: {
        lat: '51.4861134',
        lng: '-0.21469',
      },
    },
  ];

  const sorted = simpleSort({ properties, sortKey: 'address' });
  expect(sorted).toEqual(sortedArray);
});

test('sorts properties in correct order, descending, by sortKey address', () => {
  const sortedArray = [{
    address: '21 address',
    id: '7',
    location: { lat: '51.4861134', lng: '-0.21469' },
  },
  {
    address: '12 address',
    id: '5',
    location: { lat: '40.4334536', lng: '-3.689207' },
  },
  {
    address: '11 address',
    id: '6',
    location: { lat: '52.52000659', lng: '13.404954' },
  },
  {
    address: '10 address',
    id: '3',
    location: { lat: '54.9439441', lng: '-3.9222086' },
  },
  {
    address: '2 address',
    id: '2',
    location: { lat: '51.5075601', lng: '-0.1077025' },
  },
  {
    address: '1 address',
    id: '4',
    location: { lat: '50.7669', lng: '0.280939' },
  },
  {
    address: '.1 address',
    id: '1',
    location: { lat: '51.608049', lng: '-0.1096416' },
  }];

  const sorted = simpleSort({ properties, sortKey: 'address', sortOrder: 'dsc' });
  expect(sorted).toEqual(sortedArray);
});

/* eslint-enable no-undef */
