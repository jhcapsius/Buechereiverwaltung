module.exports = (sequelize, DataTypes) =>{
    const USER = sequelize.define('USER', {
        EMAIL_ADDRESS:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },

        NAME:{
            type: DataTypes.STRING,
            allowNull: false
        },

        PASSWORD:{
            type: DataTypes.STRING,
            allowNull: false
        }
      }, {
        freezeTableName: true,
        timestamps: false
      });
      
    return USER;
}