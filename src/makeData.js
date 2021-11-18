import namor from "namor";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const thing = [
  {
    time: "1 min ago",
    severity: "LOW",
    domain: "LAND",
    title: "TROOP MOVEMENT",
    status: "IN REVIEW",
    responseAction: "COMPARE WITH INFO DOMAIN"
  },
  {
    time: "2 min ago",
    severity: "MEDIUM",
    domain: "LAND",
    title: "LANDSCAPE CHANGE",
    status: "IN REVIEW",
    responseAction: "COMPARE WITH INFO DOMAIN"
  },
  {
    time: "5 min ago",
    severity: "MEDIUM",
    domain: "INFORMATION",
    title: "CONCENTRATED TOPIC IN NEWS SOURCES",
    status: "IN REVIEW",
    responseAction: "COMPARE WITH CYBER DOMAIN"
  }
];

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33
        ? "complicated"
        : "single"
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      };
    });
  };
  //
  return thing;
}
