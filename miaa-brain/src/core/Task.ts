export abstract class Task {
  id: string;
  name: string;
  description: string;

  constructor(id: string, name: string, description: string) {
      this.id = id;
      this.name = name;
      this.description = description;
  }

  abstract execute(parameters: any): Promise<any>;

}