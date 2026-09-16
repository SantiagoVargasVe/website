import type { Education } from "@/types";

export const educationList: Education[] = [
  {
    institution: "Universidad de los Andes",
    degree: "B.S. Systems & Computer Engineering",
    startYear: 2018,
    endYear: 2022,
    description:
      "Studied software engineering, algorithms, and web technologies, with hands-on projects across web and mobile development.",
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
      "Continued learning in frontend development, JavaScript, React, and project management.",
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
