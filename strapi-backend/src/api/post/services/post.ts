export default ({ strapi }) => ({
    async find(params) {
        return await strapi.entityService.findMany('api::post.post', params);
    },

    async findOne(id, params) {
        return await strapi.entityService.findOne('api::post.post', id, params);
    },

    async create(params) {
        return await strapi.entityService.create('api::post.post', params);
    },

    async update(id, params) {
        return await strapi.entityService.update('api::post.post', id, params);
    },

    async delete(id) {
        return await strapi.entityService.delete('api::post.post', id);
    },
});
