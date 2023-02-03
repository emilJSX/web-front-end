import {store} from '../store';
import { drawerControll } from '../store/slices/counterSlice';

export const useDrawer = ()=>{
        console.log("useDrawer is loading")
        if(store.getState().counter.toggle == true){
        console.log("useDrawer is ready")
        store.dispatch(drawerControll());
        
    }
}