import {store} from '../store';
import { drawerControll } from '../store/slices/counterSlice';

export const useDrawer = ()=>{
        if(store.getState().counter.toggle == true){
        store.dispatch(drawerControll());
        
    }
}