import React, { useState } from 'react'
import {GetImages} from '../Helpers/GetImages'
import { Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const NasaImagesApp = () => {

    return(
        <div>
           
        <Toolbar/>
          <GetImages/>
        
        </div>
    )

} 

export default NasaImagesApp;