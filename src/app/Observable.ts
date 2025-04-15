export type Callabck = (data: any | null) => void;

export default class Observable<T> {

  observers: Callabck[];

  constructor() {
    this.observers = [];
  }

  subscribe(callback: Callabck) {
    this.observers.push(callback);
  }

  unsubscribe(callback: Callabck) {
    this.observers = this.observers.filter((observer) => observer !== callback);
  }

  notify(data: T) {
    this.observers.forEach((observer) => observer(data));
  }
}
