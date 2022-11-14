import './Blogs.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';

const YoutubeSearch = () => {

    const [video, setVideo] = useState([]);
    const [query, setQuery] = useState([]);

    useEffect(() => {

    }, [])

    const handleSearchYoutube = async () => {
        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                part: 'snippet',
                maxResults: 20,
                key: 'AIzaSyBLFX8jNAul6Jh3_4wU3mCf66_gaCcJfrc',
                type: 'video',
                q: query
            }
        })
        console.log('check response : ', res)
        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if (raw && raw.length > 0) {

                raw.map(item => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.createdAt = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;

                    result.push(object);
                })
            }
            console.log('check result : ', result)
            setVideo(result)
        }

    }

    return (
        <div className="youtube-search-container">
            <div className="yt-search">
                <input type='text' value={query}
                    onChange={(event) => setQuery(event.target.value)} placeholder='Search' />
                <button type="button" onClick={handleSearchYoutube}>Search</button>
            </div>

            {video && video.length > 0 &&
                video.map(item => {
                    return (
                        <div className="yt-search" key={item.id}>
                            <div className='left'>
                                <iframe
                                    className='ifram-yt'
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </div>

                            <div className='right'>
                                <div className='title'>
                                    {item.title}
                                </div>

                                <div className='created-at'>
                                    Created At : {item.createdAt}
                                </div>

                                <div className='author'>
                                    Author: {item.author}
                                </div>

                                <div className='description'>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default YoutubeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "WK4z-bxxodXa28QBRgRlbzvrYeU",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 282440,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "yfagn0HyzMfRgjLRgUjfXXMOviM",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "7ICKkagL3xA"
//         },
//         "snippet": {
//           "publishedAt": "2022-09-12T13:00:11Z",
//           "channelId": "UCWu91J5KWEj1bQhCBuGeJxw",
//           "title": "Đen - Diễn viên tồi ft. Thành Bùi, Cadillac (M/V)",
//           "description": "Diễn viên tồi (A Lousy Actor) - Đen ft. Thành Bùi, Cadillac Download/stream: https://Denvau.lnk.to/DVT ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/7ICKkagL3xA/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/7ICKkagL3xA/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/7ICKkagL3xA/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Đen Vâu Official",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-09-12T13:00:11Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "7pDjlPZoeFOOxk_oYZuqVMjasYE",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "JxBnLmCOEJ8"
//         },
//         "snippet": {
//           "publishedAt": "2022-06-11T13:00:12Z",
//           "channelId": "UCWu91J5KWEj1bQhCBuGeJxw",
//           "title": "Đen - Ai muốn nghe không (M/V)",
//           "description": "Đen - Ai muốn nghe không (Who wants to know?) Download/Stream: https://denvau.lnk.to/AMNK Đạo diễn: Lâm Tấn Huy Đạo ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/JxBnLmCOEJ8/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/JxBnLmCOEJ8/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/JxBnLmCOEJ8/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Đen Vâu Official",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-06-11T13:00:12Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "FlVyYzjZ9xMalOV-rlXuBxErNVU",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "rLL4J_nZQJU"
//         },
//         "snippet": {
//           "publishedAt": "2022-11-10T13:00:37Z",
//           "channelId": "UCWu91J5KWEj1bQhCBuGeJxw",
//           "title": "Đen - Bài Này Chill Phết (dongvui harmony)",
//           "description": "Bài Này Chill Phết (dongvui harmony) - Đen Download/Stream: https://Denvau.lnk.to/dongvuiharmony #dongvuiharmony #Den ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/rLL4J_nZQJU/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/rLL4J_nZQJU/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/rLL4J_nZQJU/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Đen Vâu Official",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-11-10T13:00:37Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "f3pIK-N_J0ZaTtSznAi3vdMvaWY",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "s2iHM716Zaw"
//         },
//         "snippet": {
//           "publishedAt": "2022-11-09T13:00:10Z",
//           "channelId": "UCWu91J5KWEj1bQhCBuGeJxw",
//           "title": "Đen - dongvui harmony (Full)",
//           "description": "dongvui harmony - Đen Download/Stream \"dongvuiharmony\": https://Denvau.lnk.to/dongvuiharmony Tracklist: 00:00 Anh Đếch ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/s2iHM716Zaw/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/s2iHM716Zaw/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/s2iHM716Zaw/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Đen Vâu Official",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-11-09T13:00:10Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "C3Tmg_dlVj_4rx2e1lIIulJd1Ok",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "KKc_RMln5UY"
//         },
//         "snippet": {
//           "publishedAt": "2019-10-21T13:30:15Z",
//           "channelId": "UCWu91J5KWEj1bQhCBuGeJxw",
//           "title": "Đen - Lối Nhỏ ft. Phương Anh Đào (M/V)",
//           "description": "Lối Nhỏ - Đen ft. Phương Anh Đào Download/Stream \"Lối Nhỏ\": https://Denvau.lnk.to/LoiNho Guitarist: Nguyễn Vũ Khoa Danh ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/KKc_RMln5UY/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/KKc_RMln5UY/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/KKc_RMln5UY/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Đen Vâu Official",
//           "liveBroadcastContent": "none",
//           "publishTime": "2019-10-21T13:30:15Z"
//         }
//       }
//     ]
//   }
