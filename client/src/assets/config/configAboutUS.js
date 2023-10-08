import {
  styledObjectConducereIT,
  mappingObjectConducereIT,
  styledObjectConducereSportiv,
  mappingObjectConducereSportiv,
  styledObjectConducereInvatamant,
  mappingObjectConducereInvatamant,
  styledObjectConducereCultural,
  mappingObjectConducereCultural,
  styledObjectConducereLogistica,
  mappingObjectConducereLogistica,
  styledObjectConducereMedia,
  mappingObjectConducereMedia,
  styledObjectConducereYDD,
  mappingObjectConducereYDD,
} from "../../assets/config/configDepartamente";

import videoCultural from "../img/departamente/cultural/videoCultural.mp4";
import bannerCultural from "../img/departamente/cultural/cultbanner.webp";
import logoCultural from "../img/departamente/cultural/culturalogo.webp";
import descriereCulturalPc from "../img/departamente/cultural/cultprez.webp";
import caritabil from "../img/departamente/cultural/caritabil.webp";
import caritabilbanner from "../img/departamente/cultural/caritabilbanner.webp";
import noaptea_chitarelor from "../img/departamente/cultural/noaptea_chitarelor.webp";
import noaptea_chitarelor_banner from "../img/departamente/cultural/noaptea_chitarelor_banner.webp";
import ccg from "../img/departamente/cultural/ccg.webp";
import ccg_banner from "../img/departamente/cultural/ccg_banner.webp";

import videoLogistica from "../img/departamente/logi/Video_Logi.mp4";
import bannerLogistica from "../img/departamente/logi/logibanner.webp";
import logoLogistica from "../img/departamente/logi/logilogo.webp";
import descriereLogisticaPc from "../img/departamente/logi/sedinta.webp";
import descriereLogisticaTlf from "../img/departamente/logi/sedintabanner.webp";
import robo from "../img/departamente/logi/robo.webp";
import robobanner from "../img/departamente/logi/robobanner.webp";
import robo1 from "../img/departamente/logi/logi3.webp";
import robo1banner from "../img/departamente/logi/logi3banner.webp";

import videoInvatamant from "../img/departamente/Invatamant/videoInvatamant.mp4";
import bannerInvatamant from "../img/departamente/Invatamant/banner_invatamant.webp";
import logoInvatamant from "../img/departamente/Invatamant/logo_invatamant.webp";
import descriere from "../img/departamente/Invatamant/poza_inv.webp";
import simulare from "../img/departamente/Invatamant/simulare.webp";
import arena_electronistilor from "../img/departamente/Invatamant/arena_electronistilor.webp";
import treasure_hunt from "../img/departamente/Invatamant/treasure_hunt.webp";

import videoSportiv from "../img/departamente/sportiv/videoSportiv.mp4";
import bannerSportiv from "../img/departamente/sportiv/banner_sportiv.webp";
import logoSportiv from "../img/departamente/sportiv/Logo_Sportiv.webp";
import descriereSportivPc from "../img/departamente/sportiv/poza_toti_membrii_sportiv_pc.webp";
import descriereSportivTlf from "../img/departamente/sportiv/poza_toti_membrii_sportiv_tlf.webp";
import evenimentSportivPC_1 from "../img/departamente/sportiv/3ev_apv_pc.webp";
import evenimentSportivTlf_1 from "../img/departamente/sportiv/3ev_apv_tlf.webp";
import evenimentSportivPC_2 from "../img/departamente/sportiv/3ev_streetball_pc.webp";
import evenimentSportivTlf_2 from "../img/departamente/sportiv/3ev_streetball_tlf.webp";
import evenimentSportivPC_3 from "../img/departamente/sportiv/3ev_letsdance_pc.webp";
import evenimentSportivTlf_3 from "../img/departamente/sportiv/3ev_letsdance_tlf.webp";

import Video_IT from "../img/departamente/it/Video_IT.mp4";
import bannerIT from "../img/departamente/it/banner_it.webp";
import logoIT from "../img/departamente/it/logoIT.webp";
import descriereItPc from "../img/departamente/it/poza_toti_membrii_it_pc.webp";
import descriereItTlf from "../img/departamente/it/poza_toti_membrii_it_tlf.webp";
import evenimentItPC_1 from "../img/departamente/it/3ev_fifa_pc.webp";
import evenimentItTlf_1 from "../img/departamente/it/3ev_fifa_tlf.webp";
import evenimentItPC_2 from "../img/departamente/it/3ev_fifa_pc_2.webp";
import evenimentItTlf_2 from "../img/departamente/it/3ev_fifa_tlf_2.webp";
import evenimentItPC_3 from "../img/departamente/it/3ev_fifa_pc_3.webp";
import evenimentItTlf_3 from "../img/departamente/it/3ev_fifa_tlf_3.webp";

import videoMedia from "../img/departamente/media/Video_Media.mp4";
import bannerMedia from "../img/departamente/media/mediaban.webp";
import logoMedia from "../img/departamente/media/medialog.webp";
import descriereMediaPc from "../img/departamente/media/media.webp";
import descriereMediaTlf from "../img/departamente/media/mediaban.webp";
import media1 from "../img/departamente/media/media1.webp";
import media2 from "../img/departamente/media/media2.webp";
import media3 from "../img/departamente/media/media3.webp";

import videoYDD from "../img/departamente/ydd/Video_YDD.mp4";
import bannerYDD from "../img/departamente/ydd/Banner_YDD.webp";
import logoYDD from "../img/departamente/ydd/Logo_YDD.webp";
import descriereYDDPc from "../img/departamente/ydd/CV_Interview.webp";
import academia_sanatate from "../img/departamente/ydd/Academia_de_Sanatate.webp";
import biblioteca from "../img/departamente/ydd/Biblioteca.webp";
import cv_interview from "../img/departamente/ydd/CV_Interview.webp";

export const DepartamenteProps = [
  {
    label: "IT",
    logo: logoIT,
    title: "Departamentul IT",
    video: Video_IT,
    banner: bannerIT,
    maiputernici: true,
    descriere:
      "Departamentul IT se ocupă cu administrarea site-urilor ligii și introduce în diverse moduri interactive domeniul studiat de noi la facultate.",
    locatie: "A04",
    ora: "Joi, ora 20:00",
    imgDescriere: descriereItPc,
    imgDescriereTlf: descriereItTlf,
    firstTitle: "FIFA Competition",
    firstDescription:
      "Această competiție îi adună pe cei mai abițioși jucători de FIFA pentru a demonstra cine este cel mai bun jucător.",
    firstPicture: evenimentItPC_1,
    firstPictureTlf: evenimentItTlf_1,
    secondTitle: "FIFA Competition",
    secondDescription:
      "Această competiție îi adună pe cei mai abițioși jucători de FIFA pentru a demonstra cine este cel mai bun jucător.",
    secondPicture: evenimentItPC_2,
    secondPictureTlf: evenimentItTlf_2,
    thirdTitle: "FIFA Competition",
    thirdDescription:
      "Această competiție îi adună pe cei mai abițioși jucători de FIFA pentru a demonstra cine este cel mai bun jucător.",
    thirdPicture: evenimentItPC_3,
    thirdPictureTlf: evenimentItTlf_3,
    styledObjectConducere: styledObjectConducereIT,
    mappingObjectConducere: mappingObjectConducereIT,
  },
  {
    label: "Sportiv",
    logo: logoSportiv,
    title: "Departamentul Sportiv",
    video: videoSportiv,
    banner: bannerSportiv,
    maiputernici: true,
    descriere:
      "Departamentul Sportiv încurajează studenții să participe la activități fizice recreative. Cu un angajament ferm pentru promovarea mișcării, departamentul nu doar că ne amintește de importanța activității fizice, ci și creează o comunitate vibrantă și sănătoasă.",
    locatie: "A101",
    ora: "Luni, ora 20:30",
    imgDescriere: descriereSportivPc,
    imgDescriereTlf: descriereSportivTlf,
    firstTitle: "Aleargă Pentru Viață",
    firstDescription:
      "Având o tradiție de 13 ani, Aleargă Pentru Viață reprezintă un cros caritabil în care comunitatea noastră se adună pentru a face o diferență reală în viața celor aflați în situații medicale dificile. Cu pași hotărâți și inimi deschise, alergăm pentru a sprijini și a aduce speranță celor care au nevoie de ajutor.Prin intermediul acestui eveniment reușim atât să îi ajutăm pe cei aflați în dificultate, cât și să promovăm mișcarea și un stil de viață sănătos.",
    firstPicture: evenimentSportivPC_1,
    firstPictureTlf: evenimentSportivTlf_1,
    secondTitle: "Cupa Electronicii la Streetball",
    secondDescription:
      "Cupa Electronicii la Streetball reprezintă unul dintre cele mai populare evenimente sportive organizate la nivel de facultate. An de an, atragem zeci de studenți pasionați de sport și competiție într-un loc plin de energie și entuziasm. Este o oportunitate excelentă pentru studenți să își pună la încercare abilitățile într-o atmosferă prietenoasă și competitivă.",
    secondPicture: evenimentSportivPC_2,
    secondPictureTlf: evenimentSportivTlf_2,
    thirdTitle: "Let's Dance",
    thirdDescription:
      "Let's dance este un workshop care, pe parcursul a 3 zile, abordează 3 stiluri de dans diferite. Alături decoregrafi care să ne ghideze pașii, workshop-ul își propune să creeze o atmosferă prielnică astfel încât toată lumea să se distreze și să învețe să danseze.",
    thirdPicture: evenimentSportivPC_3,
    thirdPictureTlf: evenimentSportivTlf_3,
    styledObjectConducere: styledObjectConducereSportiv,
    mappingObjectConducere: mappingObjectConducereSportiv,
  },
  {
    label: "Învățământ",
    logo: logoInvatamant,
    title: "Departamentul Învățământ",
    video: videoInvatamant,
    banner: bannerInvatamant,
    maiputernici: true,
    descriere:
      "Departamentul Învățământ este un liant între liceeni, studenți și facultate, fiind primul departament cu care viitorii studenți întră în contact prin intermediul Simulării Examenului de Admitere, dar și al Promovării facultății în licee.",
    locatie: "A03",
    ora: "Joi, ora 20:30",
    imgDescriere: descriere,
    imgDescriereTlf: descriere,
    firstTitle: "Simularea Examenului de Admitere",
    firstDescription:
      "Simularea este probabil evenimentul cu cel mai mare număr de voluntari și primul, după promovarea facultății în licee, care ne pune în contact cu viitorii boboci. Eveniment de suflet al departamentului, acesta ia amploare an de an și creează un vibe din ce în ce mai energic și reprezentativ spiritului LSE.",
    firstPicture: simulare,
    firstPictureTlf: simulare,
    secondTitle: "Arena Electroniștilor",
    secondDescription:
      "Cea mai fresh idee a Departamentului Învățământ, Arena electroniștilor este un eveniment care respectă formatul clasic al concursului Ce spun românii, versiunea românească a emisiunii Family Feud, oferind participanților o experiență cel puțin de neuitat.",
    secondPicture: arena_electronistilor,
    secondPictureTlf: arena_electronistilor,
    thirdTitle: "Treasure Hunt",
    thirdDescription:
      "Orice aventură este caracterizată prin elementul de noutate, astfel că fiecare ediție Treasure Hunt revine cu numeroase schimbări în structura concursului, noile locații propunându-și să scoată la iveală cele mai bune idei și strategii de joc.",
    thirdPicture: treasure_hunt,
    thirdPictureTlf: treasure_hunt,
    styledObjectConducere: styledObjectConducereInvatamant,
    mappingObjectConducere: mappingObjectConducereInvatamant,
  },
  {
    label: "Cultural",
    logo: logoCultural,
    title: "Departamentul Cultural",
    video: videoCultural,
    banner: bannerCultural,
    maiputernici: true,
    descriere:
      "Departamentul Cultural reprezintă latura artistică a Ligii Studenților Electroniști. Voluntari talentați sau mai puțin talentați, cu toții își unesc forțele spre a organiza evenimente ce permit studenților și nu numai să dea frâu liber imaginației și spiritului creativ.",
    locatie: "A05",
    ora: "Miercur, ora 20:00",
    imgDescriere: descriereCulturalPc,
    imgDescriereTlf: descriereCulturalPc,
    firstTitle: "Spectacolul Caritabil",
    firstDescription:
      "Perioada sărbătorilor de iarnă este despre a-i ajuta pe cei mai puțin norocoși decât noi, iar în acest sens Departamentul Cultural organizează Spectacolul Caritabil. Cei mai talentați voluntari pregătesc diferite obiecte handmade care sunt scoase la licitație, iar cu banii strânși încercăm să aducem zambetul pe buze cauzei susținute. Între rundele de licitații, încântăm publicul cu momente de dans, muzică, actorie și chiar stand-up, totul spre a aduce magia sărbătorilor în sufletele tuturor.",
    firstPicture: caritabil,
    firstPictureTlf: caritabilbanner,
    secondTitle: "Noaptea Chitarelor",
    secondDescription:
      "Pentru toate orele petrecute pe băncile facultății, pentru fiecare laborator din zori și seminar târziu în noapte, Departamentul Cultural aduce mult iubitul eveniment, Noaptea Chitarelor, în care schimbăm stresul și monotonia cu distracția specifică studenției! Fie că ai o chitară, cânți solo sau vrei doar să te distrezi alături de noi, Noaptea Chitarelor e sigur locul perfect!\n",
    secondPicture: noaptea_chitarelor,
    secondPictureTlf: noaptea_chitarelor_banner,
    thirdTitle: "Concursul de Cultură Generală",
    thirdDescription:
      "Împreună cu departamentul Învățământ, Departamentul Cultural organizează în fiecare toamnă Concursul de Cultură Generală, unde îți poți testa cunoștințele din diverse domenii precum: geografie, sport, știință, istorie și mitologie, muzică, cinema și multe altele. Competiția este mare, zeci de echipe înscrise la fiecare ediție, iar distracția este la cote maxime!",
    thirdPicture: ccg,
    thirdPictureTlf: ccg_banner,
    styledObjectConducere: styledObjectConducereCultural,
    mappingObjectConducere: mappingObjectConducereCultural,
  },
  {
    label: "Logistică",
    logo: logoLogistica,
    title: "Departamentul Logistică",
    video: videoLogistica,
    banner: bannerLogistica,
    maiputernici: true,
    descriere:
      "Departamentul de Logistică asigură buna desfășurare a evenimentelor Ligii, prin suportul tehnic necesar pentru a realiza atât o simplă rețea electrică, cât și un ansamblu complex de sonorizare și lumini. ",
    locatie: "A04",
    ora: "Miercuri, ora 20:30",
    imgDescriere: descriereLogisticaPc,
    imgDescriereTlf: descriereLogisticaTlf,
    firstTitle: "Robochallenge",
    firstDescription:
      "Ne remarcăm prin devotament - ajungem primii și plecăm ultimii. Ne facem simțită prezența la fiecare eveniment, în special la cele de un nivel înalt precum RoboChallenge și LANParty.",
    firstPicture: robo,
    firstPictureTlf: robobanner,
    secondTitle: "Robochallenge",
    secondDescription:
      "Ne remarcăm prin devotament - ajungem primii și plecăm ultimii. Ne facem simțită prezența la fiecare eveniment, în special la cele de un nivel înalt precum RoboChallenge și LANParty.",
    secondPicture: robo1,
    secondPictureTlf: robo1banner,
    thirdTitle: "Robochallenge",
    thirdDescription:
      "Ne remarcăm prin devotament - ajungem primii și plecăm ultimii. Ne facem simțită prezența la fiecare eveniment, în special la cele de un nivel înalt precum RoboChallenge și LANParty.",
    thirdPicture: robo,
    thirdPictureTlf: robobanner,
    styledObjectConducere: styledObjectConducereLogistica,
    mappingObjectConducere: mappingObjectConducereLogistica,
  },
  {
    label: "Media",
    logo: logoMedia,
    title: "Departamentul Media",
    video: videoMedia,
    banner: bannerMedia,
    maiputernici: true,
    descriere:
      "Departamentul Media, un concept nou, dar cu un istoric capturat perfect în fotografii, este locul unde îmbinăm pasiunea, arta și distracția cu munca și performanța. \n" +
      "   Noi suntem cei care surprind atmosfera și emoțiile fiecărui eveniment LSE, dar și cei ce vă țin la curent tot ceea ce se întâmplă în cadrul activităților noastre.",
    locatie: "A04",
    ora: "Luni, ora 20:00",
    imgDescriere: descriereMediaPc,
    imgDescriereTlf: descriereMediaTlf,
    firstTitle: "Media",
    firstDescription:
      "Departamentul Media, un concept nou, dar cu un istoric capturat perfect în fotografii, este locul unde îmbinăm pasiunea, arta și distracția cu munca și performanța. \n" +
      "   Noi suntem cei care surprind atmosfera și emoțiile fiecărui eveniment LSE, dar și cei ce vă țin la curent tot ceea ce se întâmplă în cadrul activităților noastre.",
    firstPicture: media1,
    firstPictureTlf: media1,
    secondTitle: "Media",
    secondDescription:
      "Departamentul Media, un concept nou, dar cu un istoric capturat perfect în fotografii, este locul unde îmbinăm pasiunea, arta și distracția cu munca și performanța. \n" +
      "   Noi suntem cei care surprind atmosfera și emoțiile fiecărui eveniment LSE, dar și cei ce vă țin la curent tot ceea ce se întâmplă în cadrul activităților noastre.",
    secondPicture: media2,
    secondPictureTlf: media2,
    thirdTitle: "Media",
    thirdDescription:
      "Departamentul Media, un concept nou, dar cu un istoric capturat perfect în fotografii, este locul unde îmbinăm pasiunea, arta și distracția cu munca și performanța. \n" +
      "   Noi suntem cei care surprind atmosfera și emoțiile fiecărui eveniment LSE, dar și cei ce vă țin la curent tot ceea ce se întâmplă în cadrul activităților noastre.",
    thirdPicture: media3,
    thirdPictureTlf: media3,
    styledObjectConducere: styledObjectConducereMedia,
    mappingObjectConducere: mappingObjectConducereMedia,
  },
  {
    label: "YDD",
    logo: logoYDD,
    title: "Departamentul YDD",
    video: videoYDD,
    banner: bannerYDD,
    maiputernici: true,
    descriere:
      "Youth Development Department (YDD) este locul care încurajează dezvoltarea studenților pe plan personal și profesional. Totodată, prin programele Erasmus+, oferim tinerilor oportunitatea unică de a cunoaște lumea și pe ei înșiși. În cadrul YDD, ne concentrăm asupra creșterii individuale, punând accent pe formarea competențelor esențiale pentru succesul într-o lume în continuă schimbare.",
    locatie: "A101",
    ora: "Joi, ora 20:00",
    imgDescriere: descriereYDDPc,
    imgDescriereTlf: descriereYDDPc,
    firstTitle: "Academia de Sănătate",
    firstDescription:
      'Proiectul “Academia de Sănătate”, devenit o tradiție a departamentului, se axează pe promovarea în rândul studenților a unui stil de viață sănătos tratând atât alimentația, sportul, cât și aspectele de socializare. Subiectele propuse vor fi dezbătute de către persoane specializate în domeniile abordate care vor răspunde oricăror curiozități. "The first wealth is health!"',
    firstPicture: academia_sanatate,
    firstPictureTlf: academia_sanatate,
    secondTitle: "CV&Interview",
    secondDescription:
      "Workshopul de CV&Interview, vine în ajutorul tuturor studenților care vor să se deosebească printr-un CV curat, un profil de LinkedIn complet și vor să facă o impresie bună în fața unui angajator la interviuri. Expertul adus de către noi va veni în sprijinul studenților și îi va ajuta să se adapteze la provocările apărute în această perioadă, de asemena oferind și tips and tricks pentru procesul de recrutare.",
    secondPicture: cv_interview,
    secondPictureTlf: cv_interview,
    thirdTitle: "Biblioteca Vie",
    thirdDescription: `Evenimentul "Biblioteca Vie" oferă studenților o oportunitate unică de a interacționa direct cu personalități inedite, de a descoperi poveștile lor de succes și de a primi sfaturi valoroase pentru propria lor călătorie. Ne mândrim că putem aduce în campus astfel de figuri remarcabile, care să inspire și să motiveze viitoarea generație de lideri. În fiecare an, continuăm să prezentăm în fața studenților oameni inspiraționali .`,
    thirdPicture: biblioteca,
    thirdPictureTlf: biblioteca,
    styledObjectConducere: styledObjectConducereYDD,
    mappingObjectConducere: mappingObjectConducereYDD,
  },
];
