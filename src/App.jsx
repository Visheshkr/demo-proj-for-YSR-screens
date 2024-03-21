import * as React from 'react';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import {Box, Button, Dialog, Divider, Grid ,Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography} from'@mui/material';
import { TextareaAutosize } from '@mui/base';

const arr=[1,2,3,4];
const App = () => {
  const [openBox, setOpenBox] = React.useState(false);
  const handleErroneousClick =()=>{
    console.log(openBox);
    setOpenBox(true);
  }
  return (
    <>
      <div style={{display:"flex",alignItems:"center"}}>
        <MedicalServicesIcon />
       <Typography sx={{ ml:'4px',fontSize:'bold'}}>Erroneous Claims</Typography>
      </div>
      <Divider sx={{border:'1px solid black'}} orientation="horizontal" flexItem /><br/>
      <br/>
      <Typography variant="h6" sx={{textAlign:"center"}}>CLAIM APPROVAL WORKFLOW</Typography>
        <Grid container spacing={2} >
          <Table sx={{ width:"100%" , ml:'17px'}}>
            <TableHead>
              <TableRow >
                <TableCell sx={{textAlign:'center'}}>Date & Time</TableCell>
                <TableCell align='right' sx={{textAlign:'center'}}>Role & Name</TableCell>
                <TableCell align='right'  sx={{textAlign:'center'}}>Remarks</TableCell>
                <TableCell align='right' sx={{textAlign:'center'}}>Action</TableCell>
                <TableCell align='right' sx={{textAlign:'center'}}>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{border:"2px solid gray"}}>
              {arr.map((item)=>(

              <TableRow  key={item} scope="row"  sx={{border:"2px solid gray"}}>
                <TableCell style={{border:'1px solid black'}} align="right"><TextField minRows={4}></TextField></TableCell>
                <TableCell style={{border:'1px solid black'}} align="right" ><TextField minRows={4}></TextField></TableCell>
                <TableCell style={{border:'1px solid black'}} align="right" ><TextField minRows={4}></TextField></TableCell>
                <TableCell style={{border:'1px solid black'}} align="right" ><TextField minRows={4}></TextField></TableCell>
                <TableCell style={{border:'1px solid black'}} align="right" ><TextField minRows={4}></TextField></TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table> 
          <br/>
        </Grid>
          <br/>
          <Button variant="outlined" onClick={handleErroneousClick} sx={{ display:'flex',m:'auto',mt:'20px'}}>Initiate Erroneous Claims</Button>
          <br/>
          {openBox && (
          <Grid >
          <Grid sx={{display:"flex" ,justifyContent:"center"}}><Typography sx={{m:"15px"}}>Remarks*</Typography><TextareaAutosize minRows={3}></TextareaAutosize></Grid>
          <Grid container sx={{display:"flex" ,justifyContent:"center"}}>
          <Button variant="contained"  sx={{ display:'inline-block',mr:'7px',mt:'20px'}}>Submit</Button>
          <Button variant="contained"  sx={{ display:'inline-block',mr:'7px',mt:'20px'}}>Add attachments</Button>
          </Grid>
          </Grid>)}
          
    </>
  )
}

export default App;