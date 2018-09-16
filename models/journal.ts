class Journal{
        private id: number | null;
        title: string;
        content: string;
        private date: Date;

        constructor(id: number | null, title: string, content: string, date: Date | null){
            this.id = id? id : null;
            this.title = title;
            this.content = content;
            this.date = date? date : new Date();
        }

}