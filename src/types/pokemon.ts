export type Pokemon = {
  name: string
  imageUrl: string
  detailImageUrl: string
  price: number
  element: "Fire" | "Water" | "Grass" | "Electric"
  description: string
}