import { makeAutoObservable } from 'mobx'
import type { CartItem } from './types'

class CartStore {
  items: CartItem[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addItem(item: CartItem) {
    this.items.push(item)
  }

  removeItem(name: string) {
    this.items = this.items.filter(i => i.name !== name)
  }

  clearCart() {
    this.items = []
  }
}

export const cartStore = new CartStore()