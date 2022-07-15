import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
   color:white;
   background-color:teal;
   text-align:center;
   align-items:center;
   margin:0;
   justfy-content:center;
   font-size:16px;
   font-weight:bold;
   height:30px;
`;

export default function Announcement() {
  return (
    <Container>
         Sale is live !
    </Container>
  )
}
