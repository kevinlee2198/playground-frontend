export { default } from 'next-auth/middleware';

// applies next-auth only to matching routes
// can be regex
// https://next-auth.js.org/tutorials/securing-pages-and-api-routes
export const config = { matcher: ['/account/:path*', '/game', '/player'] };
