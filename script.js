
// it is use for chack this File.
console: console.log( "it is runing");

// it is use for remove the sideber from web ppage none means remove the page.
document.querySelector('.cross').style.display = 'none';

// it is use for the sidebar if page is visible than remove the page either page is not visible than visible the page.
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.Sidebar').classList.toggle('SidebarGo');

// it is use for when side bar is visibal than cross is also visibal and when hame bar is visible than cross is not visibal
    if(document.querySelector('.Sidebar').classList.contains('SidebarGo'))
    {    
      document.querySelector('.ham').style.display = 'inline';
      document.querySelector('.cross').style.display = 'none';   
    }
    else{
      document.querySelector('.ham').style.display = 'none';
      setTimeout(() => {
      document.querySelector('.cross').style.display = 'inline';
      },300);
    }
})

