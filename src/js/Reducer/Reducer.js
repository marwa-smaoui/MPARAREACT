import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "../const/ProductType";

const intialState={

    products : [
        {
          id: Math.random(),
          name: "AVÈNE CLEANANCE",
          description: "GEL NETTOYANT 200 ML",
          src: "../../images/avene.jpg",
          price: 30.0,
          qte:5,
        },
        {
          id: Math.random(),
          name: "DOPPELHERZ AKTIV",
          description: "ZINC+HISTIDINE+VIT C",
          src: "../../images/doppelherz.jpg",
          price: 36.0,
          qte:8,
        },
      
        {
          id: Math.random(),
          name: "KLORANE SHAMPOOING",
          description: "DÉMÉLANT 200 ML",
          src: "../../images/klorane.jpg",
          price: 19.5,
          qte:5,
        },
      
        {
          id: Math.random(),
          name: "ACCU-CHEK ACTIVE",
          description: "25 BANDELETTES ",
          src: "../../images/bandelettes.jpg",
          price: 26.8,
          qte:6,
        },
        {
          id: Math.random(),
          name: "SVR SUN SECURE ",
          description: "SPF 50 + 50ML",
          src: "../../images/sun-secure-blur-spf50.jpg",
          price: 42.9,
          qte:10,
        },
        {
          id: Math.random(),
          name: "BIOXSINE SHAMPOING",
          description: "AUX HERBES ANTI-CHUTE",
          src: "../../images/bioxsine.jpg",
          price: 32.0,
          qte:9,
        },
        {
          id: Math.random(),
          name: "DODIE BIBERON",
          description: "250ML ROSE 0-6",
          src: "../../images/bibron.jpg",
          price: 16.0,
          qte:2,
        },
        {
          id: Math.random(),
          name: "SESDERMA K-VIT SERUM ",
          description: "ANTICERNES, 30ML",
          src: "../../images/k-vit-.jpg",
          price: 119.5,
          qte:4,
        },
        {
          id:Math.random(),
          name: "FILORGA HYDRA-HYAL ",
          description: "UN SÉRUM CONCENTRE POUR REPULPER INTENSÉMENT LA PEAU, 30ML",
          src: "../../images/filorga.jpg",
          price: 112.000,
          qte:3,
        },
      ],
      users:[
        {id:Math.random(),
          email:'marwasmaouii@gmail.com',
          pwd:'08041994',
          username:'Marwa Smaoui',

      },
      {id:Math.random(),
        email:'admin@gmail.com',
        pwd:'123456',
        username:'Admin'},
      ]
}
const Reducer = (state=intialState,{type,payload}) => {
   switch (type) {
       case ADD_PRODUCT:
         return {...state,products:[...state.products,payload]}
        case DELETE_PRODUCT:
         return{...state,
          products:state.products.filter(product=> product.id!==payload)}
       case EDIT_PRODUCT:
         return {
           ...state,
           products: state.movies.map((product) =>
           product.id === payload.id ? { ...product, ...payload } : product
           )
        }
       default:
         return state;
   }
}
 
export default Reducer;