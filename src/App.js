import React from 'react';


import Papa from 'papaparse'

import { GlobalStyles, StyledContainer } from './styles'
import Header, { defaultFilterEmais } from './components/Header'
import LeadsTable from './components/Table'
import DownloadButton from './components/DownloadButton'

function App() {
  const [rawData, setRawData] = React.useState([])
  const [filterEmails, setFilterEmails] = React.useState([])
  const [filteredData, setFilteredData] = React.useState([])

  const handleFileInputChange = (files) => {
    if(files.Length <= 0) return

    Papa.parse(files[0], {
      header: true,
      complete: (result) => {
        setRawData(result.data)
      }
    })
  }

  const handleFilterEmailsChange = (emails) => {
    const splitted_emails = emails.split(';')

    const complete_filter_emails = []
    
    splitted_emails.forEach(email => {
      complete_filter_emails.push(`${email}.com`)
      complete_filter_emails.push(`${email}.com.br`)
    });

    setFilterEmails(complete_filter_emails)
  }

  const handleOnDownloadClick = () => {
    if(filteredData.length <= 0) return;

    const filtered_csv_content = Papa.unparse(filteredData)

    const blob = new Blob([filtered_csv_content],{
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob)
    
    const link = document.createElement('a');
    link.download = "text.csv";
    link.href = url;
    link.click();
  }

  React.useEffect(()=>{
    handleFilterEmailsChange(defaultFilterEmais)
  },[])

  React.useEffect(()=> {
    const filteredEmails = rawData.filter(entry => {
      const splitted_email = entry.email?.split('@')
  
      if(splitted_email !== undefined) {
        const mail_server = splitted_email[1]
        
        if(!filterEmails.includes(mail_server))
          return true
      }
    
      return false
    })
    
    setFilteredData(filteredEmails)
  }, [rawData, filterEmails])

  return (
    <>
      <StyledContainer maxWidth="md">
        <Header onFileInputChange={handleFileInputChange} onFilterEmailsChange={handleFilterEmailsChange}/>

        <LeadsTable tableData={filteredData}/>

        <DownloadButton onClick={handleOnDownloadClick}/>
      </StyledContainer>
      <GlobalStyles />
    </>
  );
}

export default App;
