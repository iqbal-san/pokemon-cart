// src/cart/cartStore.ts
import { makeAutoObservable } from 'mobx'

export interface CartItem {
  name: string
  imageUrl: string
  quantity: number
}

class CartStore {
  items: CartItem[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addItem(item: CartItem) {
    const existing = this.items.find(i => i.name === item.name)
    if (existing) {
      existing.quantity += item.quantity
    } else {
      this.items.push({ ...item })
    }
  }

  removeItem(name: string) {
    this.items = this.items.filter(i => i.name !== name)
  }

  decrementItem(name: string) {
    const item = this.items.find(i => i.name === name)
    if (item) {
      if (item.quantity > 1) {
        item.quantity--
      } else {
        this.removeItem(name)
      }
    }
  }
}

export const cartStore = new CartStore()