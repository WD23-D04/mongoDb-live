export const handleSingleRequest = (req, res, object) => {
    return object
    ? res.status(200).json(object)
    : res.status(404).json({ msg: `${req.params.id} not found` });
}