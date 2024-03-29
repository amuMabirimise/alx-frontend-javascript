export default function createIteratorObject(report) {
  const employeesIterator = {
    [Symbol.iterator]: function* () {
      for (const department in report.allEmployees) {
        const employees = report.allEmployees[department];
        for (const employee of employees) {
          yield employee;
        }
      }
    },
  };

  return employeesIterator;
}

