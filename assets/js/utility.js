let cl = console.log;



const baseurl = "https://api.themoviedb.org/3";
const apikey = `726d526427fe1cb49983c8daeb114609`;




const makeapicall = async(apiurl, methodname, msgbody = null) => {
    let res = await fetch(apiurl,{
        body: msgbody,
        method: methodname,
       
    })
    return res.json()
}