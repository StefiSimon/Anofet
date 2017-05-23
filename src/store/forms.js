
export default class Forms {
    id;
    name;
    content;
    startDate;
    endDate

    constructor(id, name, content, startdate, enddate) {
        this.name = name;
        this.content = content;
        this.startDate = startdate;
        this.endDate = enddate;
        this.id = id;
    }
}