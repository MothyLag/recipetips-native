export interface IDespensaItem {
  ingredientID: string;
  name?: string;
  quantity: number;
  unit: string;
}

export interface ICreateDespensaData {
  name: string;
  items: IDespensaItem[];
}
