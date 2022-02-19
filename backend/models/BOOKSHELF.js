module.exports = (sequelize, DataTypes) =>{
    const BOOKSHELF = sequelize.define('BOOKSHELF', {
        ID_BOOKSHELF:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        DESCRIPTION:{
          type: DataTypes.INTEGER,
          allowNull: true,
      }
      }, {
        freezeTableName: true,
        timestamps: false
      });
      
    return BOOKSHELF;
}