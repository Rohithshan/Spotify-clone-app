export const initialState = {
    user: null, 
    playlists: [], 
    playing: false, 
    item: null,
    // remove token key after finishing 
    // token: 'BQBXmoAM-YPgd2SdFlEQUVqsfotd2s3zS1zkDYZGNPxFHg-dKwLkjt-oOOwvMiP5kzu2k6lXNPQSXouSc110FUo40W0VTFxgt5BburA_TPKGQksspsnPhFtCmOo6S8rIfo2i5EHTl-p-SIlv7To_jLJHECTRBs9X2G0oAcHbNHA1WCbb',
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state, 
                user: action.user
            };

        case 'SET_TOKEN':
            return  {
                ...state, 
                token: action.token, 
            }; 
        
        case 'SET_PLAYLISTS':
            return {
                ...state, 
                playlists: action.playlists, 
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state, 
                discover_weekly: action.discover_weekly, 
            };
        default: 
            return state; 
    }
}

export default reducer; 