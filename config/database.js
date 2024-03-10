const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('test','root','',{
    host:'localhost',
    dialect: 'mysql'
})
async function connection(){
    try {
        await sequelize.authenticate();
        console.log("Connection stablished successfully!!")
    } catch (error) {
        console.log("Enable to connect the databse", error)
    }
}

connection()

module.exports = sequelize;