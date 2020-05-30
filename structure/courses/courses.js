const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
  } = require("graphql");
  const students = require('../students/student.json');
  const grades = require('../grades/grade.json');
  const StudentType = require('../students/students');
  const GradeType = require('../grades/grades');
  
const CourseType = new GraphQLObjectType({
    name:"course",
    description:"represent students",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLInt)},
        name:{type:GraphQLNonNull(GraphQLString)},
        description:{type:GraphQLNonNull(GraphQLString)},
        student:{
            type:StudentType,
            resolve:(course)=>{
                return students.find(student=>student.courseId === course.id)
            }
        },
        grade:{
            type:GradeType,
            resolve:(course)=>{
                return grades.find(grade=>grade.courseId === course.id)
            }
        }
    })
});

module.exports = CourseType;