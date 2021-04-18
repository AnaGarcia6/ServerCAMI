module.exports = function(sequelize, DataTypes){

    //Sequelize.define: es para definir un modelo 
    var Articles = sequelize.define('Articles', {

        //codArticle:      { type: DataTypes.STRING(10),  allowNull: false, defaultValue: '' }, (NO es necesario porque se crea automaticamente)
        nameArticle:     { type: DataTypes.STRING(20),   allowNull: false, defaultValue: '' },
        numberArticles:  { type: DataTypes.STRING(100),  allowNull: false, defaultValue: '' }
        
      }, {
        engine: 'InnoDB',
        charset: 'latin1'
    });

    return Articles;
}
