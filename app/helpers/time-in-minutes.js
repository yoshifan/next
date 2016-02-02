import Ember from 'ember';
import moment from 'npm:moment';

export function timeInMinutes([timeString]/*, hash*/) {
  const time = moment.duration(timeString);

  return `${time.minutes()}'${time.seconds()}"${time.milliseconds()}`;
}

export default Ember.Helper.helper(timeInMinutes);
