import type { NextPage } from 'next';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


type Props = {

  isFinish: number;
};


const Step3 : React.FC<Props>=({isFinish})=> {


  return (
  
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl mb-10 mt-10"> Remplir cette Formulaire :</p>
        <div className="flex flex-wrap xl:w-2/3 justify-between ">
       <TextField className="mb-6 w-96 " name="nom" label={'Nom'} type="text"  id="margin-dense"  />
      <TextField className="mb-6 w-96 " name="prenom" label={'Prenom'} type="text" id="margin-dense"  />
      <TextField className="mb-6 w-96  " name="tele" label={'Numero de telephone'} type="tel" id="margin-dense"  />
      <TextField className="mb-6  w-96 " name="cne" label={'CNE'} type="number" id="margin-dense"  />
      <TextField className="mb-6  w-96 " name="address"  label={'Adress'} type="text" id="margin-dense"  />
       </div>

    </div>
    
  


      
       
    
    
  );
}

export default Step3