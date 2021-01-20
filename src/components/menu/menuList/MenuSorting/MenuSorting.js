import '../menuList.css'

export const MenuSorting = ({NotSort, SortProduct}) => {
    return (
        <div className={'MenuSortingMain'}>
            <h2>Sort of products:</h2>
            <div className={'containerSort'}>
                <div className={'inputSort'}>
                    <input type="radio" name={'inputSort'} value={'notSort'} id={'NOT_SORT'} onChange={NotSort}/>
                    <label htmlFor={'NOT_SORT'}>All product</label>
                </div>
                <div className={'inputSort'}>
                    <input type="radio" name={'inputSort'} value={'High'} id={'HIGH'} onChange={SortProduct}/>
                    <label htmlFor={'HIGH'}>From High to Less</label>
                </div>
                <div className={'inputSort'}>
                    <input type="radio" name={'inputSort'} value={'Less'} id={'LESS'} onChange={SortProduct}/>
                    <label htmlFor={'LESS'}>From Less to High</label>
                </div>
            </div>
        </div>
    )
}