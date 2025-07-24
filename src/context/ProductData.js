const productData = [
  {
    id: 1,
    name: "Tangerine Rush",
    price: 1199,
    images: [
      "https://www.layers.shop/cdn/shop/files/Tangerine_Rush_1_transparent.png?v=1753085407&width=713",
      "https://www.layers.shop/cdn/shop/files/TangerineRush_3.png?v=1753085407&width=713",
      "https://www.layers.shop/cdn/shop/files/TangerineRush_2.png?v=1753085407&width=713",
    ],
    material: "Fluoroelastomer Arc",
    color: "Tangerine Rush",
  },
  {
    id: 2,
    name: "Black Reserve",
    price: 999,
    images: [
      "https://www.layers.shop/cdn/shop/files/Black_Reserve_Strap.png?v=1752732770&width=600",
      "https://www.layers.shop/cdn/shop/files/blackreserve_3.png?v=1752732770&width=493",
      "https://www.layers.shop/cdn/shop/files/blackreserve_2.png?v=1752732770&width=493",
    ],
    material: "Leather Arc",
    color: "Black Reserve",
  },
  {
    id: 3,
    name: "Midnight Black",
    price: 799,
    images: [
      "https://www.layers.shop/cdn/shop/files/Midnight_Black_1_65381296-c0a0-4a77-9391-07aa11575879.png?v=1731511569&width=493",
      "https://www.layers.shop/cdn/shop/files/Midnight_Black_2_be20a7d7-c74a-4a03-bcc8-22069903b341.png?v=1731507312&width=493",
      "https://www.layers.shop/cdn/shop/files/Midnight_Black_3_446cfa08-1044-4a5a-be11-9c78ad9d0d93.png?v=1731507312&width=493",
    ],
    material: "Magnetic Silicon Arc",
    color: "Midnight Black",
  },
  {
    id: 4,
    name: "Charcoal Black",
    price: 1199,
    images: [
      "https://www.layers.shop/cdn/shop/files/Charcoal_Black_1_1.png?v=1731511698&width=600",
      "https://www.layers.shop/cdn/shop/files/Charcoal_Black_3_c4d56386-5a21-4dc2-81af-8a1ed0306006.png?v=1731507393&width=493",
      "https://www.layers.shop/cdn/shop/files/Charcoal_Black_2_30013980-7e9b-40ed-8545-69610f4a9f0b.png?v=1731507393&width=493",
    ],
    material: "Fluoroelastomer Arc",
    color: "Charcoal Black",
  },
  {
    id: 5,
    name: "Anarc Silver Swirl",
    price: 599,
    images: [
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchFrontAngledSilverSwirl.png?v=1748541551",
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchFrontSilverSwirl.png?v=1748541551&width=493",
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchSideSilverSwirl.png?v=1748541551&width=493",
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchbackSilverSwirl.png?v=1748541551&width=493",
    ],
    material:
      "Note: The above mockup is provided solely as a visual reference for how the skin will appear on the device.",
    color: "Anarc Silver Swirl",
  },
  {
    id: 6,
    name: "Anarc Chrome Flux",
    price: 599,
    images: [
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchFrontAngledmetalic.png?v=1748456522&width=493",
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchFrontmetalic.png?v=1748456522&width=493",
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchSidemetalic.png?v=1748456522&width=493",
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchbackmetalic.png?v=1748456522&width=493",
    ],
    material:
      "Note: The above mockup is provided solely as a visual reference for how the skin will appear on the device.",
    color: "Anarc Chrome Flux",
  },
  {
    id: 7,
    name: "Anarc Techno Mesh",
    price: 599,
    images: [
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchFrontAngledtechnomesh.png?v=1748456012&width=493",
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchFronttechnomesh.png?v=1748456012&width=493",
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchSidetechnomesh.png?v=1748456012&width=493",
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchbacktechnomesh.png?v=1748456012&width=493",
    ],
    material:
      "Note: The above mockup is provided solely as a visual reference for how the skin will appear on the device.",
    color: "Anarc Techno Mesh",
  },
  {
    id: 8,
    name: "Anarc Cybernetic",
    price: 599,
    images: [
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchFrontAngledcybernetichud_ce50c9a9-8c38-4653-91e4-20bb854c043b.png?v=1748284702&width=493",
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchSidecybernetichud.png?v=1748284702&width=493",
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchFront.cybernetichud.png?v=1748284702&width=493",
      "https://www.layers.shop/cdn/shop/files/AnarcSmartWatchbackcybernetichud.png?v=1748284702&width=493",
    ],
    material:
      "Note: The above mockup is provided solely as a visual reference for how the skin will appear on the device.",
    color: "Anarc Cybernetic Charge",
  },
  {
    id: 9,
    name: "Charger",
    price: 399,
    images: [
      "https://www.layers.shop/cdn/shop/files/Charger_300875c5-61c3-4251-ac55-e1d7133f7839.png?v=1751646741&width=493",
    ],
    color: "Charger",
  },
  {
    id: 10,
    name: "mobile skins",
    price: 599,
    images: [
      "https://www.layers.shop/cdn/shop/files/iPhone_14_Pro_or_pro_max_Latte_bloom_4db835f1-c4a1-4540-9852-4880a2392798.png?v=1751403995&width=493",
      "https://www.layers.shop/cdn/shop/files/iPhone_14_Pro_or_pro_max_Latte_bloom_4db835f1-c4a1-4540-9852-4880a2392798.png",
      "https://www.layers.shop/cdn/shop/files/iPhone_14_Pro_or_pro_max_Lilac_Trip_dbee0ce1-d1f6-4945-a504-387ca4995aeb.png",
      "https://www.layers.shop/cdn/shop/files/iPhone_14_Pro_or_pro_max_Espresso_Bloom_1fe893e1-d179-4861-91ca-47bb18d2669d.png",
      "https://www.layers.shop/cdn/shop/files/iPhone_14_Pro_or_pro_max_Mint_Breeze_4b37d6eb-be0f-45e6-9e07-5d0c34e7a3c4.png",
    ],
  },
  {
    id: 11,
    name: "laptop and ipad skins",
    price: 399,
    images: [
      "https://www.layers.shop/cdn/shop/files/macbook-air-15-m2-black-fluid--top.webp?v=1700822973&width=493",
      "https://www.layers.shop/cdn/shop/files/macbook-air-15-m2-baby-pink--top.webp",
      "https://www.layers.shop/cdn/shop/files/macbook-air-15-m2-baby-pink--top.webp",
      "https://www.layers.shop/cdn/shop/files/iPad_Air_13_Inch_Chaos_85224372-e4cf-49d0-be61-df0ae31bfc35.png",
      "https://www.layers.shop/cdn/shop/files/iPad_Air_13_Inch_Shikara_8c257afa-fd01-4716-9e2a-f7114af73b3f.png",
    ],
  },
];
export default productData;