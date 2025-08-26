// import "./App.css";
import Navbar from "./components/Navbar";
import HomeImage from "./assets/20250825_160531.jpg";
import ClubHouseImage from "./assets/20250825_160318.jpg";
import TerrainExt from "./assets/20250825_160310.jpg";
import { motion } from "motion/react";
import { CircleCheckBig, CircleAlert, Facebook } from "lucide-react";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("${HomeImage}")`,
                }}
              >
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Tennis Club
                  </h1>
                  <br />
                  <p className="text-white font-black leading-tight tracking-[-0.033em] @[480px]:text-2xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    de
                  </p>
                  <br />
                  <h1 className="text-white font-extrabold leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-extrabold @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Villeneuve sur Auvers
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Your premier tennis destination in the heart of Villeneuve
                    sur Auvers. Join us for a vibrant community, top-notch
                    facilities, and exciting events.
                  </h2>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#54d22d] text-[#162013] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                  <span className="truncate">Explore</span>
                </button>
              </div>
            </div>
          </div>
          <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            À propos du club
          </h2>
          <p className="text-black dark:text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
            Le Tennis Club de Villeneuve, fondé en 1986, était à l’origine
            réservé exclusivement aux enfants. Aujourd’hui, il propose des cours
            pour tous les âges. Le club bénéficie également d’un entraîneur
            passionné et professionnel, garantissant un encadrement de qualité
            pour tous les membres.
          </p>
          <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Infrastructures
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwwBsHzzl72O4PEFUCUOu8NDqOZbHnQnE8mXWbcSuMyKSU2xdgnkaXN51SusM8PbIdfjADw6HwSQDtj8S8ckuNXwKmlpqMXoeVZM7lVatqRnLDp_JCqQiYZ0As8nWcFbKz1UYB7LYNJ-h6xRQMYY35_A1ZfIQ_pqIQ-M_ochlz2t6A0LKOZay8qKwBuekI_JyG2Lo50DG2YhEqHecSV62EnDqmAafLUY47g5ThqtVINhzh96FKuS63rByU0F8I509MK3LcpV48v90A")',
                }}
              ></div>
              <div>
                <p className="text-black dark:text-white text-base font-medium leading-normal">
                  Court Intérieur
                </p>
                <p className="text-[#a2c398] text-sm font-normal leading-normal">
                  Notre court intérieur permet de jouer toute l’année, quel que
                  soit le temps.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage: `url("${TerrainExt}")`,
                }}
              ></div>
              <div>
                <p className="text-black dark:text-white text-base font-medium leading-normal">
                  Court Extérieur
                </p>
                <p className="text-[#a2c398] text-sm font-normal leading-normal">
                  Profitez de l’air frais et du soleil sur notre court extérieur
                  en plein coeur du village.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{
                  backgroundImage: `url("${ClubHouseImage}")`,
                }}
              ></div>
              <div>
                <p className="text-black dark:text-white text-base font-medium leading-normal">
                  Club-house
                </p>
                <p className="text-[#a2c398] text-sm font-normal leading-normal">
                  Notre club-house dispose de douche , toilette, évier, salle de
                  repos, espace de stockage ainsi que de quelques trophées.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Abonement
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-[#426039] bg-[#21301c] p-6"
            >
              <div className="flex flex-col gap-1">
                <h1 className="text-white text-base font-bold leading-tight">
                  Adulte
                </h1>
                <p className="flex items-baseline gap-1 text-white">
                  <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    210€
                  </span>
                  <span className="text-white text-base font-bold leading-tight">
                    /an
                  </span>
                </p>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2e4328] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Join Now</span>
              </button>
              <div className="flex flex-col gap-2">
                <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                  <div
                    className="text-white"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <CircleCheckBig size={20} />
                  </div>
                  Accès à tous les courts
                </div>
                <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                  <div
                    className="text-white"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <CircleCheckBig size={20} />
                  </div>
                  Participation aux événements du club
                </div>
                <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                  <div
                    className="text-white"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <CircleAlert size={20} />
                  </div>
                  Licence 33€ (non incluse)
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-[#426039] bg-[#21301c] p-6"
            >
              <div className="flex flex-col gap-1">
                <h1 className="text-white text-base font-bold leading-tight">
                  Famille
                </h1>
                <p className="flex items-baseline gap-1 text-white">
                  <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    2
                  </span>
                  <span className="text-base font-bold leading-tight ml-1">
                    personnes au minimum
                  </span>
                </p>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2e4328] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Join Now</span>
              </button>
              <div className="flex flex-col gap-2">
                <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                  <div
                    className="text-white"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <CircleCheckBig size={20} />
                  </div>
                  <span className="font-bold">
                    -10€/personnes{" "}
                    <span className="font-normal">
                      de la même famille inscrite
                    </span>
                  </span>
                </div>
                <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                  <div
                    className="text-white"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <CircleAlert size={20} />
                  </div>
                  Licence (non incluse voir prix Adulte/Enfant)
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-[#426039] bg-[#21301c] p-6"
            >
              <div className="flex flex-col gap-1">
                <h1 className="text-white text-base font-bold leading-tight">
                  Enfant
                </h1>
                <p className="flex items-baseline gap-1 text-white">
                  <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    110€
                  </span>
                  <span className="text-white text-base font-bold leading-tight">
                    /an
                  </span>
                </p>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2e4328] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Join Now</span>
              </button>
              <div className="flex flex-col gap-2">
                <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                  <div
                    className="text-white"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <CircleCheckBig size={20} />
                  </div>
                  Accès aux programmes juniors
                </div>
                <div className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                  <div
                    className="text-white"
                    data-icon="Check"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <CircleAlert size={20} />
                  </div>
                  Licence de 7 à 18 ans 23€ et moins de 7 ans 13€ (non incluse)
                </div>
              </div>
            </motion.div>
          </div>
          <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Actualités &amp; Événements
          </h2>
          <div className="p-4">
            <div className="flex items-stretch justify-between gap-4 rounded-lg">
              <div className="flex flex-[2_2_0px] flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-black dark:text-white text-base font-bold leading-tight">
                    Upcoming Tournament
                  </p>
                  <p className="text-[#a2c398] text-sm font-normal leading-normal">
                    Join us for our annual summer tournament, featuring
                    competitive matches and exciting prizes.
                  </p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#2e4328] text-black dark:text-white text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Register</span>
                </button>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1ys73vR42zxxNkVg0g3YqzKgt5UA9F0oUE6qeyofwEIg-5CUZrlxU3vbg-0YpCXLI6OU_rVpZUnPqI8khbCZARLVoFhUg2FvJW7rvWqaBFXuXODc8MfCQB2F4sCSzMoQigi8pz5hS27waiY5f2KN3-DBCdZnCY3ffoxMQeS2oWkjhKnb1UF6MnSqBT8-ILAuORWyDcnXTzY9qnM1TgMrDWqY9DB2y-ESKlzO9mBuLYuR-UYGNfXmCG6BaeZsFGQUk47cjz2wIUrah")',
                }}
              ></div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-stretch justify-between gap-4 rounded-lg">
              <div className="flex flex-[2_2_0px] flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-black dark:text-white text-base font-bold leading-tight">
                    Social Gathering
                  </p>
                  <p className="text-[#a2c398] text-sm font-normal leading-normal">
                    Enjoy a fun evening with fellow members at our upcoming
                    social gathering. Food, drinks, and good company!
                  </p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#2e4328] text-black dark:text-white text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Learn More</span>
                </button>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB55EXyNJq0EK9nUggnwI6c7STdOGXg28d_ypXy1PZHKuMLNTQi3yZZgemIgB6AJtHEhcfB7TajqECk9l66F_Fx9UJXnVRd_HRaVZ2jUSsJmNXyobZZItisScqUU3NfRULroPTyCNaSbsgcB8Gx6dVyFBYzWrKAiBtUJt6L1MCwBnuQkyPyLfEI0HPloA-HjYHjCuikUyF9180WJ4vBwODvm9mqSyYc6CNeygvmqgvXUmIGlkB0YWYt6qssA224Sas1NAYNkqr2uQvr")',
                }}
              ></div>
            </div>
          </div>
          <h2 className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Contactez-nous
          </h2>
          <p className="text-black dark:text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
            Imp. de l'Ancien Clos, 91580 Villeneuve-sur-Auvers, 91580 Tél:
            06000000 Email: info@tcvilleneuve.com
          </p>
          <div className="@container">
            <div className="gap-2 px-4 flex flex-wrap justify-start">
              <div className="flex flex-col items-center gap-2 dark:bg-[#162013] py-2.5 text-center w-20">
                <div className="rounded-full bg-[#2e4328] p-2.5">
                  <div
                    className="text-white"
                    data-icon="FacebookLogo"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <Facebook size={17} />
                  </div>
                </div>
                <p className="text-black dark:text-white text-sm font-medium leading-normal">
                  Facebook
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
