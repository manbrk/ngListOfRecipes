import {Version} from './version.model';

export class Recipe {
  public name: string;
  public content: string;
  public dateCreated: object;
  public versions: Version[];

  constructor(name: string, content: string, date: object, versions: Version[]) {
    this.name = name;
    this.content = content;
    this.dateCreated = date;
    this.versions = versions;
  }

}

