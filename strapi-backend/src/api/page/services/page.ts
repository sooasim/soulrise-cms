export default ({ strapi }) => ({
    async find(params) {
        return await strapi.entityService.findMany('api::page.page', params);
    },

    async findOne(id, params) {
        return await strapi.entityService.findOne('api::page.page', id, params);
    },

    async create(params) {
        return await strapi.entityService.create('api::page.page', params);
    },

    async update(id, params) {
        return await strapi.entityService.update('api::page.page', id, params);
    },

    async delete(id) {
        return await strapi.entityService.delete('api::page.page', id);
    },
});
