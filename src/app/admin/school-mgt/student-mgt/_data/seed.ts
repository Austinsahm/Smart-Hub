import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

import { labels, gender, statuses, classes } from "./data";

const student = Array.from({ length: 100 }, () => ({
  id: `NCG-${faker.number.int({ min: 0, max: 24 })}-${faker.number.int({
    min: 1000,
    max: 9999,
  })}`,
  title: faker.person.fullName(),
  status: faker.helpers.arrayElement(statuses).value,
  label: faker.helpers.arrayElement(labels).value,
  gender: faker.helpers.arrayElement(gender).value,
  class: faker.helpers.arrayElement(classes).value,
}));

fs.writeFileSync(
  path.join(__dirname, "student.json"),
  JSON.stringify(student, null, 2)
);

console.log("✅ Tasks data generated.");
