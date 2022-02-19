module.exports = (sequelize, DataTypes) =>{
    const EMPLOYEE = sequelize.define('EMPLOYEE', {
        ID_EMPLOYEE:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        //foreign key
        JOB_TITLE:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        //foreign key
        ID_CHEF:{
            type: DataTypes.INTEGER,
            allowNull: true
        },

        NAME:{
            type: DataTypes.STRING,
            allowNull: false
        },

        PASSWORD:{
            type: DataTypes.STRING,
            allowNull: true
        },

        BIRTHDAY:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },

        RESIDENCE:{
            type: DataTypes.STRING,
            allowNull: false
        },

        TOWN:{
            type: DataTypes.STRING,
            allowNull: false
        },

        POSTAL_CODE:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
      }, {
        freezeTableName: true,
        timestamps: false
      });
      
    return EMPLOYEE;
}