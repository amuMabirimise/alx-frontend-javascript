function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.filter(student => student.location == cityi);
}

export default getStudentsByLocation;
