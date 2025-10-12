var Person = function () {
  var person = {
    _name: 'Leroy',
    _friends: [],
    fillFriends(people) {
      return this._friends.push(...people);
    },
  };
  return person;
};
