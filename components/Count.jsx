const Count = ({number})=> {
    return (
        <>
         {number > 5 ? ( <div className="purple-container"></div>) :
          (<div className="aqua-container"></div> )}
  
       
        </>
    );
};

export default Count