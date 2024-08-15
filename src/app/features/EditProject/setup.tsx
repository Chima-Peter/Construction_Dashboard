import { useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectProjectById } from '../ViewProject/ViewProjectSlice';
import { useEditContext } from './page';

export default function SetUp() {
   // Call useEditContext first
   const { setProjectDetails, setResource, setBudget, setStatus, setShow, id } = useEditContext();

   // Always call useAppSelector
   const data = useAppSelector((state) => id ? selectProjectById(state, id) : null);

   useEffect(() => {
      if (id === '') {
         setShow(false);
      } else if (data) {
         // Ensure this logic is executed within useEffect
         setProjectDetails(data.projectDetails);
         setResource(data.resources);
         setBudget(data.budget);
         setStatus(data.status);
         setShow(true);
      }
      console.log(id)
   }, [data, id]);

   return null; // Return null or a loading indicator if you want
}
