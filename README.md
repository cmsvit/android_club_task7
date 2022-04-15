# android_club_task7 (20BRS1163)
Assignment 6 - Using `APIs`

## Working

The 
```js
  const [news, setNews] = useState([]);

  const getMoviesNews = () => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=<not-dumb-enough-to-upload-the-key>"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setNews(responseJson.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getMoviesNews();
  }, []);
```

## Screenshot
If the below table with screenshots is not visible, please check the [screenshots folder](https://github.com/cmsvit/android_club_task7/tree/main/screenshots) in the repo.
| Home | Sports | Movies |
|----|----|----|
|<img src="https://github.com/cmsvit/android_club_task7/blob/main/screenshots/1.png" width="300" alt="Home">|<img src="https://github.com/cmsvit/android_club_task7/blob/main/screenshots/2.png" width="300" alt="Sports"> |<img src="https://github.com/cmsvit/android_club_task7/blob/main/screenshots/3.png" width="300" alt="Movies">|
|World|Science|
|<img src="https://github.com/cmsvit/android_club_task7/blob/main/screenshots/4.png" width="300" alt="World">|<img src="https://github.com/cmsvit/android_club_task7/blob/main/screenshots/5.png" width="300" alt="Science">|
