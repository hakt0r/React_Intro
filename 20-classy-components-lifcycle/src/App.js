import React      from 'react';
import AppBar     from '@material-ui/core/AppBar';
import Tabs       from '@material-ui/core/Tabs';
import Tab        from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box        from '@material-ui/core/Box';
import PostLogin from './PostLogin';
import PostLoginReduced from './LoginReduced/PostLoginReduced';
import CountdownExample from './CountdownExample';
import Form from './Form';


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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Countdown"  {...a11yProps(0)} />
          <Tab label="Form"       {...a11yProps(1)} />
          <Tab label="Post Login" {...a11yProps(2)} />
          <Tab label="Reduced   " {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <CountdownExample/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Form/>
      </TabPanel>
  
      <TabPanel value={value} index={2}>
        <PostLogin/>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <PostLoginReduced/>
      </TabPanel>
    </div>
  );
}
