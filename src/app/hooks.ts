import { RootState, AppDispatch } from "./store";
import { useDispatch, useSelector } from "react-redux";


// export predefined hook for getting state from root already having typeof RootState
export const useAppSelector = useSelector.withTypes<RootState>()

// export predefined hook for dispatching actions already having typeof AppDispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()