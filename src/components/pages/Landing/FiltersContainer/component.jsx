import React from 'react'
import FiltersContainer from './styles';
import FilterStyle from './filterStyles';
import FilterType from './FilterType/index';
import FilterColor from './FilterColor/index';
import FilterSize from './FilterSize/index';

export default () => (
    <FiltersContainer>
        <div>
            <FilterStyle>
                <FilterType />
                <FilterColor />
                <FilterSize />
            </FilterStyle>
        </div>
    </FiltersContainer>
)