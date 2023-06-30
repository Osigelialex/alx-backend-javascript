export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('TypeError: Name must be a string');
    }
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('TypeError: Length must be a number');
    }
  }

  set students(students) {
    if (students.every((student) => typeof student === 'string')) {
      this._students = students;
    } else {
      throw new Error('TypeError: Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this.length;
  }

  get students() {
    return this.students;
  }
}
