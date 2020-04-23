var sections = new Array(5);
    sections[0]="home";
    sections[1]="aboutme";
    sections[2]="skills";
    sections[3]="portafolio";
    sections[4]="blog";

alertSize();
displaySection('home');
function alertSize() {
    var myWidth = 0, myHeight = 0;
    if( typeof( window.innerWidth ) == 'number' ) {
      //No-IE
      myWidth = window.innerWidth;
      myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
      //IE 6+
      myWidth = document.documentElement.clientWidth;
      myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
      //IE 4 compatible
      myWidth = document.body.clientWidth;
      myHeight = document.body.clientHeight;
    }
    var display;
    var card_menu = document.getElementById("card_menu");
    display = card_menu.style.display;
    if(myWidth < 767){
        card_menu.style.display="none";
    }else{
        card_menu.style.display="block";
    }
  }
 
function displayMenu(){
    var display;
    var card_menu = document.getElementById("card_menu");
    display = card_menu.style.display;
    if(display == "none"){
        card_menu.style.display="block";
    }else{
        card_menu.style.display="none";
    }
}

function displaySection(nav){
    
    var search;
    var show;
    
    for(i=0; i<5; i++){
        search= document.getElementById(sections[i]);
        show = search.style.display;

        if(show == "block"){    
            search.style.display="none";
            if(nav == "next"){
                i++;
                if(i > 4){
                    i=0;
                }
            }
            if(nav == "prev"){
                i--;
                if(i < 0){
                    i=4;
                }
            }
           search= document.getElementById(sections[i]);
           search.style.display="block";
           break;
        }
    }
    setColors(i);

}

function setColors(i){

    var background_body;
    var background_menu;
    var search;

    if(sections[i] == "home"){
        background_body="#b48484";
        background_menu="#b48484";
    }else{
        background_body="transparent";
        background_menu="#799CB3";
    }
    search= document.getElementById(sections[i]);
    search.style.background=background_body;
    console.log(sections[i]);
    var menu = document.getElementsByTagName("header")[0];
    menu.style.background=background_menu;
}

function navSection(nav){
    
    var search;
    for(i=0; i<5; i++){
        search= document.getElementById(sections[i]);
        search.style.display = "none";
        if(sections[i] == nav){
            search.style.display = "block";
            setColors(i);
        }
        
    }
    
}
function displayFormContact(status){
    var form = document.getElementById("contact_form");
    form.style.display = status;
}