
const followers = (state = [], action) => {

  switch( action.type ) {

    case 'ADD_FOLLOWER':
      const newPerson = { name: action.person };
      return [...state, newPerson];

    case 'REMOVE_FOLLOWER':
      return state.filter( (person) => person.name !== action.person );

    // INITIAL STATE
    default:
      return [ 
        { name: 'Uriel' },
        { name: 'Allison' },
        { name: 'Chander' },
        { name: 'John Doe' } 
      ]; 
  }
};

export default followers;