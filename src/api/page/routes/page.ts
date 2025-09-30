export default {
  routes: [
    {
      method: 'GET',
      path: '/pages',
      handler: 'page.find',
    },
    {
      method: 'GET',
      path: '/pages/:id',
      handler: 'page.findOne',
    },
    {
      method: 'POST',
      path: '/pages',
      handler: 'page.create',
    },
    {
      method: 'PUT',
      path: '/pages/:id',
      handler: 'page.update',
    },
    {
      method: 'DELETE',
      path: '/pages/:id',
      handler: 'page.delete',
    },
  ],
};
