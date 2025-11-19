import { makeAutoObservable } from 'mobx'

class CartStore {
  items: string[] = []

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

  removeItem(index: number) {
    this.items.splice(index, 1)
  }
}

export const cartStore = new CartStore()