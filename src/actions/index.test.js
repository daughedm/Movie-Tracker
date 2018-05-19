import * as actions from './index';
import mockCleanData from './../mockData/mockCleanData';

describe('addRecentFilms', () => {
  it('has a type of ADD_RECENT', () => {
    const filmData = mockCleanData;
    const actual = actions.addRecentFilms(filmData);
    
    expect(actual).toEqual({
      type: 'ADD_RECENT',
      films: filmData
    });
  })
})

describe('updateStoreUser', () => {
  it('has a type of ADD_USER', () => {
    const mockUser = {
        "id": 1,
        "name": "Taylor",
        "password": "password",
        "email": "tman2272@aol.com"
    }
    const actual = actions.updateStoreUser(mockUser);

    expect(actual).toEqual({
      type: "ADD_USER",
      user_id: mockUser.id,
      name: mockUser.name
    })
  })

})

describe('logOutUser', () => {
  it('should return an object with type LOGOUT_USER', () => {
    const actual = actions.logOutUser();

    expect(actual).toEqual({
      type: 'LOGOUT_USER'
    });
  })


})