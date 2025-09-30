export default {
  async find(ctx) {
    return await strapi.entityService.findMany('api::post.post', ctx.query);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.entityService.findOne('api::post.post', id, ctx.query);
  },

  async create(ctx) {
    return await strapi.entityService.create('api::post.post', {
      data: ctx.request.body,
    });
  },

  async update(ctx) {
    const { id } = ctx.params;
    return await strapi.entityService.update('api::post.post', id, {
      data: ctx.request.body,
    });
  },

  async delete(ctx) {
    const { id } = ctx.params;
    return await strapi.entityService.delete('api::post.post', id);
  },
};
