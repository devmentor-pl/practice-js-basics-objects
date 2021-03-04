const user = {
  firstName: 'Sebastian',
  lastName: 'Matysiak',
  sex: 'Male',
  age: '23',
};

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
