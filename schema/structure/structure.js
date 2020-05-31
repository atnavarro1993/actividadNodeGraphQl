const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList
  } = require("graphql");
  const students = require('../data/student.json');
  const courses = require('../data/course.json');
  const grades = require('../data/grade.json');
  

  const CourseType = new GraphQLObjectType({
    name:"courses",
    description:"represent students",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLInt)},
        name:{type:GraphQLNonNull(GraphQLString)},
        description:{type:GraphQLNonNull(GraphQLString)},
        students:{
            type:new GraphQLList(StudentType),
            resolve:(course)=>{
                return students.filter(student=>student.courseId===course.id)
            }
        }
    })
});

const StudentType =  new GraphQLObjectType({
    name:"students",
    description:"represent students",
    fields:()=>({
        id:{type:GraphQLNonNull(GraphQLInt)},
        name: { type:GraphQLNonNull(GraphQLString)},
        lastName: {type: GraphQLNonNull(GraphQLString)},
        courseId: {type:GraphQLNonNull(GraphQLInt)},
        course:{
            type:CourseType,
            resolve:(student)=>{
                return courses.find(course=>course.id===student.courseId)
            }
        },
        grade:{
            type:GradeType,
            resolve:(student)=>{
                return grades.find(grade=>grade.studentId===student.id)
            }
        }
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