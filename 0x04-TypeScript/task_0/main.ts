interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  location: 'New York'
};

const student2: Student = {
  firstName: 'George',
  lastName: 'Hotz',
  age: 33,
  location: 'San Francisco'
};

const studentList: Student[] = [student1, student2];

const tableElement: HTMLTableElement = document.createElement('table');

studentList.forEach((student: Student) => {
  const tableRow: HTMLTableRowElement = document.createElement('tr');
  const firstNameData: HTMLTableDataCellElement = document.createElement('td');
  const locationData: HTMLTableDataCellElement = document.createElement('td');

  firstNameData.textContent = student.firstName;
  locationData.textContent = student.location;

  tableRow.appendChild(firstNameData);
  tableRow.appendChild(locationData);
  tableElement.appendChild(tableRow);
});
