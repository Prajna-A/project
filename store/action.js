export const getWinners= () => {
    return (dispatch) => {
        
      dispatch({ type: 'LOADING' });
      fetch(' https://drive.google.com/open?id=1udrhAEPkI0F2IFfcHa9qcpDmdoLFGMST')
        .then((res) => {
            
          return res.json();
        })
        .then((data) => {
            console.log(data)
          dispatch({ type: 'LOADED' });
          dispatch({ type: 'UPDATENOBELWINNERS', payload: data });
        })
        .catch((error) => {
            console.error('error:', error);
          });
    };
  };
      
