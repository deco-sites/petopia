import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: { 
    container: 
    { 
      center: true 
    }, 
  extend: { 
    keyframes: 
    {
      slideCertificates: {
        "0%": {
            marginLeft: "0"
        },
    
        "50%": {
            marginLeft: "-3000px"
        },
    
        "to": {
            marginLeft: "0"
        }
    }
    } 
  } 
},

};
