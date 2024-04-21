import { Observable } from "./Observable";
import { ToastProps } from './Toast';



type Events=
{
    type:'ADD_TOAST' |'REMOVE_ALL';
    toast:Pick<ToastProps,'id' | 'message' | 'variant'>;
}
// {
//     type:'REMOVE_TOAST';toastId:number
// }

export const observable=new Observable <Events>()
observable.subscribe((data)=>{

})

export function toast(message:string){
    observable.notify({type: 'ADD_TOAST', toast:{id:Math.random(),message}})
}
toast.success=(message:string)=>{
    observable.notify({type: 'ADD_TOAST', toast:{id:Math.random(),message,variant:"success"}})
}
toast.error=(message:string)=>{
    observable.notify({type: 'ADD_TOAST', toast:{id:Math.random(),message,variant:"error"}})
}
toast.dismissAll=()=>{
    observable.notify({type: 'REMOVE_ALL'})

}