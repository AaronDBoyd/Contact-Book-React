import contactListReducer from '../../reducers/contact-list-reducer';

describe('contactListReducer', () => {
  test('Should return default state if there is no action type passed onto the reducer', () => {
    expect(contactListReducer({}, { type: null })).toEqual({});
  })
})