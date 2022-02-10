export const PORT = 8080;
export const environment = {
    development: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb://username:password@localhost:8000/databasename?authSource=admin'
    },
    production: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb://username:password@localhost:8000/databasename?authSource=admin'
    }
}
