const tourData = [
    {
      "title": "Westminister Bridge",
      "city": "London",
      "address": "Somewhere in London",
      "distance": 300,
      "price": 99,
      "maxGroupSize": 10,
      "desc": "this is the description",
      "reviews": [],
      "photo": "/tour-images/tour-img01.jpg",
      "featured": true
    },
    {
      "title": "Bali, Indonesia",
      "city": "Bali",
      "address": "Somewhere in Indonesia",
      "distance": 400,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/tour-images/tour-img02.jpg",
      "featured": true
    },
    {
      "title": "Snowy Mountains, Thailand",
      "city": "Bangkok",
      "address": "Somewhere in Thailand",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/tour-images/tour-img03.jpg",
      "featured": true
    },
    {
      "title": "Beautiful Sunrise, Thailand",
      "city": "Phuket",
      "address": "Somewhere in Thailand",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/tour-images/tour-img04.jpg",
      "featured": true
    },
    {
      "title": "Nusa Pendia Bali, Indonesia",
      "city": "Bali",
      "address": "Somewhere in Indonesia",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/tour-images/tour-img05.jpg",
      "featured": true
    },
    {
      "title": "Cherry Blossoms Spring",
      "city": "Tokyo",
      "address": "Somewhere in Japan",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/tour-images/tour-img06.jpg",
      "featured": true
    },
    {
      "title": "Holmen Lofoten, France",
      "city": "Paris",
      "address": "Somewhere in France",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/tour-images/tour-img07.jpg",
      "featured": true
    },
    {
      "title": "Jaflong, Sylhet",
      "city": "Sylhet",
      "address": "Somewhere in Sylhet",
      "distance": 100,
      "price": 99,
      "maxGroupSize": 5,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/tour-images/tour-img08.jpg",
      "featured": false
    },
    {
      "title": "Cox's Bazar Sea Beach",
      "city": "Chittagong",
      "address": "Somewhere in Chittagong",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/tour-images/tour-img09.jpg",
      "featured": false
    },
    {
      "title": "Grand Canyon, Arizona, USA",
      "city": "Grand Canyon",
      "address": "Somewhere in Grand Canyon",
      "distance": 400,
      "price": 199,
      "maxGroupSize": 12,
      "desc": "Explore the breathtaking views of the Grand Canyon, one of the world's most famous natural wonders.",
      "reviews": [],
      "photo": "/tour-images/tour-img01.jpg",
      "featured": true
    },
    {
      "title": "Santorini, Greece",
      "city": "Santorini",
      "address": "Somewhere in Santorini",
      "distance": 300,
      "price": 299,
      "maxGroupSize": 6,
      "desc": "Enjoy the stunning sunsets and iconic white-washed buildings overlooking the Aegean Sea in Santorini.",
      "reviews": [],
      "photo": "/tour-images/tour-img02.jpg",
      "featured": true
    },
    {
      "title": "Taj Mahal, India",
      "city": "Agra",
      "address": "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh, India",
      "distance": 200,
      "price": 79,
      "maxGroupSize": 15,
      "desc": "Visit one of the Seven Wonders of the World, the magnificent Taj Mahal, a symbol of eternal love.",
      "reviews": [],
      "photo": "/tour-images/tour-img06.jpg",
      "featured": true
    },
    {
      "title": "Goa Beaches, India",
      "city": "Goa",
      "address": "Various locations in Goa",
      "distance": 10,
      "price": 49,
      "maxGroupSize": 10,
      "desc": "Relax on the beautiful beaches of Goa, known for their golden sands, clear waters, and vibrant atmosphere.",
      "reviews": [],
      "photo": "/tour-images/tour-img04.jpg",
      "featured": true
    },
    {
      "title": "Kerala Backwaters, India",
      "city": "Alleppey",
      "address": "Alleppey, Kerala, India",
      "distance": 50,
      "price": 129,
      "maxGroupSize": 8,
      "desc": "Cruise through the picturesque backwaters of Kerala on a traditional houseboat and experience tranquility like never before.",
      "reviews": [],
      "photo": "/tour-images/tour-img05.jpg",
      "featured": true
    },
    {
      "title": "Himalayas Trek, India",
      "city": "Manali",
      "address": "Manali, Himachal Pradesh, India",
      "distance": 10,
      "price": 299,
      "maxGroupSize": 6,
      "desc": "Embark on an adventurous trek in the majestic Himalayas, surrounded by breathtaking scenery and serene landscapes.",
      "reviews": [],
      "photo": "/tour-images/tour-img06.jpg",
      "featured": true
    },
    {
      "title": "Machu Picchu, Peru",
      "city": "Cusco",
      "address": "Machu Picchu, Cusco Region, Peru",
      "distance": 300,
      "price": 249,
      "maxGroupSize": 10,
      "desc": "Discover the ancient Incan citadel of Machu Picchu, nestled high in the Andes Mountains, a UNESCO World Heritage site.",
      "reviews": [],
      "photo": "/tour-images/tour-img07.jpg",
      "featured": true
    },
    {
      "title": "Pyramids of Giza, Egypt",
      "city": "Giza",
      "address": "Pyramids Road, Giza, Egypt",
      "distance": 10,
      "price": 149,
      "maxGroupSize": 20,
      "desc": "Marvel at the iconic Pyramids of Giza, one of the Seven Wonders of the Ancient World, and explore ancient Egyptian history.",
      "reviews": [],
      "photo": "/tour-images/tour-img08.jpg",
      "featured": true
    },
    {
      "title": "Venice, Italy",
      "city": "Venice",
      "address": "Venice, Italy",
      "distance": 200,
      "price": 179,
      "maxGroupSize": 8,
      "desc": "Experience the romantic charm of Venice with its picturesque canals, historic architecture, and vibrant culture.",
      "reviews": [],
      "photo": "/tour-images/tour-img09.jpg",
      "featured": true
    }
  ]
  
  export default tourData;