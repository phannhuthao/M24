class Student {
    id: number;
    name: string;
    enrolledCourses: Course[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }

    enroll(course: Course): void {
        if (!this.enrolledCourses.includes(course)) {
            this.enrolledCourses.push(course);
            console.log(`${this.name} has been enrolled in ${course.title}`);
        }
    }
}

class Instructor {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    createCourse(title: string): Course {
        const course = new Course(title, this);
        console.log(`Course "${title}" created by ${this.name}`);
        return course;
    }

    createLesson(course: Course, lessonTitle: string): Lesson {
        const lesson = new Lesson(lessonTitle);
        course.lessons.push(lesson);
        console.log(`Lesson "${lessonTitle}" added to course "${course.title}"`);
        return lesson;
    }

    createAssignment(lesson: Lesson, assignment: string): void {
        lesson.assignments.push(assignment);
        console.log(`Assignment "${assignment}" added to lesson "${lesson.title}"`);
    }

    createAssessment(course: Course, assessment: string): void {
        course.assessments.push(assessment);
        console.log(`Assessment "${assessment}" added to course "${course.title}"`);
    }
}

class Course {
    title: string;
    instructor: Instructor;
    lessons: Lesson[];
    assessments: string[];

    constructor(title: string, instructor: Instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
}

class Lesson {
    title: string;
    assignments: string[];

    constructor(title: string) {
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
