module.exports = function(sequelize, DataTypes){

    //Sequelize.define: es para definir un modelo  
    //InvoiceData = datos de facturacion
    var InvoiceData = sequelize.define('InvoiceData', {

        province:    { type: DataTypes.STRING(10),  allowNull: false, defaultValue: '' },
        location:    { type: DataTypes.STRING(20),  allowNull: false, defaultValue: '' },
        postalCode:  { type: DataTypes.INTEGER(5),  allowNull: false, defaultValue: '' },
        street:      { type: DataTypes.STRING(50),  allowNull: false, defaultValue: '' },
        portal:      { type: DataTypes.STRING(10),  allowNull: false, defaultValue: '' },
        floorNumber: { type: DataTypes.STRING(10),  allowNull: false, defaultValue: '' }
        
      }, {
        engine: 'InnoDB',
        charset: 'latin1'
    });

    return InvoiceData;
}
