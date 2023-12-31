import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const model = await prisma.model.createMany({
    data: [
      {
        carId: 1,
        name: "Camry",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 25000,
        rentPrice: 150,
        published: true,
      },
      {
        carId: 1,
        name: "Corolla",
        transmission: "Manual",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 15000,
        rentPrice: 100,
        published: true,
      },
      {
        carId: 1,
        name: "RAV4",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 20000,
        rentPrice: 120,
        published: true,
      },
      {
        carId: 1,
        name: "Highlander",
        transmission: "Automatic",
        fuelType: "Hybrid",
        seatNumbers: 7,
        condition: "New",
        price: 35000,
        rentPrice: 200,
        published: true,
      },
      {
        carId: 1,
        name: "Prius",
        transmission: "Automatic",
        fuelType: "Hybrid",
        seatNumbers: 5,
        condition: "Used",
        price: 18000,
        rentPrice: 110,
        published: true,
      },
      {
        carId: 2,
        name: "Civic",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 22000,
        rentPrice: 130,
        published: true,
      },
      {
        carId: 2,
        name: "Accord",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 18000,
        rentPrice: 110,
        published: true,
      },
      {
        carId: 2,
        name: "CR-V",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 25000,
        rentPrice: 150,
        published: true,
      },
      {
        carId: 2,
        name: "Pilot",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 8,
        condition: "New",
        price: 35000,
        rentPrice: 200,
        published: true,
      },
      {
        carId: 2,
        name: "Odyssey",
        transmission: "Automatic",
        fuelType: "Diesel",
        seatNumbers: 7,
        condition: "Used",
        price: 30000,
        rentPrice: 180,
        published: true,
      },
      {
        carId: 3,
        name: "F-150",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 6,
        condition: "New",
        price: 40000,
        rentPrice: 220,
        published: true,
      },
      {
        carId: 3,
        name: "Mustang",
        transmission: "Manual",
        fuelType: "Petrol",
        seatNumbers: 4,
        condition: "Used",
        price: 30000,
        rentPrice: 170,
        published: true,
      },
      {
        carId: 3,
        name: "Explorer",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "Used",
        price: 35000,
        rentPrice: 190,
        published: true,
      },
      {
        carId: 3,
        name: "Escape",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 25000,
        rentPrice: 150,
        published: true,
      },
      {
        carId: 3,
        name: "Focus",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 20000,
        rentPrice: 120,
        published: true,
      },
      {
        carId: 4,
        name: "Silverado",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 40000,
        rentPrice: 220,
        published: true,
      },
      {
        carId: 4,
        name: "Camaro",
        transmission: "Manual",
        fuelType: "Petrol",
        seatNumbers: 4,
        condition: "Used",
        price: 35000,
        rentPrice: 190,
        published: true,
      },
      {
        carId: 4,
        name: "Equinox",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 30000,
        rentPrice: 180,
        published: true,
      },
      {
        carId: 4,
        name: "Traverse",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "New",
        price: 45000,
        rentPrice: 250,
        published: true,
      },
      {
        carId: 4,
        name: "Malibu",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 25000,
        rentPrice: 150,
        published: true,
      },
      {
        carId: 5,
        name: "Golf",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 22000,
        rentPrice: 130,
        published: true,
      },
      {
        carId: 5,
        name: "Passat",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 20000,
        rentPrice: 120,
        published: true,
      },
      {
        carId: 5,
        name: "Tiguan",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 25000,
        rentPrice: 150,
        published: true,
      },
      {
        carId: 5,
        name: "Jetta",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 23000,
        rentPrice: 140,
        published: true,
      },
      {
        carId: 5,
        name: "Atlas",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "Used",
        price: 35000,
        rentPrice: 200,
        published: true,
      },
      {
        carId: 6,
        name: "3 Series",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 40000,
        rentPrice: 220,
        published: true,
      },
      {
        carId: 6,
        name: "5 Series",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 50000,
        rentPrice: 280,
        published: true,
      },
      {
        carId: 6,
        name: "X3",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 45000,
        rentPrice: 250,
        published: true,
      },
      {
        carId: 6,
        name: "X5",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "New",
        price: 60000,
        rentPrice: 350,
        published: true,
      },
      {
        carId: 6,
        name: "i8",
        transmission: "Automatic",
        fuelType: "Electric",
        seatNumbers: 2,
        condition: "Used",
        price: 100000,
        rentPrice: 500,
        published: true,
      },
      {
        carId: 7,
        name: "C-Class",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 45000,
        rentPrice: 250,
        published: true,
      },
      {
        carId: 7,
        name: "E-Class",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 55000,
        rentPrice: 320,
        published: true,
      },
      {
        carId: 7,
        name: "GLC",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 50000,
        rentPrice: 280,
        published: true,
      },
      {
        carId: 7,
        name: "GLE",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "New",
        price: 65000,
        rentPrice: 380,
        published: true,
      },
      {
        carId: 7,
        name: "S-Class",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 80000,
        rentPrice: 450,
        published: true,
      },
      {
        carId: 8,
        name: "A4",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 40000,
        rentPrice: 220,
        published: true,
      },
      {
        carId: 8,
        name: "A6",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 50000,
        rentPrice: 280,
        published: true,
      },
      {
        carId: 8,
        name: "Q5",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 45000,
        rentPrice: 250,
        published: true,
      },
      {
        carId: 8,
        name: "Q7",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "New",
        price: 60000,
        rentPrice: 350,
        published: true,
      },
      {
        carId: 8,
        name: "TT",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "Used",
        price: 50000,
        rentPrice: 280,
        published: true,
      },
      {
        carId: 9,
        name: "ES",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 45000,
        rentPrice: 250,
        published: true,
      },
      {
        carId: 9,
        name: "RX",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 55000,
        rentPrice: 320,
        published: true,
      },
      {
        carId: 9,
        name: "NX",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 50000,
        rentPrice: 280,
        published: true,
      },
      {
        carId: 9,
        name: "LS",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 65000,
        rentPrice: 380,
        published: true,
      },
      {
        carId: 9,
        name: "GX",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "Used",
        price: 80000,
        rentPrice: 450,
        published: true,
      },
      {
        carId: 10,
        name: "Altima",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 22000,
        rentPrice: 130,
        published: true,
      },
      {
        carId: 10,
        name: "Maxima",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 25000,
        rentPrice: 150,
        published: true,
      },
      {
        carId: 10,
        name: "Rogue",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 30000,
        rentPrice: 180,
        published: true,
      },
      {
        carId: 10,
        name: "Pathfinder",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "New",
        price: 35000,
        rentPrice: 200,
        published: true,
      },
      {
        carId: 10,
        name: "Frontier",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 28000,
        rentPrice: 160,
        published: true,
      },
      {
        carId: 11,
        name: "Mazda3",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 23000,
        rentPrice: 140,
        published: true,
      },
      {
        carId: 11,
        name: "Mazda6",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 26000,
        rentPrice: 160,
        published: true,
      },
      {
        carId: 11,
        name: "CX-5",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 30000,
        rentPrice: 180,
        published: true,
      },
      {
        carId: 11,
        name: "CX-9",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "New",
        price: 40000,
        rentPrice: 240,
        published: true,
      },
      {
        carId: 11,
        name: "MX-5",
        transmission: "Manual",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "Used",
        price: 35000,
        rentPrice: 200,
        published: true,
      },
      {
        carId: 12,
        name: "Elantra",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 22000,
        rentPrice: 130,
        published: true,
      },
      {
        carId: 12,
        name: "Sonata",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 25000,
        rentPrice: 150,
        published: true,
      },
      {
        carId: 12,
        name: "Tucson",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 28000,
        rentPrice: 160,
        published: true,
      },
      {
        carId: 12,
        name: "Santa Fe",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "New",
        price: 38000,
        rentPrice: 220,
        published: true,
      },
      {
        carId: 12,
        name: "Kona",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 26000,
        rentPrice: 160,
        published: true,
      },
      {
        carId: 13,
        name: "Optima",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 23000,
        rentPrice: 140,
        published: true,
      },
      {
        carId: 13,
        name: "Sorento",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "Used",
        price: 35000,
        rentPrice: 200,
        published: true,
      },
      {
        carId: 13,
        name: "Sportage",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 28000,
        rentPrice: 160,
        published: true,
      },
      {
        carId: 13,
        name: "Telluride",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 8,
        condition: "New",
        price: 40000,
        rentPrice: 240,
        published: true,
      },
      {
        carId: 13,
        name: "Forte",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 22000,
        rentPrice: 130,
        published: true,
      },
      {
        carId: 14,
        name: "Impreza",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 24000,
        rentPrice: 150,
        published: true,
      },
      {
        carId: 14,
        name: "Outback",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 30000,
        rentPrice: 180,
        published: true,
      },
      {
        carId: 14,
        name: "Forester",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 28000,
        rentPrice: 160,
        published: true,
      },
      {
        carId: 14,
        name: "Legacy",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 32000,
        rentPrice: 200,
        published: true,
      },
      {
        carId: 14,
        name: "Crosstrek",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 26000,
        rentPrice: 160,
        published: true,
      },
      {
        carId: 15,
        name: "Wrangler",
        transmission: "Manual",
        fuelType: "Petrol",
        seatNumbers: 4,
        condition: "New",
        price: 35000,
        rentPrice: 220,
        published: true,
      },
      {
        carId: 15,
        name: "Cherokee",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 30000,
        rentPrice: 180,
        published: true,
      },
      {
        carId: 15,
        name: "Grand Cherokee",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 38000,
        rentPrice: 240,
        published: true,
      },
      {
        carId: 15,
        name: "Renegade",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 25000,
        rentPrice: 150,
        published: true,
      },
      {
        carId: 15,
        name: "Compass",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 27000,
        rentPrice: 170,
        published: true,
      },
      {
        carId: 16,
        name: "S60",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 38000,
        rentPrice: 240,
        published: true,
      },
      {
        carId: 16,
        name: "S90",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 45000,
        rentPrice: 280,
        published: true,
      },
      {
        carId: 16,
        name: "XC40",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 40000,
        rentPrice: 250,
        published: true,
      },
      {
        carId: 16,
        name: "XC60",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 48000,
        rentPrice: 300,
        published: true,
      },
      {
        carId: 16,
        name: "XC90",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 7,
        condition: "Used",
        price: 52000,
        rentPrice: 320,
        published: true,
      },
      {
        carId: 17,
        name: "911",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 4,
        condition: "New",
        price: 100000,
        rentPrice: 500,
        published: true,
      },
      {
        carId: 17,
        name: "Cayenne",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 90000,
        rentPrice: 450,
        published: true,
      },
      {
        carId: 17,
        name: "Macan",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "Used",
        price: 80000,
        rentPrice: 400,
        published: true,
      },
      {
        carId: 17,
        name: "Panamera",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 4,
        condition: "New",
        price: 110000,
        rentPrice: 550,
        published: true,
      },
      {
        carId: 17,
        name: "Boxster",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "Used",
        price: 95000,
        rentPrice: 475,
        published: true,
      },
      {
        carId: 18,
        name: "Model 3",
        transmission: "Automatic",
        fuelType: "Electric",
        seatNumbers: 5,
        condition: "New",
        price: 50000,
        rentPrice: 300,
        published: true,
      },
      {
        carId: 18,
        name: "Model S",
        transmission: "Automatic",
        fuelType: "Electric",
        seatNumbers: 5,
        condition: "Used",
        price: 80000,
        rentPrice: 500,
        published: true,
      },
      {
        carId: 18,
        name: "Model X",
        transmission: "Automatic",
        fuelType: "Electric",
        seatNumbers: 7,
        condition: "Used",
        price: 90000,
        rentPrice: 550,
        published: true,
      },
      {
        carId: 18,
        name: "Model Y",
        transmission: "Automatic",
        fuelType: "Electric",
        seatNumbers: 5,
        condition: "New",
        price: 60000,
        rentPrice: 350,
        published: true,
      },
      {
        carId: 18,
        name: "Cybertruck",
        transmission: "Automatic",
        fuelType: "Electric",
        seatNumbers: 6,
        condition: "New",
        price: 70000,
        rentPrice: 400,
        published: true,
      },
      {
        carId: 19,
        name: "458 Italia",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "Used",
        price: 250000,
        rentPrice: 1500,
        published: true,
      },
      {
        carId: 19,
        name: "F8 Tributo",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "New",
        price: 300000,
        rentPrice: 1800,
        published: true,
      },
      {
        carId: 19,
        name: "812 Superfast",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "New",
        price: 350000,
        rentPrice: 2000,
        published: true,
      },
      {
        carId: 19,
        name: "Portofino",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "Used",
        price: 280000,
        rentPrice: 1600,
        published: true,
      },
      {
        carId: 19,
        name: "SF90 Stradale",
        transmission: "Automatic",
        fuelType: "Hybrid",
        seatNumbers: 2,
        condition: "New",
        price: 500000,
        rentPrice: 3000,
        published: true,
      },
      {
        carId: 20,
        name: "Huracan",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "New",
        price: 300000,
        rentPrice: 1800,
        published: true,
      },
      {
        carId: 20,
        name: "Aventador",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "Used",
        price: 400000,
        rentPrice: 2400,
        published: true,
      },
      {
        carId: 20,
        name: "Urus",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 5,
        condition: "New",
        price: 350000,
        rentPrice: 2000,
        published: true,
      },
      {
        carId: 20,
        name: "Sian",
        transmission: "Automatic",
        fuelType: "Hybrid",
        seatNumbers: 2,
        condition: "New",
        price: 3000000,
        rentPrice: 15000,
        published: true,
      },
      {
        carId: 20,
        name: "Veneno",
        transmission: "Automatic",
        fuelType: "Petrol",
        seatNumbers: 2,
        condition: "Used",
        price: 5000000,
        rentPrice: 25000,
        published: true,
      },
    ],
  });
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
