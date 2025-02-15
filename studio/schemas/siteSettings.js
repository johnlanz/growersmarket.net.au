export default {
  title: 'Settings',
  name: 'siteSettings',
  type: 'document',
  fields: [
    {
      title: 'Default page title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Default page description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Site URL',
      name: 'siteUrl',
      type: 'string',
    },
    {
      title: 'Share image',
      name: 'shareImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Phone number',
      name: 'phoneNumber',
      type: 'string',
    },
    {
      title: 'Fax number',
      name: 'faxNumber',
      type: 'string',
    },
    {
      title: 'Hours',
      name: 'hours',
      type: 'array',
      of: [{ type: 'openHours' }],
    },
    {
      title: 'Address',
      name: 'address',
      type: 'address',
    },
    {
      title: 'Social Links',
      name: 'socialLinks',
      type: 'array',
      of: [{ type: 'socialLinks' }],
    },
    {
      title: 'Delivery Schedule',
      name: 'deliverySchedule',
      type: 'deliverySchedule',
    },
    {
      title: 'Pickup Schedule',
      name: 'pickupSchedule',
      type: 'pickupSchedule',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
};
