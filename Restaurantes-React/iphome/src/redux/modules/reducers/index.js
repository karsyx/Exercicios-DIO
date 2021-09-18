import { combinedReducers } from 'redux';

import restaurants from '../modules/restaurants';

export default combinedReducers({
    restaurants,
});