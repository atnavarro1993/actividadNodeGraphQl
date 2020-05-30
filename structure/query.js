const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt
} = require('graphql');
const student = require('./students/student.json');
const course = require('./courses/course.json');
const grade = require('./grades/grade.json');
const StudentType = require('./students/students')
const CourseType = require('./courses/courses')
const GradeType = require('./grades/grades')



const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description:"Root Query",
    fields:()=>({
        students: {
            type: new GraphQLList(StudentType),
            description:"list of all students",
            resolve:()=>student
        },
        courses:{
            type: new GraphQLList(CourseType),
            description:"list of all courses",
            resolve:()=>course
        },
        grades:{
            type:new GraphQLList(GradeType),
            description:"list of all grades",
            resolve:()=>grade
        }
    })
});

module.exports = RootQueryType;
