export function getData() {
    return [
        { mois: "Jan", subscriptions: 222, services: 250, products: 200 },
        { mois: "Feb", subscriptions: 240, services: 255, products: 210 },
        { mois: "Mar", subscriptions: 280, services: 245, products: 195 },
        { mois: "Avr", subscriptions: 300, services: 250, products: 215 },
        { mois: "Mai", subscriptions: 300, services: 250, products: 215 },
        { mois: "Jui", subscriptions: 420, services: 270, products: 400 },
        { mois: "Juil", subscriptions: 300, services: 255, products: 225 },
        { mois: "Aoû", subscriptions: 270, services: 305, products: 210 },
        { mois: "Sep", subscriptions: 260, services: 280, products: 250 },
        { mois: "Oct", subscriptions: 385, services: 250, products: 205 },
        { mois: "Nov", subscriptions: 320, services: 265, products: 215 },
        // { mois: "Dec", subscriptions: 330, services: 255, products: 220 },
    ];
}

export function getDashPieChart() {
    return [
        { asset: "Achat", amount: 60000 },
        { asset: "Ventes", amount: 40000 },
        { asset: "Cash", amount: 7000 },
        { asset: "Créance eet dette", amount: 5000 },
        { asset: "Solde", amount: 3000 },
    ];
}

export function getBarData() {
  return [
    {
      quarter: "Q1'18",
      iphone: 140,
      mac: 16,
      ipad: 14,
      wearables: 12,
      services: 20,
    },
    {
      quarter: "Q2'18",
      iphone: 124,
      mac: 20,
      ipad: 14,
      wearables: 12,
      services: 30,
    },
    {
      quarter: "Q3'18",
      iphone: 112,
      mac: 20,
      ipad: 18,
      wearables: 14,
      services: 36,
    },
    {
      quarter: "Q4'18",
      iphone: 118,
      mac: 24,
      ipad: 14,
      wearables: 14,
      services: 36,
    },
  ];
}
