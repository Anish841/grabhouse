
function callJavascriptFunction(list, routeIndices){
    console.log(list.length);
    console.log(routeIndices.length);
}

var routeIndices=[]

function toggleArrayItem(v) {
    var i = routeIndices.indexOf(v);
    if (i === -1)
        routeIndices.push(v);
    else
        routeIndices.splice(i,1);
}

setTimeout(function(){
    var passToJS = function(){
        callJavascriptFunction(houselist,routeIndices);
    };

    var toggleAdd = function(){
        index=$($(this).parentsUntil("div .list-block-inner")[5]).index();
        toggleArrayItem(index);
        console.log(routeIndices);
        console.log('route updated');
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    };

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

