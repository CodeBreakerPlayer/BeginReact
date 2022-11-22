import { enContentView } from "../enum/ContentViewEnum";

export type ItemState = {[key:number]:boolean};
export interface SelectedItemState{
    Key:enContentView;
    Value:boolean;
}