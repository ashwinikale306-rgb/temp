var book={
    title:"The alchemist",
    author:"paulo coelho",
    genre:"fiction",
    year:1988,
    pages:197,
    publisher:"Harpercollins",
    language:"English",
    isbn:"978-0061122415",
    price:15,
    rating:4.7
};
console.log(book)

var result1= book.title +" by " + book.author + " is a " + book.genre +
 " book published in "+book.year +". it has "+book.pages+" pages and is available in "
 + book.language +". Published by "+ 
 book.publisher+ ", the book's ISBN is "+ book.isbn
  +". it is priced at $"+book.price+" and holds a rating of "+book.rating + " stars.";
console.log(result1)

var info1=document.getElementById('info1');
info1.innerHTML=result1;

var flight={
    airline:"Emirateds",
    flightNumber:"Ek502",
    departure:"Dubai",
    destination:"Mumbai",
    duration:3.5,
    gate:"B12",
    terminal:"3",
    seatClass:"Business",
    boardingTime:"14:30",
    price:800
};
console.log(flight)

var result2= "Flight "+ flight.flightNumber+" by "
+ flight.airline +" departs from "+ flight.departure+
". The flight duration is "+ flight.duration
+ " hours. Boarding is at "+ flight.boardingTime + " from gate "
+flight.gate+", terminal "+ flight.terminal+
". class:"+flight.seatClass+". Ticket Price:$"+flight.price;

console.log(result2)

var info2=document.getElementById('info2');
info2.innerHTML=result2;


var travelpackage={
    destination:"Tokyo, japan",
    duration:"7 days",
    price:1800,
    itinerar:{
        day1:"Arrival and city tour",
        day2:"Visit mout fuji",
        day3:"Disneyland Tokyo",
        day4:"Shopping and cultural sites",
        day5:"Day at leisure",
        day6:"Hot spring trip",
        day7:"Return flight",

    },
    hotel:{
        name:"Tokyo hilton",
        rating:5,
        amenities:["spa","wifi","Gym"]
    }
};
console.log(travelpackage);

var result3= "Travel package to "+ travelpackage.destination+" for "
+travelpackage.duration+", prices at $1800. Accommodation at "
+ travelpackage.hotel.name+" ( "+travelpackage.hotel.rating+
"-star hotel) with amenities like "+travelpackage.hotel.amenities+"."+
"Itinery Highlights:"+"</br> -Day1:"+travelpackage.itinerar.day1+","
+"</br> -Day2:"+travelpackage.itinerar.day2+","+
"</br> -Day3:"+travelpackage.itinerar.day3+","+
"</br> -Day4:"+travelpackage.itinerar.day4+",";

console.log(result3);

var info3=document.getElementById('info3');
info3.innerHTML=result3;

var laptop = {
    brand: "Dell",
    model: "XPS 15",
    processor: "Intel i9",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 4070",
    display: "15.6-inch 4K",
    weight: 2.1,
    batteryLife: 12,
    price: 2300
  };

  console.log(laptop);

var result4= laptop.brand+" "+laptop.model+" features a "+laptop.processor+" processor, "+laptop.ram+" of RAM, and "+laptop.storage+" storage. It includes a "+laptop.gpu+
" GPU with a "+laptop.display+" display. Weighing "+laptop.weight+" kg, it has a battery life of "
+laptop.batteryLife+" hours. Priced at $"+laptop.price+".";
console.log(result4);

info4=document.getElementById('info4');
info4.innerHTML=result4;


var restaurant = {
    name: "The Italian Kitchen",
    cuisine: "Italian",
    location1: "New York City",
    rating: 4.6,
    capacity: 80,
    priceRange: "$$$",
    openTime: "11:00 AM",
    closeTime: "11:00 PM",
    reservations: true,
    vegetarianOptions: true
  };

var result5= restaurant.name+" offers authentic "+restaurant.cuisine+
" cuisine in "+restaurant.location1+". With a rating of "+restaurant.rating+" stars, it can accommodate up to "+restaurant.capacity+" guests. Price range: "+restaurant.priceRange+". Open from "+restaurant.openTime+" to "+restaurant.closeTime+". Reservations: "+restaurant.reservations+". Vegetarian options: "+restaurant.vegetarianOptions+".";
console.log(result5);

info5=document.getElementById('info5');
info5.innerHTML=result5;

var player = {
    name: "Lionel Messi",
    age: 36,
    team: "Inter Miami",
    position: "Forward",
    nationality: "Argentina",
    goals: 812,
    assists: 350,
    appearances: 1020,
    height: "1.70m",
    awards: 7
  }

var result6= player.name+", aged "+player.age+", plays for "+player.team+" as a "+player.position+". He has scored "+player.goals+" goals and made "+player.assists+" assists in "+player.appearances+" appearances. Height: "+player.height+". Awards won: "+player.awards+" Ballon d'Or titles.";
console.log(result6);
info6=document.getElementById('info6');
info6.innerHTML=result6;

var event = {
    name: "Tech Innovators Conference",
    date: "September 14, 2024",
    location1: "Silicon Valley",
    speakers: 15,
    attendees: 2000,
    durationDays: 3,
    host: "Google",
    sponsor: "Microsoft",
    ticketPrice: 500,
    registrationOpen: true
  };

var result7= event.name+" will be held on "+event.date+" at "+event.location1+". Hosted by "+event.host+" and sponsored by "+event.sponsor+", it features "+event.speakers+" speakers and "+event.attendees+" attendees. The conference lasts "+event.durationDays+" days. Ticket price: $"+event.ticketPrice+". Registration: "+event.registrationOpen+".";
console.log(result7);
info7=document.getElementById('info7');
info7.innerHTML=result7;

var car = {
    brand: "Tesla",
    model: "Model S",
    year: 2023,
    range: "405 miles",
    acceleration: "0-60 mph in 1.99s",
    topSpeed: "200 mph",
    seats: 5,
    battery: "100 kWh",
    price: 95000,
    autopilot: true
  };

var result8= car.brand+" "+car.model+" ("+car.year+") has a range of "+car.range+" with a top speed of "+car.topSpeed+". It accelerates from "+car.acceleration+", seats "+car.seats+" people, and costs $"+car.price+". Autopilot: "+car.autopilot+".";
console.log(result8);
info8=document.getElementById('info8');
info8.innerHTML=result8;

var hotel = {
    name: "Grand Hyatt",
    location1: "Los Angeles",
    stars: 5,
    roomType: "Suite",
    capacity: 4,
    pricePerNight: 450,
    amenities: "Pool, Spa, Gym",
    checkIn: "3:00 PM",
    checkOut: "12:00 PM",
    petsAllowed: true
  };

var result9= "Welcome to "+hotel.name+" in "+hotel.location1+". This "+hotel.stars+"-star hotel offers "+hotel.roomType+" rooms. Capacity: "+hotel.capacity+" guests. Amenities include "+hotel.amenities+". Price per night: $"+hotel.pricePerNight+". Check-in at "+hotel.checkIn+", Check-out at "+hotel.checkOut+". Pets allowed: "+hotel.petsAllowed+".";
console.log(result9);
info9=document.getElementById('info9');
info9.innerHTML=result9;

const phone = {
    brand: "Apple",
    model: "iPhone 15 Pro",
    storage: "512GB",
    color: "Space Black",
    camera: "48MP",
    battery: "4200mAh",
    display: "6.1-inch OLED",
    processor: "A17 Pro",
    price: 1299,
    weight: "206g"
  };

var result10= phone.brand+" "+phone.model+" comes with "+phone.storage+" of storage and a "+phone.display+" display. It features a "+phone.camera+" camera and is powered by the "+phone.processor+". The battery capacity is "+phone.battery+", and it weighs "+phone.weight+". Priced at $"+phone.price+".";
console.log(result10);
info10=document.getElementById('info10');
info10.innerHTML=result10;

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    releaseYear: 2010,
    duration: "2h 28m",
    rating: 8.8,
    boxOffice: "$829 million",
    language: "English",
    awards: 4,
    leadActor: "Leonardo DiCaprio"
  }


var result11= movie.title+" directed by "+movie.director+" is a "+movie.genre+" film released in "+movie.releaseYear+". Starring "+movie.leadActor+", it has a runtime of "+movie.duration+" and holds a rating of "+movie.rating+". It grossed "+movie.boxOffice+" and won "+movie.awards+" Academy Awards. Language: "+movie.language+".";
console.log(result11);
info11=document.getElementById('info11');
info11.innerHTML=result11;

const employee = {
    name: "Amit Sharma",
    age: 29,
    position: "Software Engineer",
    company: "Google",
    experience: "5 years",
    salary: 150000,
    location1: "Bangalore",
    skills: "Angular, Node.js, Python",
    projects: 12,
    performanceRating: "Excellent"
  };
var result12= employee.name+", "+employee.age+", works as a "+employee.position+" at "+employee.company+". He has "+employee.experience+" of experience, worked on "+employee.projects+" projects, and earns $"+employee.salary+" annually. Key skills: "+employee.skills+". Performance rating: "+employee.performanceRating+".";
console.log(result12);
info12=document.getElementById('info12');
info12.innerHTML=result12;

const property = {
    title: "Luxury Villa",
    location1: {
      city: "Miami",
      state: "Florida",
      zip: "33101"
    },
    specs: {
      bedrooms: 5,
      bathrooms: 4,
      area: "4500 sq ft",
      yearBuilt: 2018
    },
    price: 2500000,
    features: ["Ocean View", "Private Pool", "Smart Home"],
    agent: {
      name: "Michael Brown",
      contact: "305-555-1234"
    }
  };


var result13= property.title+" located in "+property.location1.city+", "
+property.location1.state+" ("+property.location1.zip+") offers "
+property.specs.bedrooms+" bedrooms and "+property.specs.bathrooms+
" bathrooms across "+property.specs.area+". Built in "+property.specs.yearBuilt+
", this property is priced at $"+property.price+". Key features include: "+
property.features.join(", ")+". For inquiries, contact "+property.agent.name+
" at "+property.agent.contact+".";
console.log(result13);
info13=document.getElementById('info13');
info13.innerHTML=result13;

const course1 = {
    title: "Full-Stack Development Bootcamp",
    provider: "Coursera",
    instructor: {
      name: "Ravikiran Niturkar",
      experience: "10 years",
      specialization: "Web Development"
    },
    details: {
      duration: "9 months",
      modules: 15,
      handsOnProjects: 5
    },
    certification: true,
    price: "700$"
  };

var result14= course1.title+" by "+course1.provider+", taught by "+course1.instructor.name+" ("+course1.instructor.specialization+" with "+course1.instructor.experience+" of experience). This "+course1.details.duration+" course includes "+course1.details.modules+" modules and "+course1.details.handsOnProjects+" hands-on projects. Certification: "+(course1.certification ? "Yes" : "No")+". Price: $"+course1.price+".";
console.log(result14);
info14=document .getElementById('info14');
info14.innerHTML=result14;

const event1 = {
    guestName: "Priyanka Joshi",
    eventName: "TechConnect 2025",
    eventDate: "15th May 2025",
    time: "10:00 AM to 4:00 PM",
    venue: "Nehru Auditorium, Mumbai",
    host: "XYZ Tech Foundation",
    contact: "+91-9876543210",
    email: "events@xyztech.org"
};



var result15= "Dear "+event1.guestName+",</br></br>"+
"You are cordially invited to attend <strong>"+event1.eventName+"</strong> hosted by "+event1.host+".</br>"+
"Date: "+event1.eventDate+"</br>"+  
"Time: "+event1.time+"</br>"+
"Venue: "+event1.venue+"</br></br>"+
"For more information, contact us at "+event1.contact+" or "+event1.email+".</br></br>"+
"We look forward to your presence!";
console.log(result15);
info15=document.getElementById('info15');
info15.innerHTML=result15;

const course = {
    studentName: "Ramesh Patel",
    courseTitle: "Full Stack Web Development",
    platform: "CodeCamp Online",
    enrollmentDate: "12th April 2025",
    duration: "6 months",
    fee: "₹30,000",
    mentor: "Neha Rathi",
    supportEmail: "support@codecamp.in"
};



var result16= "Hi "+course.studentName+",</br></br>"+
"Welcome to <strong>"+course.courseTitle+"</strong> at "+course.platform+"!</br>"+
"You enrolled on "+course.enrollmentDate+", and the course will run for "+course.duration+".</br></br>"+
"Your assigned mentor is "+course.mentor+".</br>"+
"Total Fee Paid: "+course.fee+"</br></br>"+ 
"For support, feel free to contact us at "+course.supportEmail+".</br></br>"+
"Happy Learning!";  
console.log(result16);
info16=document.getElementById('info16');
info16.innerHTML=result16;

const shipment = {
    customerName: "Nikita Arora",
    orderId: "OD1234567890",
    productName: "Samsung Galaxy M14",
    shippedDate: "10 April 2025",
    expectedDelivery: "14 April 2025",
    courier: "BlueDart",
    trackingLink: "https://bluedart.com/track/OD1234567890"
};

var result17= "Hello "+shipment.customerName+",</br></br>"+
"Your order <strong>"+shipment.productName+"</strong> (Order ID: "+shipment.orderId+") has been shipped on "+shipment.shippedDate+" via "+shipment.courier+".</br></br>"+
"Track your order here: <a href='"+shipment.trackingLink+"' target='_blank'>"+shipment.trackingLink+"</a></br>"+
"Expected Delivery: "+shipment.expectedDelivery+"</br></br>"+
"Thank you for shopping with us!";
console.log(result17);
info17=document.getElementById('info17');
info17.innerHTML=result17;

const appointment = {
    name: "Dr. Komal Sharma",
    patient: "Anil Mishra",
    date: "16th April 2025",
    time: "3:00 PM",
    clinic: "Healthy Life Clinic",
    address: "Plot 22, Andheri East, Mumbai",
    contact: "+91-9870001112"
  };

  

var result18= "Hello "+appointment.patient+",</br></br>"+
"This is a gentle reminder of your appointment with <strong>"+appointment.name+"</strong> at "+appointment.clinic+".</br></br>"+
"Date: "+appointment.date+"</br>"+  
"Time: "+appointment.time+"</br>"+
"Address: "+appointment.address+"</br>"+
"Contact: "+appointment.contact+"</br></br>"+
"Please reach 10 minutes early. Wishing you good health!";
console.log(result18);
info18=document.getElementById('info18');
info18.innerHTML=result18;

const freelancer1 = {
    name: "Akash Singh",
    client: "Devika Creations",
    projectTitle: "E-commerce Website Revamp",
    technologies: ["Angular", "Node.js", "MongoDB"],
    startDate: "1st March 2025",
    endDate: "5th April 2025",
    totalPayment: "₹45,000",
    mode: "Bank Transfer"
  };

 


var result19= "Freelance Project Summary</br></br>"+
"Freelancer: "+freelancer1.name+"</br>"+
"Client: "+freelancer1.client+"</br>"+  
"Project: "+freelancer1.projectTitle+"</br>"+
"Technologies Used: "+freelancer1.technologies.join(", ")+"</br>"+
"Timeline: "+freelancer1.startDate+" – "+freelancer1.endDate+"</br>"+
"Total Payment: "+freelancer1.totalPayment+" (via "+freelancer1.mode+")</br></br>"+
"Thank you for your contribution!";
console.log(result19);
info19=document.getElementById('info19');
info19.innerHTML=result19;

const employee1 = {
    name: "Ritika Jha",
    position: "Backend Engineer",
    department: "Engineering",
    joiningDate: "April 22, 2025",
    empID: "EMP2459",
    location: "Bangalore",
    email: "ritika.jha@techsys.com"
};

const laptop1 = {
    model: "Dell XPS 13",
    serial: "XPS-84592",
    issuedDate: "April 20, 2025",
};

const benefits = {
    leaves: 20,
    insurance: "₹5 Lakh Health Insurance",
    pf: "12% of basic salary",
    bonus: "Performance-based"
};


var result20= "Welcome "+employee1.name+" ("+employee1.empID+")</br></br>"+
"You are joining TechSys as a "+employee1.position+" in the "+employee1.department+" department starting "+employee1.joiningDate+" at our "+employee1.location+" office.</br></br>"+
"Laptop Issued: "+laptop1.model+" (Serial: "+laptop1.serial+")</br>"+ 
"Issued on: "+laptop1.issuedDate+"</br></br>"+
"Employee Benefits:</br>"+
"- "+benefits.leaves+" Annual Leaves</br>"+
"- "+benefits.insurance+"</br>"+
"- "+benefits.pf+"</br>"+
"- "+benefits.bonus+"</br></br>"+
"Your official email: "+employee1.email+"</br>"+
"We’re excited to have you onboard!";
console.log(result20);
info20=document.getElementById('info20');
info20.innerHTML=result20;
