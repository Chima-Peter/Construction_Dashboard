import { useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectProjectById } from '../ViewProject/ViewProjectSlice';
import { useEditContext } from './page';

export default function SetUp() {
   // Call useEditContext first
   const { setProjectDetails, setResource, setBudget, setStatus, setShow, id } = useEditContext();

   // Always call useAppSelector
   const getData = useAppSelector((state) => id ? selectProjectById(state, id) : null);


   useEffect(() => {
      // deep copy of the redux slice. this will prevent nested elements from in the original slice form being modified and thus escape any errors.
      const data = JSON.parse(JSON.stringify(getData))
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
   }, [getData, id]);

   return null; // Return null or a loading indicator if you want
}
