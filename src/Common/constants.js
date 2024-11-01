import dotenv from 'dotenv'
dotenv.config();


export const ADD_CARD_API = `${process.env.valoBaseUrl}api/cards/`
export const GETALL_CARD_API = `${process.env.valoBaseUrl}api/cards/`
export const GET_CARD_API = `${process.env.valoBaseUrl}api/cards/`
export const DELETE_CARD_API = `${process.env.valoBaseUrl}api/cards/`
export const USER_LOGIN_API = `${process.env.valoBaseUrl}api/user/signIn`

// shimmer card unit
export const shimmer_card_unit = 20;

// Github - username
export const Github_UserName = "EternalValo";

// Github API for User
export const Github_API_User = "https://api.github.com/users/";

// Social Media Links
export const Linkedin_Link = "https://www.linkedin.com/in/rishab-chaudhary-1622b8253/";
export const Instagram_Link = "https://instagram.com/rishabchaudhary22";
export const Github_Link = "https://github.com/EternalValo";
export const Email_Link = "mailto:valoeternal@gmail.com";

// Github Authorization Token
export const options = {
  method: "GET",
  headers: {
    Authorization: "",
  },
};

export const EMAIL_KEY_ID = {
  PUBLIC_KEY : process.env.publickey,
  SERVICE_ID : process.env.serviceId,
  TEMPLATE_ID : process.env.templateId,
}

export const CLOUD_NAME = process.env.cloudName;
