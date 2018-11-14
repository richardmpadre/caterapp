
export class Event {

  constructor(
    public id: number,
    public title: string,
    public start: Date,
    public end: Date,
    public typeId: number
  ) { }

}
