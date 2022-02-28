import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    mathSum(): number{
        let sum = 0;
        const itemsArr = Array.from(this.items);

        itemsArr.forEach(item => {
            sum += item.price
        })

        return sum
    }

    mathSumWithDiscont(discont: number): number{
        return (this.mathSum() - (this.mathSum() * (discont / 100)))
    }

    deleteObject(id: number): void{
        const itemsArr = this._items;

        const index = itemsArr.findIndex(item => item.id === id);

        if (index !== -1){
            delete this._items[index]
            this._items.shift();
        }
    }
}