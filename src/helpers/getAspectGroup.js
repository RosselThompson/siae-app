export const getAspectGroup = (aspectData) =>
  aspectData
    .map((e) => e.variables.map((r) => ({ ...r, group: e.name })))
    .reduce((prev, next) => prev.concat(next));

export default getAspectGroup;
