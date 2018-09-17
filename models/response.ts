export default class Response{
    // to access class value by keys
    [key : string] : any
    status : string;
    status_message : string | null;
    data : object | null;


    constructor(obj: Response = {} as Response ) {
        // default values
        let {
            status = "",
            status_message = null,
            data = null
        } = obj;

        this.status = status;
        this.status_message = status_message;
        this.data = data;
    }

    toJSON(){
        type genericObject = { [key: string ] : any};
        let output : genericObject = {};

        Object.keys(this).forEach((key) => {
            if(this[key] !== null){
                output[key] = this[key];
            }
        });
        return JSON.parse(JSON.stringify(output));
    }
}