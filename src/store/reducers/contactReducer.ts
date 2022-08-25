interface IContact{
    id: number,
    name: string
}

interface IContactAction{
    type: string,
    payload:IContact
}

interface IContactState{
    contacts:IContact[]
}

const initialState:IContactState={
    contacts:[]
};

export const contactRenderer=(state=initialState,action:IContactAction):IContactState =>{
    switch(action.type){
        default:return state;
    }
}