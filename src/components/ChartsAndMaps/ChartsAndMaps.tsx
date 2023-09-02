import React from 'react';
import PageTitle from '../Shared/PageTitle';

import ChartsPage from './ChartsPage';
import MapsPage from './MapsPage';

const ChartsAndMaps = () => {
    return (
        <div>
            <PageTitle title='Charts and Maps page '></PageTitle>
            <ChartsPage></ChartsPage>
            <MapsPage></MapsPage>
        </div>
    );
};

export default ChartsAndMaps;