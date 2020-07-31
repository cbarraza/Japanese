import React from 'react';
// Material UI
import CircularProgress from '@material-ui/core/CircularProgress';
// Constants
import { PRIMARY_COLOR } from '../../constants/colors';

const loadingStyle = {
  color: PRIMARY_COLOR
};

const Loading = () => {  
  return (
    <CircularProgress style={loadingStyle} />
  );
};

export default Loading;
