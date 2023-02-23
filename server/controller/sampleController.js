exports.getSample = async (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: {
            body: 'A demo API for the project'
        }
    });
};
