'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });

  User.associate = function(models) {

  };

    // returns object with User instance info that is saved to a jwt
    User.prototype.toSafeObject = function() {
      const { id, username, email } = this;
      return { id, username, email };
    };


    // return true if password string matches user's hashedPassword
    User.prototype.validatePassword = function (password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    };

    // return User with the id using 'currentUser' scope
    User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
    };

    // accepts obj a credential and password
    // finds a User with username or email with specified credentials
    // if found, validates using validation method
    // if valid return the user with currentUser scope
    User.login = async function ({ credential, password }) {
      const { Op } = require('sequelize');
      const user = await User.scope('loginUser').findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential,
          },
        },
      });
      if (user && user.validatePassword(password)) {
        return await User.scope('currentUser').findByPk(user.id);
      }
    };

    // accepts obj with username, email and password
    // hashes password
    // creates a User with username, email, hashedPassword
    // returns User with the currentUser scope
    User.signup = async function ({ username, email, password }) {
        const hashedPassword = bcrypt.hashSync(password);
        const user = await User.create({
          username,
          email,
          hashedPassword,
        });
        return await User.scope('currentUser').findByPk(user.id);
    };



  return User;
};
