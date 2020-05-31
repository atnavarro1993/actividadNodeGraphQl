const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
  } = require("graphql");

  const CourseType = new GraphQLObjectType({
    
    name:"courses",
    description:"represent students",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLInt)},
        name:{type:GraphQLNonNull(GraphQLString)},
        description:{type:GraphQLNonNull(GraphQLString)}
    })
});

const StudentType =  new GraphQLObjectType({
    name:"students",
    description:"represent students",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLInt)},
        name: { type:GraphQLNonNull(GraphQLString)},
        lastName: {type: GraphQLNonNull(GraphQLString)},
        courseId: {type:GraphQLNonNull(GraphQLInt)}
    })
});

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

module.exports= {StudentType,CourseType,GradeType};