module.exports = (sequelize, DataTypes) =>{
    const BOOK = sequelize.define('BOOK', {
        ID_BOOK:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        //foreign key
        EMAIL_ADDRESS:{
            type: DataTypes.STRING,
            allowNull: true
        },
        //foreign key
        ID_BOOKSHELF:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        //foreign key
        ID_EMPLOYEE:{
            type: DataTypes.INTEGER,
            allowNull: true
        },

        TITLE:{
            type: DataTypes.STRING,
            allowNull: false
        },

        AUTHOR:{
            type: DataTypes.STRING,
            allowNull: false
        },

        PUBLISHER:{
            type: DataTypes.STRING,
            allowNull: false
        },

        GENRE:{
            type: DataTypes.STRING,
            allowNull: false
        },

        BORROWED:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
      }, {
        freezeTableName: true,
        timestamps: false
      });
      
    return BOOK;
}