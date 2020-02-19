import React from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import {
  setVisibilityFilter,
  VisibilityFilters
} from '../redux/actions';
import { getVisibilityFilter } from '../redux/selectors';

const VisibilityFiltersContainer = styled.div`
  margin: 10px 0;
`;

function VisibilityFilterButtons() {
  const visibilityFilter = useSelector(getVisibilityFilter);
  const dispatch = useDispatch();
  return (
    <VisibilityFiltersContainer>
      <button
        disabled={visibilityFilter === VisibilityFilters.SHOW_ALL}
        onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))}
      >
        Show all
      </button>
      <button
        disabled={visibilityFilter === VisibilityFilters.SHOW_COMPLETED}
        onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))}
      >
        Show completed
      </button>
      <button
        disabled={visibilityFilter === VisibilityFilters.SHOW_ACTIVE}
        onClick={() => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))}
      >
        Show active
      </button>
    </VisibilityFiltersContainer>
  );
}

export default VisibilityFilterButtons;
