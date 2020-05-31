const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
const { CourseType, StudentType, GradeType } = require("./structure/structure");
const students = require("./data/student.json");
const courses = require("./data/course.json");
const grades = require("./data/grade.json");

const MutationQueryType = new GraphQLObjectType({
  name: "mutation",
  description: "root mutation",
  fields: () => ({
    addCourse: {
      type: CourseType,
      description: "add a course",
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        const course = {
          id: courses.length + 1,
          name: args.name,
          description: args.description,
        };
        courses.push(course);
        return course;
      },
    },
    addStudent: {
      type: StudentType,
      description: "add a student",
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        courseId: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        const student = {
          id: students.length + 1,
          name: args.name,
          lastName: args.lastName,
          courseId: args.courseId,
        };
        students.push(student);
        return student;
      },
    },
    addGrade: {
      type: GradeType,
      args: {
        mark: { type: GraphQLNonNull(GraphQLInt) },
        courseId: { type: GraphQLNonNull(GraphQLInt) },
        studentId: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        const mark = {
          id: grades.length + 1,
          mark: args.mark,
          courseId: args.courseId,
          studentId: args.studentId,
        };
        grades.push(mark);
        return mark;
      },
    },
  }),
});

module.exports = MutationQueryType;
