import { useEffect, useState } from "react";
import { Toast, ToastProps } from "./Toast";
import { observable } from "./Utilis";

export function ToastContainer() {
  const [toasts, setToasts] = useState<Pick<ToastProps,'id' | 'message' | 'variant'>[]
  >([
    /////for testing state
    // { id:1, message:"one"},
    // { id:1, message:"two",variant:"success"}
    
  ]);

  useEffect(()=>{
    return  observable.subscribe(event=>{
      if(event.type==='ADD_TOAST'){
        
       setToasts(prevToast=>[...prevToast,event.toast])
      }
      if(event.type==='REMOVE_ALL'){
        setToasts([]);
      }
    })

  },[])
  return (
    <div className="absolute bottom-0 end-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs ">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          variant={toast.variant}
          onClose={() => {}}
        />
      ))}
    </div>
  );
}
