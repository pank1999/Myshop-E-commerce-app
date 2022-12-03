import styled from "styled-components"
import { newCategories } from '../Slider/data'
import CategaryItem from "./CategaryItem"
import {mobile} from "../../respnsive";

export default function NewCategory() {
    const Container=styled.div`
     display:flex;
     padding:20px;
     justify-content:space-between;
     ${mobile({flexDirection:"column"})};
`;
  return (
    <Container>
         {newCategories.map((item)=>(
             <CategaryItem  item={item} />
         ))}
    </Container>
  )
}
