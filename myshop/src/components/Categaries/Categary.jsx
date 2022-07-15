import styled from "styled-components"
import { Categaries } from '../Slider/data'
import CategaryItem from "./CategaryItem"
import {mobile} from "../../respnsive";


const Container=styled.div`
     display:flex;
     padding:20px;
     justify-content:space-between;
     ${mobile({flexDirection:"column"})};
`;

export default function Categary() {

  return (
    <Container>
         {Categaries.map((item)=>(
             <CategaryItem  item={item} />
         ))}

    </Container>
  )
}
