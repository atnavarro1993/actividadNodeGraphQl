const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
  } = require("graphql");
  const StudentType = require('../students/students')

const GradeType = new GraphQLObjectType({
      name:"grades",
      description:"represemt students",
      fields:()=>({
        id:{type:GraphQLNonNull(GraphQLInt)},
        mark:{type:GraphQLNonNull(GraphQLInt)},
        courseId:{type:GraphQLNonNull(GraphQLInt)},
        studentId:{type:GraphQLNonNull(GraphQLInt)},
      })
  });

  module.exports = GradeType;