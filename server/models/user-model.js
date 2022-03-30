const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    login:{type:DataTypes.STRING,unique:true,allowNull:false},
    email:{type:DataTypes.STRING,unique:false,allowNull:false},
    password:{type:DataTypes.STRING,allowNull:false},
    role:{type:DataTypes.STRING,defaultValue:'USER'},
    isActivated: {type:DataTypes.BOOLEAN,defaultValue:false},
    activationLink:{type:DataTypes.STRING},
    code:{type:DataTypes.STRING,unique:true}
},{timestamps: false,}
)

const Token = sequelize.define('token',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    refreshToken:{type:DataTypes.STRING,allowNull:false},
},{timestamps: false,})



User.hasOne(Token)
Token.belongsTo(User)


module.exports={User,Token}