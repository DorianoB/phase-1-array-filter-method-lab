function findMatching(drivers, query) {
  const lowercaseQuery = query.toLowerCase();
  const matchingDrivers = drivers.filter(function (driver) {
    return driver.toLowerCase().includes(lowercaseQuery);
  });

  return matchingDrivers;
}

function fuzzyMatch(drivers, query) {
  // Filter the drivers array based on names that start with the provided query
  const matchingDrivers = drivers.filter((driver) =>
    driver.toLowerCase().startsWith(query.toLowerCase())
  );

  return matchingDrivers;
}

// Example usage:
const driversArray = ["Alice", "Bob", "Charlie", "Dave"];
const query = "b";

// Get the matching drivers
const matchingDrivers = fuzzyMatch(driversArray, query);

function matchName(drivers, name) {
  // Filter the drivers array based on names that match the provided string
  const matchingDrivers = drivers.filter(
    (driver) => driver.name.toLowerCase() === name.toLowerCase()
  );

  return matchingDrivers;
}

// Example usage:
const drivingArray = [
  { name: "Alice", hometown: "City A" },
  { name: "Bob", hometown: "City B" },
  { name: "Charlie", hometown: "City C" },
  { name: "Alice", hometown: "City D" },
];

const nameToMatch = "Alice";

// Get the matching drivers
const matchDrivers = matchName(drivingArray, nameToMatch);
