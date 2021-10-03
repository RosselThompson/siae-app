export const criteriaType = [
  { id: 0, name: 'Si No' },
  { id: 1, name: '1 a 5' },
  { id: 2, name: 'Libre' },
  { id: 3, name: 'Multiple' },
];

export const dashboardType = [
  { id: 0, name: 'Docente' },
  { id: 1, name: 'Jefe de Departamento' },
  { id: 2, name: 'Decano' },
];

const years = () => {
  const year = new Date().getFullYear();
  let arrayYear = [];
  for (let index = 0; index < 10; index++) {
    arrayYear = [...arrayYear, year - 5 + index];
  }
  return arrayYear;
};

export const yearType = years();

export const semesterType = ['I Semestre', 'II Semestre'];
