(() => {
  const C = window.FBR_CONTENT;
  const catalog = window.FBR_CATALOG;

  C.rankTiers = [
    { id: "F", min: 0, color: "#778294", name: "Novice" },
    { id: "E", min: 150, color: "#8e9bac", name: "Club Prospect" },
    { id: "D", min: 350, color: "#78e6b0", name: "Club Racer" },
    { id: "C", min: 650, color: "#5fc8ff", name: "National Racer" },
    { id: "B", min: 1000, color: "#a991ff", name: "Front Runner" },
    { id: "A", min: 1500, color: "#ffad52", name: "Elite Driver" },
    { id: "S", min: 2200, color: "#ff7888", name: "World Class" },
    { id: "SS", min: 3000, color: "#d8ff3e", name: "Legend" }
  ];

  C.licenseTests = [
    { id: "R", name: "Rookie Permit", previous: null, safety: 100, rating: 100, fee: 0, cleanLaps: 3, maxFinish: 12, description: "Academy graduation assessment" },
    { id: "D", name: "National D", previous: "R", safety: 250, rating: 300, fee: 500, cleanLaps: 5, maxFinish: 10, description: "National club competition" },
    { id: "C", name: "National C", previous: "D", safety: 450, rating: 650, fee: 1500, cleanLaps: 7, maxFinish: 8, description: "Touring cars and prototypes" },
    { id: "B", name: "International B", previous: "C", safety: 650, rating: 1100, fee: 3500, cleanLaps: 9, maxFinish: 6, description: "International GT and endurance" },
    { id: "A", name: "International A", previous: "B", safety: 800, rating: 1800, fee: 7000, cleanLaps: 12, maxFinish: 5, description: "Professional international racing" },
    { id: "P", name: "Pro Super Licence", previous: "A", safety: 900, rating: 2800, fee: 15000, cleanLaps: 15, maxFinish: 3, description: "World championship eligibility" }
  ];

  const academyBase = {
    license: "ACADEMY", discipline: "grassroots", entryFee: 0, roundPrize: 0,
    championPrize: 0, difficulty: 55, teamRequired: false, multiclass: false,
    academy: true, vehiclePolicy: "provided", rentalFee: 0,
    ratingRequired: 0, safetyRequired: 0, registrationLead: 1
  };
  const academyRounds = (layouts, minutes = [12, 15, 18]) => layouts.map((layout, index) => ({
    round: index + 1, total: layouts.length, dateOffset: 1 + index * 3, layout,
    practice: index === 2 ? 25 : 20, qualify: index === 2 ? 12 : 10,
    raceMinutes: minutes[index], mandatoryStops: 0,
    weather: index === 1 ? ["Light Cloud"] : index === 2 ? ["Clear", "Overcast"] : ["Clear"],
    difficulty: 50 + index * 4, randomFailures: 0
  }));
  const academies = [
    { ...academyBase, id: "flybyrace-kart-academy", name: "Karting Fundamentals",
      className: "Karting 4T Rental", description: "Learn racing lines, starts and clean overtakes in organizer-provided rental karts.",
      rounds: academyRounds(["Buskerud Kart", "Interlagos Kart One", "Ortona Kart One"]) },
    { ...academyBase, id: "flybyrace-formula-academy", name: "Formula Rookie School",
      discipline: "formula", className: "Formula Trainer", description: "Begin in a real single-seater and learn braking, weight transfer and open-wheel racecraft.",
      rounds: academyRounds(["Velopark 2017", "Londrina Short", "Cascavel"], [15, 18, 20]) },
    { ...academyBase, id: "flybyrace-touring-academy", name: "Touring Car Academy",
      discipline: "touring", className: "Copa Uno", description: "Build close-quarters racecraft in a forgiving front-wheel-drive touring car.",
      rounds: academyRounds(["Velopark 2010", "Londrina Long", "Cascavel"], [15, 18, 22]) },
    { ...academyBase, id: "flybyrace-roadcar-academy", name: "Road Car Racing School",
      className: "Caterham Academy", description: "Learn throttle balance and mechanical sympathy in a lightweight rear-wheel-drive sports car.",
      rounds: academyRounds(["Velopark 2017", "Londrina Short", "Cascavel"], [15, 18, 22]) }
  ];
  C.championships = C.championships.filter(series => series.id !== "flybyrace-driver-academy" && !academies.some(a => a.id === series.id));
  C.championships.unshift(...academies);

  const requirements = {
    R: { rating: 100, safety: 100 },
    D: { rating: 300, safety: 250 },
    C: { rating: 650, safety: 450 },
    B: { rating: 1100, safety: 650 },
    A: { rating: 1800, safety: 800 },
    P: { rating: 2800, safety: 900 }
  };
  const licenceIndex = { R: 0, D: 1, C: 2, B: 3, A: 4, P: 5 };
  C.championships.forEach((series, index) => {
    if (series.academy) return;
    const gate = requirements[series.license] || requirements.R;
    series.ratingRequired = gate.rating;
    series.safetyRequired = gate.safety;
    const level = licenceIndex[series.license] || 0;
    if (level === 0) series.vehiclePolicy = index % 2 ? "rental" : "provided";
    else if (level === 1) series.vehiclePolicy = index % 3 === 0 ? "owned" : "rental";
    else if (level === 2) series.vehiclePolicy = index % 2 === 0 ? "rental" : "owned";
    else series.vehiclePolicy = series.teamRequired ? "team" : "owned";
    series.rentalFee = series.vehiclePolicy === "rental" ? Math.max(150, Math.round(series.entryFee * 0.28)) : 0;
    series.registrationLead = 3 + (index % 4);
  });

  const starterCup = C.championships.find(series => series.id === "club-kart-rookie");
  if (starterCup) {
    starterCup.vehiclePolicy = "provided";
    starterCup.rentalFee = 0;
    starterCup.entryFee = 0;
  }
  const marketClasses = [
    ["Karting 4T Rental", "R"], ["Formula Trainer", "R"], ["Copa Uno", "R"],
    ["Caterham Academy", "R"], ["Sprint Race", "D"], ["Ginetta G40 Cup", "D"],
    ["Copa Classic B", "D"], ["Formula Junior", "D"], ["GT5", "C"],
    ["GT4", "C"], ["GT3", "B"]
  ];
  const basePrice = { R: 8500, D: 22000, C: 58000, B: 125000, A: 240000, P: 480000 };
  C.carMarket = marketClasses.map(([className, license], index) => {
    const car = catalog.cars.find(item => item.className === className && item.dlc === "Base Game")
      || catalog.cars.find(item => item.className === className);
    return car ? {
      id: car.id,
      name: car.name,
      className,
      license,
      dlc: car.dlc,
      price: Math.round(basePrice[license] * (1 + (index % 3) * 0.12))
    } : null;
  }).filter(Boolean);

  C.championships.forEach((series, index) => {
    if (series.vehiclePolicy !== "owned") return;
    const exactModel = C.carMarket.find(car => car.className === series.className);
    series.vehicleRequirement = exactModel && index % 3 === 0
      ? { type: "model", value: exactModel.id, label: exactModel.name }
      : { type: "class", value: series.className, label: series.className };
  });
})();
