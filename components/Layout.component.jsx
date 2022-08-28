import React from 'react';
import SiteheaderComponent from './Siteheader.component';

const LayoutComponent = ({ children }) => {
  return (
    <div>
      <SiteheaderComponent/>
        { children }
      
    </div>
  );
}

export default LayoutComponent;
