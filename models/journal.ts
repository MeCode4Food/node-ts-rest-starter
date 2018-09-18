export default class Journal{

    _id: number | null;
    _date: Date;
    title: string;
    content: string;

    constructor(obj: Journal = {} as Journal){
        // since {} will not be accepted as a Journal we cast it as one

        // use object destructuring to declare default values
        let {
            id = null,
            title = "",
            content = "",
            date = new Date()
        } = obj;

        this._id = id;
        this.title = title;
        this.content = content;
        this._date = date;
    }

    // id and date should be read only
    get id(){
        return this._id;
    }
    
    get date(){
        return this._date;
    }


    toJSON(){
        return JSON.parse(JSON.stringify(this));
    }
}