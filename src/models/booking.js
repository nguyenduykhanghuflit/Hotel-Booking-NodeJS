'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.Room, {
        foreignKey: 'roomID',
        as: 'bookingData',
      });
      Booking.belongsTo(models.User, {
        foreignKey: 'username',
        as: 'userData',
      });
    }
  }
  Booking.init(
    {
      bookingID: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING, //này nè DataTypes nhaaa
      },
      roomID: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.STRING,
      },
      status: DataTypes.STRING,
      checkin: DataTypes.DATE,
      checkout: DataTypes.DATE,
      username: DataTypes.STRING,
      voucher_id: DataTypes.STRING,
      discount: DataTypes.STRING,
      total: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Booking', //chú ý
      // timestamps: false,
    }
  );

  return Booking;
};
