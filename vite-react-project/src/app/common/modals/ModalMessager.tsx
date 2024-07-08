// import React from 'react'

import testModal from "../../../features/scratch/testModal"
import { useAppSelector } from "../../store/store";







export default function ModalMessager() {
    const modalLookup = {
        testModal
    }
    const {type, data, open} = useAppSelector((state) => state.modals);
    let renderedModal;
    if(type && open){
        const ModalComponent = (modalLookup as any)[type];
        renderedModal = <ModalComponent data={data}/>
    }

  return (
    <span>{renderedModal}</span>
  )
}
