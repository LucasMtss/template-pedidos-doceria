

const MENU = [
  {
    title: "Os mais vendidos",
    data: [
      {
        id: "1",
        title: "Brownie recheado",
        price: 10.0,
        description:
          "Um delicioso brownie recheado para alegrar seu dia!",
        cover: "assets/products/cover/1.png",
        thumbnail: "assets/products/thumbnail/1.png",
        ingredients: [
          "Brownie molhadinho",
          "Recheio de Ninho e Nutella",
        ],
      },
    ],
  },
  {
    title: "Promoções",
    data: [
      {
        id: "2",
        title: "Copo da felicidade",
        price: 20.0,
        description:
          "Um copo extremamente recheado com tudo que há de bom",
        cover: "assets/products/cover/2.png",
        thumbnail: "assets/products/thumbnail/2.png",
        ingredients: [
          "Brownie",
          "Morango",
          "Creme de Ninho",
          "Nutella",
        ],
      },
      {
        id: "3",
        title: "Tortinha",
        price: 15.90,
        description:
          "A melhor tortinha que você vai comer na vida!",
        cover: "assets/products/cover/3.png",
        thumbnail: "assets/products/thumbnail/3.png",
        ingredients: [
          "Brownie",
          "Nutella",
          "Brigadeiro branco",
          "Kinder Bueno",
        ],
      },
      
    ],
  },
  {
    title: "Ovos de Páscoa",
    data: [
      {
        id: "5",
        title: "Ovo de colher deitado tradicional",
        price: 50,
        description:
          "Experimente nossos deliciosos ovos de colher",
        cover: "assets/products/cover/5.jpg",
        thumbnail: "assets/products/thumbnail/5.png",
        ingredients: [
          "Brigadeiro",
          "Brigadeiro branco",
          "Amendoin",
        ],
      },
      {
        id: "6",
        title: "Ovo de colher deitado especiais",
        price: 50,
        description:
          "Experimente nossos deliciosos ovos de colher",
        cover: "assets/products/cover/5.png",
        thumbnail: "assets/products/thumbnail/5.png",
        ingredients: [
          "Pudim",
          "Fererro Rocher",
          "Kinder Buenno",
        ],
      },
    ],
  },
  {
    title: "Bebidas",
    data: [
      {
        id: "7",
        title: "Coca cola lata",
        price: 6.9,
        thumbnail: "assets/products/thumbnail/7.png",
        cover: "assets/products/cover/7.png",
        description:
          "Uma coca super gelada para acompanhar o seu super lanche...",
        ingredients: [],
      },
    ],
  },
]

const PRODUCTS = MENU.map((item) => item.data).flat()

const CATEGORIES = MENU.map((item) => item.title)

export type ProductProps = (typeof PRODUCTS)[0]

export { MENU, PRODUCTS, CATEGORIES }
