// Mapping Object Style

export const exampleStyle = {
  styleComponent: "", //StyledComponent : Componenta care mentine style ul sectiunii cu carduri
  style: "", //Style : Componenta care mentine style ul intregului card
  CardHeaderStyle: "", // Card Header Style : Componenta care mentine style ul headerului unde se afla si imagini
  AmprentaIsActive: true / false, // Amprenta is Active : Componenta care activeaza/dezactiveaza amprenta cu logo-ul LSE.
  CardBodyStyle: "", // Card Body Style : Componenta care mentine style ul body-ului unde se afla si textele
  CardTitleStyle: "", // Card Title Style : Componenta care mentine style ul titlului
  CardTextStyle: "", // Card Text Style : Componenta care mentine style ul textului
  FooterStyle: "", // Footer Style : Componenta care mentine style-ul footer-ului
  isActive: true / false, // Footer is Active : Componenta care activeaza/dezactiveaza footer-ul
};

export const styledObjectExample = {
  styleComponent:
    "w-full flex flex-wrap justify-center bg-gray-200 p-2 sm:p-10 mt-5 sm:mt-40 mb-5 sm:mb-40 h-auto",
  style:
    "md:!h-auto w-full sm:w-1/3 p-4 sm:w-96 sm:h-auto m-3 mt-6 w-96 border border-black p-4 rounded-xl ",
  CardHeaderStyle: "relative h-56 ",
  AmprentaIsActive: false,
  CardBodyStyle: "",
  CardTitleStyle: "",
  CardTextStyle: "",
  FooterStyle: "pt-0 bg-black mt-4 text-center rounded-lg w-full",
  isActive: true,
};

export const styledObjectTest = {
  styleComponent:
    "bg-slay-100 justify-center align-center items-center rounded-none place-items-center w-screen  md:py-10",

  style:
    "md:mt-20 customClass md:flex md:h-64 md:w-[50%] mx-auto  w-500 md:relative  mt-10 mb-10 rounded-none sm:items-center sm:align-center bg-white sm:grid sm:grid-cols-2 sm:w-[50%] sm:justify-center ",

  CardHeaderStyle:
    "rounded-none md:w-full md:h-full sm:h-5 place-items-stretch sm:mt-2 md:ml-0 md:mr-0 md:mt-0 md:mb-0 md:w-1/2 md:absolute  headerClass",

  AmprentaIsActive: false,

  CardBodyStyle:
    "lg:text-right lg:w-96 bodyClass sm:w-[90%] text-center bg-slay-100",

  CardTitleStyle: "text-center ",

  CardTextStyle: "text-center ",

  FooterStyle: "display:none",

  isActive: true,
};

export const styledObjectEvenimente = {
  styleComponent:
    "w-full flex flex-wrap justify-center bg-color-ev p-2 sm:p-10 mt-5 sm:mt-40 md:mb-[-1px] sm:mb-40 md:h-auto rounded-none ",
  style:
    "md:!h-180  w-full sm:w-1/3 p-4 sm:w-96 sm:h-auto m-5 mt-6 w-96 border p-4 border-white bg-color-ev border-2 border-opacity-50 hover:shadow-xl transition duration-300 shadow-white",
  CardHeaderStyle:
    "relative h-auto md:w-full md:!ml-0 sm:ml-0 sm:mr-0 sm:w-96 rounded-none",
  AmprentaIsActive: true,
  CardBodyStyle: "text-white",
  CardTitleStyle: "md:text-center md:mt-10 md:text-xl md:h-20",
  CardTextStyle: "md:text-left md:text-xl font-light",
  FooterStyle: "",
  isActive: false,
};
// Mapping Object

export const test = [
  {
    ImgSrc: "", // Path-ul din folder unde se gaseste imaginea sau locatia web.
    ImgAlt: "", // Denumirea imaginii in caz ca aceasta nu se poate afisa.
    CardTitle: "", // Titlul pe care card-ul tau vrei sa-l aiba
    CardText: "", // Textul ce vrei sa fie inclus in card, sub titlu
    FooterText: "", // In cazul in care componenta ta are footer, acesta o sa fie afizat sub forma de buton in card.
  },
];

import SimulareIMG from "../img/Evenimente/alteEvenimente_simulare.jpg";
import FastFowardImg from "../img/Evenimente/alteEvenimente_fastForward.jpg";
import PrezentariSpecializariImg from "../img/Evenimente/alteEvenimente_PrezentareaSpecializarilor.jpg";
import DiscoverYourFutureImg from "../img/Evenimente/alteEvenimente_discoverYourFuture.jpg";
import WorkShopEducationImg from "../img/Evenimente/alteEvenimente_educatieFinanciara.jpg";
import SpectacolCaritabilImg from "../img/Evenimente/alteEvenimente_spectacolulCaritabil.jpg";
import SearaFilmImg from "../img/Evenimente/alteEvenimente_searaFilmului.jpg";
import WorkshopConeticaImg from "../img/Evenimente/alteEvenimente_conectica.jpg";
import TudorTanasescuImg from "../img/Evenimente/alteEvenimente_tudor.jpg";

export const mappingObjectEvenimente = [
  {
    ImgSrc: SimulareIMG,
    ImgAlt: "",
    CardTitle: "SIMULARE EXAMEN ADMITERE",
    CardText:
      "Acest eveniment are ca scop pregătirea elevilor de liceu prin organizarea unei simulări a examenului de admitere ce are loc în fiecare an în cadrul Universității Politehnica din București. ",
    FooterText: "",
  },
  {
    ImgSrc: FastFowardImg,
    ImgAlt: "",
    CardTitle: "FAST FORWARD",
    CardText:
      "Fast Forward este un simulator de business care antrenează atât competențe de antreprenoriat, cât și de leadership, desfășurat pe 24 de ore, timp în care echipele au ca scop să dubleze suma oferită de organizatori. ",
    FooterText: "",
  },
  {
    ImgSrc: PrezentariSpecializariImg,
    ImgAlt: "",
    CardTitle: "PREZENTAREA SPECIALIZĂRILOR",
    CardText:
      "Departamentul Învățământ vine în ajutorul vostru cu o prezentare a opțiunilor de care beneficiați, prin ochii studenților de anul III și IV. Aceștia sunt nerăbdători să vă împărtășească din experiența lor și să vă răspundă la toate curiozitățile pe care le aveți. ",
    FooterText: "",
  },
  {
    ImgSrc: DiscoverYourFutureImg,
    ImgAlt: "",
    CardTitle: "DISCOVER YOUR FUTURE",
    CardText:
      "Dedicat studenților noștri indeciși cu privire la alegerea carierei și nu numai, Discover Your Future este un eveniment organizat de Departamentul Învățământ. Aflat la prima ediție, acesta și-a propus să aducă mai aproape de noi absolvenți ETTI ce s-au remarcat în diverse domenii specifice facultății noastre. ",
    FooterText: "",
  },
  {
    ImgSrc: WorkShopEducationImg,
    ImgAlt: "",
    CardTitle: "WORKSHOP EDUCAȚIE FINANCIARĂ",
    CardText:
      "Aflăm împreună despre relația oamenilor cu banii, ce înseamnă să ai un venit și care sunt categoriile de cheltuieli pe care să le urmărim lunar. De asemenea, discutăm despre gestionarea rațională a banilor și totodată despre importanța bugetului în procesul de economisire. ",
    FooterText: "",
  },
  {
    ImgSrc: SpectacolCaritabilImg,
    ImgAlt: "",
    CardTitle: "SPECTACOLUL CARITABIL",
    CardText:
      "În fiecare an, perioada Crăciunului ne îndeamnă să ne lăsăm purtați de magia sărbătorilor, iar noi suntem de-a dreptul încântați să organizăm unul dintre cele mai așteptate evenimente ale sfârșitului de an, Spectacolul Caritabil, organizat de către Departamentul Cultural al Ligii Studenților Electroniști. ",
    FooterText: "",
  },
  {
    ImgSrc: SearaFilmImg,
    ImgAlt: "",
    CardTitle: "SEARA FILMULUI",
    CardText:
      "Vrei să vezi un film cu prietenii, dar nu ai chef de cinema? Ei bine, departamentul Cultural vine in ajutorul tău cu “Seara filmului Caritabil”, un eveniment desfășurat într-o atmosferă cozy. ",
    FooterText: "",
  },
  {
    ImgSrc: WorkshopConeticaImg,
    ImgAlt: "",
    CardTitle: "WORKSHOP CONECTICĂ",
    CardText:
      "Probabil ați auzit de-a lungul timpului petrecut pe băncile facultății despre rețele, conexiuni, fibră optică, semnale și tot ce mai include lumea telecomunicațiilor. Departamentul IT vine în ajutorul vostru cu un workshop în parteneriat cu Telecom Academy. ",
    FooterText: "",
  },
  {
    ImgSrc: TudorTanasescuImg,
    ImgAlt: "",
    CardTitle: "CONCURSUL PROFESIONAL 'TUDOR TĂNĂSESCU' ",
    CardText:
      "Concursul e destinat studenților din anii III si IV, dar și studenților aflați la master, probele vizate în cadrul concursului fiind Circuite Integrate Analogice (CIA) si Semnale, Circuite și Sisteme(SCS). ",
    FooterText: "",
  },
];

export const mappingObjectExample = [
  {
    ImgSrc:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    ImgAlt: "card-image",
    CardTitle: "UI/UX Review Check",
    CardText:
      "The place is close to Barceloneta Beach and bus stop just 2 min bywalk and near to quot;Naviglioquot; where you can enjoy the mainnight life in Barcelona.",
    FooterText: "Read More",
  },
  {
    ImgSrc:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    ImgAlt: "card-image",
    CardTitle: "UI/UX Review Check",
    CardText:
      "The place is close to Barceloneta Beach and bus stop just 2 min bywalk and near to quot;Naviglioquot; where you can enjoy the mainnight life in Barcelona.",
    FooterText: "Read More",
  },
  {
    ImgSrc:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    ImgAlt: "card-image",
    CardTitle: "UI/UX Review Check",
    CardText:
      "The place is close to Barceloneta Beach and bus stop just 2 min bywalk and near to quot;Naviglioquot; where you can enjoy the mainnight life in Barcelona.",
    FooterText: "Read More",
  },
  {
    ImgSrc:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    ImgAlt: "card-image",
    CardTitle: "UI/UX Review Check",
    CardText:
      "The place is close to Barceloneta Beach and bus stop just 2 min bywalk and near to quot;Naviglioquot; where you can enjoy the mainnight life in Barcelona.",
    FooterText: "Read More",
  },
];

export const mappingObjectTest = [
  {
    ImgSrc: SimulareIMG,
    ImgAlt: "",
    CardTitle: "SIMULARE EXAMEN ADMITERE",
    CardText:
      "Acest eveniment are ca scop pregătirea elevilor de liceu prin organizarea unei simulări a examenului de admitere ce are loc în fiecare an în cadrul Universității Politehnica din București. ",
    FooterText: "",
  },
  {
    ImgSrc: SimulareIMG,
    ImgAlt: "",
    CardTitle: "SIMULARE EXAMEN ADMITERE",
    CardText:
      "Acest eveniment are ca scop pregătirea elevilor de liceu prin organizarea unei simulări a examenului de admitere ce are loc în fiecare an în cadrul Universității Politehnica din București. ",
    FooterText: "",
  },
];

export const slides = [
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
  },

  {
    url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
  },
];
