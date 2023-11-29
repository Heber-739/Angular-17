import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserResponse, UsersResponse } from '@interfaces/users.interface';
import { delay, map } from 'rxjs';

interface State {
  users:User[];
loading:boolean;
}


@Injectable({providedIn: 'root'})
export class UsersService {

  private http:HttpClient = inject(HttpClient);

   #state = signal<State>({
    loading:true,
    users:[]
})

public users = computed(()=> this.#state().users)
public loading = computed(()=> this.#state().loading)

constructor(){
  this.http.get<UsersResponse>('https://reqres.in/api/users').pipe(
    delay(2000)
  )
  .subscribe(({data}) => {
    this.#state.set({loading:false,users:data})
  })
}

getUserById(id:string){
  return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`).pipe(
    delay(2000),
    map((res)=>res.data)
  )
}
}
