import React from 'react'

import Icon from '../../assets/img/icon.svg' 
import { TextField, Grid, Tooltip } from '@material-ui/core'
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import { GridContainer, Logo, Title, UploadFileButton } from './styles'

export const defaultFilterEmais = 'gmail;yahoo;uol;outlook;hotmail'

const Header = (props) => {
  return (
    <Grid container >
      <GridContainer item sm={12}>
        <Logo src={Icon} />
        <Title>Leadlovers E-mail Filter</Title>
      </GridContainer>
      
      <Grid item sm={10}>
        <Tooltip title="Email servers to be filtered. Separated by ;" placement="top">
          <TextField 
            id="emails_to_filter" 
            variant="outlined" 
            label="E-mails to filter" 
            defaultValue={defaultFilterEmais}
            fullWidth
            onBlur={(event) => props.onFilterEmailsChange(event.target.value)}
          />
        </Tooltip>
      </Grid>

      <Grid item sm={2}>
        <label htmlFor="upload-csv">
          <input 
            type="file"
            id="upload-csv"
            name="upload-csv"
            accept=".csv"
            multiple={false}
            style={ { display: 'none' } }
            onChange={(event) => props.onFileInputChange(event.target.files)}
          />

          <Tooltip title="Upload .csv file" placement="top">
            <UploadFileButton size="medium" edge="start" component="span">
              <DescriptionTwoToneIcon />
            </UploadFileButton>
          </Tooltip>
        </label>
      </Grid>
    </Grid>
  )
}

export default Header