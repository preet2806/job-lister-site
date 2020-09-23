const xhr = new XMLHttpRequest();
let jsonData=[];
function addFilter(){
    var filterName=document.getElementById("filters").value;
    console.log(filterName);
    document.getElementById("filterBar").innerHTML+= filterName+'<select id="'+filterName+'"></select>';
    var filterSet= new Set();
    for(var k=1;k<11;k++)
    {
        filterSet.add(jsonData[k][filterName]);
    }
}
xhr.onreadystatechange = function () 
{
  if (xhr.readyState == 4) 
  {
      if (xhr.status == 200) 
      {
            jsonData=JSON.parse(xhr.responseText) ;
            console.log(jsonData);
            for (var i = 0; i < jsonData.length; i++) 
            {   
                var varnew;
                var varfeatured
                if(jsonData[i]["new"]==true){
                    varnew=" new ";
                }
                else{
                    varnew="";
                }
                if(jsonData[i]["featured"]==true){
                    varfeatured=" featured ";
                }
                else{
                    varfeatured="";
                }
                htmlString = '<div class="item" id="'+jsonData[i]["id"]+'"><div class="leftdata"><div class=imageContainer><img src="'+jsonData[i]["logo"]+'"></div><div class="companyContainer"><div class="Name"><div class="companyName">'+jsonData[i]["company"]+'</div><div class="new"> '+varnew+' </div><div class="featured"> '+varfeatured+' </div></div><div class="position">'+jsonData[i]["position"]+'</div><div class="info"><div class="Time">'+jsonData[i]["postedAt"]+'</div><div class="dot">.</div><div class="contract">'+jsonData[i]["contract"]+'</div><div class="dot">.</div><div class="location">'+jsonData[i]["location"]+'</div></div></div></div><div class="skillsContainer"><div class="skill" class="role">'+jsonData[i]["role"]+'</div><div class="skill" class="level">'+jsonData[i]["level"]+'</div></div></div>';
                itemContainer.innerHTML += (htmlString);
                for(var j=0; j<jsonData[i]["languages"].length;j++)
                {
                    htmlString2='<div class="skill">'+jsonData[i]["languages"][j]+'</div>';
                    document.getElementById("itemContainer").lastChild.lastChild.innerHTML += (htmlString2);
                }
                for(var j=0; j<jsonData[i]["tools"].length;j++)
                {
                    htmlString2='<div class="skill">'+jsonData[i]["tools"][j]+'</div>';
                    document.getElementById("itemContainer").lastChild.lastChild.innerHTML += (htmlString2);
                }
            }
            function addFilter(){
                var filterName=document.getElementById("filters").value;
                console.log(filterName);
                document.getElementById("filterBar").innerHTML+= filterName+'<select id="'+filterName+'"></select>';
                var filterSet= new Set();
                for(var k=1;k<11;k++)
                {
                    filterSet.add(jsonData[k][filterName]);
                }
                console.log(filterSet);
            }
            
      }
      if(xhr.status == 404)
      {
          console.log('no data');

      }
    }    
};
xhr.open('get','https://preet2806.github.io/json/data.json',true);
xhr.send();
const addF = () => {
    addFilter();
}