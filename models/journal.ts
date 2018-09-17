export default class Journal{
        private id: number | null;
        title: string;
        content: string;
        private date: Date;

        constructor(obj: Journal = {} as Journal){
            // since {} will not be accepted as a Journal we cast it as one

            // use object destructuring to declare default values
            let {
                id = null,
                title = "",
                content = "",
                date = new Date()
            } = obj;

            this.id = id;
            this.title = title;
            this.content = content;
            this.date = date;
        }

        toJSON(){
            return JSON.parse(JSON.stringify(this));
        }
}