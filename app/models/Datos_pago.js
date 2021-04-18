module.exports = function(sequelize, DataTypes){

    //Sequelize.define: es para definir un modelo 
    var PaymentData = sequelize.define('PaymentData', {

        numerCard: { type: DataTypes.INTEGER(30),  allowNull: false, defaultValue: '' },
        CVV:       { type: DataTypes.INTEGER(3),  allowNull: false, defaultValue: '' },
        nameCard:  { type: DataTypes.STRING(50),  allowNull: false, defaultValue: '' }
        
      }, {
        engine: 'InnoDB',
        charset: 'latin1'
    });

    return PaymentData;
}
