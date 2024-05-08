const employee = {
  name: 'Yuriy',
  streetAddress: 'None of your business'
};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  return {
    ...employee,
    [key]: value
  };
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  return employee[key] = value;
}
