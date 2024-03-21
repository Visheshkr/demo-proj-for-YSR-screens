import * as React from 'react';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import {Box, Button, Dialog, Divider, Grid ,Table, TableBody, TableCell, TableHead, TableRow, Typography} from'@mui/material';
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
      <MedicalServicesIcon sx={{mt:'8px'}}/> <Typography sx={{display:'inline-block',ml:'4px',fontSize:'bold'}}>Erroneous Claims</Typography>
      <Divider sx={{border:'1px solid black'}} orientation="horizontal" flexItem /><br/>
      <br/>
      <Typography variant="h6" sx={{textAlign:"center"}}>CLAIM APPROVAL WORKFLOW</Typography>
        <Grid container spacing={2} sx={{m:"auto" ,overflow:"hidden"}}>
          <Table sx={{ minWidth: 650}}>
            <TableHead>
              <TableRow>
                <TableCell sx={{textAlign:'center'}}>Date & Time</TableCell>
                <TableCell align='right' sx={{textAlign:'center'}}>Role & Name</TableCell>
                <TableCell align='right'  sx={{textAlign:'center'}}>Remarks</TableCell>
                <TableCell align='right' sx={{textAlign:'center'}}>Action</TableCell>
                <TableCell align='right' sx={{textAlign:'center'}}>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{overflow:'hidden'}}>
              {arr.map((item)=>(

              <TableRow  key={item} scope="row" >
                <TableCell ><TextareaAutosize minRows={4}></TextareaAutosize></TableCell>
                <TableCell align="right" ><TextareaAutosize minRows={4}></TextareaAutosize></TableCell>
                <TableCell align="right" ><TextareaAutosize minRows={4}></TextareaAutosize></TableCell>
                <TableCell align="right" ><TextareaAutosize minRows={4}></TextareaAutosize></TableCell>
                <TableCell align="right" ><TextareaAutosize minRows={4}></TextareaAutosize></TableCell>
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