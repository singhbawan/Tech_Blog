const { User } = require('../models');

const userdata = [
    {
        user_name: 'alex',
        password: 'password'
      },
      {
        user_name: 'jwilloughway1',
        password: 'password1'
      },
      {
        user_name: 'iboddam2',
        password: 'password12alex'
      },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
