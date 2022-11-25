
const { Post } = require('../models');

const postdata = [
 
    {
        title: 'Is react great!!!',
        contents: 'Yup it sure is.....' ,
        date_created: new Date(),
        creator: 1,  
      },
      {
        title: 'The hidden truth about JS',
        contents: "I also don't know about that" ,
        date_created: new Date(),
        creator: 2,
           
      },

];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;