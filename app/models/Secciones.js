module.exports = function(sequelize, DataTypes){

    //Sequelize.define: es para definir un modelo 
    var Section = sequelize.define('Section', {
      
        name:         { type: DataTypes.STRING(20),   allowNull: false, defaultValue: '' },
        description:  { type: DataTypes.STRING(255),  allowNull: false, defaultValue: '' }
        
      }, {
        engine: 'InnoDB',
        charset: 'latin1'
    });
    
    return Section;
}
