module.exports = function(sequelize, DataTypes){

    //Sequelize.define: es para definir un modelo 
    var Order = sequelize.define('Order', {

       //ordernumber y datestart no hace falta porque al crear las tablas se genera automaticamente el ID, fecha de creacion y fecha de ultima modificacion
       Delivery:     { type: DataTypes.INTEGER(8),  allowNull: false, defaultValue: '' }
        
      }, {
        engine: 'InnoDB',
        charset: 'latin1'
    });

    return Order;
}
