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
  CardTitleStyle: "md:text-center md:mt-10 md:text-xl md:h-20 text-center ",
  CardTextStyle: "md:text-left md:text-xl font-light text-center ",
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

import SimulareIMG from "../img/Evenimente/alteEvenimente_simulare.webp";
import FastFowardImg from "../img/Evenimente/alteEvenimente_fastForward.webp";
import PrezentariSpecializariImg from "../img/Evenimente/alteEvenimente_PrezentareaSpecializarilor.webp";
import DiscoverYourFutureImg from "../img/Evenimente/alteEvenimente_discoverYourFuture.webp";
import WorkShopEducationImg from "../img/Evenimente/alteEvenimente_educatieFinanciara.webp";
import SpectacolCaritabilImg from "../img/Evenimente/alteEvenimente_spectacolulCaritabil.webp";
import SearaFilmImg from "../img/Evenimente/alteEvenimente_searaFilmului.webp";
import WorkshopConeticaImg from "../img/Evenimente/alteEvenimente_conectica.webp";
import TudorTanasescuImg from "../img/Evenimente/alteEvenimente_tudor.webp";
import BBETTI from "../img/Evenimente/bal.webp";
import PREADMITERE from "../img/Evenimente/preadmitere.webp";
import ELECTRON from "../img/Evenimente/electron.webp";
import EXPOJOBS from "../img/Evenimente/expojobs.webp";
import RobochallengeImg from "../img/Evenimente/robo.webp";
import DONEAZA from "../img/Evenimente/donare.webp";
import NoapteaChitarelor from "../img/Evenimente/noaptea_chitarelor.webp";
import CulturaGenerala from "../img/Evenimente/concurs_cultura_generala.webp";
import SearaFilmului from "../img/Evenimente/seara_filmului.webp";
import ColorItUp from "../img/Evenimente/color_it_up.webp";
import Actorie from "../img/Evenimente/workshop_actorie.webp";
import APV from "../img/Evenimente/apv.webp";
import StreetBall from "../img/Evenimente/t_streetball.webp";
import LetsDance from "../img/Evenimente/t_letsdance.webp";
import Cardio from "../img/Evenimente/t_cardiontone.webp";
import PingPong from "../img/Evenimente/t_tenisdemasa.webp";
import DodgeBall from "../img/Evenimente/t_dodgeball.webp";
import Table from "../img/Evenimente/t_table.webp";
import GuardUp from "../img/Evenimente/t_guardup.webp";
import Specializari from "../img/Evenimente/prezentarea_specializarilor.webp";
import Treasure from "../img/Evenimente/treasure_hunt.webp";
import Arena from "../img/Evenimente/arena.webp";
import BoardGames from "../img/Evenimente/boardGames.webp";
import Academia from "../img/Evenimente/Academia_de_Sanatate.webp";
import CV from "../img/Evenimente/CV&Interview.webp";
import Biblioteca from "../img/Evenimente/Biblioteca.webp";
export const mappingObjectEvenimente = [
  {
    ImgSrc: Biblioteca,
    ImgAlt: "Biblioteca",
    CardTitle: "BIBLIOTECA VIE",
    CardText:
      "Evenimentul Biblioteca Vie oferă studenților o oportunitate unică de a interacționa direct cu personalități de inedite, de a descoperi poveștile lor de succes și de a primi sfaturi valoroase pentru propria lor călătorie.",
    FooterText: "",
  },
  {
    ImgSrc: CV,
    ImgAlt: "CV",
    CardTitle: "WORKSHOPUL DE CV&INTERVIEW",
    CardText:
      "Workshopul de CV&Interview, vine în ajutorul tuturor studenților care vor să se deosebească printr-un CV curat, un profil de LinkedIn complet și vor să facă o impresie bună în fața unui angajator la interviuri.",
    FooterText: "",
  },
  {
    ImgSrc: Academia,
    ImgAlt: "Academia",
    CardTitle: "ACADEMIA DE SĂNĂTATE",
    CardText:
      "Proiectul “Academia de Sănătate”, devenit o tradiție a departamentului, se axează pe promovarea în rândul studenților unui stil de viață sănătos tratând atât alimentația, sportul, cât și aspectele de socializare.",
    FooterText: "",
  },
  {
    ImgSrc: BoardGames,
    ImgAlt: "BoardGames",
    CardTitle: "BOARDGAMES CARITABIL",
    CardText:
      "Departamentul Învățământ își propune să recreeze după-amiezile plăcute alături de familie sau prieteni într-un cadru de board games, susținând în același timp o cauză caritabilă.",
    FooterText: "",
  },
  {
    ImgSrc: Arena,
    ImgAlt: "Arena",
    CardTitle: "ARENA ELECTRONIȘTILOR",
    CardText:
      "Cea mai fresh idee a Departamentului Învățământ, Arena electroniștilor este un eveniment care respectă formatul clasic al concursului Ce spun românii, versiunea românească a emisiunii Family Feud, oferind participanților o experiență cel puțin de neuitat.",
    FooterText: "",
  },
  {
    ImgSrc: Treasure,
    ImgAlt: "Treasure",
    CardTitle: "TREASURE HUNT",
    CardText:
      "Orice aventură este caracterizată prin elementul de noutate, astfel că fiecare ediție Treasure Hunt revine cu numeroase schimbări în structura concursului, noile locații propunându-și să scoată la iveală cele mai bune idei și strategii de joc.",
    FooterText: "",
  },
  {
    ImgSrc: Specializari,
    ImgAlt: "Specializari",
    CardTitle: "PREZENTAREA SPECIALIZĂRILOR",
    CardText:
      "Pentru că știm cât de grea este alegerea acestora, Departamentul Învățământ vă vine în ajutor cu Prezentarea Specializărilor. Astfel, colegii mai mari de anul 3 și 4 vor sta în fața voastră să vă prezinte specializările în detaliu și să răspundă la toate posibilele întrebări.",
    FooterText: "",
  },
  {
    ImgSrc: GuardUp,
    ImgAlt: "GuardUp",
    CardTitle: "Guard Up",
    CardText:
      "Guard Up este un workshop de autoapărare dedicat studenților, în cadrul căruia aceștia învață tehnici esențiale pentru protecție personală și dezvoltă încredere în sine.",
    FooterText: "",
  },
  {
    ImgSrc: Table,
    ImgAlt: "Table",
    CardTitle: "CUPA ELECTRONICII LA TABLE",
    CardText:
      "Cupa Electronicii la Table este un eveniment de competiție intelectuală și strategie, care transformă masa de joc într-o arenă de bătălie pentru studenți, într-un joc plin de tactici și abilități. Fiecare mutare este importantă, iar competiția este strânsă. ",
    FooterText: "",
  },
  {
    ImgSrc: DodgeBall,
    ImgAlt: "DodgeBall",
    CardTitle: "CUPA ELECTRONICII LA DODGEBALL",
    CardText:
      "Cupa Electronicii la Dodgeball este unică și plină de adrenalină în rândul evenimentelor sportive, studenții confruntându-se într-un joc de echipe ce combină strategia, agilitatea și viteza. Astfel, promovăm competiția sănătoasă, distracția și prietenia pe care sportul le aduce.",
    FooterText: "",
  },
  {
    ImgSrc: PingPong,
    ImgAlt: "PingPong",
    CardTitle: "CUPA ELECTRONICII LA TENIS DE MASĂ",
    CardText:
      "Cupa Electronicii la Tenis de Masă este unul dintre evenimentele sportive de excepție din lumea noastră academică. Acesta adună studenți pasionați de tenis de masă, transformând sălile noastre în arene pline de viteză și concentrare. ",
    FooterText: "",
  },
  {
    ImgSrc: Cardio,
    ImgAlt: "Cardio",
    CardTitle: "CARDIO & TONE",
    CardText:
      " Cardio&Tone reprezintă un workshop de fitness și aerobic care demonstrează cât de plin de bucurie și revitalizant poate fi un antrenament. Împreună, descoperim avantajele unei singure ore de activitate fizică zilnică și modul în care aceasta poate transforma corpul și starea noastră de bine.",
    FooterText: "",
  },
  {
    ImgSrc: LetsDance,
    ImgAlt: "LetsDance",
    CardTitle: "LET'S DANCE",
    CardText:
      "Let's dance este un workshop care, pe parcursul a 3 zile, abordează 3 stiluri de dans diferite. Alături de coregrafi care să ne ghideze pașii, workshop-ul își propune să creeze o atmosferă prielnică astfel încât toată lumea să se distreze și să învețe să danseze.",
    FooterText: "",
  },
  {
    ImgSrc: StreetBall,
    ImgAlt: "StreetBall",
    CardTitle: "CUPA ELECTRONICII LA STREETBALL",
    CardText:
      "Color it Up este evenimentul unde îți poți lăsa imaginația să zboare și unde ai ocazia să personalizezi haine. Ai nevoie doar de un articol vestimentar, puțină inspirație și voie bună ca să aduci la viață o operă de artă! De restul se ocupă departamentul Cultural!",
    FooterText: "",
  },
  // {
  //   ImgSrc: APV,
  //   ImgAlt: "APV",
  //   CardTitle: "ALEARGĂ PENTRU VIAȚĂ",
  //   CardText:
  //     "Aleargă Pentru Viață reprezintă un cros caritabil în care comunitatea noastră se adună pentru a face o diferență reală în viața celor aflați în situații medicale dificile. Cu pași hotărâți și inimi deschise, alergăm pentru a sprijini și a aduce speranță celor care au nevoie de ajutor.",
  //   FooterText: "",
  // },
  {
    ImgSrc: ColorItUp,
    ImgAlt: "ColorItUp",
    CardTitle: "COLOR IT UP",
    CardText:
      "Color it Up este evenimentul unde îți poți lăsa imaginația să zboare și unde ai ocazia să personalizezi haine. Ai nevoie doar de un articol vestimentar, puțină inspirație și voie bună ca să aduci la viață o operă de artă! De restul se ocupă departamentul Cultural!",
    FooterText: "",
  },
  {
    ImgSrc: SearaFilmului,
    ImgAlt: "SearaFilmului",
    CardTitle: "SEARA FILMULUI",
    CardText:
      "Filmele bune nu se văd doar la cinema! Pentru că după o zi plină de cursuri și de seminare merge numai bine o seară de relaxare, Departamentul Cultural ne aduce Seara filmului. Ia-ți cu tine prietenii și alătură-te nouă!",
    FooterText: "",
  },
  // {
  //   ImgSrc: RobochallengeImg,
  //   ImgAlt: "RobochallengeImg",
  //   CardTitle: "ROBOCHALLENGE",
  //   CardText:
  //     "Robochallenge este cea mai mare competiție de robotică din Europa, reunind participanți din toate colțurile lumii pentru a le testa atât abilitățile tehnice, cât și reziliența.",
  //   FooterText: "",
  // },
  {
    ImgSrc: EXPOJOBS,
    ImgAlt: "EXPOJOBS",
    CardTitle: "EXPOJOBS",
    CardText:
      "EXPOJOBS te așteaptă să descoperi noi tendințe și oportunități din industria de electronică, telecomunicații și IT, oferindu-ți ocazia de a discuta în mod direct cu angajatorii și de a-ți prezenta abilitățile și experiența.",
    FooterText: "",
  },
  // {
  //   ImgSrc: DONEAZA,
  //   ImgAlt: "DonareImg",
  //   CardTitle: "DONEAZĂ ȘI TU",
  //   CardText:
  //     "Donează și tu! este evenimentul prin intermediul căruia studenții pot dona sânge pentru a oferi o mână de ajutor celor care au nevoie.",
  //   FooterText: "",
  // },
  // de schimbat imaginea
  {
    ImgSrc: NoapteaChitarelor,
    ImgAlt: "NoapteaChitarelor",
    CardTitle: "NOAPTEA CHITARELOR",
    CardText:
      "Perioada sărbătorilor de iarnă este despre a-i ajuta pe cei mai puțin norocoși, iar în acest sens Dep. Cultural organizează Spectacolul Caritabil. Dans, muzică, teatru, stand-up, licitație cu obiecte handmade, toate se reunesc într-un eveniment pentru a aduce zâmbetul pe buze cauzei susținute!",
    FooterText: "",
  },
  {
    ImgSrc: CulturaGenerala,
    ImgAlt: "CulturaGenerala",
    CardTitle: "CONCURSUL DE CULTURĂ GENERALĂ",
    CardText:
      "Împreună cu Departamentul Învățământ, Departamentul Cultural organizează în fiecare toamnă Concursul de Cultură Generală, unde îți poți testa cunoștințele din diverse domenii. Competiția este mare, zeci de echipe înscrise la fiecare ediție, iar distracția este la cote maxime!",
    FooterText: "",
  },
  {
    ImgSrc: ELECTRON,
    ImgAlt: "ELECTRON",
    CardTitle: "ELECTRON",
    CardText:
      "Electron își propune să le ofere o provocare pasionaților în electronică prin intermediul unui hackathon unde participanții vor avea ocazia să pună cap la cap diferite tehnologii, dispozitive și senzori pentru a rezolva problemele propuse.",
    FooterText: "",
  },
  {
    ImgSrc: PREADMITERE,
    ImgAlt: "PREADMITERE",
    CardTitle: "PREADMITERE",
    CardText:
      "Preadmiterea reprezintă un pas important în parcursul elevilor de liceu către un viitor în domeniul ingineriei, având ca scop testarea cunoștințelor acestora, cât și acceptarea în ciclul de licență dacă rezultatele se dovedesc a fi cele dorite",
    FooterText: "",
  },
  {
    ImgSrc: BBETTI,
    ImgAlt: "BBETTI",
    CardTitle: "BBETTI",
    CardText:
      "Balul Bobocilor oferă șansa celor mai îndrăzneți 12 boboci de a se afirma în rândul studenților, demonstrându-și talentul și carisma, sub o tematică inedită an de an.",
    FooterText: "",
  },
  {
    ImgSrc: SimulareIMG,
    ImgAlt: "Simulare",
    CardTitle: "SIMULARE EXAMEN ADMITERE",
    CardText:
      "Acest eveniment are ca scop pregătirea elevilor de liceu prin organizarea unei simulări a examenului de admitere ce are loc în fiecare an în cadrul Universității Politehnica din București. ",
    FooterText: "",
  },
  {
    ImgSrc: FastFowardImg,
    ImgAlt: "FastFowardImg",
    CardTitle: "FAST FORWARD",
    CardText:
      "Fast Forward este un simulator de business care antrenează atât competențe de antreprenoriat, cât și de leadership, desfășurat pe 24 de ore, timp în care echipele au ca scop să dubleze suma oferită de organizatori. ",
    FooterText: "",
  },
  {
    ImgSrc: PrezentariSpecializariImg,
    ImgAlt: "PrezentariSpecializariImg",
    CardTitle: "PREZENTAREA SPECIALIZĂRILOR",
    CardText:
      "Departamentul Învățământ vine în ajutorul vostru cu o prezentare a opțiunilor de care beneficiați, prin ochii studenților de anul III și IV. Aceștia sunt nerăbdători să vă împărtășească din experiența lor și să vă răspundă la toate curiozitățile pe care le aveți. ",
    FooterText: "",
  },
  {
    ImgSrc: DiscoverYourFutureImg,
    ImgAlt: "DiscoverYourFutureImg",
    CardTitle: "DISCOVER YOUR FUTURE",
    CardText:
      "Dedicat studenților noștri indeciși cu privire la alegerea carierei și nu numai, Discover Your Future este un eveniment organizat de Departamentul Învățământ. Aflat la prima ediție, acesta și-a propus să aducă mai aproape de noi absolvenți ETTI ce s-au remarcat în diverse domenii specifice facultății noastre. ",
    FooterText: "",
  },
  {
    ImgSrc: WorkShopEducationImg,
    ImgAlt: "WorkShopEducationImg",
    CardTitle: "WORKSHOP EDUCAȚIE FINANCIARĂ",
    CardText:
      "Aflăm împreună despre relația oamenilor cu banii, ce înseamnă să ai un venit și care sunt categoriile de cheltuieli pe care să le urmărim lunar. De asemenea, discutăm despre gestionarea rațională a banilor și totodată despre importanța bugetului în procesul de economisire. ",
    FooterText: "",
  },
  {
    ImgSrc: SpectacolCaritabilImg,
    ImgAlt: "SpectacolCaritabilImg",
    CardTitle: "SPECTACOLUL CARITABIL",
    CardText:
      "În fiecare an, perioada Crăciunului ne îndeamnă să ne lăsăm purtați de magia sărbătorilor, iar noi suntem de-a dreptul încântați să organizăm unul dintre cele mai așteptate evenimente ale sfârșitului de an, Spectacolul Caritabil, organizat de către Departamentul Cultural al Ligii Studenților Electroniști. ",
    FooterText: "",
  },
  {
    ImgSrc: SearaFilmImg,
    ImgAlt: "SearaFilmImg",
    CardTitle: "SEARA FILMULUI",
    CardText:
      "Vrei să vezi un film cu prietenii, dar nu ai chef de cinema? Ei bine, departamentul Cultural vine in ajutorul tău cu “Seara filmului Caritabil”, un eveniment desfășurat într-o atmosferă cozy. ",
    FooterText: "",
  },
  {
    ImgSrc: WorkshopConeticaImg,
    ImgAlt: "WorkshopConeticaImg",
    CardTitle: "WORKSHOP CONECTICĂ",
    CardText:
      "Probabil ați auzit de-a lungul timpului petrecut pe băncile facultății despre rețele, conexiuni, fibră optică, semnale și tot ce mai include lumea telecomunicațiilor. Departamentul IT vine în ajutorul vostru cu un workshop în parteneriat cu Telecom Academy. ",
    FooterText: "",
  },
  {
    ImgSrc: TudorTanasescuImg,
    ImgAlt: "TudorTanasescuImg",
    CardTitle: "CONCURSUL PROFESIONAL 'TUDOR TĂNĂSESCU' ",
    CardText:
      "Concursul e destinat studenților din anii III si IV, dar și studenților aflați la master, probele vizate în cadrul concursului fiind Circuite Integrate Analogice (CIA) si Semnale, Circuite și Sisteme(SCS). ",
    FooterText: "",
  },
  {
    ImgSrc: Actorie,
    ImgAlt: "Actorie",
    CardTitle: "WORKSHOP DE ACTORIE",
    CardText:
      "Dacă vrei să descoperi secretele actoriei și să experimentezi pe propria piele arta interpretării scenice, Workshop-ul de Actorie este evenimentul potrivit! Vei avea ocazia să înveți tehnici și trucuri de la cei mai buni și să-ți îmbunătățești abilitățile de interpretare.",
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
