export const getRoleByString = (data, roleData) =>
  data.map((e) => ({
    ...e,
    rol: roleData.filter((r) => e.role.split(', ').includes(r.nombreRol)),
  }));
