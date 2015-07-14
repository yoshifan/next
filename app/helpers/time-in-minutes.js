import Ember from 'ember';
import moment from 'npm:moment';

export function timeInMinutes(params/*, hash*/) {
  const time = moment.duration(params.get('firstObject'));

  return "" + time.minutes() + "'" + time.seconds() + '"' + time.milliseconds();
}

export default Ember.Helper.helper(timeInMinutes);
