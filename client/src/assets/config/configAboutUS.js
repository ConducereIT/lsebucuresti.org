import videoCultural from "../video/videoCultural.mp4";
import bannerCultural from "../img/departamente/cultural/poza_cultural.webp";
import caritabil from "../img/departamente/cultural/caritabil.webp";
import noaptea_chitarelor from "../img/departamente/cultural/noaptea_chitarelor.webp";
import ccg from "../img/departamente/cultural/ccg.webp";
import bannerInvatamant from "../img/departamente/Invatamant/banner_invatamant.webp";
import simulare from "../img/departamente/Invatamant/simulare.webp";
import arena_electronistilor from "../img/departamente/Invatamant/arena_electronistilor.webp";
import treasure_hunt from "../img/departamente/Invatamant/treasure_hunt.webp";
export const DepartamenteProps = [
  {
    label: "Cultural",
    title: "Departamentul Cultural",
    video: videoCultural,
    banner: "",
    descriere:
      "Departamentul Cultural reprezintă latura artistică a Ligii Studenților Electroniști. Voluntari talentați sau mai puțin talentați, cu toții își unesc forțele spre a organiza evenimente ce permit studenților și nu numai să dea frâu liber imaginației și spiritului creativ.",
    locatie: "A05",
    ora: "Miercuri, ora...",
    imgDescriere: bannerCultural,
    firstTitle: "Spectacolul Caritabil",
    firstDescription:
      "Perioada sărbătorilor de iarnă este despre a-i ajuta pe cei mai puțin norocoși decât noi, iar în acest sens Departamentul Cultural organizează Spectacolul Caritabil. Cei mai talentați voluntari pregătesc diferite obiecte handmade care sunt scoase la licitație, iar cu banii strânși încercăm să aducem zambetul pe buze cauzei susținute. Între rundele de licitații, încântăm publicul cu momente de dans, muzică, actorie și chiar stand-up, totul spre a aduce magia sărbătorilor în sufletele tuturor.",
    firstPicture: caritabil,
    secondTitle: "Noaptea Chitarelor",
    secondDescription:
      "Pentru toate orele petrecute pe băncile facultății, pentru fiecare laborator din zori și seminar târziu în noapte, Departamentul Cultural aduce mult iubitul eveniment, Noaptea Chitarelor, în care schimbăm stresul și monotonia cu distracția specifică studenției! Fie că ai o chitară, cânți solo sau vrei doar să te distrezi alături de noi, Noaptea Chitarelor e sigur locul perfect!",
    secondPicture: noaptea_chitarelor,
    thirdTitle: "Concursul de Cultură Generală",
    thirdDescription:
      "Împreună cu departamentul Învățământ, Departamentul Cultural organizează în fiecare toamnă Concursul de Cultură Generală, unde îți poți testa cunoștințele din diverse domenii precum: geografie, sport, știință, istorie și mitologie, muzică, cinema și multe altele. Competiția este mare, zeci de echipe înscrise la fiecare ediție, iar distracția este la cote maxime!",
    thirdPicture: ccg,
  },
  {
    label: "Învățământ",
    title: "Departamentul Învățământ",
    video: videoCultural,
    banner: bannerInvatamant,
    descriere:
      "Departamentul Învățământ este un liant între liceeni, studenți și facultate, fiind primul departament cu care viitorii studenți întră în contact prin intermediul Simulării Examenului de Admitere, dar și al Promovării facultății în licee.",
    locatie: "A03",
    ora: "Joi, ora 20:30",
    imgDescriere: bannerInvatamant,
    firstTitle: "Simularea Examenului de Admitere",
    firstDescription:
      "Simularea este probabil evenimentul cu cel mai mare număr de voluntari și primul, după promovarea facultății în licee, care ne pune în contact cu viitorii boboci. Eveniment de suflet al departamentului, acesta ia amploare an de an și creează un vibe din ce în ce mai energic și reprezentativ spiritului LSE.",
    firstPicture: simulare,
    secondTitle: "Arena Electroniștilor",
    secondDescription:
      "Cea mai fresh idee a Departamentului Învățământ, Arena electroniștilor este un eveniment care respectă formatul clasic al concursului Ce spun românii, versiunea românească a emisiunii Family Feud, oferind participanților o experiență cel puțin de neuitat.",
    secondPicture: arena_electronistilor,
    thirdTitle: "Treasure Hunt",
    thirdDescription:
      "Orice aventură este caracterizată prin elementul de noutate, astfel că fiecare ediție Treasure Hunt revine cu numeroase schimbări în structura concursului, noile locații propunându-și să scoată la iveală cele mai bune idei și strategii de joc.",
    thirdPicture: treasure_hunt,
  },
];
