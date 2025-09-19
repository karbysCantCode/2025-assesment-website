{/*this whole file for future proofing or whatever TODO REMOVE*/}

export const siteConfig = {
    siteName: "Maunga Club",
    navbarElements: [
        { name: "Home", link: "/page" },
        { name: "The Club", link: "/about" },
        { name: "Bookings", link: "/bookings" },
    ],
}

export const chaletData = {
    "kakapo": {   
        name: "Kākāpo", 
        adults: 10, 
        children: 30, 
        image: "/kakapo/cabin_exterior_thumb.jpg",
        features: [
            "Largest of the chalets.",
            "Large kitchen, dining and living area.",
            "Great amenities"
    ]},

    "pukeko": {   
        name: "Pūkeko", 
        adults: 6, 
        children: 15, 
        image: "/pukeko/cabin_exterior_thumb.jpg",
        features: [
            "Great for large groups/families wanting a chalet to themselves.",
            "Limits on adult/child number ensure comfortable stays."
        ]},
    "kereru": {   
        name: "Kererū", 
        adults: 2, 
        children: 4, 
        image: "/kereru/cabin_exterior_thumb.jpg",
        features: [
            "Great option for a family.",
            "2 bedrooms.",
            "Perfect for families with 2-4 children.",
            "Separate living area"
        ]}
}