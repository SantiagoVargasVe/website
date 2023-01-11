import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./MyEducation/styles.css";
export default function MyEducation() {
  return (
    <section id="education" class="mt-10 flex flex-col gap-5">
      <h2 class="font-roboto text-2xl font-bold text-emerald-500">
        My education
      </h2>

      <Accordion.Root
        className="flex flex-col gap-3"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <Accordion.Item className="accordion-item" value="item-1">
          <Accordion.Header>
            <Accordion.Trigger className="accordion-trigger">
              Platzi
              <ChevronDownIcon aria-hidden />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <div className="accordion-text">
              <p>
                I have been a platzi student since 2019. There I have found many
                useful courses and a stunning community. I have learned from
                fullstack development to project managment. These are some of
                the courses I have took from them:
              </p>
              <ul class="list-disc pl-4">
                <li>
                  <a
                    class="underline"
                    id="managment"
                    href="https://platzi.com/p/santiagovargasvega/curso/1721-gestion/diploma/detalle/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fundamentals of project management
                  </a>
                </li>
                <li>
                  <a
                    class="underline"
                    id="javascript"
                    href="https://platzi.com/p/santiagovargasvega/curso/1339-fundamentos-javascript/diploma/detalle/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fundamentals of Javascript
                  </a>
                </li>
                <li>
                  <a
                    class="underline"
                    id="frontend"
                    href="https://platzi.com/p/santiagovargasvega/curso/1640-course/diploma/detalle/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontend developer
                  </a>
                </li>
                <li>
                  <a
                    class="underline"
                    id="react"
                    href="https://platzi.com/p/santiagovargasvega/curso/1651-react-ejs/diploma/detalle/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React JS
                  </a>
                </li>
              </ul>
              <p>
                You can find more courses I have done in my
                <a
                  class="underline"
                  id="platzi_link"
                  href="https://platzi.com/p/santiagovargasvega/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  platzi profile
                </a>
                .
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="accordion-item" value="item-2">
          <Accordion.Header>
            <Accordion.Trigger className="accordion-trigger">
              Universida de los Andes
              <ChevronDownIcon aria-hidden />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <div className="accordion-text">
              <p>
                I started my bachealors degree at Universidad de los Andes in
                the first semester of 2018. During my education I worked as a
                teaching assitant for the class Programación Orientada a Objetos
                I (Object-oriented programming I). These are some of the courses
                I took:
              </p>

              <ul class="list-disc pl-4">
                <li>Object-oriented programming II</li>
                <li>Design and Analysis of Algorithms</li>
                <li>Probability and Statistics I</li>
                <li>Programming with Web Technologies</li>
                <li>Construction of Mobile Applications</li>
              </ul>
              <p>
                For more information about Universidad de los Andes you can
                check its
                <a
                  class="underline"
                  id="QS"
                  href="https://www.topuniversities.com/universities/universidad-de-los-andes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  QS Ranking profile
                </a>
                which ranks it as the 5th best in LatAm.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
}
