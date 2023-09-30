import React from "react";

export const titleFirstFacultate =
  "Facultatea de Electronică, Telecomunicații și Tehnologia Informației";
export const descriptionFirstFacultate = (
  <p className="text-sm md:text-base text-left opacity-90 md:pr-8">
    <span className=" font-bold">
      Facultatea de Electronică, Telecomunicații și Tehnologia Informației
      (ETTI)
    </span>{" "}
    este una dintre cele mai mari și mai cunoscute facultăți din țară,
    școlarizând peste 3000 de studenți și oferind studenților și absolvenților
    săi un ansamblu armonios de avantaje educaționale.{" "}
    <p className="mt-2">
      Activitatea universitară în facultate se desfășoară conform sistemului
      Bologna în cele trei cicluri: licență – cu o durata de 4 ani cu scopul
      instruirii fundamentale a viitorului inginer electronist de
      telecomunicații și tehnologia informației, masterat – pentru aprofundarea
      domeniilor de specialitate și doctorat.
    </p>
  </p>
);
export const secondTitleFacultate = "Studii de licență";
export const secondDescriptionFacultate = (
    <div>
        <h1 className="text-base font-bold mb-4">Facultatea de Electronică, Telecomunicații și Tehnologia Informației</h1>

        <p className="text-base">Pregătim ingineri în două domenii principale, fiecare având unul sau mai multe programe de studii:</p>

        <h2 className="text-base font-semibold mt-4 mb-2">Domeniul Inginerie Electronică, Telecomunicații și Tehnologii Informaționale</h2>

        <p className="text-base">Acest domeniu include șase programe de studiu după cum urmează:</p>

        <ul className="list-disc pl-8">
            <li className="text-base">în limba română
                <ul className="list-disc pl-4">
                    <li className="text-base">Electronică aplicată</li>
                    <li className="text-base">Tehnologii și sisteme de telecomunicații</li>
                    <li className="text-base">Rețele și software de telecomunicații</li>
                    <li className="text-base">Microelectronică, optoelectronică și nanotehnologii</li>
                </ul>
            </li>
            <li className="text-base">în limba engleză – certificare EUR-ACE
                <ul className="list-disc pl-4">
                    <li className="text-base">Electronică aplicată – în limba engleză</li>
                    <li className="text-base">Tehnologii și sisteme de telecomunicații – în limba engleză</li>
                </ul>
            </li>
        </ul>

        <h2 className="text-base font-semibold mt-4 mb-2">Domeniul Calculatoare și Tehnologia Informației</h2>

        <p className="text-base">Acest domeniu include următorul program în limba română:</p>

        <ul className="list-disc pl-8">
            <li className="text-base">Ingineria informației</li>
        </ul>
    </div>
);

import Avatar from "../img/Facultate/profesori/avatar.webp";
import Carmen from "../img/Facultate/profesori/CarmenFlorea.webp"
import Nastac from "../img/Facultate/profesori/Nastac.webp"
import Rodica from "../img/Facultate/profesori/Rodica-Constantinescu.webp"
import Hobincu from "../img/Facultate/profesori/hobincu.webp"
import Laura from "../img/Facultate/profesori/laura_florea.webp"
import Udrea from "../img/Facultate/profesori/mihnea_udrea.webp"
import Stanciu from "../img/Facultate/profesori/mihai_stanciu.webp"
export const membersFaculty = [
    {
        image: Udrea,
        nume: "Prof. dr. ing. Mihnea UDREA",
        title: "Decan",
    },
    {
        image: Carmen,
        nume: "S.l.dr.ing Carmen FLOREA",
        title: "Prodecan",
    },
    {
        image: Laura,
        nume: "Conf.dr.ing Laura FLOREA",
        title: "Prodecan",
    },
    {
        image: Stanciu,
        nume: "Conf.dr.ing Mihai STANCIU",
        title: "Prodecan",
    },
    {
        image: Rodica,
        nume: "Ș.l.dr.ing Rodica Constantinescu",
        title: "Prodecan",
    },
    {
        image: Hobincu,
        nume: "Ș.l.dr.ing Radu HOBINCU",
        title: "Prodecan",
    },
    {
        image: Nastac,
        nume: "Conf.dr.ing. Iulian Dumitru Năstac",
        title: "Prodecan",
    },
];
