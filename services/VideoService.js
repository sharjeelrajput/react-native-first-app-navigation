const serviceApi = "https://dev.prontoai.app/";

export default TestMe = () => {
}

export const  TextService = () => {
    videoLists = [];
    getVideos = (searchData) => {
        var promise = new Promise(function(resolve, reject) {
            fetch(serviceApi+"api/list_user_videos", {
                method: "post",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(searchData),
              })
                .then((response) => {
                  return response.json()
                })
                .then((data) => {
                    this.videoLists = data.result;
                    resolve(this.videoLists);
                });
            });

        return Promise;
    }
}

export const VideoService = {
    videoLists : [],
    getVideos : (searchData) => {
        var promise = new Promise(function(resolve, reject) {
            fetch(serviceApi+"api/list_user_videos", {
                method: "post",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(searchData),
              })
                .then((response) => {
                  return response.json()
                })
                .then((data) => {
                    this.videoLists = data.result;
                    resolve(this.videoLists);
                });
            });

        return Promise;
    }
}