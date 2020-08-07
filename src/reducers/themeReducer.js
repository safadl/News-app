import {TOGGLE_THEME} from '../actions/types.js'


const toggleState={
switchOn:false

}
const themeReducer =(state=toggleState,action)=>{
    switch(action.type){
        case DARK_THEME:
            state.switchOn=true
            return  ;

            
        case LIGHT_THEME: 
        state.switchOn=false

        return ;
        default:
            return state;
    
    }
}