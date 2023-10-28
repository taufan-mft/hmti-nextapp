//declare in global namespace 
declare global {
    //Js objects in global namespace
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production";
            SEMINAR_API: string;
            DRIVEIMAGE_API: string;
        }
    }
}

export {};