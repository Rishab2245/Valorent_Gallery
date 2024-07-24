import dotenv from 'dotenv'
dotenv.config();


export const ADD_CARD_API = `${process.env.valoBaseUrl}api/cards/`
export const GETALL_CARD_API = `${process.env.valoBaseUrl}api/cards/`
export const GET_CARD_API = `${process.env.valoBaseUrl}api/cards/`

// shimmer card unit
export const shimmer_card_unit = 20;

// Github - username
export const Github_UserName = "rishab2245";

// Github API for User
export const Github_API_User = "https://api.github.com/users/";

// Social Media Links
export const Linkedin_Link = "https://www.linkedin.com/in/rishab-chaudhary-1622b8253/";
export const Twitter_Link = "https://twitter.com/rishab2245";
export const Github_Link = "https://github.com/rishab2245";
export const Email_Link = "mailto:temporary@gmail.com";

// Github Authorization Token
export const options = {
  method: "GET",
  headers: {
    Authorization: "",
  },
};

