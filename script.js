/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


function hideUserDetails() {  
  var markerelement = document.getElementById("animated-marker");
    

      var userDetailName = document.getElementById("userDetailName");
  userDetailName.setAttribute("value", "");
  
      var userDetailSurname = document.getElementById("userDetailSurname");
  
      var userDetailEmail = document.getElementById("userDetailEmail");
  
  
  userDetailName.setAttribute("value", "");
  userDetailSurname.setAttribute("value", "");
  userDetailEmail.setAttribute("value", "");
  

}

function showUsers(userspageId) {

    
  var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {

                  
                  var mytext = this.responseText;
                    
                  var obj = JSON.parse(mytext);

                  
                  var vertical=0;
                  
                  var element = document.getElementById("animated-marker");
                  
                  for(let dt in obj.data){
                    console.log( obj.data[dt].first_name );
                    
                    var name=obj.data[dt].first_name;
                    vertical=vertical+0.3;
                    
                    
                    var position="-1.5 0.1 "+vertical;
                    
                    
            
                 var existing_text= document.getElementById("userNameText"+dt);
                    if(existing_text){
                       element.removeChild(existing_text);
                    }
                    
                 var child = document.createElement("a-text");
                    child.setAttribute("id","userNameText"+dt)
                  child.setAttribute("value", name);
                 child.setAttribute("position",position);
                  child.setAttribute("rotation","-90 0 0");
                    child.setAttribute("wrap-count","90");
                    
        
                    //child.setAttribute("onclick","showUserDetail("+obj.data[dt].id+")");
                  
                 
                 var existing_image= document.getElementById("userAvatar"+dt);
                    if(existing_image){
                       element.removeChild(existing_image);
                    }
                 
                    
                var image_avatar=obj.data[dt].avatar 
                 var img_position="-1.8 0.1 "+vertical;
                    
                var image_child = document.createElement("a-image");
                    image_child.setAttribute("id","userAvatar"+dt)
                  image_child .setAttribute("src", image_avatar);
                     image_child .setAttribute("height","0.25" );
                    image_child .setAttribute("width","0.25" );
                 image_child .setAttribute("position",img_position);
                  image_child .setAttribute("rotation","-90 0 0");
                    image_child.setAttribute("onclick","showUserDetail("+obj.data[dt].id+")");
                  
                 
   
                  element.appendChild(child);
                  element.appendChild(image_child);
                    
                    
                  
   
            }
                
                  
                  //mydynamictext.setAttribute("value", mytext);
                }
            };
 
    xhttp.open("GET", "https://reqres.in/api/users?page="+userspageId, true)
  xhttp.send();  
    
      
}

function showUserDetail(userId) {
  
   var userDetailResponse="unedited text";
  var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {

                  
                  userDetailResponse = this.responseText;
                    
                  var obj = JSON.parse(userDetailResponse);

                  
                  
                  var userNameText = document.getElementById("userDetailName");
                   userNameText.setAttribute("value", obj.data.first_name); 
                  
                  var userSurnameText = document.getElementById("userDetailSurname");
                   userSurnameText.setAttribute("value", obj.data.last_name); 
                  
                  
                   var userEmailText = document.getElementById("userDetailEmail");
                   userEmailText.setAttribute("value", obj.data.email);
                  
                  var userAvatarImage = document.getElementById("UserDetailAvatar");
                   userAvatarImage.setAttribute("src", obj.data.avatar);
 
                
                  
                  //mydynamictext.setAttribute("value", mytext);
                }
            };
  
    xhttp.open("GET", "https://reqres.in/api/users/"+userId, true)
  xhttp.send();  
  
}



function showColors() {

    
  var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {

                  
                  var mytext = this.responseText;
                    
                  var obj = JSON.parse(mytext);

                  
                  var vertical=-1;
                  
                  var element = document.getElementById("animated-marker");
                  
                  for(let dt in obj.data){
                    
                    var name=obj.data[dt].name;
                    vertical=vertical+0.3;
                    
                    
                    var position="1.5 0.1 "+vertical;
                    
                    
            
                 var existing_text= document.getElementById("colorText"+dt);
                    if(existing_text){
                       element.removeChild(existing_text);
                    }
                    
                 var child = document.createElement("a-text");
                    child.setAttribute("id","colorText"+dt)
                  child.setAttribute("value", name);
                 child.setAttribute("position",position);
                  child.setAttribute("rotation","-90 0 0");
                    child.setAttribute("color",obj.data[dt].color)
                    child.setAttribute("onclick","setUserTextColors('"+obj.data[dt].color+"')");
                  
                
                 
   
                  element.appendChild(child);

                    
                  
   
            }
                
                  
                  //mydynamictext.setAttribute("value", mytext);
                }
            };


    xhttp.open("GET", "https://reqres.in/api/unknown", true)
  xhttp.send();  
    
      
}



function setUserTextColors(textcolor) {  
  var markerelement = document.getElementById("animated-marker");
  
  for(var i=0;i<6;i++){
    
    
     var existing_text= document.getElementById("userNameText"+i);
    existing_text.setAttribute("color",textcolor);
    
 
  }
  
  
     var userDetailName = document.getElementById("userDetailName");
 
      var userDetailSurname = document.getElementById("userDetailSurname");
  
      var userDetailEmail = document.getElementById("userDetailEmail");
  
  
  if(userDetailName)
  userDetailName.setAttribute("color", textcolor);
  
  if(userDetailSurname)
  userDetailSurname.setAttribute("color", textcolor);
  
  if(userDetailEmail)
  userDetailEmail.setAttribute("color", textcolor);
  
  
  
}

  
