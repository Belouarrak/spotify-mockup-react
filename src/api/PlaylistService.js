import PlaylistRequest from "./PlaylistRequest"


const apiService = {

    get: () => PlaylistRequest("GET", `https://api.spotify.com/v1/search?q=Muse&type=playlist&market=US&limit=5&offset=5`),
    getById: ({query}) => PlaylistRequest("GET", `https://api.spotify.com/v1/search?q=${query}&type=playlist&market=US&limit=5&offset=5`, {"Authorization" : "BQALEIQ-PluJaT6l-McwIdav_A6wfvE8Aqq2_fA_ag-weJhrl6XCOwcYsxxMg4pON4fsV0ugWPjdIg9t1Tuat25tNq4WLOSU03xIV5g1TsO_SrbM6v32NNdQxK774ytRtfSuwDGkLucilgN0ZZeReDCKHMDMz2qPbTn9dGzsT7Q6ES8"}),

}

export default apiService;
