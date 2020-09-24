const xhr = new XMLHttpRequest();
let jsonData=[];
addF=()=>{};
filterType=()=>{};
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
                htmlString = '<div class="item" id="'+jsonData[i]["id"]+'"><div class="leftdata"><div class=imageContainer><img src="'+jsonData[i]["logo"]+'"></div><div class="companyContainer"><div class="Name" id="nameof'+jsonData[i]["id"]+'"><div class="companyName">'+jsonData[i]["company"]+'</div></div><div class="position">'+jsonData[i]["position"]+'</div><div class="info"><div class="Time">'+jsonData[i]["postedAt"]+'</div><div class="dot">.</div><div class="contract">'+jsonData[i]["contract"]+'</div><div class="dot">.</div><div class="location">'+jsonData[i]["location"]+'</div></div></div></div><div class="skillsContainer"><div class="skill" class="role">'+jsonData[i]["role"]+'</div><div class="skill" class="level">'+jsonData[i]["level"]+'</div></div></div>';
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
                if(jsonData[i]["new"]==true)
                {
                    var j=i+1;
                    var nameid= "nameof"+j;
                    console.log(document.getElementById(nameid).innerHTML)
                    document.getElementById(nameid).innerHTML+='<div class="new">new</div>';
                }
                if(jsonData[i]["featured"]==true)
                {
                    var j=i+1;
                    var nameid= "nameof"+j;
                    console.log(document.getElementById(nameid).innerHTML)
                    document.getElementById(nameid).innerHTML+='<div class="featured">featured</div>';
                }
            }
            addF=()=>{
                for(var m=0;m<jsonData.length;m++)
                {
                    var n=m+1;
                    document.getElementById(n).style.display="flex";
                   
                }
                var filterName=document.getElementById("filters").value;
                document.getElementById("filterBar").innerHTML= 'Filter By<select id="filters" onchange="addFilter()"><option value="none"></option><option value="level" id="levelFilter">level</option><option value="role" id="roleFilter">role</option><option value="contract">contract</option><option value="location">location</option></select>'+filterName+'<select id="'+filterName+'" onchange="filterAs()"></select>';
                var filterSet= new Set();
                for(var k=0;k<jsonData.length;k++)
                {
                    filterSet.add(jsonData[k][filterName]);
                }
                filterSet=Array.from(filterSet);
                for(var l=0;l<filterSet.length;l++)
                {
                    htmlstring3='<option value="'+filterSet[l]+'">'+filterSet[l]+'</option>';
                    document.getElementById(filterName).innerHTML+=htmlstring3;
                }
            }
            filterType=()=>{
                for(var m=0;m<jsonData.length;m++)
                {
                    var n=m+1;;
                    document.getElementById(n).style.display="flex";
                   
                }
                var type=document.getElementById("filterBar").lastChild.id;
                var filterValue=document.getElementById("filterBar").lastChild.value;
                for(var m=0;m<jsonData.length;m++)
                {
                    if(jsonData[m][type]!=filterValue)
                    {
                        var n=m+1;
                        document.getElementById(n).style.display="none";
                    }
                }
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
function addFilter(){
    addF();
}
function filterAs(){
    filterType();
}