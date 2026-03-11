import type { Education } from "@/types";

export const educationList: Education[] = [
  {
    institution: "Universidad de los Andes",
    degree: "B.S. Systems & Computer Engineering",
    startYear: 2018,
    endYear: 2022,
    description:
      "Ranked as the #1 university in Colombia and top 5 in Latin America (QS Rankings). Focused on software engineering, algorithms, and web technologies.",
    courses: [
      "Object-Oriented Programming II",
      "Design and Analysis of Algorithms",
      "Probability and Statistics I",
      "Programming with Web Technologies",
      "Construction of Mobile Applications",
    ],
    link: {
      label: "QS Ranking Profile",
      url: "https://www.topuniversities.com/universities/universidad-de-los-andes",
    },
  },
  {
    institution: "Platzi",
    degree: "Online Courses & Certifications",
    startYear: 2019,
    endYear: 2023,
    description:
      "Completed multiple courses ranging from fullstack development to project management in Latin America's leading tech education platform.",
    courses: [
      "Fundamentals of Project Management",
      "Fundamentals of JavaScript",
      "Frontend Developer",
      "React JS",
    ],
    link: {
      label: "Platzi Profile",
      url: "https://platzi.com/p/santiagovargasvega/",
    },
  },
];
