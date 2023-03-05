/*import React from "react";

const initialState = {
    
    all_products:[],
    filters:{
        color:"all"
    },

};
const getUniqueData = (data,attr) => {
    let newVal = data.map((curElem) => {
        return curElem[attr];
    });

    return(newVal = ["all", ...new Set(newVal)]);
}
const colorsData = getUniqueData("colors");
console.log(
    colorsData
)

const Colors = () => {
  return (
    <div className="filter-colors colors">
      <h3>Colors</h3>
      <div className="filter-color-style">{
      colorsData.map((curColor, index) => {
        return <button>{curColor}</button>;
      })
      }</div>
    </div>
  );
};

export default Colors;*/
