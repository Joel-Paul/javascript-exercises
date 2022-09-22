const findTheOldest = function(people) {
  const currentYear = new Date().getFullYear();

  return people.reduce((oldest, current) => {
    const lastYearO = 'yearOfDeath' in oldest ? oldest.yearOfDeath : currentYear;
    const ageO = lastYearO - oldest.yearOfBirth;

    const lastYearC = 'yearOfDeath' in current ? current.yearOfDeath : currentYear;
    const ageC = lastYearC - current.yearOfBirth;

    return ageC > ageO ? current : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
