// import React from 'react'

// import { Modal } from "semantic-ui-react";
import { useAppSelector } from "../../app/store/store";
import ModalWrapper from "../../app/common/modals/ModalWrapper";

export default function testModal() {
   // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data} = useAppSelector((state) => state.modals);
  return (
   <ModalWrapper header={'Testing Modal'} chileren={undefined}>
        <div>Test data is {data}</div>
        
    </ModalWrapper>
  )
}
