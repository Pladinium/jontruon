"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../components/LanguageContext";
import { useTheme } from "../components/ThemeContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);
  const { language } = useLanguage();
  const [direction, setDirection] = useState(1);
  const { darkMode } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  const reversedAircraftList = [
    {rank: 1, name: "Lockheed F-22A Raptor", image: "/f22a.webp", source: "By Rob Shenk from Great Falls, VA, USA - F-22 Raptor, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=6414481"},
    {rank: 2, name: "Lockheed SR-71 Blackbird", image: "/sr71.webp", source: "By USAF / Judson Brohmer - Armstrong Photo Gallery: Home - info - pic, Public Domain, https://commons.wikimedia.org/w/index.php?curid=30816"},
    {rank: 3, name: "McDonnell Douglas F/A-18C Hornet", image: "/f18.jpg", source: "By USAF / Judson Brohmer - Armstrong Photo Gallery: Home - info - pic, Public Domain, https://commons.wikimedia.org/w/index.php?curid=30816"},
    {rank: 4, name: "Mikoyan MiG-29 Fulcrum", image: "/mig29.webp", source: "By Artem Katranzhi from Bakashikha, Russia - IMG_0691, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=125077556"},
    {rank: 5, name: "Lockheed F-117 Nighthawk", image: "/f117.webp", source: "By Staff Sgt. Aaron Allmon II - http://www.defenselink.mil/, Public Domain, https://commons.wikimedia.org/w/index.php?curid=3770855"},
  ].reverse();

  const reversedHelicopterList = [
  { rank: 1, name: "Boeing/Sikorsky RAH-66 Comanche", image: "/rah66.jpg", source: "By Sikorsky, Copyrighted, https://sikorskyarchives.com/home/sikorsky-product-history/helicopter-innovation-era/boeing-sikorsky-rah-66/"},
  { rank: 2, name: "Boeing AH-64E Apache Guardian", image: "/ah64.webp", source: "By US Army - File:1-25 ARB heats up training 141905-A-AB123-001-CC.jpg, Public Domain, https://commons.wikimedia.org/w/index.php?curid=41649597"},
  { rank: 3, name: "Mil Mi-35 HindE", image: "/mi35.webp", source: "By Yevgeny Volkov - http://russianplanes.net/id99985, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=27293564" },
  { rank: 4, name: "Kamov Ka-50 Black Shark", image: "/ka50.webp", source: "Direct Source Unknown, https://www.reddit.com/r/Helicopters/comments/qf2h64/ka50_black_shark"},
  { rank: 5, name: "Bell AH-1Z Viper", image: "/ah1z.webp", source: "By Cpl. Jonathan L. Gonzalez - US Marines, Public Domain, https://commons.wikimedia.org/w/index.php?curid=128512915"},
  ].reverse();

  const gamesList = [
    {
      name: "DCS World",
      genre: {
        EN: "Combat Flight Sim",
        FR: "Simulateur de vol de combat"
      },
      image: "/dcs.png",
      reason: {
        EN: "Its realism is uncontested. Many aircraft modules are a carbon-copy of their real-life counterpart.",
        FR: "Son réalisme est incontestable. De nombreux modules d'avion sont des copies conformes de leurs équivalents réels."
      }
    },
    {
      name: "VTOL VR",
      genre: {
        EN: "Flight Sim (VR)",
        FR: "Simulateur de vol (VR)"
      },
      image: "/vtolvr.webp",
      reason: {
        EN: "This is by far the best VR military flight simulator. I use the Quest 3.",
        FR: "C'est le meilleur simulateur de vol militaire en réalité virtuelle. Je l'utilise avec le Quest 3."
      }
    },
    {
      name: "Command and Conquer Generals Zero Hour",
      genre: {
        EN: "Real-Time Strategy",
        FR: "Stratégie en temps réel"
      },
      image: "/c&c.jpg",
      reason: {
        EN: "This game was introduced to me by my father, so it holds a special place in my heart.",
        FR: "Ce jeu m'a été présenté par mon père, donc il a une valeur sentimentale particulière."
      }
    },
    {
      name: "League of Legends",
      genre: {
        EN: "MOBA",
        FR: "MOBA"
      },
      image: "/lol.webp",
      reason: {
        EN: "Team coordination, strategy, outplaying opponents in high-pressure scenarios, and most importantly, mental strength.",
        FR: "Coordination d'équipe, stratégie, dépassement de l'adversaire sous pression, et surtout, force mentale."
      }
    },
    {
      name: "Project Zomboid",
      genre: {
        EN: "Isometric Survival",
        FR: "Survie isométrique"
      },
      image: "/projectzomboid.jpg",
      reason: {
        EN: "Permadeath forces smart planning. I enjoy the sandbox realism and slow tension. I hate the jumpscares though.",
        FR: "La mort permanente oblige à planifier intelligemment. J'apprécie le réalisme bac à sable et la tension progressive. Je déteste les jumpscares par contre."
      }
    },
    {
      name: "Terraria",
      genre: {
        EN: "2D Sandbox Adventure",
        FR: "Aventure bac à sable en 2D"
      },
      image: "/terraria.jpg",
      reason: {
        EN: "Exploration, progression, and creative builds with surprising depth. My favourite mod is Calamity Mod.",
        FR: "Exploration, progression et constructions créatives avec une profondeur surprenante. Mon mod préféré est Calamity Mod."
      }
    },
  ];

  const fragranceList = [
    {
      name: "Parfums de Marly Percival",
      type: {
        EN: "Fresh Aromatic",
        FR: "Aromatique frais"
      },
      image: "/percival.webp",
      note: {
        EN: "Clean, modern, and versatile.",
        FR: "Propre, moderne et polyvalent."
      }
    },
    {
      name: "Parfums de Marly Layton",
      type: {
        EN: "Spicy Vanilla",
        FR: "Vanille épicée"
      },
      image: "/layton.webp",
      note: {
        EN: "Warm, bold, and attention-grabbing with a refined sweetness.",
        FR: "Chaleureux, audacieux et captivant avec une douceur raffinée."
      }
    },
    {
      name: "Prada L'Homme Intense",
      type: {
        EN: "Iris Leather",
        FR: "Iris et cuir"
      },
      image: "/prada.webp",
      note: {
        EN: "Sophisticated and smooth. I love the powdery iris and amber base.",
        FR: "Sophistiqué et doux. J'adore l'iris poudré et la base ambrée."
      }
    },
  ];

  const [aircraftIndex, setAircraftIndex] = useState(0);
  const [helicopterIndex, setHelicopterIndex] = useState(0);

  const aircraft = reversedAircraftList[aircraftIndex];
  const helicopter = reversedHelicopterList[helicopterIndex];

  useEffect(() => {setLoaded(true);}, []);
  useEffect(() => {setHasMounted(true);}, []);

  return (
    <main className={`pt-50 flex flex-col items-center justify-center min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200 ease-out`}>

      <section className={`transition-[opacity,translate] duration-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

        <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
            <h2 className="text-5xl font-[700] text-center mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[var(--foreground)] to-[var(--muted)] leading-normal"> {language === "EN" ? "About Me" : "À propos"} </h2>

            <div className="text-[var(--foreground)] max-w-4xl space-y-8 font-[450] text-lg text-center lg:text-justify mx-auto">
              <div className="space-y-4">
                <h3 className="text-3xl font-[500]">
                  {language === "EN" ? "Professional Background" : "Parcours professionnel"}
                </h3>
                <p>
                  {language === "EN"
                    ? "I have an academic background in pharmacology at McGill University. While pharmacology focuses on clinical and research, I much prefer the industry, especially in manufacturing. Unfortunately, I discovered this interest quite late, so I'm currently playing catch-up. That said, I'm enjoying every second of learning things that actually interest me."
                    : "J'ai une formation académique en pharmacologie à l'Université McGill. Bien que la pharmacologie mette généralement l'accent sur la clinique et la recherche, je préfère de loin le secteur industriel, en particulier la fabrication. Malheureusement, j'ai découvert cet intérêt assez tard, donc je suis actuellement en train de rattraper mon retard. Cela dit, j'apprécie chaque seconde passée à apprendre des choses qui me passionnent réellement."}
                </p>
                <p>
                  {language === "EN"
                    ? "Alongside my scientific background, I'm deeply invested in business and entrepreneurship. I'm currently acquiring knowledge in managerial accounting, organizational behavior, supply chain, and investor relations. There's still a lot more I need to learn. My long-term goal is to build a biopharmaceutical company that innovates in manufacturing by using our current understanding of chemistry and engineering."
                    : "En parallèle de mon parcours scientifique, je m'investis profondément dans les affaires et l'entrepreneuriat. J'acquiers actuellement des connaissances en comptabilité de gestion, en comportement organisationnel, en chaîne d'approvisionnement et en relations avec les investisseurs. Il me reste encore beaucoup à apprendre. Mon objectif à long terme est de créer une entreprise biopharmaceutique qui innove dans la fabrication en utilisant notre compréhension actuelle de la chimie et de l'ingénierie."}
                </p>
                <p>
                  {language === "EN"
                    ? "Until then, I'm looking for internships or work opportunities in the pharmaceutical industry to gain practical knowledge, learn from established teams, better my understanding of real-world operations, and to build professional connections."
                    : "Avant cela, je cherche des stages ou des opportunités d'emploi dans l'industrie pharmaceutique afin d'acquérir de la connaissance pratique, d'apprendre auprès d'équipes établies, de mieux comprendre les opérations sur le terrain et d'établir des connexions professionnelles."}
                </p>
              </div>
            </div>
          </section>

          <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-1" />

          <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="text-[var(--foreground)] max-w-4xl space-y-8 font-semibold text-lg text-center lg:text-justify mx-auto">
              <h3 className="text-3xl font-bold">
                {language === "EN" ? "My Personal Interests" : "Mes intérêts personels"}
              </h3>

              <h6 className="text-2xl font-bold">
                {language === "EN" ? "Military Aviation" : "Aviation militaire"}
              </h6>

              <p>
                {language === "EN"
                  ? "I've always been fascinated by aircraft design and air combat systems. Here are a few of my all-time favorites:"
                  : "J'ai toujours été fasciné par la conception aéronautique et les systèmes de combat aérien. Voici quelques-uns de mes préférés :"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
                <div className="w-full max-w-[600px] text-center space-y-4">
                  <h5 className="text-xl font-bold">{language === "EN" ? "Top 5 Fixed-Wing Aircraft" : "Top 5 avions"}</h5>

                    <div className="relative aspect-[5/3] w-full overflow-hidden bg-[var(--background)] transition-colors duration-200 ease-out">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={aircraft.name}
                          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <Image
                            src={aircraft.image}
                            alt={aircraft.name}
                            fill
                            sizes="(max-width:768px) 100vw, 600px"
                            className="object-contain"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>


                  <p className="text-lg font-semibold">#{reversedAircraftList.length - aircraftIndex} – {aircraft.name}</p>
                  <p className="text-xs text-[var(--muted)] italic">{aircraft.source}</p>

                  <div className="flex justify-center gap-8 mt-2">
                    <button onClick={() => {
                      setDirection(-1);
                      setAircraftIndex((prev) => (prev - 1 + reversedAircraftList.length) % reversedAircraftList.length);
                    }}>
                      <ChevronLeft size={32} />
                    </button>

                    <button onClick={() => {
                      setDirection(1);
                      setAircraftIndex((prev) => (prev + 1) % reversedAircraftList.length);
                    }}>
                      <ChevronRight size={32} />
                    </button>
                  </div>
                </div>

                <div className="w-full max-w-[600px] text-center space-y-4">
                  <h5 className="text-xl font-bold">{language === "EN" ? "Top 5 Helicopters" : "Top 5 hélicoptères"}</h5>

                    <div className="relative aspect-[5/3] w-full overflow-hidden bg-[var(--background)] transition-colors duration-200 ease-out">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={helicopter.name}
                          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <Image
                            src={helicopter.image}
                            alt={helicopter.name}
                            fill
                            sizes="(max-width:768px) 100vw, 600px"
                            className="object-contain"
                            priority
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                  <p className="text-lg font-semibold">#{reversedHelicopterList.length - helicopterIndex} – {helicopter.name}</p>
                  <p className="text-xs text-[var(--muted)] italic">{helicopter.source}</p>

                  <div className="flex justify-center gap-8 mt-2">
                    <button onClick={() => {
                      setDirection(-1);
                      setHelicopterIndex((prev) => (prev - 1 + reversedHelicopterList.length) % reversedHelicopterList.length);
                    }}>
                      <ChevronLeft size={32} />
                    </button>

                    <button onClick={() => {
                      setDirection(1);
                      setHelicopterIndex((prev) => (prev + 1) % reversedHelicopterList.length);
                    }}>
                      <ChevronRight size={32} />
                    </button>
                  </div>
                </div>
              </div>

              <h6 className="text-2xl font-bold">
                {language === "EN" ? "Video Games" : "Jeux vidéos"}
              </h6>

              <p>
                {language === "EN"
                  ? "Video games are one of the best ways for me to destress. Here are some of my favourite games:"
                  : "Les jeux vidéo sont un des meilleurs moyens pour moi de décompresser. Voici quelques-uns de mes jeux préférés :"}
              </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {gamesList.map((game, idx) => (
                    <motion.div
                      key={game.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className={`rounded-xl overflow-hidden bg-[var(--background)] transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
                      ${hasMounted && darkMode ? "shadow-[0_2px_10px_rgba(255,255,255,0.5)]" : "shadow-2xl"}`}
                      >
                      <div className="relative w-full aspect-[20/9]">
                        <Image
                          src={game.image}
                          alt={game.name}
                          fill
                          sizes="(max-width:768px) 100vw,
                          (max-width:1024px) 50vw,
                          33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 space-y-1">
                        <h5 className="text-lg text-left font-bold">{game.name}</h5>
                          <p className="text-sm text-[var(--muted)] italic">
                            {language === "EN" ? game.genre.EN : game.genre.FR}
                          </p>
                          <p className="text-sm text-left">
                            {language === "EN" ? game.reason.EN : game.reason.FR}
                          </p>
                      </div>
                    </motion.div>
                  ))}
                </div>


              <h6 className="text-2xl font-bold">
                {language === "EN" ? "Fragrances" : "Parfums"}
              </h6>

              <p>
                {language === "EN"
                  ? "I'm interested in fragrance chemistry, and I enjoy trying out new fragrances. My two only gripes are that this hobby is very expensive and that I'm allergic to more affordable fragrances. For these reasons, I wear fragrances sparingly."
                  : "Je m'intéresse à la chimie des parfums et j'aime découvrir des nouvelles fragrances. Mon deux reproches sont que ce passe-temps est très coûteux et que je suis allergique aux parfums abordables. Pour ces raisons, j'utilise rarement mes parfums."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                {fragranceList.map((fragrance, idx) => (
                  <motion.div
                    key={fragrance.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`rounded-xl overflow-hidden drop-shadow-2xl bg-[var(--background)]
                              transition-transform duration-300 hover:scale-110 hover:-translate-y-1
                              ${hasMounted && darkMode ? "shadow-[0_2px_10px_rgba(255,255,255,0.5)]" : "shadow-2xl"}`}
                  >
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-xl">
                      <Image
                        src={fragrance.image}
                        alt={fragrance.name}
                        fill
                        sizes="(max-width:768px) 100vw,
                        (max-width:1024px) 50vw,
                        260px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <h5 className="text-lg font-bold">{fragrance.name}</h5>
                        <p className="text-sm text-[var(--muted)] italic">
                          {language === "EN" ? fragrance.type.EN : fragrance.type.FR}
                        </p>
                        <p className="text-sm text-left">
                          {language === "EN" ? fragrance.note.EN : fragrance.note.FR}
                        </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <div className="w-[75%] max-w-[800px] h-0.25 bg-[var(--foreground)] mx-auto my-1" />

      </section>
    </main>
  );
}
