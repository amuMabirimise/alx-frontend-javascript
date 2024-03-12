class Student {
  constructor(id, firstName, location) {
    this.id = id;
    this.firstName = firstName;
    this.location = location;
  }
}

function getListStudents() {
  const students = [
    new Student(1, 'Guillaume', 'San Francisco'),
    new Student(2, 'James', 'Columbia'),
    new Student(5, 'Serena', 'San Francisco'),
  ];

  return students;
}

export default getListStudents;
