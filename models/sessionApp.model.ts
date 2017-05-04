
export class SessionAppModel {

  constructor(private id: string, private name: string) {
  }

  public getName () {
    return this.name;
  }
}
