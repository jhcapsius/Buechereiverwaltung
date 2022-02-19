module.exports = (sequelize, DataTypes) =>{
    const JOB_TITLE = sequelize.define('JOB_TITLE', {
        JOB_TITLE:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },

        SALARY:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
      }, {
        freezeTableName: true,
        timestamps: false
      });
      
    return JOB_TITLE;
}