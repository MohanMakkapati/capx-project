function fun(check){
      let i=['option1','option2','option3','option4','option5','option6'];
      let k=0;
      var ans,ans2;
      if(check==='submit'){
        ans2=localStorage.getItem('answer2');
         if(ans2!=='not responded'){
        window.location.replace('capx.html');
         }
        return;
      }
          for(let k=0;k<6;k++){
             if(i[k]===check){
                ans=document.getElementById(i[k]).value;
                localStorage.setItem('answer2',ans);
                 continue;
             }
              else if(document.getElementById(i[k]).style.backgroundColor==='orange' ){
              document.getElementById(i[k]).style.backgroundColor='rgb(66, 65, 65)'; 
          }
          document.getElementById(check).style.backgroundColor='orange';
         }
      }
function opennav(){
      document.getElementById("menu").style.width="300px";
      document.getElementById("main").style.marginRight="300px";
}
function closenav(){
      document.getElementById("menu").style.width="0";
      document.getElementById("menu").style.marginRight="0";
}
function storeDataAndRedirect(id) {
       var ans1 = document.getElementById(id).value;
       localStorage.setItem('answer1',ans1);
      window.location.replace('que2.html');
  }
  if (ans1) {
      document.getElementById('printa1').textContent = a1;
      } else {
      document.getElementById('printa1').textContent = 'Hello, Guest!';
      }