import { Injectable } from '@angular/core';
import { Observable, from , pipe, observable } from 'rxjs'
import { map } from 'rxjs/operators'



const foodListStatFromVowels = () => <T>(incomingList: Observable<T>) => {
  return new Observable<T>(observer => {
    return incomingList.subscribe({
      next(x){
        let chu = x.toString().charAt(0).toLowerCase();
        if(chu == 'a' || chu == 'e' || chu == 'i' || chu == 'o' || chu == 'u' ){
          observer.next(x)
        }
      },
      error(err){
        observer.error(err)
      },
      complete(){
        observer.complete()
      }
    })
  })
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  public foodList=['frenchfries','burger','pizza','coldDrink', 'Usha', 'ann']

  constructor() { }

  getFoodDetails(): Observable<string>{
    return from(this.foodList)
  }
  foodDetailInUpperCase():Observable<string>{
    return from(this.foodList).pipe(map(food => food.toUpperCase()))
  }
  
  foodListStatFromVowels():Observable<string>{
    return from(this.foodList).pipe(
      foodListStatFromVowels(),
      map( food => food.toUpperCase())
    )
  }

  
}

