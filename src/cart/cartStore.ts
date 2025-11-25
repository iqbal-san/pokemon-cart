import { makeAutoObservable } from "mobx"
import type { CartItem } from "../types/cart"

class CartStore {
  items: CartItem[] = []

  constructor() {
    makeAutoObservable(this)
    this.load()
  }

  addItem(item: CartItem) {
    const existing = this.items.find(i => i.name === item.name)
    if (existing) {
      existing.quantity += item.quantity
    } else {
      this.items.push({ ...item })
    }
    this.save()
  }

  removeItem(name: string) {
    this.items = this.items.filter(i => i.name !== name)
    this.save()
  }

  incrementItem(name: string, imageUrl: string, price: number) {
    const existing = this.items.find(i => i.name === name)
    if (existing) {
      existing.quantity++
    } else {
      this.items.push({ name, imageUrl, price, quantity: 1 })
    }
    this.save()
  }

  decrementItem(name: string) {
    const existing = this.items.find(i => i.name === name)
    if (existing) {
      if (existing.quantity > 1) {
        existing.quantity--
      } else {
        this.items = this.items.filter(i => i.name !== name)
      }
      this.save()
    }
  }

  get totalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0)
  }

  get totalPrice() {
    return this.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
  }

  save() {
    localStorage.setItem("cart", JSON.stringify(this.items))
  }

  load() {
    const data = localStorage.getItem("cart")
    if (data) {
      this.items = JSON.parse(data)
    }
  }
  
  reset() {
    localStorage.removeItem("cart")
    this.items = []
    this.save()
  }
}

export const cartStore = new CartStore()