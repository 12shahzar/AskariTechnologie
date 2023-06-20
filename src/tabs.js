import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Hearder.css"
import Tab1 from "./Assets/open.png"
import Tab2 from "./Assets/close.png"
import Tab3 from "./Assets/mobiletab.png"
import Tab4 from "./Assets/graphics.png"
import Tab5 from "./Assets/microsoft.png"
import Tab6 from "./Assets/integretions.png"
import Tab7 from "./Assets/database.png"
import Tab8 from "./Assets/testingautomation.png"
import Tab9 from "./Assets/advancetech.png"





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',marginRight:'-10px' }}  >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Open Source" {...a11yProps(0)} />
          <Tab label="Close Source" {...a11yProps(1)} />
          <Tab label="Mobile" {...a11yProps(2)} />
          <Tab label="Graphic Design" {...a11yProps(3)} />
          <Tab label="Microsoft" {...a11yProps(4)} />
          <Tab label="Integrations" {...a11yProps(5)} />
          <Tab label="Database" {...a11yProps(6)} />
          <Tab label="Testing and Automation" {...a11yProps(7)} />
          <Tab label="Testing and Automation" {...a11yProps(8)} />
          <Tab label="Advanced Technologies" {...a11yProps(9)} />
         
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <div style={{display:'flex' , alignItems:'center',justifyContent:'center'}}>
<img src={Tab1} />
        </div>
     
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div style={{display:'flex' , alignItems:'center',justifyContent:'center'}}>
<img src={Tab2} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div style={{display:'flex' , alignItems:'center',justifyContent:'center'}}>
<img src={Tab3} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div style={{display:'flex' , alignItems:'center',justifyContent:'center'}}>
<img src={Tab4} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div style={{display:'flex' , alignItems:'center',justifyContent:'center'}}>
<img src={Tab5} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div style={{display:'flex' , alignItems:'center',justifyContent:'center'}}>
<img src={Tab6} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div style={{display:'flex' , alignItems:'center',justifyContent:'center'}}>
<img src={Tab7} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <div style={{display:'flex' , alignItems:'center',justifyContent:'center'}}>
<img src={Tab8} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={8}>
      <div style={{display:'flex' , alignItems:'center',justifyContent:'center'}}>
<img src={Tab9} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={9}>
      <div style={{display:'flex' , alignItems:'center',justifyContent:'center'}}>
<img src={Tab9} />
        </div>
      </TabPanel>
    </Box>
  );
}
