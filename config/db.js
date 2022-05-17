const DATABASE={
    name: DATABASE_NAME,
    username: DATABASE_USERNAME,
    password:DATABASE_PASSWORD,
    options: {
        host: DATABASE_HOST,
        dialect: 'mysql',
        freezeTableName: true,
        define: {
            timestamps: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_bin',
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30 * 1000,
            idle: 10000,
        },
        dialectOptions: {
            decimalNumbers: true,
            charset: 'utf8mb4',
        },
        logging: false,
    }
};
const { Sequelize } = require('sequelize');
module.exports.sequelize = new Sequelize(DATABASE.name,DATABASE.username,DATABASE.password,{...DATABASE.options});

