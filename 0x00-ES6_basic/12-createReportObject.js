export default function createReportObject(employeesList) {
  const allEmployees = {
    ...employeesList,
  };

  // eslint-disable-next-line func-names
  const getNumberOfDepartments = function () {
    return Object.keys(allEmployees).length;
  };

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
