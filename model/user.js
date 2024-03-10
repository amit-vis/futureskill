const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User',{
    firstName:{
        type: DataTypes.STRING,
        allowNull: true
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: true
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    postprice:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    follower:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    }
},{
    timestamps: true
})

module.exports = User