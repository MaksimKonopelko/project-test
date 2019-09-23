import React from 'react'
import FiltersContainer from './styles';
import FilterType from './FilterType/index';
import FilterColor from './FilterColor/index';
import FilterSize from './FilterSize/index';

export default () => (
    <FiltersContainer>
        <div>
            <FilterType/>
            <FilterColor/>
            <FilterSize/>
        </div>
    </FiltersContainer>
)