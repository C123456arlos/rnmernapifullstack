import { aj } from "../config/arcjet.js"
export const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, {
            requested: 1000
        })
        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({
                    error: 'too many requests',
                    message: 'rate limit exceeded please try again later'
                })
                // }
                // else if (decision.reason.isBot()) {
                //     return res.status(403).json({
                //         error: 'bot access denied',
                //         message:'automated requests are not allowed'
                //     })
                // } else {
                //     return res.status(403).json({
                //         error: 'forbidden',
                //         message:'access denied by security policy'
                //     })                
            }
        }
        if (decision.results.some((result) => result.reason.isBot()
            && result.reason.isSpoofed())) {
            return res.status(403).json({
                error: 'spoofed bot detected',
                message: 'malicious bot activity detected'
            })
        }
        next()
    }

     catch (error) {
        console.error('arcjet middleware error', error)
        next()
    }
}