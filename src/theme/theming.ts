import { storeTheme } from "@/stores/theme/theme"

export interface Theme{
    primary:string,
    bg:string,
    bgDarker:string
}

export interface ThemingType{
    1:Theme,
    2:Theme,
    3:Theme,
    4:Theme,
    5:Theme,
    6:Theme,
}

export const Theming:ThemingType ={
    1:{
        primary:"#5cabca",
        bg:"#0b1021",
        bgDarker:"#05070e"
    },
    2:{
        primary:"#2bca2b",
        bg:"#000000",
        bgDarker:"#113423"
    },
    3:{
        primary:"#f58233",
        bg:"#0b1021",
        bgDarker:"#05070e"
    },
    4:{
        primary:"#ff0000",
        bg:"#000000",
        bgDarker:"#3e0b19"
    },
  
    5:{
        primary:"#000000",
        bg:"#ffffff",
        bgDarker:"#ffffff"
    },
    6:{
        primary:"#c3eb5b",
        bg:"#0b1021",
        bgDarker:"#05070e"
    },
}



export const UsePrimary = () =>{
    const Theme = storeTheme.getState().theme
    console.log("theme", Theme);
    
    return Theme ? Theming[Theme as keyof ThemingType].primary : ""
    
  }
 export const UseBg = () =>{
    const Theme = storeTheme.getState().theme
    return Theme ? Theming[Theme as keyof ThemingType].bg : ""
  }

  export const UseBgDarker = () =>{
    const Theme = storeTheme.getState().theme
    return Theme ? Theming[Theme as keyof ThemingType].bgDarker : ""
  }