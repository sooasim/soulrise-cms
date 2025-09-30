export default {
    async find(ctx) {
        return await strapi.entityService.findMany('api::page.page', ctx.query);
    },

    async findOne(ctx) {
        const { id } = ctx.params;
        return await strapi.entityService.findOne('api::page.page', id, ctx.query);
    },

    async create(ctx) {
        return await strapi.entityService.create('api::page.page', {
            data: ctx.request.body,
        });
    },

    async update(ctx) {
        const { id } = ctx.params;
        return await strapi.entityService.update('api::page.page', id, {
            data: ctx.request.body,
        });
    },

    async delete(ctx) {
        const { id } = ctx.params;
        return await strapi.entityService.delete('api::page.page', id);
    },
};
