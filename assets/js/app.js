





const trendingmoviesurl = `${baseurl}/trending/all/week?api_key=${apikey}`;
cl(trendingmoviesurl);

const trendingslider = document.getElementById("trendingslider");



// const makeapicall=(apiurl,method,msgbody=null)=>{
//   return fetch(apiurl,{
//         body:msgbody,
//         method:methodname,

//     })
//     .then(res=>{
//         return res.json()
//     })
// }

loadparams = (ele) => {
    //cl(ele)
    let movieId = ele.id;
    //cl(moviId)

    let currenturl = new URL(window.location.href);//returns the href (URL) of the current page
    let queryparams = new URLSearchParams(currenturl.search);// quryparam add in a predefine constructor 
    queryparams.set("movieid", movieId);//we have set moviid id and this id convert into string
    currenturl.search = queryparams.toString();

    //cl(currenturl)
    let movieurl = `${currenturl.origin}/movimain.html${currenturl.search}`;//newurl
    cl(movieurl);
    window.location.href = movieurl;

}


let temp = (aray) => {
    let result = '';
    aray.forEach(newobj => {
        result += `
    <div class="item">
        <figure class="m-0 movicard"id="${newobj.id}" onclick="loadparams(this)">
            <img class="clickimg" src="https://image.tmdb.org/t/p/original/${newobj.poster_path}" alt="${newobj.title || newobj.original_name}"
                title="${newobj.title || newobj.original_name}">
            <figcaption class="caption d-flex flex-column justify-content-center pl-3">
                <h3 class="display-3">${newobj.title || newobj.original_name}</h3>
                <em class="d-none d-md-block">
                   ${newobj.overview}
                </em>
            </figcaption>
        </figure> 
    </div> 
    `
    });
    trendingslider.innerHTML = result;
}






const gettrendingmovie = async () => {
    let trendingData = await makeapicall(trendingmoviesurl, "GET")

    temp(trendingData.results)
    $('#trendingslider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        timer: 500,
        autoplay: true,
        navText: ['<i class="fa-solid fa-angles-left"></i>', '<i class="fa-solid fa-angles-right"></i>'],
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
}

gettrendingmovie();


