import React from 'react'
import { StyledDownloadButton } from './styles'

const DownloadButton = (props) => {
  return (
    <StyledDownloadButton variant="contained" fullWidth onClick={props.onClick}>
      Download Filtered CSV
    </StyledDownloadButton>
  )
}

export default DownloadButton