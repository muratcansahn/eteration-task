import React, { useState } from 'react';
import { Drawer } from 'antd';
import Button from '../Global/Button/Button';
import MobileSortAndFilterBar from '../SortandFilterBar/Mobile/MobileSortAndFilterBar';
const MobileDrawer = ({
    onChange,
    autoCompleteOptions,
    value,
    dispatch,
    setSearchQuery,
    setSelectedTags,
    selectedTags

}) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className='mt-4 d-flex justify-content-center '>
      <Button text={"Sort And Filter"} onClick={showDrawer} className={"py-2"}>
      </Button>
      <Drawer title="Sort And Filter" onClose={onClose} open={open}>
      <MobileSortAndFilterBar
        onChange={onChange}
        autoCompleteOptions={autoCompleteOptions}
        setSearchQuery={(query) => dispatch(setSearchQuery(query))} 
        value={value}
        setSelectedTags={setSelectedTags}
        selectedTags={selectedTags}
      /> 
      </Drawer>
    </div>
  );
};
export default MobileDrawer;