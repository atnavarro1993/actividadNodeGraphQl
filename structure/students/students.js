
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
  } = require("graphql");
//Error: One of the provided types for building the Schema is missing a name
/*const course = require('../courses/course.json');
const CourseType = require('../courses/courses');*/
const grades = require('../grades/grade.json');
const GradeType=require("../grades/grades");


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

module.exports = StudentType;


