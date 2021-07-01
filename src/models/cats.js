const { Sequelize } = require("sequelize");
const CatModel = require('./cats');


module.exports = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING,
        breed: DataTypes.STRING,
        markings: DataTypes.STRING,
        lastfeed: DataTypes.DATE
    }
    return sequelize.define('Cat', schema)
}