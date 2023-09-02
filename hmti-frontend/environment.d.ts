//declare in global namespace 
declare global {
    //Js objects in global namespace
    namespace NodeJS {
        interface ProcessEnv {
            ARTERY_PASSWORD_KEY: string;
            ARTERY_LINK_SM1: string;
            ARTERY_LINK_SM2: string;
            ARTERY_LINK_SM3: string;
            ARTERY_LINK_SM4: string;
            ARTERY_LINK_SM5: string;
            ARTERY_LINK_SM6: string;
            ARTERY_LINK_SM7: string;
            ARTERY_LINK_REPORT: string;
            NODE_ENV: "development" | "production";
        }
    }
}

export {};