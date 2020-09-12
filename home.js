const xhr = new XMLHttpRequest();
let jsonData=[];

xhr.onreadystatechange = function () 
{
  if (xhr.readyState == 4) 
  {
      if (xhr.status == 200) 
      {
          jsonData=JSON.parse(xhr.responseText) ;
          
      }
      if(xhr.status == 404)
      {
          console.log('no data');

      }
  }  
};
const countryFilter = () => {
    for (var i = 0; i < jsonData.length; i++) 
    {
        htmlString = '<div class="item" id="'+jsonData[i]["id"]+'"><div class=imageContainer><img src="'+jsonData[i]["logo"]+'"></div><div class="companyConatiner"><div class="Name"><div class="companyName">'+jsonData[i]["company"]+'</div><div class="newfeatured"></div></div><div class="position">'+jsonData[i]["position"]+'</div><div class="info"><div class="Time">'+jsonData[i]["postedAt"]+'</div><div class="contract">'+jsonData[i]["contract"]+'</div><div class="location">'+jsonData[i]["location"]+'</div></div></div><div class="skillsContainer">'+jsonData[i]["languages"]+jsonData[i]["tools"]+'</div></div>';
        itemContainer.innerHTML += (htmlString);
    }
};
xhr.open('get','https://github.com/preet2806/job-lister-site/blob/master/data.json',true);
xhr.send();