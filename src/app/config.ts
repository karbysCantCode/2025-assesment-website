{/*this whole file for future proofing or whatever TODO REMOVE
  also using next/image for optimisation or somthing instead of img*/}

export const siteConfig = {
    siteName: "Maunga Club",
    navbarElements: [
        { name: "Home", href: "." },
        { name: "The Club", href: "/about" },
        { name: "Bookings", href: "/bookings" },
    ],
}

export const clubBenefits = [
  "Exclusive access - Only members can stay at the chalets.",
  "Weekend getaways - Bookings are available Friday to Sunday, perfect for short ski trips.",
  "Flexible group sizes - Chalets can accommodate between 6 and 40 people, ideal for families, friends, or larger groups.",
  "Ski-in, ski-out convenience - All chalets are located directly on the mountain.",
  "Expansive terrain - Access to 550 hectares of ski and snowboard area.",
  "Extended season - Enjoy the longest ski/snowboard season in New Zealand.",
  "Variety of chalets - Members can choose from three chalets, each with different capacities for adults and children.",
]

export const chaletData = {
    "kakapo": {   
        name: "Kākāpo", 
        adults: 10, 
        children: 30, 
        image: "/kakapo/cabin_exterior.jpg",
        features: [
            "Largest of the chalets.",
            "Large kitchen, dining and living area.",
            "Great amenities"
        ],
        showcase_image_1: "/kakapo/cabin_view.jpg",
        showcase_image_2: "/kakapo/hallway.jpg"
      },

    "pukeko": {   
        name: "Pūkeko", 
        adults: 6, 
        children: 15, 
        image: "/pukeko/cabin_exterior.jpg",
        features: [
            "Great for large groups/families wanting a chalet to themselves.",
            "Limits on adult/child number ensure comfortable stays."
        ],
        showcase_image_1: "/pukeko/adult_bedroom.jpg",
        showcase_image_2: "/pukeko/chalet_view.jpg"
      },
    "kereru": {   
        name: "Kererū", 
        adults: 2, 
        children: 4, 
        image: "/kereru/cabin_exterior.jpg",
        features: [
            "Great option for a family.",
            "2 bedrooms.",
            "Perfect for families with 2-4 children.",
            "Separate living area"
        ],
        showcase_image_1: "/kereru/kitchen.jpg",
        showcase_image_2: "/kereru/adult_bedroom.jpg"
      }
}
export type ChaletName = keyof typeof chaletData;