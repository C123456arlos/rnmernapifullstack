export const protectRoute = async (req, res, next) => {
    console.log(req.auth())
    if (!req.auth().isAuthenticated) {
    return res.status(401).json({message:'unauthorized you must be logged in'})       
    }
    next()
}