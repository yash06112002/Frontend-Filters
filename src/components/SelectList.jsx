import Multiselect from 'multiselect-react-dropdown';
import { useDispatch } from 'react-redux'
import { update } from '../context/Slice1.jsx'

const SelectList = ({ number, listData }) => {
    const dispatch = useDispatch()
    // get keys from first element of listData
    if (listData[0] === undefined) return null
    const attributes = Object.keys(listData[0]).filter(item => item !== 'number')

    const handleUpdate = (selectedList) => {
        dispatch(update({ listNumber: number, list: selectedList }))
    }
    let options = []
    listData.forEach(item => {
        options.push(item[attributes[number - 1]])
    })


    return <Multiselect
        isObject={false}
        options={[...new Set(options)]} // Options to display in the dropdown
        selectedValues={[]} // Preselected value to persist in dropdown
        onSelect={handleUpdate} // Function will trigger on select event
        onRemove={handleUpdate} // Function will trigger on remove event
        displayValue="label" // Property name to display in the dropdown options
        showCheckbox={true}
        closeOnSelect={true}
        placeholder={attributes[number - 1]}
        avoidHighlightFirstOption={true}
        style={{
            multiselectContainer: {
                color: 'black',
                width: '200px'
            },
            searchBox: {
                border: 'none',
                'borderBottom': '1px solid blue',
                'borderRadius': '0px'
            }
        }}
    />

}

export default SelectList


