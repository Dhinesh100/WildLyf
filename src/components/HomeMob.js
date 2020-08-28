import React from 'react';
import Vaquita from './vaquita.jpeg';
import Amur from './amur.jpeg';
import Kakapo from './kakapo.jpeg';
import Gharial from './gharial.jpeg';
import Toothbilledpigeon from './toothbilledpigeon.jpeg';
import Header from './Header';

const Image = require('./img.jpg')

const HomeMobile = () => {
    return (
        <div>
            <Header />
            <img src={Image} height="250px" width="100%" alt="Zebra" />
            <div>
                <h1 style={{textAlign: 'center'}}>World's Most Endangered Species</h1>
                <hr style={{width: '50%', backgroundColor: '#000'}} />
                <h3 style={{textAlign: 'center'}}>5. TOOTH-BILLED PIGEON</h3>
                <div className="d-flex justify-content-center">
                    <img src={Toothbilledpigeon} width="90%" height="300px" alt="Tooth Billed Pigeon" /><br />
                </div>
                <p>Following the example of their relative the extinct 
                    dodo, tooth-billed pigeons are disappearing at an alarming rate. They only live on Samoa and there are 
                    currently 70 to 380 left in the wild, with no captive populations to aid conservation efforts. Very 
                    little is actually known about tooth-billed pigeons. They are elusive and very rarely seen. In the 
                    past hunting has played a big part in their decline and has killed thousands of individuals. It is 
                    illegal today, but tooth-billed pigeons are still killed accidentally during hunts for other species. 
                    Currently, one of their main threats is habitat loss. Large areas of their home have been cleared to 
                    make space for agriculture, destroyed by cyclones or taken over by invasive trees. They are also at 
                    risk of predation from invasive species, including feral cats.
                </p>
                <hr style={{backgroundColor: '#000'}} />
                <h3 style={{textAlign: 'center'}}>4. GHARIAL</h3>
                <div className="d-flex justify-content-center">
                    <img src={Gharial} width="90%" height="300px" alt="Gharial" /><br />
                </div>
                <p>The gharial (Gavialis gangeticus), also known as the 
                    gavial or the fish-eating crocodile, is a crocodilian in the family Gavialidae and among the longest 
                    of all living crocodilians. Mature females are 2.6–4.5 m (8 ft 6 in–14 ft 9 in) long, and males 3–6 m 
                    (9 ft 10 in–19 ft 8 in). They have a distinct boss at the end of the snout, which resembles an 
                    earthenware pot known as a ghara, hence the name "gharial". The gharial is well adapted to catching 
                    fish because of its long, thin snout and 110 sharp, interlocking teeth. The gharial probably evolved 
                    in the northern Indian subcontinent. Fossil gharial remains were excavated in Pliocene deposits in the 
                    Sivalik Hills and the Narmada River valley. It currently inhabits rivers in the plains of the northern 
                    part of the Indian subcontinent. It is the most thoroughly aquatic crocodilian, and leaves the water only 
                    for basking and building nests on moist sandbanks. Adults mate at the end of the cold season. Females 
                    congregate in spring to dig nests. They lay 20–95 eggs, and guard the nests and the young that hatch 
                    before the onset of the monsoon. The hatchlings stay and forage in shallow water during their first year, 
                    but move to sites with deeper water as they grow. The wild gharial population has declined drastically 
                    since the 1930s, and is limited to only 2% of its historical range today. Conservation programmes 
                    initiated in India and Nepal focused on reintroducing captive-bred gharials since the early 1980s. Loss 
                    of habitat because of sand mining and conversion to agriculture, depletion of fish resources and 
                    detrimental fishing methods continue to threaten the population. It has been listed as critically 
                    endangered on the IUCN Red List since 2007. The oldest known depictions of the gharial are about 4,000 
                    years old and were found in the Indus Valley. Hindus regard it as the vehicle of the river deity Gaṅgā. 
                    Local people living near rivers attributed mystical and healing powers to the gharial, and used some of 
                    its body parts as ingredients of indigenous medicine.
                </p>
                <hr style={{backgroundColor: '#000'}} />
            </div>
            <h3 style={{textAlign: 'center'}}>3. KAKAPO</h3>                
            <div className="d-flex justify-content-center">
                <img src={Kakapo} width="90%" height="300px" alt="Kakapo" /><br />
            </div>
            <p>The kakapo, also called owl parrot (Strigops habroptilus), 
                is a species of large, flightless, nocturnal, ground-dwelling parrot of the super-family Strigopoidea, 
                endemic to New Zealand. It has finely blotched yellow-green plumage, a distinct facial disc, a large 
                grey beak, short legs, large feet, and relatively short wings and tail. A combination of traits make 
                it unique among its kind; it is the world's only flightless parrot, the heaviest parrot, nocturnal, 
                herbivorous, visibly sexually dimorphic in body size, has a low basal metabolic rate and no male 
                parental care, and is the only parrot to have a polygynous lek breeding system. It is also possibly 
                one of the world's longest-living birds. Its anatomy typifies the tendency of bird evolution on oceanic 
                islands, with few predators and abundant food: a generally robust physique at the expense of flight 
                abilities, resulting in reduced wing muscles and a diminished keel on the sternum. Like many other 
                New Zealand bird species, the kakapo was historically important to Māori, the indigenous people of 
                New Zealand, appearing in many of their traditional legends and folklore; however it was also heavily 
                hunted and used as a resource by Māori, both for its meat as a food source and for its feathers, which 
                were used to make highly valued pieces of clothing. Kakapo were also occasionally kept as pets. The 
                kakapo is critically endangered; the total known adult population is 209 living individuals, all of which 
                are named and tagged, confined to four small islands off the coast of New Zealand that have been cleared 
                of predators. The introduction of predators such as cats, rats, ferrets, and stoats during British 
                colonisation almost wiped out the kakapo. Conservation efforts began in the 1890s, but they were not very 
                successful until the implementation of the Kakapo Recovery Programme in 1995. Most kakapo are kept on two 
                predator-free islands, Codfish / Whenua Hou and Anchor, where they are closely monitored, and Little 
                Barrier / Hauturu Island is being trialled as a third home for the species.
            </p>
            <hr style={{backgroundColor: '#000'}} />                
            <h3 style={{textAlign: 'center'}}>2. AMUR LEOPARD</h3>
            <div className="d-flex justify-content-center">
                <img src={Amur} width="90%" height="300px" alt="Amur Leopard" /><br />
            </div>
            <p>In the Russian Far East, the Amur leopard inhabits an area of about 
                7,000 km2 (2,700 sq mi) today. It is well adapted to a cold climate and snow.
                Leopards cross between Russia, China, and North Korea across the Tumen River despite 
                a high and long wire fence marking the boundary. The first camera trap image of an Amur 
                leopard in northeastern China was taken in 2010 in Hunchun National Nature Reserve located 
                in the Changbai Mountains in Jilin and Heilongjiang Provinces. This habitat consists 
                of broadleaved conifer and Korean pine forests at altitudes of 600–1,200 m (2,000–3,900 ft), 
                where annual average temperature is about 1.5 °C (34.7 °F). In this area, leopards were 
                repeatedly photographed by camera traps set up between January 2013 and July 2014 covering 
                up to 4,858 km2 (1,876 sq mi). Elsewhere in China, leopard range is fragmented with small 
                populations occurring foremost in isolated reserves. In Shanxi Province, leopards were 
                recorded in 16 protected areas during camera trapping surveys between 2007 and 2014. 
                In Shaanxi Province, leopards were recorded in six nature reserves, including Foping 
                National Nature Reserve.
            </p>
            <hr style={{backgroundColor: '#000'}} />    
            <h3 style={{textAlign: 'center'}}>1. VAQUITA</h3>
            <div className="d-flex justify-content-center">
                <img src={Vaquita} className="imgLeft" width="90%" height="300px" alt="Vaquita" /><br />
            </div>
            <p>A survey released earlier this year estimated the vaquita population was as 
                low as 30 individuals. An all time low for the porpoise, the population is 
                half of what it was just the year before. And a 97% drop from the year before 
                that. The world’s smallest porpoise, vaquitas measure up to five-feet long and
                weigh up to 120 lbs. The vaquita’s unique facial markings of a black ring around 
                each eye and black curved lips have been compared to a smiling panda. They are 
                dark gray on their dorsal (top) surface with pale gray sides and a white underside 
                with light gray markings. Newborns generally have darker coloration. Vaquitas only 
                live in the northern end of Mexico’s Gulf of California. Besides the vaquita, 
                the Gulf of California has tremendous biological and economic importance. It 
                supports an extraordinary diversity of marine life including sharks, whales, marine 
                turtles, and many species of reef fish. The Upper Gulf of California is considered 
                globally unique because of its ecological characteristics, enormous biodiversity and 
                the amount of species that live in this area. Unsustainable and illegal fishing 
                practices are the main drivers pushing vaquita to extinction, particularly due to 
                bycatch from illegal fishing. Vaquitas share waters with the much sought-after totoaba 
                fish and fishing nets inadvertently catch and drown the porpoise. Demand for totoaba 
                swim bladders – believed to cure a variety of illness and diseases in Chinese medicine- 
                is driving the vaquita to extinction. The swim bladders are often illegally smuggled 
                over the US border and then shipped to China where it can sell up to USD 8,500 per kilogram 
                in the black market. Mexican President Peña Nieto has committed to protecting the vaquita. 
                But totoaba fishing—the main threat to vaquitas—has continued to increase. And of course, 
                vaquita numbers have dropped to dangerous lows. WWF is asking for an immediate, increased 
                response from the Mexican government, World Heritage Committee and CITES Parties, NGOS and 
                civil society groups to protect the last remaining vaquitas and set the Upper Gulf of 
                California on a path to recovery.  Failure to act will result in the imminent extinction 
                of the vaquita. On June 30, 2017, the government of Mexico announced a permanent ban on the 
                use of gillnets in the Upper Gulf of California. The Gulf of California World Heritage site 
                is at risk of being listed as in danger by the World Heritage Committee. Mexico has been 
                given one year to demonstrate that it is taking appropriate legal, scientific, technical, 
                administrative and financial measures to protect this heritage site and the animals that 
                live there—including the vaquita.
            </p>
        </div>
    );
}

export default HomeMobile;