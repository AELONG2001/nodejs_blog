const Handlebars = require('handlebars');

module.exports = {
    sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';

        const icons = {
            default: 'bx bxs-sort-alt',
            asc: 'bx bx-sort-up',
            desc: 'bx bx-sort-down',
        };

        const icon = icons[sortType];

        //=====

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        const type = types[sortType];

        const address = Handlebars.escapeExpression(
            `?_sort&column=${field}&type=${type}`,
        );

        const output = `
            <a href="${address}" class="text-decoration-none">
            <i class="${icon}" style="transform: translateY(2px)"></i>
            </a>
        `;

        return new Handlebars.SafeString(output);
    },
};
