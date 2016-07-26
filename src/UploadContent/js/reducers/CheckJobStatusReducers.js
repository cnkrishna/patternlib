const initilizeData = [{
      rows : [],
      columns : []
      
}];

const CheckJobStatusReducers = (state = initilizeData, action) => { 
  
  switch (action.type) {
    case 'JOB_STATUS':
      return[
        ...state, action.data
      ]
    default:
      return state
  }
}

export default CheckJobStatusReducers
