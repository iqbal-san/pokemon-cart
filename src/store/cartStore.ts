import { makeAutoObservable } from 'mobx'

class CartStore {
  items: string[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addItem(item: string) {
    this.items.push(item)
  }

  removeItem(index: number) {
    this.items.splice(index, 1)
  }
}

export const cartStore = new CartStore()