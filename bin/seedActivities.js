require("dotenv").config();
const Tour = require('../models/Tour')
const mongoose = require('mongoose')
const amadeus = require('amadeus')

const toursAndActivities = [{
    id: "569",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/569",
    methods: [
    "GET"
    ]
    },
    name: "Moulin Rouge Show Paris",
    shortDescription: "The Moulin Rouge is the number one show in Paris, if not the whole of Europe. No wonder it sells out quickly! Don't miss your chance to see the world-renowned showgirls and French Cancan dancers strut their stuff on the Moulin Rouge's historic stage.",
    geoCode: {
    latitude: "48.884053",
    longitude: "2.332280"
    },
    rating: "4.500000",
    pictures: [
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b5/69/b7.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/cKhgt0co?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "97.00"
    },
    destination: "paris"
    },
    {
    id: "581",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/581",
    methods: [
    "GET"
    ]
    },
    name: "Skip the Line: Louvre Museum Walking Tour including Venus de Milo and Mona Lisa",
    shortDescription: "Take a small group or a private (depending on the option you choose) walking tour of the Louvre Museum in Paris and jump the queue by booking ahead. This skip the line tour helps you explore the collection of paintings, sculpture, and architecture with an expert local guide. Numbers are limited to a maximum of 25 people on this small group walking tour, ensuring you'll receive personalized attention from your guide. Upgrade your ticket for a private tour exclusive to just your group.This tour was specifically designed to highlight the most famous works of the Louvre Museum. Entering the Louvre through the original Medieval structure from the 12th century, join your guide on a journey from one breathtaking gallery to the next as you travel through time visiting works from 450 BCE through to the 1800s.",
    geoCode: {
    latitude: "48.860874",
    longitude: "2.336558"
    },
    rating: "4.600000",
    pictures: [
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/32/b7/2f.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/o1gJrJRW?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "61.00"
    },
    destination: "paris"
    },
    {
    id: "582",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/582",
    methods: [
    "GET"
    ]
    },
    name: "Eiffel Tower,Dinner,Seine River Cruise and Moulin Rouge Show",
    shortDescription: "Experience the magical decadence of Paris! In one truly unforgettable night, you’ll dine in the iconic Eiffel Tower, watch the city’s beautiful sights go by from the river Seine or enjoy a Dinner Cruise along the Seine taking in the spectacular monuments followed by a priority entry trip up the iconic Eiffel Tower to gaze upon the sparkling City of Lights. Whichever option you choose,complete your evening at the famous and flamboyant Moulin Rouge - French Cancan and champagne included!",
    geoCode: {
    latitude: "48.858300",
    longitude: "2.294500"
    },
    rating: "4.200000",
    pictures: [
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/4c/fc/83.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/x5sUD8nt?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "239.00"
    },
    destination: "paris"
    },
    {
    id: "587",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/587",
    methods: [
    "GET"
    ]
    },
    name: "Eiffel Tower Skip-the-Line Access, Seine River Cruise & Paris City Half Day Tour",
    shortDescription: "Paris has so much to offer it’s worth seeing it three ways: In the air, on the road and on water! This four-hour tour is the perfect intro to the city of l’Amour, and will no doubt be the start of your own personal love story with Paris. Take a spin around the essential sights from the comfort of a coach. Then embark on a cruise along the Seine, under its many bridges, before scaling the heights of the Grande Dame (the Eiffel Tower to you and me!) taking in the magnificent views from her second floor.",
    geoCode: {
    latitude: "48.858300",
    longitude: "2.294500"
    },
    rating: "3.800000",
    pictures: [
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/38/c5/1d.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/oRVx7zQQ?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "80.00"
    },
    destination: "paris"
    },
    {
    id: "665",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/665",
    methods: [
    "GET"
    ]
    },
    name: "Skip the Line Louvre Museum Must-See Guided Tour",
    shortDescription: "Paris’s Louvre Museum is no less than the world’s biggest museum, visited by 10.5 million in 2018 alone. Learn the secrets of three of its biggest crowd-pleasers, including the mysterious Mona Lisa, on your two-and-a-half-hour guided tour. You’ll waste no time waiting in line and head straight to the Mona Lisa where your knowledgeable guide will regale you with fascinating tales and tidbits about the lady with the unavoidable gaze and the wry smile, before whisking you off to discover two more unmissable masterpieces. Then you’re free to wander around the museum on your own, coming face to face with works by great masters and discovering new personal favorites by lesser-known artists.",
    geoCode: {
    latitude: "48.860874",
    longitude: "2.336558"
    },
    rating: "4.100000",
    pictures: [
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/4c/27.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/7o8KfKfX?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "59.00"
    },
    destination: "paris"
    },
    {
    id: "81831",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/81831",
    methods: [
    "GET"
    ]
    },
    name: "Opera Garnier Tour with Expert Guides in Paris",
    shortDescription: "Discover Europe's largest opera house on an informative 90-minute tour of the Opera Garnier. Knowledgeable and enthusiastic guides from the Opera de Paris will uncover the secrets of this Baroque masterpiece, located in the heart of Paris.",
    geoCode: {
    latitude: "48.871478",
    longitude: "2.330719"
    },
    rating: "4.594800",
    pictures: [
    "https://cdn.getyourguide.com/img/tour_img-657876-145.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/y5IhNji65P?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "17.00"
    },
    destination: "paris"
    },
    {
    id: "81891",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/81891",
    methods: [
    "GET"
    ]
    },
    name: "Paris: 1, 2, or 3-Day Hop-on Hop-off Ticket",
    shortDescription: "See Paris at your own pace with a 1, 2, or 3-day ticket for a hop-on hop-off open-top bus tour. You’ll learn about the city's sights with an audio guide. Stop at as many of the 34 stops as you like on 3 routes with just 1 ticket!",
    geoCode: {
    latitude: "48.872574",
    longitude: "2.328803"
    },
    rating: "4.243300",
    pictures: [
    "https://cdn.getyourguide.com/img/tour_img-1066736-145.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/160lrBoBtT?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "34.00"
    },
    destination: "paris"
    },
    {
    id: "82098",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/82098",
    methods: [
    "GET"
    ]
    },
    name: "Paris: Skip-the-Line Eiffel Tower & Seine River Cruise",
    shortDescription: "Head up to the 2nd level of the Eiffel Tower with your skip-the-line ticket and admire many of the top attractions of Paris from up above. Upgrade to gain Summit access (optional) and enjoy a 1-hour Seine River cruise (if option booked).",
    geoCode: {
    latitude: "48.858190",
    longitude: "2.299719"
    },
    rating: "4.537100",
    pictures: [
    "https://cdn.getyourguide.com/img/tour_img-311437-145.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/MkpY1iG7Bh?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "45.00"
    },
    destination: "paris"
    },
    {
    id: "82235",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/82235",
    methods: [
    "GET"
    ]
    },
    name: "Eiffel Tower Morning Tour by Elevator & Seine River Cruise",
    shortDescription: "See Paris from the sky at the top of the Iron Lady, then from the Seine river on a commented cruise.",
    geoCode: {
    latitude: "48.858616",
    longitude: "2.298834"
    },
    rating: "4.150100",
    pictures: [
    "https://cdn.getyourguide.com/img/tour_img-906825-145.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/5ooHzyBiuQ?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "48.00"
    },
    destination: "paris"
    },
    {
    id: "82272",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/82272",
    methods: [
    "GET"
    ]
    },
    name: "Paris: Eiffel Tower Summit or Second Floor Priority Access",
    shortDescription: "Skip the long lines to the 2nd floor of the Eiffel Tower. Enjoy the view of Paris from above and add access to the summit to go all the way to the top.",
    geoCode: {
    latitude: "48.859442",
    longitude: "2.297618"
    },
    rating: "4.488100",
    pictures: [
    "https://cdn.getyourguide.com/img/tour_img-1737235-145.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/AUQXmTyAYe?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "59.00"
    },
    destination: "paris"
    },
    {
    id: "82291",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/82291",
    methods: [
    "GET"
    ]
    },
    name: "Musée d'Orsay Reserved Access 1-Day Admission Ticket",
    shortDescription: "Get reserved access to the Musée d'Orsay in Paris and enjoy more time inside to see the artistic masterpieces of one of the world’s greatest museums. Admire works by Impressionists and Post-Impressionists, including Renoir and Van Gogh.",
    geoCode: {
    latitude: "48.860088",
    longitude: "2.325306"
    },
    rating: "4.578400",
    pictures: [
    "https://cdn.getyourguide.com/img/tour_img-460272-145.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/usntZrg4Hk?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "17.00"
    },
    destination: "paris"
    },
    {
    id: "82295",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/82295",
    methods: [
    "GET"
    ]
    },
    name: "Paris: Skip-the-Line Arc de Triomphe Rooftop Tickets",
    shortDescription: "Come and visit the Arc de Triomphe at Place de l'Étoile. Skip the lines to reach the top of the Champs-Élysées and feast your eyes on breathtaking panoramas of the world-renowned City of Love.",
    geoCode: {
    latitude: "48.874148",
    longitude: "2.294526"
    },
    rating: "4.699500",
    pictures: [
    "https://cdn.getyourguide.com/img/tour_img-660330-145.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/NQhqBtdeoh?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "12.00"
    },
    destination: "paris"
    },
    {
    id: "82316",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/82316",
    methods: [
    "GET"
    ]
    },
    name: "Paris Catacombs Skip-the-Line Ticket with Audio Guide",
    shortDescription: "Skip the line to the Paris Catacombs and discover a darker side to the “City of Lights.” Descend beneath the streets of Paris and listen to the commentary from your informative audio guide, available in 4 languages.",
    geoCode: {
    latitude: "48.833832",
    longitude: "2.332423"
    },
    rating: "4.543800",
    pictures: [
    "https://cdn.getyourguide.com/img/tour_img-843911-145.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/dmKrlvC8Wh?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "36.00"
    },
    destination: "paris"
    },
    {
    id: "196653",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/196653",
    methods: [
    "GET"
    ]
    },
    name: "Paris: Eiffel Tower Stair Climb to Floor 2 w. Summit Option",
    shortDescription: "Take the challenge of climbing 704 steps to the 2nd floor of the Eiffel Tower and be rewarded with the most spectacular views of Paris. Learn the structure’s history from your expert guide. Upgrade when booking for access to the summit.",
    geoCode: {
    latitude: "48.857322",
    longitude: "2.292549"
    },
    rating: "3.665100",
    pictures: [
    "https://cdn.getyourguide.com/img/tour_img-2215792-145.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/hJYzUte7Zn?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "34.00"
    },
    destination: "paris"
    },
    {
    id: "196678",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/196678",
    methods: [
    "GET"
    ]
    },
    name: "Eiffel Tower: Second Floor Priority Access",
    shortDescription: "Save precious time at the Eiffel Tower with a priority-access ticket to the second level.",
    geoCode: {
    latitude: "48.857914",
    longitude: "2.299268"
    },
    rating: "4.304400",
    pictures: [
    "https://cdn.getyourguide.com/img/tour_img-893589-145.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/ZlGmGAdMAU?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "32.00"
    },
    destination: "paris"
    },
    {
    id: "196722",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/196722",
    methods: [
    "GET"
    ]
    },
    name: "Paris: Louvre Museum Timed Entrance Ticket",
    shortDescription: "Benefit from a dedicated skip-the-line entrance to the Louvre Museum in Paris, and enjoy more time to see the artistic masterpieces such as Leonardo da Vinci's Mona Lisa in one of the world’s greatest museums.",
    geoCode: {
    latitude: "48.861117",
    longitude: "2.335559"
    },
    rating: "4.558500",
    pictures: [
    "https://cdn.getyourguide.com/img/tour_img-1475812-145.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/e3NYbsSZYB?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "20.00"
    },
    destination: "paris"
    },
    {
    id: "261919",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/261919",
    methods: [
    "GET"
    ]
    },
    name: "Paris: Moulin Rouge Show with Champagne",
    shortDescription: "Revel in the sumptuous settings of the Moulin Rouge, the world-renowned cabaret in Paris, with a ticket to the spectacular show 'Féerie'. Sip on sparkling Champagne as you savor international performances filled to the brim with feathers and rhinestones.",
    geoCode: {
    latitude: "48.884123",
    longitude: "2.332252"
    },
    rating: "4.695300",
    pictures: [
    "https://cdn.getyourguide.com/img/tour_img-1396968-145.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/ZgVS7JKdPe?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "87.00"
    },
    destination: "paris"
    },
    {
    id: "333813",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/333813",
    methods: [
    "GET"
    ]
    },
    name: "Montparnasse Tower Roof Terrace Ticket: 360 degrees of Paris",
    shortDescription: "You don't need wings to have a stunning 360-degree bird's-eye view of Paris, including the Eiffel Tower. All you need is a ticket to the roof terrace of the Montparnasse Tower. Our voucher lets you pick when, anytime within a 2-week period.",
    geoCode: {
    latitude: "48.842562",
    longitude: "2.321973"
    },
    rating: "4.629900",
    pictures: [
    "https://cdn.getyourguide.com/img/tour_img-1769112-145.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/xMydnGfvgI?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "18.00"
    },
    destination: "paris"
    },
    {
    id: "333816",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/333816",
    methods: [
    "GET"
    ]
    },
    name: "Paris: 1-Hour Illuminations River Cruise",
    shortDescription: "Admire the beautiful monuments of Paris illuminated for the evening on an enjoyable 1-hour on the River Seine.",
    geoCode: {
    latitude: "48.859965",
    longitude: "2.293193"
    },
    rating: "4.334900",
    pictures: [
    "https://cdn.getyourguide.com/img/tour_img-1437935-145.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/W6xgwW2rL9?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "15.00"
    },
    destination: "paris"
    },
    {
    id: "333820",
    type: "activity",
    self: {
    href: "https://test.api.amadeus.com/v1/shopping/activities/333820",
    methods: [
    "GET"
    ]
    },
    name: "Paris: 1-hour River Seine Cruise",
    shortDescription: "Admire the iconic sights of Paris on a relaxing River Seine cruise. Enjoy audioguide commentary and learn about sites such as the Eiffel Tower and Notre Dame.",
    geoCode: {
    latitude: "48.859852",
    longitude: "2.293278"
    },
    rating: "4.338900",
    pictures: [
    "https://cdn.getyourguide.com/img/tour_img-2345180-145.jpg"
    ],
    bookingLink: "https://b2c.mla.cloud/c/TJQFJY7XEn?c=2WxbgL36",
    price: {
    currencyCode: "EUR",
    amount: "15.00"
    },
    destination: "paris"
    },
    {
        id: "5097",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/5097",
        methods: [
        "GET"
        ]
        },
        name: "Pergamon Museum and Asisi PANORAMA of ancient world skip-the-line combo ticket",
        shortDescription: "See the world famous Pergamon Museum and Asisi's 360° panorama of the ancient world – two must sees in Berlin with one skip-the-line ticket.",
        geoCode: {
        latitude: "52.521183",
        longitude: "13.394711"
        },
        rating: "4.400000",
        pictures: [
        "https://images.musement.com/cover/0001/71/thumb_70280_cover_header.jpeg?w=500"
        ],
        bookingLink: "https://b2c.mla.cloud/c/cPp5G4Sr?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "19.00"
        },
        destination: "berlin"
        },
        {
        id: "105193",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105193",
        methods: [
        "GET"
        ]
        },
        name: "Discover Berlin Walking Tour",
        shortDescription: "Explore Berlin on a comprehensive 3.5 to 4-hour walking tour, starting from our meeting point in central Berlin. See all the major sights, from the Brandenburg Gate to Museum Island, and hear stories of the city’s residents from enthusiastic guides.",
        geoCode: {
        latitude: "52.523278",
        longitude: "13.402210"
        },
        rating: "4.856000",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-301489-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/Ql9tAYjBlj?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "14.00"
        },
        destination: "berlin"
        },
        {
        id: "105197",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105197",
        methods: [
        "GET"
        ]
        },
        name: "Berlin: 75-minute Trabi Safari",
        shortDescription: "Drive through Berlin in the official car of the DDR! Squeeze yourself behind the wheel of a Trabant of your choice and putter around the capital. See the most interesting sights and get your very own souvenir Trabant-driver's license!",
        geoCode: {
        latitude: "52.507655",
        longitude: "13.386191"
        },
        rating: "4.792500",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-308223-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/XHVv3Px0xi?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "49.00"
        },
        destination: "berlin"
        },
        {
        id: "105213",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105213",
        methods: [
        "GET"
        ]
        },
        name: "Berlin: Madame Tussauds Admission Ticket",
        shortDescription: "Accept your exclusive invitation to Madame Tussauds Berlin! Star in immersive experiences like House of Berlin Colors and VIP Party. Get up close and personal with more than 120 lifelike wax figures of your favorite celebrities.",
        geoCode: {
        latitude: "52.517089",
        longitude: "13.381611"
        },
        rating: "4.506000",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-2161177-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/nB7e4FxyXb?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "19.00"
        },
        destination: "berlin"
        },
        {
        id: "105216",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105216",
        methods: [
        "GET"
        ]
        },
        name: "From Berlin: Sachsenhausen Memorial Walking Tour",
        shortDescription: "Step inside Sachsenhausen Memorial and learn of the site’s terrible history and see poignant memorials, such as the killing center and gallows.",
        geoCode: {
        latitude: "52.516749",
        longitude: "13.379791"
        },
        rating: "4.750800",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-943740-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/276OyImojY?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "18.00"
        },
        destination: "berlin"
        },
        {
        id: "105222",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105222",
        methods: [
        "GET"
        ]
        },
        name: "Berlin WelcomeCard: Discounts & Transport Berlin Zones (ABC)",
        shortDescription: "Explore Berlin with a 48-hour, 72-hour, 4-day, 5-day, or 6-day Berlin WelcomeCard. Ride public transport in the ABC zones, including Schönefeld Airport, receive discounts of up to 50% with over 200 partners, and benefit from the pocket travel guide.",
        geoCode: {
        latitude: "52.525011",
        longitude: "13.369460"
        },
        rating: "4.595800",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-1408487-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/7q55FcPq41?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "23.00"
        },
        destination: "berlin"
        },
        {
        id: "105301",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105301",
        methods: [
        "GET"
        ]
        },
        name: "1-Hour City Tour by Boat with Guaranteed Seating",
        shortDescription: "On this tour, you will get to learn about the intriguing history of Berlin and see all the major attractions from the comfort of a river cruise. Travel through Berlin on a 1-hour river cruise from Friedrichstraße or Nikolaiviertel.",
        geoCode: {
        latitude: "52.521848",
        longitude: "13.388702"
        },
        rating: "4.325400",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-1066973-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/siaS0isAni?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "15.00"
        },
        destination: "berlin"
        },
        {
        id: "105486",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105486",
        methods: [
        "GET"
        ]
        },
        name: "Tour in German: Reichstag Dome & Government District",
        shortDescription: "Enjoy a guided tour through Berlin's parliament and government district and visit the dome of the Reichstag. Learn more about history, architecture, and politics, while you explore the Brandenburg Gate, Pariser Platz and others landmarks.",
        geoCode: {
        latitude: "52.516088",
        longitude: "13.380235"
        },
        rating: "4.723600",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-273706-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/fSgYeXuQjm?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "14.00"
        },
        destination: "berlin"
        },
        {
        id: "105510",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105510",
        methods: [
        "GET"
        ]
        },
        name: "Berlin: Reichstag with Plenary Chamber & Cupola in German",
        shortDescription: "Enjoy an exciting 2-hour tour of the government district and the Reichstag building in Berlin. Learn more about the history, architecture, and everyday politics in the government district, and visit the plenary chamber and dome of the Reichstag building.",
        geoCode: {
        latitude: "52.518806",
        longitude: "13.380489"
        },
        rating: "4.719400",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-306362-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/7lVe9xzest?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "14.00"
        },
        destination: "berlin"
        },
        {
        id: "105512",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105512",
        methods: [
        "GET"
        ]
        },
        name: "Berlin: Brandenburg Gate and Reichstag Dome",
        shortDescription: "Skip the lines and head to the famous glass dome of Berlin's Reichstag without delay. Enjoy sweeping views of the entire city from the rooftop. Hear fascinating stories about Berlin's colorful past and see some of the city’s most important sites.",
        geoCode: {
        latitude: "52.515830",
        longitude: "13.379610"
        },
        rating: "4.680100",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-305781-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/SnaoNXUIgA?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "25.00"
        },
        destination: "berlin"
        },
        {
        id: "105514",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105514",
        methods: [
        "GET"
        ]
        },
        name: "Berlin: 2.5-Hour Boat Tour Along the River Spree",
        shortDescription: "Enjoy a 2.5-hour boat cruise along the River Spree and learn interesting facts about Berlin. Explore the main attractions in the city from the water including the government district, Bellevue Palace, Berlin Cathedral, and Museum Island.",
        geoCode: {
        latitude: "52.521694",
        longitude: "13.387720"
        },
        rating: "4.313000",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-338966-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/OsDnYWNr6H?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "20.00"
        },
        destination: "berlin"
        },
        {
        id: "105531",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105531",
        methods: [
        "GET"
        ]
        },
        name: "Berlin: 3.5-Hour Spree & Landwehrkanal Boat Tour",
        shortDescription: "Discover the Berlin skyline from the water and see more than 40 bridges over the Landwehr Canal and river Spree. On this 4-hour boat tour, admire the diverse architecture of the city and see the Museum Island and Potsdamer Platz.",
        geoCode: {
        latitude: "52.521534",
        longitude: "13.387865"
        },
        rating: "4.424800",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-336287-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/MobkuYAQCu?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "23.00"
        },
        destination: "berlin"
        },
        {
        id: "105535",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105535",
        methods: [
        "GET"
        ]
        },
        name: "Skip the Line: Pergamon Museum & Asisi Panorama Tickets",
        shortDescription: "Skip the long lines and visit the Pergamon Museum with 3 impressive collections, including the new exhibition, Das Panorama. See pieces from antiquity, discover the Middle East Museum and the Islamic Art Museum.",
        geoCode: {
        latitude: "52.519952",
        longitude: "13.397082"
        },
        rating: "4.714900",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-587739-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/MZAEyoj7bt?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "19.00"
        },
        destination: "berlin"
        },
        {
        id: "105539",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105539",
        methods: [
        "GET"
        ]
        },
        name: "Walking Tour in German: Gov. District & Reichstag with Dome",
        shortDescription: "Enjoy a guided tour of the parliament quarter in Berlin in German and learn more about the troubled and eventful history of the capital.",
        geoCode: {
        latitude: "52.515938",
        longitude: "13.379472"
        },
        rating: "4.759600",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-830280-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/VpSqZMgXTD?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "15.00"
        },
        destination: "berlin"
        },
        {
        id: "105541",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105541",
        methods: [
        "GET"
        ]
        },
        name: "Berlin Reichstag and Glass Dome: 2-Hour Tour in English",
        shortDescription: "Explore Berlin’s Government District and the Reichstag Cupola on a 2-hour English-speaking tour. Learn more about the destiny of the once divided metropolis, and see the new buildings of the administrative district, including Foster’s stunning Reichstag.",
        geoCode: {
        latitude: "52.516006",
        longitude: "13.380476"
        },
        rating: "4.650000",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-345446-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/mjaRL14SG3?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "15.00"
        },
        destination: "berlin"
        },
        {
        id: "105577",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105577",
        methods: [
        "GET"
        ]
        },
        name: "Reichstag: Rooftop Coffee Break at Käfer",
        shortDescription: "Visit the Reichstag and enjoy a beautiful view of Berlin from the famed glass dome. Have coffee and cake at the rooftop restaurant at a table reserved specially for you.",
        geoCode: {
        latitude: "52.517885",
        longitude: "13.376075"
        },
        rating: "4.504900",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-1507567-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/m8JCJPY5R6?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "20.00"
        },
        destination: "berlin"
        },
        {
        id: "105645",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/105645",
        methods: [
        "GET"
        ]
        },
        name: "Skip the Line: Neues Museum Berlin Ticket",
        shortDescription: "Visit the Neues Museum and gaze in wonder at exhibits from the Egyptian Museum, the Antique Collection and the Museum of Prehistory and Early History.",
        geoCode: {
        latitude: "52.519952",
        longitude: "13.397082"
        },
        rating: "4.698100",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-467332-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/WukCPu6z7K?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "12.00"
        },
        destination: "berlin"
        },
        {
        id: "125282",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/125282",
        methods: [
        "GET"
        ]
        },
        name: "Berlin Reichstag and Glass Dome Private Tour",
        shortDescription: "Discover the highlights of Berlin's parliamentary quarter on a private tour, and then head up to the glass dome roof for panoramic views over the city.",
        geoCode: {
        latitude: "52.515932",
        longitude: "13.379460"
        },
        rating: "4.689200",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-846401-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/TuJTAWehQP?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "195.00"
        },
        destination: "berlin"
        },
        {
        id: "203783",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/203783",
        methods: [
        "GET"
        ]
        },
        name: "Berlin TV Tower: Fast View & Window Seat Restaurant Ticket",
        shortDescription: "Enjoy VIP entry to the panorama floor of Berlin's TV Tower and take a seat at the window. See the city and all its sights such as Potsdamer Platz, the Brandenburg Gate, the cathedral and the Olympic Stadium, from 200 meters above.",
        geoCode: {
        latitude: "52.520815",
        longitude: "13.409419"
        },
        rating: "4.727500",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-2338405-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/DVsDphBR9m?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "25.00"
        },
        destination: "berlin"
        },
        {
        id: "203809",
        type: "activity",
        self: {
        href: "https://test.api.amadeus.com/v1/shopping/activities/203809",
        methods: [
        "GET"
        ]
        },
        name: "Berlin: TV Tower Fast View Ticket",
        shortDescription: "Offering breathtaking views over the German capital, the TV Tower cuts a striking image against the Berlin skyline. Secure yourself a hassle-free entrance ticket to this famous city attraction and bypass the infamous queues of people lining up outside.",
        geoCode: {
        latitude: "52.520815",
        longitude: "13.409419"
        },
        rating: "4.464500",
        pictures: [
        "https://cdn.getyourguide.com/img/tour_img-2119950-145.jpg"
        ],
        bookingLink: "https://b2c.mla.cloud/c/UqqAurS7Dm?c=2WxbgL36",
        price: {
        currencyCode: "EUR",
        amount: "22.00"
        },
        destination: "berlin"
        },
        {
            id: "4520",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/4520",
            methods: [
            "GET"
            ]
            },
            name: "Priority Access: Best of Barcelona Tour Including Sagrada Familia",
            shortDescription: "Explore the beauty of Barcelona on this Best of Barcelona Tour, which offers a comprehensive view of this exquisite Catalan city, including a visit to La Sagrada Familia. Perfect for first-time visitors, the tour will show you the city’s most iconic sights and allow you to discover some of Barcelona’s best-kept secrets. You'll enjoy skip-the-line access at La Sagrada Familia, so you can avoid the long queues at this popular attraction. You’ll also visit the hill of Montjuïc and the Gothic Quarter. On this small-group tour, you'll receive personalized attention from your guide. Please note: From January 7th to January 13th, La Pedrera will be closed for maintenance. These are the regular works for maintenance performed annually and during the same dates. You will have the alternative to visit the Casa Batllo instead.",
            geoCode: {
            latitude: "41.362200",
            longitude: "2.158030"
            },
            rating: "4.600000",
            pictures: [
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/35/ff/f9.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/gIZSe32B?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "89.00"
            },
            destination: "barcelona"
            },
            {
            id: "4521",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/4521",
            methods: [
            "GET"
            ]
            },
            name: "Fast Track Sagrada Familia Guided Tour",
            shortDescription: "Visit La Sagrada Familia in Barcelona on a 1.5-hour skip-the-line tour! With a knowledgeable local guide, head straight past the cathedral’s long entrance lines to learn all about the UNESCO-listed cathedral and its charismatic creator: Antoni Gaudi. After exploring the monument, visit the onsite La Sagrada Familia Museum to see an array of cathedral artifacts.",
            geoCode: {
            latitude: "41.374656",
            longitude: "2.139204"
            },
            rating: "4.400000",
            pictures: [
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/74/ea/0c.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/Ai7Sc1EN?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "39.00"
            },
            destination: "barcelona"
            },
            {
            id: "4523",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/4523",
            methods: [
            "GET"
            ]
            },
            name: "City Sightseeing Barcelona Hop-On Hop-Off Bus Tour",
            shortDescription: "Discover the very best of Barcelona with a 1 or 2 day hop-on hop-off bus pass. This double-decker bus tour takes you to all of the key landmarks of this world-famous city, including Sagrada Familia, Park Guell, Camp Nou, Barcelona Zoo, Casa Batllo, Placa de Catalunya and much more! From the open-top deck you'll see beaches, parks, modern districts and historic architecture, including the work of the iconic Antoni Gaudi! Hop on and off as many times as you want within the chosen time period, creating your own schedule and seeing this modern paradise at your own pace. This sightseeing tour includes a multilingual on-board audio commentary, enabling you to experience the history of Barcelona in a more immersive way. Also be sure to explore many of the local attractions, and take advantage of the discount booklet that is included with your pass.",
            geoCode: {
            latitude: "41.371342",
            longitude: "2.149577"
            },
            rating: "4.400000",
            pictures: [
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/7f/a3.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/snyQLAXw?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "30.00"
            },
            destination: "barcelona"
            },
            {
            id: "4527",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/4527",
            methods: [
            "GET"
            ]
            },
            name: "Barcelona City Tour Hop-On Hop-Off",
            shortDescription: "See Barcelona at your own pace on a one-day or two-day hop-on hop-off tour. With two interconnected routes, this tour is the easiest way to get around Barcelona and see all the sights. Get a bird's eye view of the cobbled medieval streets of Las Ramblas, discover the Port Olímpic beachfront promenade and see the famous F.C. Barcelona football stadium.",
            geoCode: {
            latitude: "41.374720",
            longitude: "2.148458"
            },
            rating: "4.500000",
            pictures: [
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/1e/c1/f3.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/P87rD8Dk?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "30.00"
            },
            destination: "barcelona"
            },
            {
            id: "4529",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/4529",
            methods: [
            "GET"
            ]
            },
            name: "Flamenco Night at Tablao Cordobes",
            shortDescription: "Feel the passion of the flamenco at Barcelona's legendary Tablao Cordobes, where some of the greatest names in flamenco have performed. Entertained by an internationally renowned flamenco group, you'll discover why the traditional dance of Spain is so popular. You'll also have the option of dining on a traditional buffet meal or simply ordering a drink to enjoy while watching the show.",
            geoCode: {
            latitude: "41.379139",
            longitude: "2.174814"
            },
            rating: "4.300000",
            pictures: [
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/59/90.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/MqgJi888?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "44.00"
            },
            destination: "barcelona"
            },
            {
            id: "4550",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/4550",
            methods: [
            "GET"
            ]
            },
            name: "Camp Nou - F.C.Barcelona Open Date Ticket",
            shortDescription: "Discover the authentic essence of Futbol Club Barcelona. You can visit the museum of FC Barcelona, a modern museum, with interactive murals, audiovisuals, new showcases and a collection that will let you know the history of FC Barcelona and understand at the same time the values that make Barça 'More than a club'. You can also visit the press room, the changing rooms and the access tunnel until you reach the playing field; from here, you can enjoy the panoramic view of the entire stadium.",
            geoCode: {
            latitude: "41.380093",
            longitude: "2.119331"
            },
            rating: "4.300000",
            pictures: [
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/59/8d.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/Ui27nkMe?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "31.00"
            },
            destination: "barcelona"
            },
            {
            id: "102111",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/102111",
            methods: [
            "GET"
            ]
            },
            name: "Hop-On Hop-Off Barcelona City Tour 1 or 2 Day",
            shortDescription: "Discover Barcelona at your own pace on a double-decker hop-on hop-off bus tour! Choose from 1 or 2 days and access 2 routes with stops at the best sites in Barcelona! Plus, enjoy audio commentary in 15 different languages as you travel through the city.",
            geoCode: {
            latitude: "41.387360",
            longitude: "2.169696"
            },
            rating: "4.499300",
            pictures: [
            "https://cdn.getyourguide.com/img/tour_img-263339-145.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/ObjTriJdLd?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "30.00"
            },
            destination: "barcelona"
            },
            {
            id: "102120",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/102120",
            methods: [
            "GET"
            ]
            },
            name: "Barcelona Hop-on Hop-off Tour: 1 or 2- Day Ticket",
            shortDescription: "See the fascinating city of Barcelona on a comfortable and convenient hop-on hop-off bus tour. You’ll travel on open-top double-decker buses that cover 3 different routes. Your 1-day or 2-day ticket makes it possible see all that Barcelona has to offer!",
            geoCode: {
            latitude: "41.387015",
            longitude: "2.170047"
            },
            rating: "4.546300",
            pictures: [
            "https://cdn.getyourguide.com/img/tour_img-1089291-145.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/36jIo91I3o?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "30.00"
            },
            destination: "barcelona"
            },
            {
            id: "102185",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/102185",
            methods: [
            "GET"
            ]
            },
            name: "Barcelona’s Montjuïc Cable Car Ride: Round Trip Ticket",
            shortDescription: "Travel on the recently refurbished Montjuïc Cable Car and get unique views of Barcelona’s coastline from the air. Take the cable car to the top of Montjuïc, from where you will see unbeatable views of the port and city.",
            geoCode: {
            latitude: "41.368812",
            longitude: "2.163301"
            },
            rating: "4.305600",
            pictures: [
            "https://cdn.getyourguide.com/img/tour_img-307107-145.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/uitmwC4bRL?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "13.00"
            },
            destination: "barcelona"
            },
            {
            id: "102206",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/102206",
            methods: [
            "GET"
            ]
            },
            name: "Fast-Track Access: Sagrada Familia 1.5-Hour Guided Tour",
            shortDescription: "Visit Barcelona's majestic Sagrada Familia, designed by the great Modernist visionary Antoni Gaudí. Get fast track entry with a pre-booked ticket to the stunning Art Nouveau masterpiece and enjoy a 1.5-hour tour of the Basilica and Sagrada Familia Museum.",
            geoCode: {
            latitude: "41.403565",
            longitude: "2.172618"
            },
            rating: "4.364800",
            pictures: [
            "https://cdn.getyourguide.com/img/tour_img-307750-145.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/4UAPXvnMYF?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "39.00"
            },
            destination: "barcelona"
            },
            {
            id: "102217",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/102217",
            methods: [
            "GET"
            ]
            },
            name: "Barcelona: City Sights Highlight Bike Tour",
            shortDescription: "Discover Barcelona on a bike tour. Ride over bike lanes, pedestrian paths, and parks and gardens to the city's most beautiful sights. Admire the old architecture, enjoy the views from the beach and discover the hidden corners of the city.",
            geoCode: {
            latitude: "41.400898",
            longitude: "2.179334"
            },
            rating: "4.847300",
            pictures: [
            "https://cdn.getyourguide.com/img/tour_img-322577-145.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/ZnR9viod91?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "20.00"
            },
            destination: "barcelona"
            },
            {
            id: "102257",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/102257",
            methods: [
            "GET"
            ]
            },
            name: "Palau de la Música Guided Tour",
            shortDescription: "Explore an icon of Barcelona’s Modernist architecture on a 45-minute guided tour of the Palau de la Música Catalana, with access to areas of the iconic building normally off limits to the public. Admire refined architectural details, and more.",
            geoCode: {
            latitude: "41.387587",
            longitude: "2.175239"
            },
            rating: "4.605100",
            pictures: [
            "https://cdn.getyourguide.com/img/tour_img-306547-145.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/IV73K3fZf6?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "20.00"
            },
            destination: "barcelona"
            },
            {
            id: "102336",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/102336",
            methods: [
            "GET"
            ]
            },
            name: "Casa Milà-La Pedrera: Skip The Line Ticket & Audio Guide",
            shortDescription: "Explore one of the icons of Barcelona with a skip-the-line ticket to the Casa Milà (La Pedrera), Antoni Gaudi’s groundbreaking apartments on the Passeig de Gracia. See the Espai Gaudi exhibition, dedicated to Gaudi’s life and architectural innovations.",
            geoCode: {
            latitude: "41.395381",
            longitude: "2.161961"
            },
            rating: "4.644500",
            pictures: [
            "https://cdn.getyourguide.com/img/tour_img-1849782-145.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/iAiVP5D4O5?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "22.00"
            },
            destination: "barcelona"
            },
            {
            id: "102352",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/102352",
            methods: [
            "GET"
            ]
            },
            name: "Fast-Track Guided Tour: Sagrada Familia with Towers",
            shortDescription: "Skip the long lines to the Sagrada Familia in Barcelona, and enjoy a 1,5-hour guided tour of Gaudí’s Modernisme masterpiece. Learn about the unfinished construction of the basilica at the museum. Then, enjoy panoramic views from the towers.",
            geoCode: {
            latitude: "41.403543",
            longitude: "2.172963"
            },
            rating: "4.402000",
            pictures: [
            "https://cdn.getyourguide.com/img/tour_img-344192-145.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/7yrZQfMCzG?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "51.00"
            },
            destination: "barcelona"
            },
            {
            id: "102376",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/102376",
            methods: [
            "GET"
            ]
            },
            name: "Barcelona: Park Güell Admission Ticket",
            shortDescription: "Benefit of the included shuttle bus and visit Park Güell, one of Gaudí’s major works in Barcelona. Take in spectacular views of Barcelona and explore this stunning green space that’s surrounded by modernist architecture.",
            geoCode: {
            latitude: "41.412934",
            longitude: "2.152394"
            },
            rating: "4.182300",
            pictures: [
            "https://cdn.getyourguide.com/img/tour_img-344138-145.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/dXIrZWAns6?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "13.00"
            },
            destination: "barcelona"
            },
            {
            id: "102493",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/102493",
            methods: [
            "GET"
            ]
            },
            name: "Barcelona Aquarium: Skip-the-Line Admission Ticket",
            shortDescription: "Visit the unique Barcelona Aquarium, entering without delay on a skip-the-line ticket. Experience the spectacular Oceanarium as you walk along a transparent tunnel surrounded by sharks. Learn about the seabed and the importance of water to the planet.",
            geoCode: {
            latitude: "41.376837",
            longitude: "2.184338"
            },
            rating: "4.310900",
            pictures: [
            "https://cdn.getyourguide.com/img/tour_img-690509-145.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/kRdTPkfAzd?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "21.00"
            },
            destination: "barcelona"
            },
            {
            id: "102604",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/102604",
            methods: [
            "GET"
            ]
            },
            name: "Barcelona: Sagrada Familia Guided Tour with Tower Access",
            shortDescription: "Avoid the lines at Barcelona’s most iconic monument on a tour of the Sagrada Familia Basilica. See Gaudi´s work from the inside and enjoy panoramic city views from one of the towers.",
            geoCode: {
            latitude: "41.404046",
            longitude: "2.175408"
            },
            rating: "4.309100",
            pictures: [
            "https://cdn.getyourguide.com/img/tour_img-690581-145.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/Pj3kailzoG?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "56.00"
            },
            destination: "barcelona"
            },
            {
            id: "140230",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/140230",
            methods: [
            "GET"
            ]
            },
            name: "Fast Track Tickets to Sagrada Familia",
            shortDescription: "What to Expect Purchasing tickets for entry at the venue is not only time consuming but often times, futile. Since each time slot for entry into the basilica has limited capacity, same day entry tickets on site tend to sell out before mid-day, even if you waited in line for several hours, as many visitors must do. Our fast track Sagrada Familia tickets provide you with priority access to this iconic basilica. Once you book your tickets, you will receive them via email which you can then display on your phone to skip the ticketing line entirely and proceed directly to the security check. Before you head into the inner sanctum of the church, make sure to explore the outer walls and facades of the Sagrada Familia. Two of the three facades, Nativity, and Passion, have been completed, while the third, the Glory Facade, is still under construction. The Nativity facade tells the story of the birth of Jesus Christ while the Passion Facade is dedicated to his death. Though you can admire the facades and towers from the outside, these tickets do not give you access to the towers themselves. If you wish to gain entry to the towers along with the Basilica, please click here. As you move inside, you will come face to face with one of the most enchanting interiors of any church in the world. The vaults of the Basilica are as high as 70 meters in certain places and the beautiful, stained glass windows, constructed as per Gaudi’s plans, as well as the pillars holding up the ceiling, make the entire space appear as though it were the hollowed out rib cage of some giant celestial beast. The magical natural light filtering through the basilica’s exquisite windows will take your breath away and transport you to a different time.",
            geoCode: {
            latitude: "41.404133",
            longitude: "2.174821"
            },
            rating: "4.700000",
            pictures: [
            "https://cdn-imgix.headout.com/tour/13376/TOUR-IMAGE/eaeefed3-c87b-4531-82c0-0089dc8d11ec-7324-barcelona-sagrada-familia-skyline-day-01.jpg?w=500"
            ],
            bookingLink: "https://b2c.mla.cloud/c/39RQfz8jBQ?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "17.00"
            },
            destination: "barcelona"
            },
            {
            id: "161340",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/161340",
            methods: [
            "GET"
            ]
            },
            name: "Park Güell Timed Entry Ticket",
            shortDescription: "What to Expect Enjoy Priority Access to Park Güell and its Monumental Zone Originally intended to be a gated community for aristocrats, Park Güell is a burst of Gaudi's imagination come to life in the form of a public park. Positioned at an apt vantage point in Barcelona, this iconic park has quirky buildings, lush parks, and unique details that amuse even the most cynical visitor. With your timed entry ticket, you can visit the Monumental Zone, which requires ticketed access. Making up 5% of Park Güell, the Monumental Zone houses Sala Hipòstila (the Hypostyle Room), Museu del Guarda (Guard Museum), Jardins d’Àustria (Gardens of Austria), Plaça de la Natura (Nature Square or terrace), Pòrtic de la Bugadera (Wash House Portico) and interesting roads, viaducts and paths that one must see to believe! The exquisite lizard figurine that welcomes you into Park Güell - an adequate representation of the burst of color you can expect within the park! A view from Plaça de la Natura that showcases Gaudi's incredible vision. The impeccable ceilings in the Hypostyle Room. Straight out of any fantasy-fiction novel, this is the Portico de la Lavandera, an incredible viaduct, one of many in Park Güell. Park Güell is easily one of the most popular attractions in Barcelona, receiving over 5 million visitors annually. With a limited number of people allowed inside in each timed entry slot, ticket purchase lines at the venue can be anywhere between 1 to 3 hours long and, should you manage to purchase a ticket, your entry may be for a time that is hours later. Purchasing your ticket online before your visit not only helps you save time but also allows you to choose an entry slot according to your convenience. Note: From May 1st to August 27th the access is free from 6 am to 8 am and from 9.30 pm to 12 am.",
            geoCode: {
            latitude: "41.414494",
            longitude: "2.152694"
            },
            rating: "4.700000",
            pictures: [
            "https://cdn-imgix.headout.com/tour/13770/TOUR-IMAGE/9590b09b-3c11-4e47-b364-53ee809b8326-7563-barcelona-skip-the-line-entry-ticket-to-park-guell-01.jpg?w=500"
            ],
            bookingLink: "https://b2c.mla.cloud/c/MH2xScrRuI?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "10.00"
            },
            destination: "barcelona"
            },
            {
            id: "333902",
            type: "activity",
            self: {
            href: "https://test.api.amadeus.com/v1/shopping/activities/333902",
            methods: [
            "GET"
            ]
            },
            name: "Camp Nou Experience: FC Barcelona Museum and Tour",
            shortDescription: "Retrace the footsteps of FC Barcelona's legendary players and experience the Barça passion on this 1.5 hour tour that's perfect for football fans! Tour Camp Nou, the largest stadium in Europe, and visit the museum to learn all about FC Barcelona.",
            geoCode: {
            latitude: "41.380270",
            longitude: "2.120898"
            },
            rating: "4.387200",
            pictures: [
            "https://cdn.getyourguide.com/img/tour_img-1883417-145.jpg"
            ],
            bookingLink: "https://b2c.mla.cloud/c/3FNWtxvSg3?c=2WxbgL36",
            price: {
            currencyCode: "EUR",
            amount: "26.00"
            },
            destination: "barcelona"
            },
            {
                id: "48967",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/48967",
                methods: [
                "GET"
                ]
                },
                name: "Best of London Including Tower of London, Changing of the Guard, with a Cream Tea or London Eye Upgrade",
                shortDescription: "See the best that England’s capital has to offer on a full-day city tour of London! Explore St Paul’s Cathedral with a guide, then make a photo stop at Westminster Abbey. Watch the must-see Changing of the Guard ceremony outside Buckingham Palace and have some free time for lunch around the UNESCO-listed Tower of London. Finish up with a sightseeing cruise down the River Thames. If you want to see even more, upgrade to one of two activities: a cream tea at Harrods restaurant or a London Eye flight.",
                geoCode: {
                latitude: "51.499373",
                longitude: "-0.162649"
                },
                rating: "4.200000",
                pictures: [
                "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/25/78.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/JdAMsPl2?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "117.00"
                }, 
                destination : "london"
                },
                {
                id: "48971",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/48971",
                methods: [
                "GET"
                ]
                },
                name: "London Eye Fast-Track Ticket",
                shortDescription: "Fast Track for a perfect Coca-Cola London Eye experience! With fast track entry for your flight in a shared capsule, you get to skip the majority of the queue. Don't waste time waiting in lines on vacation! The London Eye offers spectacular views of the capital of England from high above the River Thames. The famous landmarks to be seen include Big Ben and the Houses of Parliament, St. Paul's Cathedral, Buckingham Palace and Westminster Abbey. Visit includes entry to the London Eye 4D Experience, an inspiring journey of discovery that brings London to life through multi-sensory special effects.",
                geoCode: {
                latitude: "51.503827",
                longitude: "-0.118811"
                },
                rating: "4.500000",
                pictures: [
                "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/82/6f/3b.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/k2HZZrhh?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "43.00"
                }, 
                destination : "london"
                },
                {
                id: "48977",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/48977",
                methods: [
                "GET"
                ]
                },
                name: "The Original Tour London: Hop-on Hop-off Bus Tour",
                shortDescription: "Bus tours with The Original Tour give you 360 views of London from our open-top buses and unlimited hop-on, hop-off access. When you book with The Original Tour you can hop-on or off our buses at over 100 bus stops in central London, access free WiFi onboard, join our free walking tours and enjoy our free river cruise. We have 7 different bus routes around London!",
                geoCode: {
                latitude: "51.494673",
                longitude: "-0.122474"
                },
                rating: "4.200000",
                pictures: [
                "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/1e/c2/35.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/0dPOKTBF?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "39.00"
                }, 
                destination : "london"
                },
                {
                id: "48989",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/48989",
                methods: [
                "GET"
                ]
                },
                name: "Tower of London Entrance Ticket Including Crown Jewels and Beefeater Tour",
                shortDescription: "Enjoy faster entrance to the UNESCO-listed Tower of London, one of London's most popular attractions. Bypass the long lines at the main ticket office, and explore this mighty complex, established in 1066. Check out the White Tower, Traitors’ Gate and Tower Green, where Anne Boleyn was beheaded in 1536; visit the awe-inspiring Crown Jewels; and see the legendary ravens. Once inside, explore independently, or take a complimentary Yeoman Warder ‘Beefeater’ tour or audio-guided tour (own expense). Upgrade to include admission to two other London palaces: Hampton Court and Kensington Palace.",
                geoCode: {
                latitude: "51.507937",
                longitude: "-0.076188"
                },
                rating: "4.400000",
                pictures: [
                "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/38/d0/fa.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/Sgu1UV3C?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "29.00"
                }, 
                destination : "london"
                },
                {
                id: "106431",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/106431",
                methods: [
                "GET"
                ]
                },
                name: "The Original London Hop-On Hop-Off Sightseeing Bus Tour",
                shortDescription: "See the capital's top attractions with this 24, 48 or 72-hour pass. Stop by Buckingham Palace, Westminster, Piccadilly Circus, London Eye, Tower of London, the River Thames and much more. Get free walking tours and a Thames River Cruise Pass.",
                geoCode: {
                latitude: "51.507351",
                longitude: "-0.127758"
                },
                rating: "4.213700",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-401956-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/UTO45Ye4wk?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "40.00"
                }, 
                destination : "london"
                },
                {
                id: "106458",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/106458",
                methods: [
                "GET"
                ]
                },
                name: "London: Big Bus Open-Top Hop-on, Hop-off Sightseeing Tour",
                shortDescription: "See London’s famous landmarks with an open-top, hop-on hop-off sightseeing tour. Choose from a Classic (1 day), Premium (2 day) or Deluxe (3 day) ticket including a Thames river cruise, a free walking tour, and a recorded commentary or live guide.",
                geoCode: {
                latitude: "51.506740",
                longitude: "-0.142847"
                },
                rating: "4.140100",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-418426-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/hX0qm0n9Ho?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "41.00"
                }, 
                destination : "london"
                },
                {
                id: "106459",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/106459",
                methods: [
                "GET"
                ]
                },
                name: "River Thames Hop-On Hop-Off Sightseeing Cruise",
                shortDescription: "See London's famous sights on a leisurely cruise of the River Thames. The River Red Rover ticket enables you to hop on and hop off for 24 hours at any of London’s main destination piers, such as Westminster, London Eye, Tower, and Greenwich.",
                geoCode: {
                latitude: "51.501706",
                longitude: "-0.123260"
                },
                rating: "4.314100",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-2377000-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/92ZRL3c5zs?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "23.00"
                }, 
                destination : "london"
                },
                {
                id: "106515",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/106515",
                methods: [
                "GET"
                ]
                },
                name: "Harry Potter: Warner Brothers Studio Tour and Transfers",
                shortDescription: "Take the bus from central London for this magical full-day tour of the Warner Brothers Studio. Go behind the scenes of the Harry Potter film sets to explore the enchanting props and costumes, and walk in the footsteps of your favorite characters.",
                geoCode: {
                latitude: "51.492989",
                longitude: "-0.146415"
                },
                rating: "4.681100",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-2452840-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/ax0hSCx3UG?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "98.00"
                }, 
                destination : "london"
                },
                {
                id: "106563",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/106563",
                methods: [
                "GET"
                ]
                },
                name: "St Paul's Cathedral: Fast-Track Entrance",
                shortDescription: "Enjoy discounted fast-track entrance to the London landmark of St Paul's Cathedral. Explore the cathedral floor and crypt, climb its 3 galleries and view panoramic London from the top of the dome. Multimedia guides and tours provided.",
                geoCode: {
                latitude: "51.514063",
                longitude: "-0.099163"
                },
                rating: "4.660200",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-697418-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/EHZTTfno9G?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "20.00"
                }, 
                destination : "london"
                },
                {
                id: "106565",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/106565",
                methods: [
                "GET"
                ]
                },
                name: "London: Tower of London and Crown Jewels Exhibition Ticket",
                shortDescription: "Absorb over 1000 years of history at the Tower of London, see the Crown Jewels, take an unforgettable Yeoman Warder tour and spot the ravens.",
                geoCode: {
                latitude: "51.508252",
                longitude: "-0.076208"
                },
                rating: "4.520200",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-436855-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/GYYguCWu7i?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "29.00"
                }, 
                destination : "london"
                },
                {
                id: "106571",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/106571",
                methods: [
                "GET"
                ]
                },
                name: "London by Night: 90-Minute Open Top Bus Tour",
                shortDescription: "Be thrilled as you pass through the vibrant city of London lit up against the night sky. Climb aboard this open top bus and enjoy a fun and informative guided tour. See Big Ben, Harrods, the London Eye and Trafalgar Square.",
                geoCode: {
                latitude: "51.507245",
                longitude: "-0.141713"
                },
                rating: "4.464400",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-402893-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/PpKimVFojy?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "25.00"
                }, 
                destination : "london"
                },
                {
                id: "106579",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/106579",
                methods: [
                "GET"
                ]
                },
                name: "View from the Shard Entrance Ticket with Champagne Option",
                shortDescription: "Admire the sprawling metropolis of London from the 72nd floor of its newest landmark, The Shard. Enjoy 360-degree panoramic views of the city from inside or, if you’re feeling brave, venture outside onto Western Europe’s highest viewing platform!",
                geoCode: {
                latitude: "51.504366",
                longitude: "-0.086724"
                },
                rating: "4.575100",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-715060-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/sn9VqbMfYM?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "32.00"
                }, 
                destination : "london"
                },
                {
                id: "106597",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/106597",
                methods: [
                "GET"
                ]
                },
                name: "Classic London 3.5-Hour Bike Tour",
                shortDescription: "Enjoy a morning cycle ride around central London and see the city’s legendary sights from the saddle of a comfortable bicycle. Experienced guides will escort you along cycle paths, side roads and alleys to discover London’s heart.",
                geoCode: {
                latitude: "51.496168",
                longitude: "-0.111997"
                },
                rating: "4.791900",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-422492-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/95T9P6Oa4U?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "31.00"
                }, 
                destination : "london"
                },
                {
                id: "106621",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/106621",
                methods: [
                "GET"
                ]
                },
                name: "Harry Potter: Warner Bros. Studio Tour with Transfer",
                shortDescription: "Learn behind-the-scenes secrets of making the 'Harry Potter' series on a visit to the Warner Bros. Studio. See the whimsical sets, props, and costumes used in the film.",
                geoCode: {
                latitude: "51.492336",
                longitude: "-0.148414"
                },
                rating: "4.673800",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-319108-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/7fW7dxjyYV?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "98.00"
                }, 
                destination : "london"
                },
                {
                id: "106710",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/106710",
                methods: [
                "GET"
                ]
                },
                name: "London: Churchill War Rooms Tour",
                shortDescription: "Discover the rooms where Winston Churchill and his Cabinet sheltered during World War 2 on a tour of the Churchill War Rooms in London. See artifacts of war, and experience the wartime bunker, left just as it was during the days of the Blitz.",
                geoCode: {
                latitude: "51.502290",
                longitude: "-0.129294"
                },
                rating: "4.817900",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-720313-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/QfWd0e5Oet?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "26.00"
                }, 
                destination : "london"
                },
                {
                id: "106767",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/106767",
                methods: [
                "GET"
                ]
                },
                name: "Warner Bros. Studio London: Tour with Coach Transfers",
                shortDescription: "Join the Warner Bros. Studio London Tour and go behind the scenes and onto the sets where the Harry Potter movies were filmed. Experience the magic and see the actual props, costumes, and special effects used in creating the movies.",
                geoCode: {
                latitude: "51.494577",
                longitude: "-0.140953"
                },
                rating: "4.599000",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-1762562-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/D1T0XrQBlh?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "98.00"
                }, 
                destination : "london"
                },
                {
                id: "106789",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/106789",
                methods: [
                "GET"
                ]
                },
                name: "London Westminster Abbey Entrance Ticket & Audio Guide",
                shortDescription: "An absolutely essential part of any visit to London, Westminster Abbey is one of the city’s most iconic buildings. With your ticket, explore a thousand years of history and marvel at the exquisite Gothic architecture and beautiful stained glass.",
                geoCode: {
                latitude: "51.499315",
                longitude: "-0.128651"
                },
                rating: "4.264000",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-718858-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/KKVZ83QnFt?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "25.00"
                }, 
                destination : "london"
                },
                {
                id: "106935",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/106935",
                methods: [
                "GET"
                ]
                },
                name: "London: Westminster to Greenwich River Thames Cruise",
                shortDescription: "Take a 1-way or return cruise from Westminster to Greenwich (or vice versa) and see the sights of London from a different perspective. Listen to an informative audio commentary as you admire monuments such as the Tower of London from the River Thames.",
                geoCode: {
                latitude: "51.501646",
                longitude: "-0.123856"
                },
                rating: "4.424600",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-1267956-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/WbwxDpruQ5?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "15.00"
                }, 
                destination: "london"
                },
                {
                id: "248307",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/248307",
                methods: [
                "GET"
                ]
                },
                name: "Magical London: Harry Potter Guided Walking Tour",
                shortDescription: "Meet your guide in Soho and find out which House you belong in, then walk in the footsteps of your favorite wizards and witches while visiting Diagon Alley and Platform 9 ¾.",
                geoCode: {
                latitude: "51.513297",
                longitude: "-0.129324"
                },
                rating: "4.654800",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-1281147-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/9CQa25Fdcu?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "24.00"
                }, 
                destination : "london"
                },
                {
                id: "251599",
                type: "activity",
                self: {
                href: "https://test.api.amadeus.com/v1/shopping/activities/251599",
                methods: [
                "GET"
                ]
                },
                name: "Coca-Cola London Eye",
                shortDescription: "A trip on the Coca-Cola London Eye is truly captivating. The attraction is one of the world's tallest observation wheels and has been London’s number one visitor experience for over a decade.",
                geoCode: {
                latitude: "51.503193",
                longitude: "-0.118604"
                },
                rating: "4.433700",
                pictures: [
                "https://cdn.getyourguide.com/img/tour_img-2010672-145.jpg"
                ],
                bookingLink: "https://b2c.mla.cloud/c/454Zuct77g?c=2WxbgL36",
                price: {
                currencyCode: "EUR",
                amount: "32.00"
                }, 
                destination : "london"
                }

]


mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        try {
            const dbResult = await Tour.create(toursAndActivities)
            console.log("done");
        } catch (error) {
            console.log(error);
        }
    })
    .catch((error) => {
        console.log(error);
    });