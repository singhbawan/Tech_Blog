
const { Post } = require('../models');

const postdata = [
 
    {
        title: 'Lorem ipsum dolor sit.',
        contents: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt perferendis consequatur nemo temporibus? Doloribus magnam vero earum blanditiis illo repudiandae nobis, enim deleniti tempora consequuntur, aliquam ad ullam saepe itaque ab molestiae non et, eos ipsa suscipit labore ea!' ,
        date_created: new Date(),
        creator: 1,  
      },
      {
        title: 'Lorem ipsum dolor sit.',
        contents: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt perferendis consequatur nemo temporibus? Doloribus magnam vero earum blanditiis illo repudiandae nobis, enim deleniti tempora consequuntur, aliquam ad ullam saepe itaque ab molestiae non et, eos ipsa suscipit labore ea!' ,
        date_created: new Date(),
        creator: 2,
           
      },
      {
        title: 'Lorem ipsum dolor sit.',
        contents: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deserunt perferendis consequatur nemo temporibus? Doloribus magnam vero earum blanditiis illo repudiandae nobis, enim deleniti tempora consequuntur, aliquam ad ullam saepe itaque ab molestiae non et, eos ipsa suscipit labore ea!' ,
        date_created: new Date(),
        creator: 3,
           
      }

];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;