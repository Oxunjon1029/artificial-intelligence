import {setLocalstorage,GetLanguage} from '../Utilities';
export const ChangeLang = (state=true,action) =>{
    switch(action.type){
        case "UZ":
            setLocalstorage("Oxunjon1999","uzbekcha")
        return false
        case "ENG":
            setLocalstorage("Oxunjon1999","inglizcha")
            return true
        default :


        {!GetLanguage() ? setLocalstorage("Oxunjon1999","uzbekcha"):setLocalstorage("Oxunjon1999","inglizcha")}
            return state
    }
}