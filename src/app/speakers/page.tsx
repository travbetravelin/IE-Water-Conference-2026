import type { Metadata } from "next";
import SpeakerCard from "@/components/SpeakerCard";

export const metadata: Metadata = {
  title: "Speakers — Synergy 2026",
};

type Speaker = {
  name: string;
  id?: string;
  role?: string;
  bio?: string;
  talkTitle?: string;
  talkAbstract?: string;
  note?: string;
  image?: string;
  imagePosition?: string;
};

const speakers: Speaker[] = [
  {
    name: "Jan-Willem Jansens",
    id: "jan-willem-jansens",
    role: "Ecotone Landscape Planning",
    talkTitle: "Water is Life: Cultivating Roots, Connections, and Movement",
    talkAbstract:
      "Jan-Willem will explore solutions to the conundrum of the aridification of large parts of Earth through the proposition of \"seeing things whole\". In his introduction he will propose three principles that balance his approach to the conundrum, like three stones balance the cooking pot of our nourishment and three legs balance the stool of the elder who shares from her or his wisdom: rootedness, connections, and movement. He will summarize the process of aridification in the face of a growing world population; introduce his thoughts on the concepts of rootedness, connections, and movement; and share some thoughts about the directions in which we might seek solutions. He will present some of his experience with solutions that have shown promising outcomes in New Mexico and what regenerative approaches among people and on the land we might consider to address our water conundrum.",
    bio: "Jan-Willem Jansens is an ecological planner with expertise in landscape-scale planning and ecosystem restoration. Jan-Willem started his career as a student and researcher of agroforestry at the Kenya Agricultural Research Institute (KARI) and the International Centre for Research in Agroforestry (now World Agroforestry Centre - ICRAF) in Nairobi, Kenya. He subsequently worked for three years as a forestry advisor in Niger, West-Africa. In 1993, he moved to New Mexico to work as a rural development specialist for the Forest Trust. In late 1997 he started his own business in forest and watershed restoration and was the executive director of Earth Works Institute. He presently is the owner and principal of Ecotone Landscape Planning, LLC, in Santa Fe, New Mexico. In the last three decades, Jan-Willem led or participated in several landscape-scale watershed restoration initiatives. He designed and oversaw the implementation of restoration projects in piñon-juniper ecosystems, in streams and wetlands, and in forest and post-fire areas. He holds a master of agricultural sciences degree with specializations in landscape architecture, forest ecology, and soil and water conservation from the Wageningen Agricultural University in The Netherlands.",
    note: "Building Erosion Control Structures · Friday, Saturday & Sunday · 3:00–5:00 pm",
    image: "/images/jan-willem-jansens.JPG",
    imagePosition: "top",
  },
  {
    name: "Joyce Skeet",
    id: "joyce-skeet",
    role: "Spirit Farm",
    talkTitle: "Wild Plants, Herbs and Churro Sheep",
    talkAbstract: "Explore the realm of plants, their energy and medicine. Dive into some herbal formulas using local plants that benefit our well-being. Then take a journey several hundred years ago to immerse ourselves with the Landrace Churro Sheep, exploring the incredible traits they carry with them into the current century.",
    bio: "Joyce Skeet and her husband, James, co-founded Covenant Pathways and Spirit Farm, a 501(c)(3) nonprofit organization in Vanderwagen, New Mexico. Raised in Pennsylvania, Joyce learned agriculture, animal husbandry, and food preservation at an early age as part of a lifestyle centered on living off the land. In 2015, Covenant Pathways launched Spirit Farm, which uses all natural methods to restore the land and keep animals healthy. Joyce is passionate about healthy soil and meaningful connections with plants and animals. She focuses on growing practices that increase the nutritional value of food and on raising animals in ways that restore the land and produce healthy meat.",
  },
  {
    name: "James Skeet",
    id: "james-skeet",
    role: "Spirit Farm",
    talkTitle: "Bio Cosmology and the Use of Biochar",
    talkAbstract: "Changing our paradigms to become more indigenous by weaving insights from 40,000 years of ancestral knowledge that connects the heart and soul to the earth that escorts us into a new awareness of agriculture. Examine Indigenous farming and biochar perspectives that regenerate the land and food systems so that soil health, environmental health and human health can prosper.",
    bio: "James Skeet is the co-founder of Covenant Pathways and Spirit Farm, a 501(c)(3) nonprofit organization. He is passionate about connecting the heart and soul of all peoples to the land through Indigenous Regenerative Intelligence that integrates the ancient wisdom of Native cosmology to create a haven where soil health, nutrient rich foods, human health, and free markets can prosper for another 10,000 years. His heritage has assisted in grounding him in the work he does as a full-blooded Navajo Native American from Vanderwagen, New Mexico where he and his wife, Joyce, have an experiential farm that uses only natural practices including microbiological composting to heal the high desert southwestern soil — a living example of how we can recover and reclaim traditional farming and spiritual practices to transform our way of life and health, reducing the dependency on the very food system that is harming us.",
  },
  {
    name: "Dr. Mark Nelson",
    id: "mark-nelson",
    role: "Director, Institute of Ecotechnics",
    talkTitle: "Restoring Eden: A Demonstration Project Challenging the \"Waste Water\" Paradigm and Celebrating Sustainable Cultures",
    talkAbstract: "The talk will showcase an environmental and humanitarian project for the Marsh Arabs of southern Iraq. Their culture is one of humanity's oldest, as they lived for thousands of years in and with the historic marshlands of the Fertile Crescent. The Eden in Iraq pilot project will celebrate their rich eco-cultural legacies while dealing with the problems they and the marshlands face in a climate change world of water scarcity and water wars. The Wastewater Garden technology uses a nature-based approach and represents some of the new thinking about how to treat and reuse sewage to create beautiful green parklands, treating it as a renewable natural resource. This contrasts with the paradigm in wealthy countries where sewage is seen as a toxic waste requiring expensive infrastructure and resources to neutralize, then throw away. We need relatively low-cost and ecological solutions to the widespread pollution of drinking water by untreated sewage, a source of massive disease and death and environmental degradation in poorer countries.",
    bio: "Dr. Mark Nelson, Chairman emeritus of Institute of Ecotechnics (www.ecotechnics.edu), Director, Wastewater Gardens International (www.wastewatergardens.com), works in closed ecological systems, ecological engineering, restoration of damaged ecosystems, and ecological wastewater recycling. Mark served in the \"biospherian\" crew for Biosphere 2's closure experiment, 1991-1993. Books include \"Pushing Our Limits: Insights from Biosphere 2\" (2018), \"The Wastewater Gardener: Preserving the Planet One Flush at a Time\" (2014) and \"Life Under Glass: Crucial Lessons in Planetary Stewardship\" (2020). Wastewater Gardens were implemented in 14 countries, current project: Eden In Iraq for 10,000 Marsh Arabs (www.edeniniraq.com). BA Dartmouth College, MS University of Arizona, PhD University of Florida.",
    image: "/images/mark-nelson.jpg",
  },
  {
    name: "Meridel Rubenstein",
    id: "meridel-rubenstein",
    role: "Artist · Project Director, Eden in Iraq Wastewater Garden project",
    talkTitle: "Restoring Eden: A Demonstration Project Challenging the \"Waste Water\" Paradigm and Celebrating Sustainable Cultures",
    talkAbstract: "The talk will showcase an environmental and humanitarian project for the Marsh Arabs of southern Iraq. Their culture is one of humanity's oldest, as they lived for thousands of years in and with the historic marshlands of the Fertile Crescent. The Eden in Iraq pilot project will celebrate their rich eco-cultural legacies while dealing with the problems they and the marshlands face in a climate change world of water scarcity and water wars. The Wastewater Garden technology uses a nature-based approach and represents some of the new thinking about how to treat and reuse sewage to create beautiful green parklands, treating it as a renewable natural resource. This contrasts with the paradigm in wealthy countries where sewage is seen as a toxic waste requiring expensive infrastructure and resources to neutralize, then throw away. We need relatively low-cost and ecological solutions to the widespread pollution of drinking water by untreated sewage, a source of massive disease and death and environmental degradation in poorer countries.",
  },
  {
    name: "Indra Shekhar Singh",
    id: "indra-shekhar-singh",
    talkTitle: "Indigenous Decentralised Water Management and River Revival",
    talkAbstract:
      "This talk will about ways to survive using indigenous water wisdom and community science to revive rivers and construct water structures. During the talk we shall go over the principles which are universal and the talk will also tell the story of how communities using low tech nature based methods have gained water sovereignty and dignity.",
    bio: "Indra is an independent writer and agricultural policy analyst with extensive experience in agroecology, seed sovereignty, water conservation, and agrarian politics. He previously served as Director of Policy and Outreach at the National Seed Association of India and currently hosts India's only bilingual agri-talk show, Krishi Ki Baat / Farm Talks, on The Wire.\n\nOver the years, Indra has travelled through hundreds of villages across India, working closely with farmers on regenerative agriculture, indigenous seed conservation, sustainable farming practices, and community-led ecological restoration. He has delivered more than 200 lectures worldwide on agroecology, environmental issues, water conservation, and agrarian politics, including invited talks at the International Labour Organization (ILO), leading Indian and American universities, and international farmers' and seed forums such as the Rocky Mountain Seed Festival.\n\nFor the past five years, Indra has also been working closely with Rajendra Singh, widely known as the \"Waterman of India,\" to study and promote traditional water rejuvenation systems across India. Through this work, he has trained hundreds of people from around the world in indigenous water conservation techniques and has participated in the revival and construction of ponds and decentralized water systems in different regions globally. He is also the international coordinator and outreach director for Jal Biradari, India.\n\nRecently, he was invited by the President of Colombia as an international expert to advise on water policy and peace reconciliation efforts in the country. He has also worked with various state governments and central government institutions in India on drafting and advising policies related to water conservation, agriculture, and ecological restoration. At present, he is actively involved in efforts to revive three rivers in Rajasthan and two rivers in Chhattisgarh, India.\n\nIn 2022, Indra was invited to deliver a lecture series across several universities in the United States, including American University, Washington DC, and George Mason University. He is currently associated with American University, DC, as a guest research mentor, guiding undergraduate and graduate students on issues related to agriculture, sustainability, ecology, and public policy.\n\nIndra has authored over 500 articles on agriculture, environment, water, and politics for prominent national and international media platforms. He is also frequently invited to participate in television and digital news debates on agrarian, environmental, and policy issues.\n\nIn his early twenties, Indra was mentored by Dr. Vandana Shiva and worked with Navdanya as Campaign Manager and Media Spokesperson. He continues to actively engage in seed conservation and is an avid urban food gardener.",
    image: "/images/indra-shekhar-singh.jpg",
    imagePosition: "top",
  },
  {
    name: "Nino Saggio",
    id: "nino-saggio",
    talkTitle:
      "Beyond the Liquid: Architectural Responses to the States and Crises of Water",
    talkAbstract:
      "Water remains a fundamental pillar of the architectural imagination. This talk avoids a standard historical overview of water in design, opting instead to analyze what we define as the &ldquo;states of water&rdquo;&mdash;liquid, solid, and gaseous—and their specific inspirations for the built environment. The second part confronts the urgent paradigm shift caused by the global climate crisis, exploring how the architectural community has pioneered a holistic synergy between landscape and architecture where water is no longer a threat to be managed but a vital resource for reimagining urban projects.",
  },
  {
    name: "Kristin Swiat",
    talkTitle: "Art and Water",
    bio: "Kristin Swiat, originally from the Shawangunk Mountains area of New York State, is a performer, bodyworker, textile artist, and farmer based in Brooklyn. She has performed in works across Europe and New York since graduating with a BFA in dance from Juilliard in 2003, and has maintained a trauma-informed, massage-based bodywork practice since graduating from the Swedish Institute in 2010, incorporating Somatic Experiencing, Craniosacral Therapy, Focusing, and other embodied practices. Deeply influenced by a season spent in 2020 living and working on the farm at Synergia Ranch, she is currently the farm manager at Stonegate Farm in Balmville, NY. Her primary interest is exploring the spaces where art and healing connect.",
  },
  {
    name: "Mike Halverson",
    talkTitle: "Botanical Walk",
  },
  {
    name: "Amanda Bramble",
    id: "amanda-bramble",
    role: "Ampersand Sustainable Learning Center",
    talkTitle: "We Are The Land and Waters",
    talkAbstract:
      "Restoring the land is not just something done \"out there.\" We are the land and waters. Techniques for living in harmony with the elements of our place are not new. Developing lifestyles that allow us to live appropriately with the changing availability of our resources is totally possible. The future asks us to streamline, and people are responding. Developing islands of coherence and hubs of resilience is essential. Connecting them is how we will thrive. In this presentation Amanda will share about the work of Ampersand Sustainable Learning Center and how mentorship and facilitating connection expands our possibilities, and invite discussion among the participants to promote cross-pollination.",
    bio: "Amanda Bramble is the director and systems designer at Ampersand Sustainable Learning Center in Cerrillos, NM. She teaches about permaculture, greenhouse design, natural building, passive solar, watershed restoration, and water conscious systems. She designed and crafted Ampersand's infrastructure to cultivate respectful and conscious relationships with the natural elements that support life. She guides apprentices and interns at Ampersand and teaches at local colleges and educational organizations. Amanda's Earthstar mentorship program focuses on not only teaching skills but weaving the community support structures essential to creating a vibrant future.",
    note: "Keynote · Sunday · 9:15–10:15 am",
  },
  {
    name: "Zack Withers",
    id: "zack-withers",
    role: "Polk's Folly",
    talkTitle: "Water is Life: Pushing Back Against the Commodification of Water in New Mexico and Building Community Capacity of Stewarding Water Resources in Increasingly Arid Environments",
  },
  {
    name: "David Sundberg",
    id: "david-sundberg",
  },
  {
    name: "Chili Hawes",
  },
  {
    name: "Dave Neita",
    role: "Music & Poetry / Open Mic MC",
  },
];

export default function SpeakersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 style={{ color: "var(--water-dark)" }} className="text-4xl font-bold mb-2">
        Speakers
      </h1>
      <p className="opacity-60 mb-10">
        Full bios and session details for all confirmed speakers and presenters.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {speakers.map((s) => (
          <SpeakerCard key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}
