const wages = {
    "United States": 7.25,
    "United Kingdom": 9.00,
    "Canada": 11.32,
    "Germany": 10.00,
    "France": 10.25,
    "Australia": 19.84,
    "Japan": 8.78,
    "South Korea": 8.56,
    "Brazil": 2.92,
    "India": 0.82,
    "China": 2.18,
    "Russia": 1.98,
    "South Africa": 2.38,
    "Mexico": 1.67,
    "Spain": 8.46,
    "Italy": 8.33,
    "Netherlands": 11.34,
    "Sweden": 14.89,
    "Norway": 16.82,
    "Switzerland": 22.68,
    "Singapore": 7.81,
    "Argentina": 3.55,
    "Chile": 3.19,
    "Saudi Arabia": 6.25,
    "United Arab Emirates": 6.19,
    "Turkey": 2.78,
    "Egypt": 1.58,
    "Nigeria": 0.60,
    "Kenya": 0.86,
    "Ghana": 0.74,
    "Pakistan": 0.67,
    "Bangladesh": 0.62,
    "Vietnam": 1.12,
    "Thailand": 1.25,
    "Malaysia": 3.50,
    "Indonesia": 1.47,
    "Philippines": 1.77,
    "New Zealand": 15.50,
    "Denmark": 17.80,
    "Finland": 13.50,
    "Austria": 11.50,
    "Greece": 6.00,
    "Poland": 4.20,
    "Hungary": 4.20,
    "Czech Republic": 4.90,
    "Slovakia": 3.50,
    "Croatia": 4.00,
    "Romania": 3.50,
    "Bulgaria": 2.50,
    "Ukraine": 1.50,
    "Belarus": 2.00,
    "Kazakhstan": 1.90,
    "Mongolia": 1.25,
    "Cambodia": 0.84,
    "Sri Lanka": 0.75,
    "Myanmar": 0.67,
    "Maldives": 3.50,
    "Nepal": 0.85,
    "Bhutan": 0.98,
    "Tajikistan": 0.60,
    "Kyrgyzstan": 0.70
  };
  

class Wage {
    getWage(country: string): number {
        return wages[country];
    }

    getWages(): string[] {
        return Object.keys(wages);
    }
}
export default Wage;