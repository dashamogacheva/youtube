// const token = `AIzaSyAb1uVump9URWXbcgFVEpsABZQoxG556sI`;
//
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${token}`,
//     }
// };
//
//  async function getVideoPlaylist() {
//     const url = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=${token}`;
//     try {
//         const response = await fetch(url, options)
//         const result = await response.json();
//         console.log(result);
//         return result;
//     } catch (error) {
//         console.error(error);
//     }
// }
//
// getVideoPlaylist();

// export async function getVideoDetails (videoId) {
//     const url = `https://youtube-data8.p.rapidapi.com/video/details/?id=${videoId}&hl=en&gl=US`;
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         return result;
//     } catch (error) {
//         console.error(error);
//     }
// }