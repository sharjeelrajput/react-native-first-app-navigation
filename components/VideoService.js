
serviceApi = "https://dev.prontoai.app/";

export default VideoService = {
    serviceApi2 : "https://dev.prontoai.app/",
    title : 'Sharjeel',
    videoLists : [],
    getVideos : (searchData) => {
      VideoService.videoLists = [];

        return new Promise(function(resolve, reject) {
          console.log("%c******************************", "font-size: 16px, color: red");
          console.log("***** API path", VideoService.serviceApi2+"admin/list_user_videos");
          console.log(searchData);

          fetch(VideoService.serviceApi2+"admin/list_user_videos", {
                method: "post",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(searchData),
              })
              // .then((response) => response.text())
                .then((response) => {
                  return response.json()
                })
                .then((data) => {
                  // console.log(data);
                  VideoService.videoLists = data?.result;
                    resolve(VideoService.videoLists);
                }).catch((err) => {
                  console.log(err);
                });
            });
    }
}