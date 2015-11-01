
function callJavascriptFunction(list, routeIndices){
    console.log(list.length);
    console.log(routeIndices.length);
    if(routeIndices.length ==0 )
    {
    	alert('Select atlease one house');
    	return;
    }
    
    var points='';
    for(var i=0; i< routeIndices.length ;i++)
    {
    	console.log(list[i].details.location.name);
    	points+=list[i].details.location.geocode.lat+','+list[i].details.location.geocode.lon+";;;";
    }
 
    window.location.href="https://grabhousehunt.herokuapp.com/getroute?points="+points;
/*    $.ajax({
    	   type: "POST",
    	   data: {points:points},
    	   url: "https://grabhousehunt.herokuapp.com/getroute",
    	   success: function(msg){
    	   }
    	});
*/}

var routeIndices=[];

function toggleArrayItem(v) {
    var i = routeIndices.indexOf(v);
    if (i === -1)
        routeIndices.push(v);
    else
        routeIndices.splice(i,1);
}
var passToJS;
setTimeout(function(){
    passToJS = function(){
        callJavascriptFunction(houselist,routeIndices);
    };

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = '.fa-cab:before, .fa-taxi:before {content: "\uf1ba" !important;}';
    document.body.appendChild(css);
    
    var toggleAdd = function(){
        index=$($(this).parentsUntil("div .list-block-inner")[5]).index();
        $(this).parent().toggleClass('active');
        toggleArrayItem(index);
        console.log(routeIndices);
        console.log('route updated');
        /*for(var i=0; i< routeIndices.length ;i++)
        {
        	console.log(houselist[i].details.location.name);
        }*/
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    };
    
    var addSubmit=document.getElementsByClassName('nav nav-tabs');
    console.log(addSubmit[1]);
    var submitButton = document.createElement("button");
    submitButton.appendChild(document.createTextNode("Route Plan"));
    submitButton.className='btn btn-warning btn-block';
    submitButton.onclick=passToJS;
    addSubmit[1].appendChild(submitButton);
    
    var cusid_ele = document.getElementsByClassName('action-block');
    //alert(cusid_ele.length)
    for (var i = 0; i < cusid_ele.length; ++i) {
      var item = cusid_ele[i];
	  var newdiv = document.createElement("div");
	  newdiv.className='like-btn';
      var button=document.createElement("i");
      button.className='fa fa-taxi';
      button.onclick = toggleAdd;
      //button.onclick = passToJS;
      newdiv.appendChild(button);
      // var text = document.createTextNode("select for route planner");
      // button.appendChild(text);
      item.appendChild(newdiv);
      item.style.display = "inline-flex";
    }
    var cusid_ele = document.getElementsByClassName('action-block');

    var s = document.createElement('script');
    s.src = chrome.extension.getURL('angular_inject.js');
    (document.head||document.documentElement).appendChild(s);
    s.onload = function() {
        s.parentNode.removeChild(s);
    };
   

    var houselist;

    // Event listener
    document.addEventListener('RW759_connectExtension', function(e) {
        // e.detail contains the transferred data (can be anything, ranging
        // from JavaScript objects to strings).
        // Do something, for example:
        for(var i=0;i<e.detail.listings.length;i++){
        
        }
    
        houselist=e.detail.listings
        console.log(houselist);
        console.log(e.detail.listings.length);
    });

    //var listings = window.angular.element('[ng-controller=listBlkCtrl]').scope().listings
    //alert(listings.len)

},  10000);

