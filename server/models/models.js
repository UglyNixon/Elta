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
    refreshToken:{type:DataTypes.STRING(1000),allowNull:false},
},{timestamps: false,})

const Material=sequelize.define('material',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    title:{type:DataTypes.STRING(100),allowNull:false},
    series:{type:DataTypes.STRING,allowNull:false}
},{timestamps:false})

const Ruchka = sequelize.define('ruchka',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    series:{type:DataTypes.STRING,allowNull:false},
    totalValue:{type:DataTypes.INTEGER,allowNull:false},
    status:{type:DataTypes.STRING,allowNull:false},
    brak:{type:DataTypes.INTEGER,defaultValue:0},
    dolg:{type:DataTypes.INTEGER,defaultValue:0},
    brakDate:{type:DataTypes.DATEONLY},
    secondBrak:{type:DataTypes.INTEGER,defaultValue:0},
},{timestamps:false})

const Worker = sequelize.define('worker',{
    id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    name:{type:DataTypes.STRING,defaultValue:'Временный'},
    code :{type:DataTypes.STRING,defaultValue:'Временный'},
},{timestamps:false})

const CorrectorWorker = sequelize.define('correctorWorker',{
    id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    name:{type:DataTypes.STRING,defaultValue:'Временный'},
},{timestamps:false})

const WorkPlace=sequelize.define('workPlace' ,{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    title:{type:DataTypes.STRING,allowNull:false},
},{timestamps:false})

const WorkAndPlace = sequelize.define('worker_place', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
},{
    timestamps: false
})
const RuchkaMaterial = sequelize.define('ruchka_material', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
},{
    timestamps: false
})

const Defec = sequelize.define('defec',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    title:{type:DataTypes.STRING,allowNull:false},
    value:{type:DataTypes.INTEGER,allowNull:false}
},{
    timestamps: false
})
const RuchkaBrakReport =sequelize.define('ruchkaBrakReport',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    title:{type:DataTypes.STRING,allowNull:false},
    series:{type:DataTypes.STRING,allowNull:false},
    value1:{type:DataTypes.INTEGER},
    value2:{type:DataTypes.INTEGER},
    value3:{type:DataTypes.INTEGER},
    value4:{type:DataTypes.INTEGER},
    value5:{type:DataTypes.INTEGER},
    date:{type:DataTypes.DATEONLY},
},{timestamps:false})

Ruchka.hasMany(Defec,{as:'defec'});
Defec.belongsTo(Ruchka)

CorrectorWorker.hasMany(Ruchka)
Ruchka.belongsTo(CorrectorWorker)

Worker.hasMany(Ruchka);
Ruchka.belongsTo(Worker)

User.hasOne(Token)
Token.belongsTo(User)

Worker.hasMany(RuchkaBrakReport)
RuchkaBrakReport.belongsTo(Worker)

Worker.belongsToMany(WorkPlace, {through: WorkAndPlace })
WorkPlace.belongsToMany(Worker, {through: WorkAndPlace })

Ruchka.belongsToMany(Material,{through:RuchkaMaterial})
Material.belongsToMany(Ruchka,{through:RuchkaMaterial})




module.exports={User,Token,Material,Ruchka,Worker,WorkPlace,WorkAndPlace,Defec,RuchkaMaterial,CorrectorWorker,RuchkaBrakReport}