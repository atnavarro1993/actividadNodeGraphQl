const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt
} = require('graphql');
const {
    CourseType,
    StudentType,
    GradeType} = require('./structure/structure');
const students = require('./data/student.json');
const courses = require('./data/course.json');
const grades = require('./data/grade.json');

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description:"Root Query",
    fields:()=>({
        students: {
            type: new GraphQLList(StudentType),
            description:"list of all students",
            resolve:()=>students
        },
        courses:{
            type: new GraphQLList(CourseType),
            description:"list of all courses",
            resolve:()=>courses
        },
        grades:{
            type:new GraphQLList(GradeType),
            description:"list of all grades",
            resolve:()=>grades
        }
    })
});

module.exports = RootQueryType;
