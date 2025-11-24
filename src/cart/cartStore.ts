import { makeAutoObservable } from 'mobx'
import type { CartItem } from '../types/cart'

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

  // Computed values
  get totalItems(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0)
  }

  get totalPrice(): number {
    return this.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
  }
}

export const cartStore = new CartStore()