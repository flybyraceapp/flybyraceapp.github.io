window.FBR_CONTENT = {
  "licenses": [
    {
      "id": "R",
      "name": "Rookie Permit",
      "minPoints": 0,
      "color": "#d8ff3e",
      "description": "Club and academy racing"
    },
    {
      "id": "D",
      "name": "National D",
      "minPoints": 100,
      "color": "#78e6b0",
      "description": "National-level competition"
    },
    {
      "id": "C",
      "name": "National C",
      "minPoints": 280,
      "color": "#5fc8ff",
      "description": "Touring cars and junior prototypes"
    },
    {
      "id": "B",
      "name": "International B",
      "minPoints": 560,
      "color": "#a991ff",
      "description": "International GT and endurance"
    },
    {
      "id": "A",
      "name": "International A",
      "minPoints": 950,
      "color": "#ffad52",
      "description": "Top-flight professional series"
    },
    {
      "id": "P",
      "name": "Pro Super Licence",
      "minPoints": 1500,
      "color": "#ff6376",
      "description": "World championship eligibility"
    }
  ],
  "disciplines": {
    "grassroots": {
      "name": "Grassroots",
      "color": "#d8ff3e"
    },
    "formula": {
      "name": "Formula",
      "color": "#55c7ff"
    },
    "touring": {
      "name": "Touring",
      "color": "#ffad52"
    },
    "gt": {
      "name": "GT",
      "color": "#c58cff"
    },
    "prototype": {
      "name": "Prototype",
      "color": "#ff6376"
    },
    "endurance": {
      "name": "Endurance",
      "color": "#67e4bd"
    },
    "offroad": {
      "name": "Off-road",
      "color": "#e2bb57"
    },
    "historic": {
      "name": "Historic",
      "color": "#e88c72"
    }
  },
  "championships": [
    {
      "id": "club-kart-rookie",
      "name": "Rental Kart Club Trophy",
      "license": "R",
      "discipline": "grassroots",
      "className": "Karting 4T Rental",
      "entryFee": 0,
      "roundPrize": 650,
      "championPrize": 8500,
      "difficulty": 72,
      "teamRequired": false,
      "multiclass": false,
      "prestige": 18,
      "description": "Grassroots championship · 5 rounds · Karting 4T Rental",
      "rounds": [
        {
          "id": "club-kart-rookie-r1",
          "round": 1,
          "total": 5,
          "layout": "Buskerud Kart",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 72,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "club-kart-rookie-r2",
          "round": 2,
          "total": 5,
          "layout": "Interlagos Kart One",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 72,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "club-kart-rookie-r3",
          "round": 3,
          "total": 5,
          "layout": "Ortona Kart One",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 73,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "club-kart-rookie-r4",
          "round": 4,
          "total": 5,
          "layout": "Speedland Kart 1",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 73,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "club-kart-rookie-r5",
          "round": 5,
          "total": 5,
          "layout": "Granja Viana Kart 101",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 74,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "formula-trainer-academy",
      "name": "Brazilian Formula Trainer Academy",
      "license": "R",
      "discipline": "formula",
      "className": "Formula Trainer",
      "entryFee": 1200,
      "roundPrize": 900,
      "championPrize": 14500,
      "difficulty": 76,
      "teamRequired": false,
      "multiclass": false,
      "prestige": 18,
      "description": "Formula championship · 6 rounds · Formula Trainer",
      "rounds": [
        {
          "id": "formula-trainer-academy-r1",
          "round": 1,
          "total": 6,
          "layout": "Londrina Short",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 76,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-trainer-academy-r2",
          "round": 2,
          "total": 6,
          "layout": "Cascavel",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 76,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-trainer-academy-r3",
          "round": 3,
          "total": 6,
          "layout": "Curitiba Outer",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 77,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-trainer-academy-r4",
          "round": 4,
          "total": 6,
          "layout": "Goiânia Short",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 77,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-trainer-academy-r5",
          "round": 5,
          "total": 6,
          "layout": "Londrina Long",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 78,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-trainer-academy-r6",
          "round": 6,
          "total": 6,
          "layout": "Interlagos GP",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 78,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "copa-uno-regional",
      "name": "Copa Uno Regional",
      "license": "R",
      "discipline": "touring",
      "className": "Copa Uno",
      "entryFee": 900,
      "roundPrize": 750,
      "championPrize": 12000,
      "difficulty": 74,
      "teamRequired": false,
      "multiclass": false,
      "prestige": 18,
      "description": "Touring championship · 5 rounds · Copa Uno",
      "rounds": [
        {
          "id": "copa-uno-regional-r1",
          "round": 1,
          "total": 5,
          "layout": "Londrina Short",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 74,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "copa-uno-regional-r2",
          "round": 2,
          "total": 5,
          "layout": "Curvelo Short",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 74,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "copa-uno-regional-r3",
          "round": 3,
          "total": 5,
          "layout": "Cascavel",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 75,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "copa-uno-regional-r4",
          "round": 4,
          "total": 5,
          "layout": "Campo Grande",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 75,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "copa-uno-regional-r5",
          "round": 5,
          "total": 5,
          "layout": "Santa Cruz do Sul",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 76,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "caterham-academy",
      "name": "Caterham Scholarship Series",
      "license": "R",
      "discipline": "grassroots",
      "className": "Caterham Academy",
      "entryFee": 1600,
      "roundPrize": 1000,
      "championPrize": 18000,
      "difficulty": 78,
      "teamRequired": false,
      "multiclass": false,
      "prestige": 18,
      "description": "Grassroots championship · 6 rounds · Caterham Academy",
      "rounds": [
        {
          "id": "caterham-academy-r1",
          "round": 1,
          "total": 6,
          "layout": "Brands Hatch Indy",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 78,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "caterham-academy-r2",
          "round": 2,
          "total": 6,
          "layout": "Oulton Park Fosters",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 78,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "caterham-academy-r3",
          "round": 3,
          "total": 6,
          "layout": "Cadwell Park",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 79,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "caterham-academy-r4",
          "round": 4,
          "total": 6,
          "layout": "Snetterton 200",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 79,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "caterham-academy-r5",
          "round": 5,
          "total": 6,
          "layout": "Donington National",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 80,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "caterham-academy-r6",
          "round": 6,
          "total": 6,
          "layout": "Brands Hatch GP",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 80,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "sprint-south-america",
      "name": "South American Sprint Academy",
      "license": "D",
      "discipline": "touring",
      "className": "Sprint Race",
      "entryFee": 2400,
      "roundPrize": 1500,
      "championPrize": 28000,
      "difficulty": 82,
      "teamRequired": false,
      "multiclass": false,
      "prestige": 36,
      "description": "Touring championship · 6 rounds · Sprint Race",
      "rounds": [
        {
          "id": "sprint-south-america-r1",
          "round": 1,
          "total": 6,
          "layout": "Londrina Long",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 82,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": "rookie-sprint-londrina"
        },
        {
          "id": "sprint-south-america-r2",
          "round": 2,
          "total": 6,
          "layout": "Cascavel",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 82,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "sprint-south-america-r3",
          "round": 3,
          "total": 6,
          "layout": "Curvelo Long",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 83,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "sprint-south-america-r4",
          "round": 4,
          "total": 6,
          "layout": "Goiânia",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 83,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "sprint-south-america-r5",
          "round": 5,
          "total": 6,
          "layout": "Galeao Airport",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 84,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "sprint-south-america-r6",
          "round": 6,
          "total": 6,
          "layout": "Interlagos Stock Car Brasil",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 84,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "ginetta-g40-cup",
      "name": "Ginetta G40 Club Cup",
      "license": "D",
      "discipline": "gt",
      "className": "Ginetta G40 Cup",
      "entryFee": 2800,
      "roundPrize": 1700,
      "championPrize": 32000,
      "difficulty": 83,
      "teamRequired": false,
      "multiclass": false,
      "prestige": 36,
      "description": "GT championship · 6 rounds · Ginetta G40 Cup",
      "rounds": [
        {
          "id": "ginetta-g40-cup-r1",
          "round": 1,
          "total": 6,
          "layout": "Oulton Park Island",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 83,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "ginetta-g40-cup-r2",
          "round": 2,
          "total": 6,
          "layout": "Cadwell Park",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 83,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "ginetta-g40-cup-r3",
          "round": 3,
          "total": 6,
          "layout": "Snetterton 300",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 84,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "ginetta-g40-cup-r4",
          "round": 4,
          "total": 6,
          "layout": "Donington National",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 84,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "ginetta-g40-cup-r5",
          "round": 5,
          "total": 6,
          "layout": "Brands Hatch GP",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 85,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "ginetta-g40-cup-r6",
          "round": 6,
          "total": 6,
          "layout": "Bathurst 2020",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 85,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "copa-classic-revival",
      "name": "Copa Classic Revival",
      "license": "D",
      "discipline": "historic",
      "className": "Copa Classic B",
      "entryFee": 1800,
      "roundPrize": 1300,
      "championPrize": 24000,
      "difficulty": 79,
      "teamRequired": false,
      "multiclass": false,
      "prestige": 36,
      "description": "Historic championship · 7 rounds · Copa Classic B",
      "rounds": [
        {
          "id": "copa-classic-revival-r1",
          "round": 1,
          "total": 7,
          "layout": "Cascavel",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 79,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "copa-classic-revival-r2",
          "round": 2,
          "total": 7,
          "layout": "Guaporé",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 79,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "copa-classic-revival-r3",
          "round": 3,
          "total": 7,
          "layout": "Londrina Short",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 80,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "copa-classic-revival-r4",
          "round": 4,
          "total": 7,
          "layout": "Curitiba",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 80,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "copa-classic-revival-r5",
          "round": 5,
          "total": 7,
          "layout": "Brasilia Outer",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 81,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "copa-classic-revival-r6",
          "round": 6,
          "total": 7,
          "layout": "Santa Cruz do Sul",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 81,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "copa-classic-revival-r7",
          "round": 7,
          "total": 7,
          "layout": "Interlagos Historic 1976",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 82,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "formula-junior-tour",
      "name": "Formula Junior Continental Tour",
      "license": "D",
      "discipline": "formula",
      "className": "Formula Junior",
      "entryFee": 3200,
      "roundPrize": 1900,
      "championPrize": 36000,
      "difficulty": 84,
      "teamRequired": false,
      "multiclass": false,
      "prestige": 36,
      "description": "Formula championship · 6 rounds · Formula Junior",
      "rounds": [
        {
          "id": "formula-junior-tour-r1",
          "round": 1,
          "total": 6,
          "layout": "Cascais",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 84,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-junior-tour-r2",
          "round": 2,
          "total": 6,
          "layout": "Jerez Moto",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 84,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-junior-tour-r3",
          "round": 3,
          "total": 6,
          "layout": "Kyalami",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 85,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-junior-tour-r4",
          "round": 4,
          "total": 6,
          "layout": "Spielberg",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 85,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-junior-tour-r5",
          "round": 5,
          "total": 6,
          "layout": "Imola Historic 1972",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 86,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-junior-tour-r6",
          "round": 6,
          "total": 6,
          "layout": "Interlagos GP",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 86,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "rx-challenger",
      "name": "Rallycross Challenger Cup",
      "license": "D",
      "discipline": "offroad",
      "className": "Rallycross",
      "entryFee": 2600,
      "roundPrize": 1600,
      "championPrize": 30000,
      "difficulty": 82,
      "teamRequired": false,
      "multiclass": false,
      "prestige": 36,
      "description": "Off-road championship · 6 rounds · Rallycross",
      "rounds": [
        {
          "id": "rx-challenger-r1",
          "round": 1,
          "total": 6,
          "layout": "Ascurra RX",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 82,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "rx-challenger-r2",
          "round": 2,
          "total": 6,
          "layout": "Circuit de Catalunya RX",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 82,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "rx-challenger-r3",
          "round": 3,
          "total": 6,
          "layout": "Hockenheim RX",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 83,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "rx-challenger-r4",
          "round": 4,
          "total": 6,
          "layout": "Spa-Francorchamps RX",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 83,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "rx-challenger-r5",
          "round": 5,
          "total": 6,
          "layout": "Foz RX",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 84,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "rx-challenger-r6",
          "round": 6,
          "total": 6,
          "layout": "Tykki RX",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 84,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "stock-academy",
      "name": "Stock Car Academy Shootout",
      "license": "C",
      "discipline": "touring",
      "className": "Stock Car Brasil 2019",
      "entryFee": 5200,
      "roundPrize": 2600,
      "championPrize": 52000,
      "difficulty": 88,
      "teamRequired": false,
      "multiclass": false,
      "prestige": 54,
      "description": "Touring championship · 8 rounds · Stock Car Brasil 2019",
      "rounds": [
        {
          "id": "stock-academy-r1",
          "round": 1,
          "total": 8,
          "layout": "Interlagos GP",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 88,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": "stock-academy-interlagos"
        },
        {
          "id": "stock-academy-r2",
          "round": 2,
          "total": 8,
          "layout": "Goiânia",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 88,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "stock-academy-r3",
          "round": 3,
          "total": 8,
          "layout": "Cascavel",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 89,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "stock-academy-r4",
          "round": 4,
          "total": 8,
          "layout": "Santa Cruz do Sul",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 89,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "stock-academy-r5",
          "round": 5,
          "total": 8,
          "layout": "Curvelo Long",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 90,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "stock-academy-r6",
          "round": 6,
          "total": 8,
          "layout": "Brasilia Full",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 90,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "stock-academy-r7",
          "round": 7,
          "total": 8,
          "layout": "Galeao Airport",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 91,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "stock-academy-r8",
          "round": 8,
          "total": 8,
          "layout": "Interlagos Stock Car Brasil",
          "dateOffset": 105,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 55,
          "grid": 23,
          "difficulty": 91,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "gt5-continental",
      "name": "Continental GT5 Cup",
      "license": "C",
      "discipline": "gt",
      "className": "GT5",
      "entryFee": 4800,
      "roundPrize": 2400,
      "championPrize": 48000,
      "difficulty": 87,
      "teamRequired": false,
      "multiclass": false,
      "prestige": 54,
      "description": "GT championship · 8 rounds · GT5",
      "rounds": [
        {
          "id": "gt5-continental-r1",
          "round": 1,
          "total": 8,
          "layout": "Kyalami",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 87,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt5-continental-r2",
          "round": 2,
          "total": 8,
          "layout": "Cascais",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 87,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt5-continental-r3",
          "round": 3,
          "total": 8,
          "layout": "Jerez Chicane",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 88,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt5-continental-r4",
          "round": 4,
          "total": 8,
          "layout": "Donington GP",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 88,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt5-continental-r5",
          "round": 5,
          "total": 8,
          "layout": "Oulton Park International",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 89,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt5-continental-r6",
          "round": 6,
          "total": 8,
          "layout": "Imola",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 89,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "gt5-continental-r7",
          "round": 7,
          "total": 8,
          "layout": "Spielberg",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 90,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "gt5-continental-r8",
          "round": 8,
          "total": 8,
          "layout": "Bathurst 2020",
          "dateOffset": 105,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 55,
          "grid": 23,
          "difficulty": 90,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "f3-brazil",
      "name": "Formula 3 Brasil Championship",
      "license": "C",
      "discipline": "formula",
      "className": "Formula 3 Brazil",
      "entryFee": 6000,
      "roundPrize": 3000,
      "championPrize": 62000,
      "difficulty": 90,
      "teamRequired": false,
      "multiclass": false,
      "prestige": 54,
      "description": "Formula championship · 8 rounds · Formula 3 Brazil",
      "rounds": [
        {
          "id": "f3-brazil-r1",
          "round": 1,
          "total": 8,
          "layout": "Londrina Long",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 90,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "f3-brazil-r2",
          "round": 2,
          "total": 8,
          "layout": "Cascavel",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 90,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "f3-brazil-r3",
          "round": 3,
          "total": 8,
          "layout": "Goiânia",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 91,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "f3-brazil-r4",
          "round": 4,
          "total": 8,
          "layout": "Curitiba",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 91,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "f3-brazil-r5",
          "round": 5,
          "total": 8,
          "layout": "Brasilia Full",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 92,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "f3-brazil-r6",
          "round": 6,
          "total": 8,
          "layout": "Santa Cruz do Sul",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 92,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "f3-brazil-r7",
          "round": 7,
          "total": 8,
          "layout": "Interlagos GP",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 93,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "f3-brazil-r8",
          "round": 8,
          "total": 8,
          "layout": "Buenos Aires Circuito No.12",
          "dateOffset": 105,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 55,
          "grid": 23,
          "difficulty": 93,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "super-v8-tour",
      "name": "Southern Super V8 Tour",
      "license": "C",
      "discipline": "touring",
      "className": "Super V8",
      "entryFee": 6200,
      "roundPrize": 3100,
      "championPrize": 65000,
      "difficulty": 90,
      "teamRequired": false,
      "multiclass": false,
      "prestige": 54,
      "description": "Touring championship · 8 rounds · Super V8",
      "rounds": [
        {
          "id": "super-v8-tour-r1",
          "round": 1,
          "total": 8,
          "layout": "Adelaide",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 90,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "super-v8-tour-r2",
          "round": 2,
          "total": 8,
          "layout": "Bathurst 2020",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 90,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "super-v8-tour-r3",
          "round": 3,
          "total": 8,
          "layout": "Cascais",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 91,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "super-v8-tour-r4",
          "round": 4,
          "total": 8,
          "layout": "Kyalami",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 91,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "super-v8-tour-r5",
          "round": 5,
          "total": 8,
          "layout": "Spielberg",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 92,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "super-v8-tour-r6",
          "round": 6,
          "total": 8,
          "layout": "Imola",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 92,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "super-v8-tour-r7",
          "round": 7,
          "total": 8,
          "layout": "Interlagos GP",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 93,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "super-v8-tour-r8",
          "round": 8,
          "total": 8,
          "layout": "Azure Circuit",
          "dateOffset": 105,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 55,
          "grid": 23,
          "difficulty": 93,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "p3-prototype-cup",
      "name": "P3 Prototype Development Cup",
      "license": "C",
      "discipline": "prototype",
      "className": "P3",
      "entryFee": 7000,
      "roundPrize": 3400,
      "championPrize": 72000,
      "difficulty": 91,
      "teamRequired": false,
      "multiclass": false,
      "prestige": 54,
      "description": "Prototype championship · 7 rounds · P3",
      "rounds": [
        {
          "id": "p3-prototype-cup-r1",
          "round": 1,
          "total": 7,
          "layout": "Cascavel",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 91,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "p3-prototype-cup-r2",
          "round": 2,
          "total": 7,
          "layout": "Curitiba",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 91,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "p3-prototype-cup-r3",
          "round": 3,
          "total": 7,
          "layout": "Brasilia Full",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 92,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "p3-prototype-cup-r4",
          "round": 4,
          "total": 7,
          "layout": "Goiânia",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 92,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "p3-prototype-cup-r5",
          "round": 5,
          "total": 7,
          "layout": "Kyalami",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 93,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "p3-prototype-cup-r6",
          "round": 6,
          "total": 7,
          "layout": "Imola",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 93,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "p3-prototype-cup-r7",
          "round": 7,
          "total": 7,
          "layout": "Interlagos GP",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 94,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "gt4-world",
      "name": "GT4 World Challenge",
      "license": "B",
      "discipline": "gt",
      "className": "GT4",
      "entryFee": 9500,
      "roundPrize": 4500,
      "championPrize": 105000,
      "difficulty": 94,
      "teamRequired": true,
      "multiclass": false,
      "prestige": 72,
      "description": "GT championship · 10 rounds · GT4",
      "rounds": [
        {
          "id": "gt4-world-r1",
          "round": 1,
          "total": 10,
          "layout": "Brands Hatch GP",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 94,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt4-world-r2",
          "round": 2,
          "total": 10,
          "layout": "Imola",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 94,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt4-world-r3",
          "round": 3,
          "total": 10,
          "layout": "Spielberg",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 95,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt4-world-r4",
          "round": 4,
          "total": 10,
          "layout": "Kyalami",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 95,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt4-world-r5",
          "round": 5,
          "total": 10,
          "layout": "Bathurst 2020",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 96,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt4-world-r6",
          "round": 6,
          "total": 10,
          "layout": "Cascais",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 96,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "gt4-world-r7",
          "round": 7,
          "total": 10,
          "layout": "Jerez Moto",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 97,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "gt4-world-r8",
          "round": 8,
          "total": 10,
          "layout": "Azure Circuit",
          "dateOffset": 105,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 55,
          "grid": 23,
          "difficulty": 97,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "gt4-world-r9",
          "round": 9,
          "total": 10,
          "layout": "Interlagos GP",
          "dateOffset": 119,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 60,
          "grid": 24,
          "difficulty": 98,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "gt4-world-r10",
          "round": 10,
          "total": 10,
          "layout": "Montréal",
          "dateOffset": 133,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 60,
          "grid": 25,
          "difficulty": 98,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "carrera-international",
      "name": "Carrera Cup International",
      "license": "B",
      "discipline": "gt",
      "className": "Carrera Cup",
      "entryFee": 9800,
      "roundPrize": 4700,
      "championPrize": 112000,
      "difficulty": 95,
      "teamRequired": true,
      "multiclass": false,
      "prestige": 72,
      "description": "GT championship · 9 rounds · Carrera Cup",
      "rounds": [
        {
          "id": "carrera-international-r1",
          "round": 1,
          "total": 9,
          "layout": "Donington GP",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 95,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "carrera-international-r2",
          "round": 2,
          "total": 9,
          "layout": "Brands Hatch GP",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 95,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "carrera-international-r3",
          "round": 3,
          "total": 9,
          "layout": "Imola",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 96,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "carrera-international-r4",
          "round": 4,
          "total": 9,
          "layout": "Spielberg",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 96,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "carrera-international-r5",
          "round": 5,
          "total": 9,
          "layout": "Montréal",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 97,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "carrera-international-r6",
          "round": 6,
          "total": 9,
          "layout": "Kansai GP",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 97,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "carrera-international-r7",
          "round": 7,
          "total": 9,
          "layout": "Bathurst 2020",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 98,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "carrera-international-r8",
          "round": 8,
          "total": 9,
          "layout": "Interlagos GP",
          "dateOffset": 105,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 55,
          "grid": 23,
          "difficulty": 98,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "carrera-international-r9",
          "round": 9,
          "total": 9,
          "layout": "Azure Circuit",
          "dateOffset": 119,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 60,
          "grid": 24,
          "difficulty": 99,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "formula-inter",
      "name": "Formula Inter Nations Cup",
      "license": "B",
      "discipline": "formula",
      "className": "Formula Inter",
      "entryFee": 11000,
      "roundPrize": 5200,
      "championPrize": 125000,
      "difficulty": 96,
      "teamRequired": true,
      "multiclass": false,
      "prestige": 72,
      "description": "Formula championship · 10 rounds · Formula Inter",
      "rounds": [
        {
          "id": "formula-inter-r1",
          "round": 1,
          "total": 10,
          "layout": "Cascais",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 96,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-inter-r2",
          "round": 2,
          "total": 10,
          "layout": "Jerez Moto",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 96,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-inter-r3",
          "round": 3,
          "total": 10,
          "layout": "Imola",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 97,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-inter-r4",
          "round": 4,
          "total": 10,
          "layout": "Spielberg",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 97,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-inter-r5",
          "round": 5,
          "total": 10,
          "layout": "Kyalami",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 98,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-inter-r6",
          "round": 6,
          "total": 10,
          "layout": "Montréal",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 98,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "formula-inter-r7",
          "round": 7,
          "total": 10,
          "layout": "Kansai GP",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 99,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "formula-inter-r8",
          "round": 8,
          "total": 10,
          "layout": "Interlagos GP",
          "dateOffset": 105,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 55,
          "grid": 23,
          "difficulty": 99,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "formula-inter-r9",
          "round": 9,
          "total": 10,
          "layout": "Azure Circuit",
          "dateOffset": 119,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 60,
          "grid": 24,
          "difficulty": 100,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "formula-inter-r10",
          "round": 10,
          "total": 10,
          "layout": "Bathurst 2020",
          "dateOffset": 133,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 60,
          "grid": 25,
          "difficulty": 100,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "lmp2-endurance",
      "name": "LMP2 Continental Endurance",
      "license": "B",
      "discipline": "endurance",
      "className": "LMP2 Gen 2",
      "entryFee": 14000,
      "roundPrize": 6500,
      "championPrize": 168000,
      "difficulty": 97,
      "teamRequired": true,
      "multiclass": true,
      "prestige": 72,
      "description": "Endurance championship · 6 rounds · LMP2 Gen 2",
      "rounds": [
        {
          "id": "lmp2-endurance-r1",
          "round": 1,
          "total": 6,
          "layout": "Imola",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 97,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "lmp2-endurance-r2",
          "round": 2,
          "total": 6,
          "layout": "Spa-Francorchamps",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 97,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "lmp2-endurance-r3",
          "round": 3,
          "total": 6,
          "layout": "Daytona Road Course",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 98,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "lmp2-endurance-r4",
          "round": 4,
          "total": 6,
          "layout": "Montréal",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 98,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "lmp2-endurance-r5",
          "round": 5,
          "total": 6,
          "layout": "Kansai GP",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 99,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "lmp2-endurance-r6",
          "round": 6,
          "total": 6,
          "layout": "Interlagos GP",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 99,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "rx-masters",
      "name": "World Rallycross Masters",
      "license": "B",
      "discipline": "offroad",
      "className": "Rallycross",
      "entryFee": 10500,
      "roundPrize": 4900,
      "championPrize": 118000,
      "difficulty": 94,
      "teamRequired": true,
      "multiclass": false,
      "prestige": 72,
      "description": "Off-road championship · 8 rounds · Rallycross",
      "rounds": [
        {
          "id": "rx-masters-r1",
          "round": 1,
          "total": 8,
          "layout": "Circuit de Catalunya RX",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 94,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "rx-masters-r2",
          "round": 2,
          "total": 8,
          "layout": "Hockenheim RX",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 94,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "rx-masters-r3",
          "round": 3,
          "total": 8,
          "layout": "Spa-Francorchamps RX",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 95,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "rx-masters-r4",
          "round": 4,
          "total": 8,
          "layout": "Foz RX",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 95,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "rx-masters-r5",
          "round": 5,
          "total": 8,
          "layout": "Ascurra RX",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 96,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "rx-masters-r6",
          "round": 6,
          "total": 8,
          "layout": "Tykki RX",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 96,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "rx-masters-r7",
          "round": 7,
          "total": 8,
          "layout": "Nürburgring RX",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 97,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "rx-masters-r8",
          "round": 8,
          "total": 8,
          "layout": "Ascurra Dirt",
          "dateOffset": 105,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 55,
          "grid": 23,
          "difficulty": 97,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "gt3-continental",
      "name": "GT3 Continental Tour",
      "license": "A",
      "discipline": "gt",
      "className": "GT3",
      "entryFee": 18000,
      "roundPrize": 8500,
      "championPrize": 225000,
      "difficulty": 101,
      "teamRequired": true,
      "multiclass": false,
      "prestige": 90,
      "description": "GT championship · 10 rounds · GT3",
      "rounds": [
        {
          "id": "gt3-continental-r1",
          "round": 1,
          "total": 10,
          "layout": "Daytona Road Course",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 101,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt3-continental-r2",
          "round": 2,
          "total": 10,
          "layout": "Spa-Francorchamps",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 101,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt3-continental-r3",
          "round": 3,
          "total": 10,
          "layout": "Imola",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 102,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt3-continental-r4",
          "round": 4,
          "total": 10,
          "layout": "Kyalami",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 102,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt3-continental-r5",
          "round": 5,
          "total": 10,
          "layout": "Bathurst 2020",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 103,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt3-continental-r6",
          "round": 6,
          "total": 10,
          "layout": "Montréal",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 103,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "gt3-continental-r7",
          "round": 7,
          "total": 10,
          "layout": "Kansai GP",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 104,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "gt3-continental-r8",
          "round": 8,
          "total": 10,
          "layout": "Azure Circuit",
          "dateOffset": 105,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 55,
          "grid": 23,
          "difficulty": 104,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "gt3-continental-r9",
          "round": 9,
          "total": 10,
          "layout": "Interlagos GP",
          "dateOffset": 119,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 60,
          "grid": 24,
          "difficulty": 105,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "gt3-continental-r10",
          "round": 10,
          "total": 10,
          "layout": "Nürburgring GP",
          "dateOffset": 133,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 60,
          "grid": 25,
          "difficulty": 105,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "stock-pro",
      "name": "Stock Car Pro Series",
      "license": "A",
      "discipline": "touring",
      "className": "Stock Car Pro Series 2024",
      "entryFee": 16500,
      "roundPrize": 7800,
      "championPrize": 205000,
      "difficulty": 100,
      "teamRequired": true,
      "multiclass": false,
      "prestige": 90,
      "description": "Touring championship · 10 rounds · Stock Car Pro Series 2024",
      "rounds": [
        {
          "id": "stock-pro-r1",
          "round": 1,
          "total": 10,
          "layout": "Goiânia",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 100,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "stock-pro-r2",
          "round": 2,
          "total": 10,
          "layout": "Cascavel",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 100,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "stock-pro-r3",
          "round": 3,
          "total": 10,
          "layout": "Velocitta",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 101,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "stock-pro-r4",
          "round": 4,
          "total": 10,
          "layout": "Interlagos Stock Car Brasil",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 101,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "stock-pro-r5",
          "round": 5,
          "total": 10,
          "layout": "Santa Cruz do Sul",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 102,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "stock-pro-r6",
          "round": 6,
          "total": 10,
          "layout": "Brasilia Full",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 102,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "stock-pro-r7",
          "round": 7,
          "total": 10,
          "layout": "Curvelo Long",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 103,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "stock-pro-r8",
          "round": 8,
          "total": 10,
          "layout": "Galeao Airport",
          "dateOffset": 105,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 55,
          "grid": 23,
          "difficulty": 103,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "stock-pro-r9",
          "round": 9,
          "total": 10,
          "layout": "Buenos Aires Circuito No.12",
          "dateOffset": 119,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 60,
          "grid": 24,
          "difficulty": 104,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "stock-pro-r10",
          "round": 10,
          "total": 10,
          "layout": "Interlagos GP",
          "dateOffset": 133,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 60,
          "grid": 25,
          "difficulty": 104,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "formula-usa",
      "name": "Formula USA Championship",
      "license": "A",
      "discipline": "formula",
      "className": "Formula USA 2023",
      "entryFee": 21000,
      "roundPrize": 9500,
      "championPrize": 260000,
      "difficulty": 103,
      "teamRequired": true,
      "multiclass": false,
      "prestige": 90,
      "description": "Formula championship · 10 rounds · Formula USA 2023",
      "rounds": [
        {
          "id": "formula-usa-r1",
          "round": 1,
          "total": 10,
          "layout": "Long Beach",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 103,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-usa-r2",
          "round": 2,
          "total": 10,
          "layout": "Laguna Seca",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 103,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-usa-r3",
          "round": 3,
          "total": 10,
          "layout": "Cleveland",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 104,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-usa-r4",
          "round": 4,
          "total": 10,
          "layout": "Road America",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 104,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-usa-r5",
          "round": 5,
          "total": 10,
          "layout": "Indianapolis Road Course",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 105,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-usa-r6",
          "round": 6,
          "total": 10,
          "layout": "Watkins Glen GP",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 105,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "formula-usa-r7",
          "round": 7,
          "total": 10,
          "layout": "Daytona Road Course",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 106,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "formula-usa-r8",
          "round": 8,
          "total": 10,
          "layout": "Pocono Oval",
          "dateOffset": 105,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 55,
          "grid": 23,
          "difficulty": 106,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "formula-usa-r9",
          "round": 9,
          "total": 10,
          "layout": "Fontana Speedway",
          "dateOffset": 119,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 60,
          "grid": 24,
          "difficulty": 107,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "formula-usa-r10",
          "round": 10,
          "total": 10,
          "layout": "Indianapolis Oval",
          "dateOffset": 133,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 60,
          "grid": 25,
          "difficulty": 107,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "gte-endurance",
      "name": "Global GTE Endurance Series",
      "license": "A",
      "discipline": "endurance",
      "className": "GTE",
      "entryFee": 24000,
      "roundPrize": 11000,
      "championPrize": 310000,
      "difficulty": 104,
      "teamRequired": true,
      "multiclass": true,
      "prestige": 90,
      "description": "Endurance championship · 7 rounds · GTE",
      "rounds": [
        {
          "id": "gte-endurance-r1",
          "round": 1,
          "total": 7,
          "layout": "Daytona Road Course",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 104,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gte-endurance-r2",
          "round": 2,
          "total": 7,
          "layout": "Spa-Francorchamps",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 104,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gte-endurance-r3",
          "round": 3,
          "total": 7,
          "layout": "Le Mans 24h",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 105,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gte-endurance-r4",
          "round": 4,
          "total": 7,
          "layout": "Nürburgring GP",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 105,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gte-endurance-r5",
          "round": 5,
          "total": 7,
          "layout": "Imola",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 106,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gte-endurance-r6",
          "round": 6,
          "total": 7,
          "layout": "Kansai GP",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 106,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "gte-endurance-r7",
          "round": 7,
          "total": 7,
          "layout": "Interlagos GP",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 107,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "group-c-heritage",
      "name": "Group C Heritage World Tour",
      "license": "A",
      "discipline": "historic",
      "className": "Group C",
      "entryFee": 22000,
      "roundPrize": 10000,
      "championPrize": 285000,
      "difficulty": 102,
      "teamRequired": true,
      "multiclass": false,
      "prestige": 90,
      "description": "Historic championship · 6 rounds · Group C",
      "rounds": [
        {
          "id": "group-c-heritage-r1",
          "round": 1,
          "total": 6,
          "layout": "Kyalami Historic 1976",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 102,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "group-c-heritage-r2",
          "round": 2,
          "total": 6,
          "layout": "Interlagos Historic 1976",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 102,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "group-c-heritage-r3",
          "round": 3,
          "total": 6,
          "layout": "Imola Historic 1988",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 103,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "group-c-heritage-r4",
          "round": 4,
          "total": 6,
          "layout": "Montréal Historic 1988",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 103,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "group-c-heritage-r5",
          "round": 5,
          "total": 6,
          "layout": "Kansai Classic",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 104,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "group-c-heritage-r6",
          "round": 6,
          "total": 6,
          "layout": "Le Mans 2005",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 104,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "world-prototype",
      "name": "World Prototype Championship",
      "license": "P",
      "discipline": "prototype",
      "className": "LMDh/GTP",
      "entryFee": 40000,
      "roundPrize": 18000,
      "championPrize": 520000,
      "difficulty": 108,
      "teamRequired": true,
      "multiclass": true,
      "prestige": 108,
      "description": "Prototype championship · 8 rounds · LMDh/GTP",
      "rounds": [
        {
          "id": "world-prototype-r1",
          "round": 1,
          "total": 8,
          "layout": "Daytona Road Course",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 108,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "world-prototype-r2",
          "round": 2,
          "total": 8,
          "layout": "Spa-Francorchamps",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 108,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "world-prototype-r3",
          "round": 3,
          "total": 8,
          "layout": "Le Mans 24h",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 109,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "world-prototype-r4",
          "round": 4,
          "total": 8,
          "layout": "Nürburgring GP",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 109,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "world-prototype-r5",
          "round": 5,
          "total": 8,
          "layout": "Kansai GP",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 110,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "world-prototype-r6",
          "round": 6,
          "total": 8,
          "layout": "Road America",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 110,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "world-prototype-r7",
          "round": 7,
          "total": 8,
          "layout": "Interlagos GP",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 111,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "world-prototype-r8",
          "round": 8,
          "total": 8,
          "layout": "Bathurst 2020",
          "dateOffset": 105,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 55,
          "grid": 23,
          "difficulty": 111,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "gt3-global",
      "name": "GT3 Gen2 Global Championship",
      "license": "P",
      "discipline": "gt",
      "className": "GT3 Gen 2",
      "entryFee": 38000,
      "roundPrize": 17000,
      "championPrize": 480000,
      "difficulty": 107,
      "teamRequired": true,
      "multiclass": false,
      "prestige": 108,
      "description": "GT championship · 10 rounds · GT3 Gen 2",
      "rounds": [
        {
          "id": "gt3-global-r1",
          "round": 1,
          "total": 10,
          "layout": "Bathurst 2020",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 107,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt3-global-r2",
          "round": 2,
          "total": 10,
          "layout": "Daytona Road Course",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 107,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt3-global-r3",
          "round": 3,
          "total": 10,
          "layout": "Kyalami",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 108,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt3-global-r4",
          "round": 4,
          "total": 10,
          "layout": "Imola",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 108,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt3-global-r5",
          "round": 5,
          "total": 10,
          "layout": "Spa-Francorchamps",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 109,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "gt3-global-r6",
          "round": 6,
          "total": 10,
          "layout": "Nürburgring GP",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 109,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "gt3-global-r7",
          "round": 7,
          "total": 10,
          "layout": "Kansai GP",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 110,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "gt3-global-r8",
          "round": 8,
          "total": 10,
          "layout": "Montréal",
          "dateOffset": 105,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 55,
          "grid": 23,
          "difficulty": 110,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "gt3-global-r9",
          "round": 9,
          "total": 10,
          "layout": "Azure Circuit",
          "dateOffset": 119,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 60,
          "grid": 24,
          "difficulty": 111,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "gt3-global-r10",
          "round": 10,
          "total": 10,
          "layout": "Interlagos GP",
          "dateOffset": 133,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 60,
          "grid": 25,
          "difficulty": 111,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "formula-world",
      "name": "Formula World Grand Prix",
      "license": "P",
      "discipline": "formula",
      "className": "Formula V10 Gen 3",
      "entryFee": 50000,
      "roundPrize": 22000,
      "championPrize": 650000,
      "difficulty": 110,
      "teamRequired": true,
      "multiclass": false,
      "prestige": 108,
      "description": "Formula championship · 10 rounds · Formula V10 Gen 3",
      "rounds": [
        {
          "id": "formula-world-r1",
          "round": 1,
          "total": 10,
          "layout": "Interlagos GP",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 110,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-world-r2",
          "round": 2,
          "total": 10,
          "layout": "Imola",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 110,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-world-r3",
          "round": 3,
          "total": 10,
          "layout": "Azure Circuit",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 111,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-world-r4",
          "round": 4,
          "total": 10,
          "layout": "Montréal",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 111,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-world-r5",
          "round": 5,
          "total": 10,
          "layout": "Spielberg",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 112,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "formula-world-r6",
          "round": 6,
          "total": 10,
          "layout": "Kansai GP",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 112,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "formula-world-r7",
          "round": 7,
          "total": 10,
          "layout": "Kyalami",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 113,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "formula-world-r8",
          "round": 8,
          "total": 10,
          "layout": "Cascais",
          "dateOffset": 105,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 55,
          "grid": 23,
          "difficulty": 113,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "formula-world-r9",
          "round": 9,
          "total": 10,
          "layout": "Jerez Moto",
          "dateOffset": 119,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 60,
          "grid": 24,
          "difficulty": 114,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "formula-world-r10",
          "round": 10,
          "total": 10,
          "layout": "Bathurst 2020",
          "dateOffset": 133,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 60,
          "grid": 25,
          "difficulty": 114,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    },
    {
      "id": "historic-grand-prix",
      "name": "Historic Grand Prix Masters",
      "license": "P",
      "discipline": "historic",
      "className": "Formula Retro Gen 3",
      "entryFee": 36000,
      "roundPrize": 15500,
      "championPrize": 440000,
      "difficulty": 105,
      "teamRequired": true,
      "multiclass": false,
      "prestige": 108,
      "description": "Historic championship · 7 rounds · Formula Retro Gen 3",
      "rounds": [
        {
          "id": "historic-grand-prix-r1",
          "round": 1,
          "total": 7,
          "layout": "Kyalami Historic 1976",
          "dateOffset": 7,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 20,
          "grid": 16,
          "difficulty": 105,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "historic-grand-prix-r2",
          "round": 2,
          "total": 7,
          "layout": "Interlagos Historic 1978 Outer",
          "dateOffset": 21,
          "practice": 10,
          "qualify": 10,
          "raceMinutes": 25,
          "grid": 17,
          "difficulty": 105,
          "weather": [
            "LightCloud",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "historic-grand-prix-r3",
          "round": 3,
          "total": 7,
          "layout": "Imola Historic 1972",
          "dateOffset": 35,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 30,
          "grid": 18,
          "difficulty": 106,
          "weather": [
            "MediumCloud",
            "LightCloud"
          ],
          "damage": "FULL",
          "randomFailures": "LOW",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "historic-grand-prix-r4",
          "round": 4,
          "total": 7,
          "layout": "Spielberg Historic 1977",
          "dateOffset": 49,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 35,
          "grid": 19,
          "difficulty": 106,
          "weather": [
            "Clear",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 0,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "historic-grand-prix-r5",
          "round": 5,
          "total": 7,
          "layout": "Montréal Historic 1988",
          "dateOffset": 63,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 40,
          "grid": 20,
          "difficulty": 107,
          "weather": [
            "Overcast",
            "LightRain"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": null,
          "linkedEventId": null
        },
        {
          "id": "historic-grand-prix-r6",
          "round": 6,
          "total": 7,
          "layout": "Kansai Classic",
          "dateOffset": 77,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 45,
          "grid": 21,
          "difficulty": 107,
          "weather": [
            "LightCloud",
            "MediumCloud"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        },
        {
          "id": "historic-grand-prix-r7",
          "round": 7,
          "total": 7,
          "layout": "Le Mans 2005",
          "dateOffset": 91,
          "practice": 15,
          "qualify": 15,
          "raceMinutes": 50,
          "grid": 22,
          "difficulty": 108,
          "weather": [
            "Clear",
            "Clear"
          ],
          "damage": "FULL",
          "randomFailures": "NORMAL",
          "mandatoryStops": 1,
          "tireSets": 3,
          "linkedEventId": null
        }
      ]
    }
  ],
  "teams": [
    {
      "id": "apex-rookie",
      "name": "Apex Driver Academy",
      "license": "R",
      "discipline": "formula",
      "rating": 58,
      "salary": 2500,
      "carCare": 12,
      "interest": 10,
      "status": "scouting"
    },
    {
      "id": "serra-club",
      "name": "Serra Club Motorsport",
      "license": "R",
      "discipline": "touring",
      "rating": 54,
      "salary": 1800,
      "carCare": 10,
      "interest": 6,
      "status": "scouting"
    },
    {
      "id": "northstar-karts",
      "name": "Northstar Kart Project",
      "license": "R",
      "discipline": "grassroots",
      "rating": 51,
      "salary": 1200,
      "carCare": 8,
      "interest": 4,
      "status": "scouting"
    },
    {
      "id": "verde-competition",
      "name": "Verde Competition",
      "license": "D",
      "discipline": "touring",
      "rating": 66,
      "salary": 4200,
      "carCare": 18,
      "interest": 18,
      "status": "scouting"
    },
    {
      "id": "silverline-junior",
      "name": "Silverline Junior Racing",
      "license": "D",
      "discipline": "gt",
      "rating": 68,
      "salary": 4600,
      "carCare": 19,
      "interest": 20,
      "status": "scouting"
    },
    {
      "id": "atlas-formula",
      "name": "Atlas Formula Development",
      "license": "D",
      "discipline": "formula",
      "rating": 70,
      "salary": 5000,
      "carCare": 20,
      "interest": 22,
      "status": "scouting"
    },
    {
      "id": "horizon-stock",
      "name": "Horizon Stock Racing",
      "license": "C",
      "discipline": "touring",
      "rating": 77,
      "salary": 7500,
      "carCare": 28,
      "interest": 29,
      "status": "scouting"
    },
    {
      "id": "vector-performance",
      "name": "Vector Performance",
      "license": "C",
      "discipline": "prototype",
      "rating": 78,
      "salary": 8200,
      "carCare": 30,
      "interest": 30,
      "status": "scouting"
    },
    {
      "id": "blackbird-gt",
      "name": "Blackbird GT",
      "license": "C",
      "discipline": "gt",
      "rating": 76,
      "salary": 7800,
      "carCare": 27,
      "interest": 28,
      "status": "scouting"
    },
    {
      "id": "aurora-racing",
      "name": "Aurora International",
      "license": "B",
      "discipline": "formula",
      "rating": 85,
      "salary": 12500,
      "carCare": 40,
      "interest": 37,
      "status": "scouting"
    },
    {
      "id": "redwood-endurance",
      "name": "Redwood Endurance",
      "license": "B",
      "discipline": "endurance",
      "rating": 87,
      "salary": 14000,
      "carCare": 44,
      "interest": 39,
      "status": "scouting"
    },
    {
      "id": "helix-motorsport",
      "name": "Helix Motorsport",
      "license": "B",
      "discipline": "gt",
      "rating": 84,
      "salary": 11800,
      "carCare": 38,
      "interest": 36,
      "status": "scouting"
    },
    {
      "id": "quantum-stock",
      "name": "Quantum Stock Works",
      "license": "A",
      "discipline": "touring",
      "rating": 92,
      "salary": 21000,
      "carCare": 62,
      "interest": 44,
      "status": "scouting"
    },
    {
      "id": "meridian-prototype",
      "name": "Meridian Prototype",
      "license": "A",
      "discipline": "prototype",
      "rating": 94,
      "salary": 24000,
      "carCare": 68,
      "interest": 46,
      "status": "scouting"
    },
    {
      "id": "valkyrie-gt",
      "name": "Valkyrie GT Works",
      "license": "A",
      "discipline": "gt",
      "rating": 93,
      "salary": 22500,
      "carCare": 65,
      "interest": 45,
      "status": "scouting"
    },
    {
      "id": "nova-grand-prix",
      "name": "Nova Grand Prix",
      "license": "P",
      "discipline": "formula",
      "rating": 98,
      "salary": 38000,
      "carCare": 85,
      "interest": 50,
      "status": "scouting"
    },
    {
      "id": "orion-hypercar",
      "name": "Orion Hypercar Programme",
      "license": "P",
      "discipline": "prototype",
      "rating": 99,
      "salary": 42000,
      "carCare": 90,
      "interest": 51,
      "status": "scouting"
    },
    {
      "id": "heritage-union",
      "name": "Heritage Racing Union",
      "license": "B",
      "discipline": "historic",
      "rating": 82,
      "salary": 10000,
      "carCare": 36,
      "interest": 34,
      "status": "scouting"
    }
  ],
  "sponsors": [
    {
      "id": "velocity",
      "name": "Velocity Energy",
      "signingBonus": 7000,
      "objective": "Finish 12th or better",
      "prestige": 12
    },
    {
      "id": "gridline",
      "name": "Gridline Tools",
      "signingBonus": 5500,
      "objective": "Complete the race",
      "prestige": 8
    },
    {
      "id": "nord-tire",
      "name": "Nord Tire Systems",
      "signingBonus": 9500,
      "objective": "Finish without major damage",
      "prestige": 16
    },
    {
      "id": "prisma",
      "name": "Prisma Optics",
      "signingBonus": 12000,
      "objective": "Qualify in top 10",
      "prestige": 20
    },
    {
      "id": "redshift",
      "name": "Redshift Data",
      "signingBonus": 15000,
      "objective": "Set three clean laps",
      "prestige": 23
    },
    {
      "id": "apex-fuel",
      "name": "Apex Fuels",
      "signingBonus": 18500,
      "objective": "Finish top 8",
      "prestige": 28
    },
    {
      "id": "grand-tour",
      "name": "Grand Tour Hotels",
      "signingBonus": 22000,
      "objective": "Race on three continents",
      "prestige": 34
    },
    {
      "id": "carbon-labs",
      "name": "Carbon Labs",
      "signingBonus": 28000,
      "objective": "Finish top 5",
      "prestige": 40
    },
    {
      "id": "orbit",
      "name": "Orbit Telecom",
      "signingBonus": 35000,
      "objective": "Score a podium",
      "prestige": 48
    },
    {
      "id": "vertex-bank",
      "name": "Vertex Bank",
      "signingBonus": 48000,
      "objective": "Win a national title",
      "prestige": 60
    },
    {
      "id": "hyperion",
      "name": "Hyperion Mobility",
      "signingBonus": 65000,
      "objective": "Win an international race",
      "prestige": 75
    },
    {
      "id": "legacy",
      "name": "Legacy Watches",
      "signingBonus": 90000,
      "objective": "Win a world championship",
      "prestige": 92
    }
  ],
  "achievements": [
    {
      "id": "first-license",
      "name": "Paperwork Complete",
      "description": "Earn your Rookie Permit",
      "unlocked": false
    },
    {
      "id": "clean-rookie",
      "name": "Clean Slate",
      "description": "Finish a race with under 2% damage",
      "unlocked": false
    },
    {
      "id": "first-podium",
      "name": "Steps Above",
      "description": "Score your first podium",
      "unlocked": false
    },
    {
      "id": "first-win",
      "name": "Top Step",
      "description": "Win your first race",
      "unlocked": false
    },
    {
      "id": "privateer",
      "name": "Privateer Spirit",
      "description": "Win without a team contract",
      "unlocked": false
    },
    {
      "id": "team-player",
      "name": "Signed and Sealed",
      "description": "Join your first team",
      "unlocked": false
    },
    {
      "id": "mechanic",
      "name": "Mechanical Sympathy",
      "description": "Complete five races without replacing an engine",
      "unlocked": false
    },
    {
      "id": "rain-master",
      "name": "Rain Master",
      "description": "Win a wet race",
      "unlocked": false
    },
    {
      "id": "night-shift",
      "name": "Night Shift",
      "description": "Finish a night endurance race",
      "unlocked": false
    },
    {
      "id": "iron-driver",
      "name": "Iron Driver",
      "description": "Complete a race longer than 90 minutes",
      "unlocked": false
    },
    {
      "id": "national-champ",
      "name": "National Champion",
      "description": "Win a C-license championship",
      "unlocked": false
    },
    {
      "id": "international",
      "name": "Passport Stamps",
      "description": "Race in ten countries",
      "unlocked": false
    },
    {
      "id": "multi-class",
      "name": "Traffic Manager",
      "description": "Win your class in a multiclass race",
      "unlocked": false
    },
    {
      "id": "comeback",
      "name": "Comeback Drive",
      "description": "Gain ten positions in a race",
      "unlocked": false
    },
    {
      "id": "pole-win",
      "name": "Perfect Weekend",
      "description": "Take pole and victory",
      "unlocked": false
    },
    {
      "id": "triple-crown",
      "name": "Triple Crown",
      "description": "Win three different disciplines",
      "unlocked": false
    },
    {
      "id": "factory",
      "name": "Factory Calling",
      "description": "Sign an A-license works contract",
      "unlocked": false
    },
    {
      "id": "pro-license",
      "name": "Super Licence",
      "description": "Earn the Pro Super Licence",
      "unlocked": false
    },
    {
      "id": "world-champ",
      "name": "World Champion",
      "description": "Win a Pro championship",
      "unlocked": false
    },
    {
      "id": "legend",
      "name": "FlyByRace Legend",
      "description": "Win 100 career races",
      "unlocked": false
    }
  ],
  "initialMessages": [
    {
      "id": "welcome",
      "from": "Career Director",
      "subject": "Welcome to FlyByRace",
      "date": "11 MAR",
      "type": "system",
      "unread": true,
      "body": "Your Rookie Permit is active. Start small, protect the machinery and build a reputation across multiple disciplines."
    },
    {
      "id": "license-briefing",
      "from": "Licensing Office",
      "subject": "Rookie evaluation programme",
      "date": "11 MAR",
      "type": "license",
      "unread": true,
      "body": "Accumulate 100 licence points through clean finishes to qualify for the National D assessment."
    },
    {
      "id": "team-scout",
      "from": "Apex Driver Academy",
      "subject": "We will be watching Londrina",
      "date": "12 MAR",
      "type": "offer",
      "unread": true,
      "body": "Our scouts will attend the Formula Trainer Academy opener. A clean top-ten result could lead to a funded test."
    },
    {
      "id": "sponsor-intro",
      "from": "Gridline Tools",
      "subject": "Privateer support available",
      "date": "13 MAR",
      "type": "sponsor",
      "unread": false,
      "body": "Complete your first official race and we will discuss a small equipment partnership."
    },
    {
      "id": "weather-note",
      "from": "Race Engineering",
      "subject": "Changing conditions expected",
      "date": "14 MAR",
      "type": "race",
      "unread": false,
      "body": "Regional forecasts suggest afternoon cloud build-up. Avoid overheating the tyres in qualifying."
    }
  ],
  "news": [
    {
      "tag": "PADDOCK",
      "title": "Apex Academy expands rookie evaluation programme",
      "summary": "Three funded test seats will be awarded during the opening six weeks."
    },
    {
      "tag": "TECHNICAL",
      "title": "Officials tighten random-failure regulations",
      "summary": "Teams must now declare component changes before qualifying begins."
    },
    {
      "tag": "MARKET",
      "title": "GT teams monitor rising South American talent",
      "summary": "Strong Sprint Race results could unlock international opportunities."
    },
    {
      "tag": "WEATHER",
      "title": "Wet autumn expected across southern Brazil",
      "summary": "Variable conditions are likely at Londrina, Curitiba and Interlagos."
    }
  ]
};
