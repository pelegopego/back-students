module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("students", {
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      scheduled: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.FLOAT
      },
      timelapse: {
        type: Sequelize.FLOAT
      },
      deleted: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Student;
  };