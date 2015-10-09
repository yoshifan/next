import Ember from 'ember';

const {
  A,
  get,
  isPresent
} = Ember;

export function groupBy(params/*, hash*/) {
  let [ collection, property ] = params;
  let groups = new A();
  let items = collection;

  items.forEach(function(item) {
    let value = get(item, property);
    let group = groups.findBy('value', value);

    if (isPresent(group)) {
      get(group, 'items').push(item);
    } else {
      group = { property: property, value: value, items: [item] };
      groups.push(group);
    }
  });

  return groups;
}

export default Ember.Helper.helper(groupBy);
