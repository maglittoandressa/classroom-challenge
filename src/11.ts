class Counter {
  private _count = 0;

  increment() {
    this._count++;
  }

  decrement() {
    this._count--;
  }

  get count(): number {
    return this._count;
  }
}
