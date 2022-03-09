export default {
  title: 'Pickup Schedule',
  name: 'pickupSchedule',
  type: 'object',
  fields: [
    {
      title: 'Pickup Days',
      name: 'pickupDays',
      type: 'array',
      of: [{ type: 'deliveryDays' }],
    },
    {
      title: 'Closed Dates',
      name: 'pickupDatesClosed',
      type: 'closedDates',
    },
  ],
};
