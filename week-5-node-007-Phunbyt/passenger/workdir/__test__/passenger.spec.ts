import task from "../task/app";
import { prefilled } from "./mock";

describe("Test for function structure", () => {
  it("Returns an object for even distro", () => {
    const expected = task(25, 1);
    expect(typeof expected).toBe("object");
  });

  it("checks that the function is called with 2 arguments", () => {
    expect(task.length).toBe(2);
  });
});

describe("Test for function expected value", () => {
  it("Returns evenly distributed values for boarded", () => {
    const expected = task(50, 1).boarded.length;
    expect(expected % 5).toEqual(0);
  });

  it("Returns reservation list for uneven distro", () => {
    const expected = task(53, 1).reservation.length;
    expect(expected % 5).toEqual(3);
  });

  it("boarded does not exceed 50 people for 60 passengers with shuffle of 0", () => {
    const expected = task(60, 0).boarded.length;
    expect(expected).toEqual(50);
  });
});

describe("test for shuffle", () => {
  it("Single shuffle works ", () => {
    const expected = task(100, 1).boarded.length;
    const expectedCount = task(100, 1).count;
    expect(expected).toEqual(50);
    expect(expectedCount).toEqual(2);
  });

  it("first multiple shuffle works ", () => {
    const expected = task(259, 3).boarded.length;
    const expectedCount = task(259, 3).count;
    const expectedRes = task(259, 3).reservation.length;

    expect(expected).toEqual(50);
    expect(expectedCount).toEqual(4);
    expect(expectedRes).toEqual(59);
  });

  it("second multiple shuffle works ", () => {
    const expected = task(209, 3);
    expect(expected.count).toEqual(4);
  });

  it("third multiple shuffle works ", () => {
    const expected = task(259, 4);
    expect(expected.count).toEqual(5);
  });
});


describe("test for boarded value with passengers of 50 and shuffle 0", () => {
  let passengers = 50;
  let shuffle = 0;

  const expected = task(passengers, shuffle);
  expect(expected.boarded).toStrictEqual(prefilled);
});
