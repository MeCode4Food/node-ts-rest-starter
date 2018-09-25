export default class Journal{

    // two private fields have dummy values
    private _id: number | null = null;
    private _date: Date = new Date();

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

        this.setId(id);
        this.title = title;
        this.content = content;
        this.setDate(date);

    }

    // id and date should be read only
    get id(): number | null{
        return this._id;
    }
    
    get date(): Date{
        return this._date;
    }

    setId(id: number | null){
        this._id = id;
    }
    
    private setDate(date: Date){
        this._date = date;
    }

    toJSONObj(){
        return JSON.parse(JSON.stringify(this));
    }
}