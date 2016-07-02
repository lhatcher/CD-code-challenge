
export const follow = (name, isSubscribed) => {
  if ( isSubscribed ) {
    return {
      type: 'REMOVE_FOLLOWER',
      person: name,
    };
  }

  return {
    type: 'ADD_FOLLOWER',
    person: name,
  };
};