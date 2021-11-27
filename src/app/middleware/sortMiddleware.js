module.exports = function SortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        type: 'default',
    };

    if (req.query.hasOwnProperty('_sort')) {
        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            column: req.query.column,
        });

        //Object.assign là để hợp nhất object từ phải => trái
        // ==> Nếu mà trùng key thì ( key của object bên phải sẽ ghi đè key của object bên trái)
    }

    next();
};
