export default function handler(req, res) {
  const promos = [
    { id: "1", text: "Promo 1" },
    { id: "2", text: "Promo 2" },
    { id: "3", text: "Promo 3" }
  ];
  res.status(200).json(promos);
}
