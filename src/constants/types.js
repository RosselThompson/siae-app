export const CRITERIA_TYPE = [
  { id: 0, name: 'Si No' },
  { id: 1, name: '1 a 5' },
  { id: 2, name: 'Libre' },
  { id: 3, name: 'Multiple' },
];

export const DASHBOARD_TYPE = [
  { id: 0, name: 'Docente' },
  { id: 1, name: 'Jefe de Departamento' },
  { id: 2, name: 'Decano' },
];

const getYears = () => {
  const year = new Date().getFullYear();
  let arrayYear = [];
  for (let index = 0; index < 10; index++) {
    arrayYear = [...arrayYear, year - 5 + index];
  }
  return arrayYear;
};

export const YEAR_TYPE = getYears();

export const SEMESTER_TYPE = ['I Semestre', 'II Semestre'];

export const SLIDER_MARKS = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
];

export const YES_NO = [
  { value: 1, label: 'Si' },
  { value: 0, label: 'No' },
];
