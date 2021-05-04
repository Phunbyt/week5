export const prefilled = Array.from({ length: 50 }).map((pass, ind) => ({
    name: `${"passenger" + (ind+1)}`,
    location: expect.any(String),
  }));