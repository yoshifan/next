import Ember from 'ember';

const {
  A,
  get,
  isPresent,
  Helper
} = Ember;

export function groupBy([items, property]/*, hash*/) {
  let groups = new A();

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

export default Helper.helper(groupBy);
