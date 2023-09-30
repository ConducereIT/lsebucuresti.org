import React from "react";

export default function AboutFaq() {
  return (
    <>
      <div>
        <ul className="max-w-2xl mx-auto divide-y  shadow shadow-blue-600 rounded-xl">
          <li>
            <details className="group" open>
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className=" select-none">
                  Cum este structurată organizația?
                </span>
              </summary>

              <article className="px-4 pb-4">
                <p className=" text-sm">
                  Liga este împărțită în 7 departamente acoperind o gamă largă
                  de domenii, astfel încât fiecare voluntar să poată opta pentru
                  cel/cele cu care se identifică cel mai bine. Cordoonatorii
                  acestor departamente fac parte din Consiliul Director, alături
                  de consilierii de an și membrii Consiliului Executiv.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className=" select-none">
                  Cum pot face parte și eu din LSE?
                </span>
              </summary>

              <article className="px-4 pb-4">
                <p className=" text-sm">
                  Pentru a face parte din LSE este necesară doar implicarea
                  voastră în departamentele și evenimetele ligii, iar pentru a
                  fi la curent cu activitatea noastră, urmăriți-ne pe
                  platformele de mai jos.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className=" select-none">
                  Cine sunt Consilierii de An?
                </span>
              </summary>

              <article className="px-4 pb-4">
                <p className=" text-sm">
                  Consilierii de an sunt vocile studenților în fața profesorilor
                  și au grijă întodeauna ca opiniile noastre să fie luate în
                  considerare. Ei sunt legătura principală dintre studenți și
                  profesori. Pentru consilieri se fac alegeri la începutul
                  fiecărui an universitar, așa că te așteptăm să ni te alături!
                </p>
              </article>
            </details>
          </li>
        </ul>
      </div>
    </>
  );
}
