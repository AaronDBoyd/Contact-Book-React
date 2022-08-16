import * as actions from "./../../actions";

describe("Contact Book actions", () => {
  it('deleteContact should create DELETE_CONTACT action', () => {
    expect(actions.deleteContact(1)).toEqual({
      type: 'DELETE_CONTACT',
      id: 1
    })
  })

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    })
  })

  it('addContact should create ADD_CONTACT action', () => {
    expect(actions.addContact({
      name: "Zara",
      phone: "1345678901",
      email: "zara@doggo.com",
      id: 1
    })).toEqual({
      type: 'ADD_CONTACT',
      name: "Zara",
      phone: "1345678901",
      email: 'zara@doggo.com',
      id: 1
    })
  })
})