import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private firestore: AngularFirestore) {}

  form = new FormGroup({
    customerName: new FormControl('',Validators.required),
    orderNumber: new FormControl(''),
    coffeeOrder: new FormControl(''),
    completed: new FormControl(false),
  });

  createCoffeeOrder(data: JSON): Promise<JSON> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('coffeeOrders')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }

  getCoffeeOrders() {
    return this.firestore.collection('/coffeeOrders').snapshotChanges();
  }
}
