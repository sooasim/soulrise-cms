export default {
  routes: [
    {
      method: 'GET',
      path: '/posts',
      handler: 'post.find',
    },
    {
      method: 'GET',
      path: '/posts/:id',
      handler: 'post.findOne',
    },
    {
      method: 'POST',
      path: '/posts',
      handler: 'post.create',
    },
    {
      method: 'PUT',
      path: '/posts/:id',
      handler: 'post.update',
    },
    {
      method: 'DELETE',
      path: '/posts/:id',
      handler: 'post.delete',
    },
  ],
};
