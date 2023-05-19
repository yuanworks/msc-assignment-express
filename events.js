let _id = 1;

const createEvent = event => {
  return { id: _id++, ...event };
}

const SEED_EVENTS = [
  createEvent({
    type  : 'education',
    date  : '2020-05-01',
    title : "Finished Undergraduate Studies",
    place : "21st Century University",
  }),

  createEvent({
    type  : 'accomplishment',
    date  : '2022-03-01',
    title : "Junior Developer",
    place : "NASA",
  }),

  createEvent({
    type  : 'accomplishment',
    date  : '2023-03-01',
    title : "Senior Developer",
    place : "NASA",
  }),

  createEvent({
    type  : 'education',
    date  : '2020-05-01',
    title : "Postgraduate Studies",
    place : "21st Century University",
  }),
];

module.exports = {
  createEvent,
  SEED_EVENTS,
};
