import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// the translations
const resources = {
    sk: {
        translation: {
            'Allow GPS': 'Povoliť GPS',
            'For better experience allow GPS, so you can see when will Hubble will be above you':
                'Pre lepší pôžitok povoľ GPS aby si videl, kedy bude Hubble nad tebou',
            About: 'Ohľadom',
            'Ask me later': 'Opýtať sa neskôr',
            Cancel: 'Zrušiť',
            "Hubble's view": 'Hubblov pohľad',
            'Astronomical Picture of the Day': 'Astronomický obrázok dňa',
            Gallery: 'Galéria',
            'Track Hubble': 'Sleduj Hubbla',
            'Where is Hubble now?': 'Kde je Hubble?',
            'Hubble is acquiring new target': 'Hubble práve získava nový cieľ',
            Between: 'Medzi',
            and: 'a',
            on: 'dňa',
            with: 'pomocou',
            for: 'na požiadavku od',
            'Hubble is looking at': 'Hubble čumí na',
            'Please, wait. Retrieving data': 'Počkajte, prosím, získavam dáta.',
            'HST viewed from Discovery during second service mission':
                'Hubblov teleskop z pohľadu raketoplánu Discovery počas druhej servisnej misie',
            "The Hubble Space Telescope (HST or Hubble) is a space telescope launched into low Earth orbit in 1990 and still remains operational. It was named after Edwin Hubble who discovederd basis for the expansion of the universe. HST is one of the most largest and versatile telescope. It was designed to be serviceable. Several space shuttle missions were conducted to repair or renew parts of HST. Its 2.4 m mirror observe in the UV, visible and nead-infrared regions of the electromagnetic spectum. Hubble took a lot of photos that answered our questions but a lot more that rised new questions. In this App you can see what Hubble is seeing right now, where it is and where it will be and, photos it took and every day new NASA's chosen picture. This app was made for aniversary of 1 billion seconds that HST is in space.":
                'Hubblov vesmírny ďalekohľad (HST alebo Hubble) je vesmírny teleskop, ktorý bol vystrelený na nízku obežnú dráhu v roku 1990 a plní si misie aj dodnes. Bol pomenovaný podľa Edwina Hubbla, ktorý objavil prvý dôkaz o rozpínavosti vesmíru. HST je jeden z najvačších a najschopnejších vesmírnych teleskopov. Bol navrhnutý aby bol servisovateľný. Niekoľko misií raketoplánov boli uskutočnené aby vymenili alebo opravili niektoré časti. HST má 2,4 m zrkadlo, ktoré zaznamenáva UV, viditeľné a blízko-infračervené časti elektromagnetického spektra. HST spravil snímky, ktoré odpovedali na naše otázky ohľadom vesmíru, ale oveľa viac nových otázok priniesol. V tejto appke je možné vidieť to, čo vidí HST, kde je a kde bude, známe zaznamenané snímky a každý deň novú fotku z výberu NASA. Táto appka bola vyvinutá za prekonanie miľníka jednej miliardy sekúnd Hubblovho teleskopu vo vesmíre.',
            "The NASA/ESA Hubble Space Telescope has revisited one of its most iconic and popular images: the Eagle Nebula's Pillars of Creation. This image shows the pillars as seen in visible light, capturing the multi-coloured glow of gas clouds, wispy tendrils of dark cosmic dust, and the rust-coloured elephants' trunks of the nebula's famous pillars.":
                'Hubblov teleskop spoločnosti NASA a ESA znova navštívil jeden z jeho najpopulárnejších obrazov: Stĺpy stvorenia. Tento obraz zobrazuje stĺpy videné vo viditeľnom svetle, zachytávajúce viacfarebnú žiaru oblakov plynu, jemné úponky tmavého kozmického prachu a hrdzavo sfarbené choboty slonov slávnych stĺpov hmloviny.',
            'The galaxies — also known as NGC 4038 and NGC 4039 — are locked in a deadly embrace. Once normal, sedate spiral galaxies like the Milky Way, the pair have spent the past few hundred million years sparring with one another. This clash is so violent that stars have been ripped from their host galaxies to form a streaming arc between the two. In wide-field images of the pair the reason for their name becomes clear — far-flung stars and streamers of gas stretch out into space, creating long tidal tails reminiscent of antennae. This new image of the Antennae Galaxies shows obvious signs of chaos. Clouds of gas are seen in bright pink and red, surrounding the bright flashes of blue star-forming regions — some of which are partially obscured by dark patches of dust. The rate of star formation is so high that the Antennae Galaxies are said to be in a state of starburst, a period in which all of the gas within the galaxies is being used to form stars. This cannot last forever and neither can the separate galaxies; eventually the nuclei will coalesce, and the galaxies will begin their retirement together as one large elliptical galaxy.':
                'Tieto galaxie, tiež známe ako NGC 4038 a NGC 4039, sú v uzamknutom systéme.  Dvojica strávila pár sto miliónov rokov “zápasením“. Následná zrážka je taká násilná, že z nej boli vytrhnuté hviezdy hostiteľskej galaxie, a vytvorili medzi nimi prúdový oblúk. Na širokouhlých obrázkoch dvojice je názov galaxie jasný. Naťahujúce sa vzdialené hviezdy a prúdy plynu, vytvárajúc dlhé prílivové chvosty pripomínajúce tykadlá. Tento nový obrázok galaxií Tykadlá ukazuje zjavné znaky chaosu. Oblaky plynu sú jasne ružové a červené, obklopujúce jasné záblesky modrých hviezdotvorných oblastí – z ktorých niektoré sú čiastočne zakryté tmavými škvrnami prachu. Rýchlosť tvorby hviezd je taká vysoká, že sa o galaxii Tykadlá hovorí, že je v stave starburst- perióda, v ktorej sa všetok plyn v galaxii využíva na tvorbu hviezd. Toto nemôže trvať navždy a ani oddelené galaxie nemôžu; nakoniec sa jadrá spoja a galaxie začnú svoj odchod do dôchodku spolu ako jedna veľká eliptická galaxia.',
            "Hubble has trained its razor-sharp eye on one of the universe's most stately and photogenic galaxies, the Sombrero galaxy, Messier 104 (M104). The galaxy's hallmark is a brilliant white, bulbous core encircled by the thick dust lanes comprising the spiral structure of the galaxy. As seen from Earth, the galaxy is tilted nearly edge-on. We view it from just six degrees north of its equatorial plane. This brilliant galaxy was named the Sombrero because of its resemblance to the broad rim and high-topped Mexican hat. M104 is just beyond the limit of naked-eye visibility and is easily seen through small telescopes. The Sombrero lies at the southern edge of the rich Virgo cluster of galaxies and is one of the most massive objects in that group, equivalent to 800 billion suns. The galaxy is 50,000 light-years across and is located 28 million light-years from Earth.":
                'Hubblov teleskop nasmeroval svoje ostré oko na jednu z najmajestátnejších a najfotogenickejších galaxií vo vesmíre, galaxiu Sombrero, Messier 104 (M104). Charakteristickým znakom galaxie je žiarivo biele, baňaté jadro obklopené hustými prachovými pásmi tvoriacimi špirálovú štruktúru galaxie. Pri pohľade zo Zeme je galaxia naklonená takmer nabok. Pozeráme sa naň len zo šiestich stupňov severne od jeho rovníkovej roviny. Táto brilantná galaxia bola pomenovaná Sombrero kvôli jej podobnosti so širokým okrajom a vysokým mexickým klobúkom. M104 je tesne za hranicou viditeľnosti voľným okom a je ľahko viditeľná cez malé teleskopy. Sombrero leží na južnom okraji bohatej kopy galaxií v Panne a je jedným z najhmotnejších objektov v tejto skupine, čo zodpovedá 800 miliardám sĺnk. Galaxia má priemer 50 000 svetelných rokov a nachádza sa 28 miliónov svetelných rokov od Zeme.',
            "This Hubble image, captured and released to celebrate the telescope's 23rd year in orbit, shows part of the sky in the constellation of Orion. Rising like a giant seahorse from turbulent waves of dust and gas is the Horsehead Nebula, otherwise known as Barnard 33. This image shows the region in infrared light, which has longer wavelengths than visible light and can pierce through the dusty material that usually obscures the nebula's inner regions. The result is a rather ethereal and fragile-looking structure, made of delicate folds of gas — very different to the nebula's appearance in visible light.":
                'Táto snímka z Hubbleovho teleskopu, zachytená a zverejnená na oslavu 23. roku na obežnej dráhe teleskopu, ukazuje časť oblohy v súhvezdí Orion. Hmlovina Konská hlava, inak známa ako Barnard 33, sa týči ako obrovský morský koník z turbulentných vĺn prachu a plynu. Tento obrázok ukazuje oblasť v infračervenom svetle, ktoré má dlhšie vlnové dĺžky ako viditeľné svetlo a môže preniknúť cez prašný materiál, ktorý zvyčajne zakrýva vnútorné oblasti hmloviny. Výsledkom je skôr éterická a krehko vyzerajúca štruktúra, vyrobená z jemných záhybov plynu – veľmi odlišná od vzhľadu hmloviny vo viditeľnom svetle.',
            "This image provides a detailed look at the tattered remains of a supernova explosion known as Cassiopeia A (Cas A). Itis the youngest known remnant from a supernova explosion inthe Milky Way. The new Hubble image shows the complex andintricate structure of the star's shattered fragments.":
                'Táto snímka poskytuje detailný pohľad na roztrhané pozostatky po výbuchu supernovy známej ako Cassiopeia A (Cas A). Ide o najmladší známy pozostatok po výbuchu supernovy v Mliečnej dráhe. Nová snímka HST ukazuje zložitú a komplexnú štruktúru rozbitých fragmentov hviezdy. ',
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'sk',
        lng: 'en',
        compatibilityJSON: 'v3',
    });

export default i18n;
