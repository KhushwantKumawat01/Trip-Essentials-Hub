import React from 'react'
import "./index.css"

export default function Stats({items}) {
    if(!items.length) return<p className="Footer"><em>Start Adding Some Items to Your Packing List</em></p>
    const numItems = items.length;
    const numPacked = items.filter((item)=>item.packed).length;
    const percentage = Math.round((numPacked/numItems)*100);
    return (
      <footer className="Footer">
        <em>
        {percentage === 100 ? "You Got Everything, Ready to go " : `You Have ${numItems} Items on your List, and you already packed ${numPacked}, ${percentage}%.`}        
        </em>
      </footer>
    );
  }
