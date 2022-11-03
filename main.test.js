//👉 Write your tests below here:
//Import Jest command from Jest globals Done
//Import the function from main.js  Done

import { test, expect } from "@jest/globals";
import { coachesNamesWithVowels } from "./main.js";

// Label the test as "Returning the coaches names with two or more vowels"
//Write the test
//  - Our test will take an array of coaches names
//  Coaches names: Arshi, Charlotte, Kazeem, Liz, Loz, Hamza
//  - Our test will expect Arshi, Charlotte, Kazeem and Hamza

test("Returning the coaches names with two or more vowels", () => {
  const actual = coachesNamesWithVowels([
    "Arshi",
    "Charlotte",
    "Kazeem",
    "Liz",
    "Loz",
    "Hamza",
  ]);
  const expected = ["Arshi", "Charlotte", "Kazeem", "Hamza"];

  expect(actual).toStrictEqual(expected);
});
