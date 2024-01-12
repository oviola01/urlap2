import TitleView from "./TitleView.js";
import LineView from "./LineView.js";

class TableView{
    #list=[];
    constructor(list, parentItem){
        this.#list=list;
        parentItem.html(`<table class='table table-bordered'>
                        <thead></thead>
                        <tbody></tbody>
                        </table>`);
    this.tbodyItem=parentItem.find("tbody");
    this.theadItem=parentItem.find("thead");
    new TitleView(/*ide nem tudom, mit kéne írni adatbázisnál*/valami, this.theadItem);
    this.showLine();
    }
    
  showLine(){
    this.#list.forEach((item, index)=>{
        new LineView(index, item, this.tbodyItem);
    })
  }
}

export default TableView;