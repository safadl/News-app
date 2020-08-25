import {CHANGE_PAGE} from './action'

import{pressed} from '../../components/Home'
const initialState = null;
let  page=1;
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_PAGE: {
        if(pressed==2)
        {
            page=2
        }
        else if(pressed==3){
            page=3
        }else if(pressed==4){
            page=4
        }else if(pressed==5){
            page=5
        }else if(pressed==6){
            page=6
        }else if(pressed===7){
            page=7
        }else if(pressed==8){
            page=8
        }
        }

		default: {
			return state;
		}
	}
};