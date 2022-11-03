import { test, expect } from "@jest/globals";
import { coachesNamesWithVowels } from "./main.js";


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
