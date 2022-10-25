export class Todo {
  private _title: string;
  private _description: string;
  private _creationDate: Date;
  private _dueDate: Date;
  private _subTodos: Todo[];
  private _isDone = false;
  private _id: symbol;

  private MAX_DESC_LENGTH = 200;
  private MAX_TITLE_LENGTH = 200;

  constructor(title: string) {
    if (title.length > this.MAX_TITLE_LENGTH) {
      throw new Error("title is to long");
    }
    this._title = title;
    this._creationDate = new Date();
    this._id = Symbol();
  }

  public set title(title: string) {
    if (title.length > this.MAX_TITLE_LENGTH) {
      throw new Error("title is to long");
    }
    this._title = title;
  }

  public get title(): string {
    return this._title;
  }

  public set description(description: string) {
    if (description.length > this.MAX_DESC_LENGTH) {
      throw new Error("description is to long");
    }
    this._description = description;
  }

  public get description(): string {
    return this._description;
  }

  public set dueDate(date: Date) {
    if (date < this._creationDate) {
      throw new Error("the todos dueDate can't be before the creationDate");
    }
    this._dueDate = date;
  }

  public get dueDate(): Date {
    return this._dueDate;
  }

  public set isDone(isDone: boolean) {
    this._isDone = isDone;
  }

  public get isDone(): boolean {
    return this._isDone;
  }

  public get id(): symbol {
    return this._id;
  }

  public get subTodos(): Todo[] {
    return this._subTodos;
  }

  public addSubTodo(subTodo: Todo): void {
    this._subTodos.push(subTodo);
  }

  public removeSubTodo(index: number): void {
    if (this._subTodos[index]) {
      throw new Error("index out of range");
    }
    this._subTodos.splice(index, 1);
  }

  public replaceSubTodo(index: number, todo: Todo): void {
    if (this._subTodos[index]) {
      throw new Error("index out of range");
    }
    this._subTodos.splice(index, 1, todo);
  }
}
