export {}
// interface IUserState{
//     user:{
//         id:number,
//         login:string,
//         password:string
//     }|null,
//     loading:boolean,
//     error:null|string
// }

// interface IUserAction {
//     type:string,
//     payload?:{
//         id:number,
//         login:string,
//         password:string
//     }|string
// }

// const initialState:IUserState ={
//     user:null,
//     loading:false,
//     error:null
// }

// export const userReducer=(state=initialState,action:IUserAction):IUserState=>{
//     switch(action.type){
//         case 'FETCH_LOGIN':
//             return {user:null,loading:true,error:null}
//         case "LOGIN_SUCCES":
//             return {loading:false,error:null,user:{...action.payload}}
//         case "LOGIN_ERROR":
//             return {loading:false,error:action.payload,user:null}
//         case "LOGOUT":
//             return {user:null,loading:false,error:null}
//         default:return state;
//     }
// }