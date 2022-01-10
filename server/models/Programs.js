module.exports = (sequelize, DataTypes) => {
  const Programs = sequelize.define("Programs", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    programDetails: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Programs;
};
