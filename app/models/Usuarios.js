module.exports = function(sequelize, DataTypes){

    //Sequelize.define: es para definir un modelo 
    var User = sequelize.define('User', {

        userName: { type: DataTypes.STRING(10),  allowNull: false, defaultValue: '' },
        name:     { type: DataTypes.STRING(20),  allowNull: false, defaultValue: '' },
        surname:  { type: DataTypes.STRING(30),  allowNull: false, defaultValue: '' },
        mail:     { type: DataTypes.STRING(20),  allowNull: false, defaultValue: '' },
        pass:     { type: DataTypes.STRING(10),  allowNull: false, defaultValue: '' }
        
      }, {
        engine: 'InnoDB',
        charset: 'latin1'
    });
    
    return User;
    
}