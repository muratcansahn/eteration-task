import "./SortandFilterBar.scss"
import {Radio, Space ,Checkbox} from 'antd';
import { AutoComplete } from 'antd';
import { v4 as uuid } from 'uuid'
import { SearchOutlined } from '@ant-design/icons';


const SortandFilterBar = ({onChange,value,
    autoCompleteOptions,
    setSearchQuery,setSelectedTags,
    selectedTags
}) => {
  return (
    <div className="sort-and-filter-wrapper">
    <span className="disabled-text">
        Sort By

    </span>
  <div className="d-flex flex-column sort-and-filter-card align-items-center justify-content-center">

    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={"oldtoNew"}>Old to New</Radio>
        <Radio value={"newtoOld"}>New to Old</Radio>
        <Radio value={"priceLowtoHigh"}>Price Low to High</Radio>
        <Radio value={"priceHightoLow"}>Price High to Low</Radio>
      </Space>
    </Radio.Group>
  </div>
  <div className="sort-and-filter-wrapper">

     <div
     className="d-flex flex-column sort-and-filter-card mt-4
     "
     >
    <AutoComplete 
      style={{ width: "100%" }}
      options={autoCompleteOptions}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      onSelect={(value) => {
        setSearchQuery(value);
      }}
      placeholder= {
      <>
      <SearchOutlined />
        <span className="ms-2">Search</span>
      </>
      }
    />
    <div className="mt-2 h-75">  
     {autoCompleteOptions.map (option => (
        <Checkbox key={uuid()} onChange={(e) => {
            if(e.target.checked){
                setSelectedTags([...selectedTags, option.value])
            }
            else{
                setSelectedTags(selectedTags.filter(tag => tag !== option.value))
            }
        }}
        checked={selectedTags.includes(option.value)}
        >{option.value}</Checkbox>
        ))}
    </div>
     </div>
  </div>
  </div>
  )
}

export default SortandFilterBar