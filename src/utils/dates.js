import moment from 'moment';

export const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
};
