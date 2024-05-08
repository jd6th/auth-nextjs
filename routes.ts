/**
 * Array of routes accessible to the public, does not require authentication
 * @type {string}
 */
export const publicRoutes = [
    "/"
]

/**
 * Routes for authentication
 * @type {string}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error"
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authemtication
 * @type {string} 
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"