"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(course) {
        if (!this.enrolledCourses.includes(course)) {
            this.enrolledCourses.push(course);
            console.log(`${this.name} has been enrolled in ${course.title}`);
        }
    }
}
class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    createCourse(title) {
        const course = new Course(title, this);
        console.log(`Course "${title}" created by ${this.name}`);
        return course;
    }
    createLesson(course, lessonTitle) {
        const lesson = new Lesson(lessonTitle);
        course.lessons.push(lesson);
        console.log(`Lesson "${lessonTitle}" added to course "${course.title}"`);
        return lesson;
    }
    createAssignment(lesson, assignment) {
        lesson.assignments.push(assignment);
        console.log(`Assignment "${assignment}" added to lesson "${lesson.title}"`);
    }
    createAssessment(course, assessment) {
        course.assessments.push(assessment);
        console.log(`Assessment "${assessment}" added to course "${course.title}"`);
    }
}
class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
}
class Lesson {
    constructor(title) {
        this.title = title;
        this.assignments = [];
    }
}
const instructor = new Instructor(1, "Dr. Smith");
const course = instructor.createCourse("Python Programming");
const lesson = instructor.createLesson(course, "Introduction to Python");
instructor.createAssignment(lesson, "Install Python");
instructor.createAssessment(course, "Quiz 1");
const student = new Student(1, "Alice");
student.enroll(course);
