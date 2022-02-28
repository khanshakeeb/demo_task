export default {
    development: {
        database: {
            url: process.env.DATABASE_URL
        },
    },
    production: {
        database: {
            url: process.env.DATABASE_URL
        }
    },
    testing: {
        database: {
            url: process.env.DATABASE_URL
        }
    }
};