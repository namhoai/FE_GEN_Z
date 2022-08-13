import moment from 'moment';

// eslint-disable-next-line import/prefer-default-export
export const fromNow = (date) => moment.utc(date).local().fromNow();
