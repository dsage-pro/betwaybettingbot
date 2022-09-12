let divs = document.querySelectorAll('#divs > div');
let links = document.querySelectorAll('#links li');
let spanss = document.querySelectorAll('.divs > :nth-child(2) article > div > span > span');
let buttons = document.querySelectorAll(".divs > :nth-child(2) ul li > span > span");
let save = document.getElementById('playsave');
let outside = document.querySelectorAll('.outside > li > span');
let str_save = document.getElementById('strategysave');
let singleul = document.getElementById('single_bet');
let splitul = document.getElementById('split_bet');
let cornerul = document.getElementById('corner_bet');
let streetul = document.getElementById('street_bet');
let lineul = document.getElementById('line_bet');
let outsideul = document.getElementById('outside_bet');

window.onload = function(){
   let store = JSON.parse(localStorage.getItem('strategy'));
   let store2 = JSON.parse(localStorage.getItem('settings'));
   if(store){
        let single ;
        if(store.single.bet.length > 0){
         store.single.bet.forEach((bet)=>{
            single = document.createElement('li');
            single.className = `span${bet}`;
            text = document.createTextNode(bet);
            single.appendChild(text);
            singleul.appendChild(single);
         })
        }
        if(store.split1.bet.length > 0){
         store.split1.bet.forEach((bet)=>{
            single = document.createElement('li');
            single.className = `span${bet}`;
            text = document.createTextNode(bet);
            single.appendChild(text);
            splitul.appendChild(single);
         })
        }
        if(store.split2.bet.length > 0){
         store.split2.bet.forEach((bet)=>{
            single = document.createElement('li');
            single.className = `span${bet}`;
            text = document.createTextNode(bet);
            single.appendChild(text);
            splitul.appendChild(single);
         })
        }
        if(store.corner.bet.length > 0){
         store.corner.bet.forEach((bet)=>{
            single = document.createElement('li');
            single.className = `span${bet}`;
            text = document.createTextNode(bet);
            single.appendChild(text);
            cornerul.appendChild(single);
         })
        }
        if(store.street.bet.length > 0){
         store.street.bet.forEach((bet)=>{
            single = document.createElement('li');
            single.className = `span${bet}`;
            text = document.createTextNode(bet);
            single.appendChild(text);
            streetul.appendChild(single);
         })
        }
        if(store.line.bet.length > 0){
         store.line.bet.forEach((bet)=>{
            single = document.createElement('li');
            single.className = `span${bet}`;
            text = document.createTextNode(bet);
            single.appendChild(text);
            lineul.appendChild(single);
         })
        }
        if(store.outside.bet.length > 0){
         store.outside.bet.forEach((bet)=>{
            single = document.createElement('li');
            single.className = `span${bet}`;
            text = document.createTextNode(bet);
            single.appendChild(text);
            outsideul.appendChild(single);
         })
        }
   }
   if(store2){
      document.getElementById("failplay").innerHTML = store2.x;
      document.getElementById("timesplay").innerHTML = store2.y;
      document.getElementById("amountplay").innerHTML = store2.amount;
      document.getElementById("progressplay").innerHTML = store2.multiple;
   }
}

links = Array.from(links);
divs = Array.from(divs);
buttons = Array.from(buttons);

links.forEach((link, linkindex) => {
    link.addEventListener('click',(e)=>{
       divs.map((div, index)=>{
         div.style.display =  linkindex == index ? "block" : "none";
       })
    }) 
})

buttons.forEach((button, index) => {
   button.addEventListener('click',(e)=>{
      if(e.target.parentElement.style.paddingLeft == "23px"){
        e.target.parentElement.style.paddingLeft = "0";
        e.target.parentElement.style.paddingRight = "23px";
        e.target.parentElement.style.backgroundColor = "white";
      }else{
        e.target.parentElement.style.paddingLeft = "23px";
        e.target.parentElement.style.paddingRight = "0";
        e.target.parentElement.style.backgroundColor = "green";
      }
   }) 
})

spanss.forEach((span)=>{
   span.addEventListener('click',(e)=>{
      if(e.target.style.backgroundColor == "green"){
        e.target.style.color = "green";
        e.target.style.backgroundColor = "white";
      }else{
        e.target.style.color = "white";
        e.target.style.backgroundColor = "green";
      }
   })
})

save.addEventListener('click', playsave);

str_save.addEventListener('click', strategy);

function playsave(){
   let x = document.getElementById('x');
   let y = document.getElementById('y');
   let amount = document.getElementById('amount');
   let multiple = document.getElementById('multiple');

   document.getElementById("failplay").innerHTML = x.value;
   document.getElementById("timesplay").innerHTML = y.value;
   document.getElementById("amountplay").innerHTML = amount.value;
   document.getElementById("progressplay").innerHTML = multiple.value;
      
   let settingsObj = {
      x:Number(x.value),
      y:Number(y.value),
      amount:Number(amount.value),
      multiple:Number(multiple.value)
   } 

   localStorage.setItem('settings', JSON.stringify(settingsObj));
   if(localStorage.getItem('settings')){
      document.querySelector(".playsave").innerHTML = "Settings Saved!";
     setTimeout(()=>document.querySelector(".playsave").innerHTML = "", 5000);

   }
}

function strategy(){
   let singles = document.querySelectorAll('.single > span > span');
   let splits1 = document.querySelectorAll('.split > span > span')
   let splits2 = document.querySelectorAll('.split2 > span > span')
   let corners = document.querySelectorAll('.corner > span > span')
   let streets = document.querySelectorAll('.street > span > span')
   let lines = document.querySelectorAll('.line > span > span')

   let csingles = [];
   let single_amount = 0;
   let single_times = 0;
   singles.forEach((single)=>{
      if(single.style.backgroundColor == 'green'){
           csingles.push(Number(single.innerHTML));
           single_amount = Number(document.querySelector('#single_amount').value)
           single_times = Number(document.querySelector('#single_times').value)
      }
   })

   let csplits1 = [];
   let split1_amount = 0;
   let split1_times = 0;
   splits1.forEach((split)=>{
      if(split.style.backgroundColor == 'green'){
           csplits1.push((split.getAttribute('data-id')));
           split1_amount =  Number(document.querySelector('#split_amount').value)
           split1_times =  Number(document.querySelector('#split_times').value)
      }
   })

   let csplits2 = [];
   let split2_amount = 0;
   let split2_times = 0;
   splits2.forEach((split2)=>{
      if(split2.style.backgroundColor == 'green'){
           csplits2.push((split2.getAttribute('data-id')));
           split2_amount =  Number(document.querySelector('#split2_amount').value)
           split2_times = Number(document.querySelector('#split2_times').value)
      }
   })

   let cstreet = [];
   let street_amount = 0;
   let street_times = 0;
   streets.forEach((street)=>{
      if(street.style.backgroundColor == 'green'){
           cstreet.push((street.getAttribute('data-id')));
           street_amount =  Number(document.querySelector('#street_amount').value)
           street_times = Number(document.querySelector('#street_times').value)
      }
   })

   let ccorner = [];
   let corner_amount = 0;
   let corner_times = 0;
   corners.forEach((corner)=>{
      if(corner.style.backgroundColor == 'green'){
           ccorner.push((corner.getAttribute('data-id')));
           corner_amount =  Number(document.querySelector('#corner_amount').value)
           corner_times = Number(document.querySelector('#corner_times').value)
      } 
   })

   let clines = [];
   let line_amount = 0;
   let line_times = 0;
   lines.forEach((line)=>{
      if(line.style.backgroundColor == 'green'){
           clines.push((line.getAttribute('data-id')));
           line_amount =  Number(document.querySelector('#line_amount').value)
           line_times = Number(document.querySelector('#line_times').value)
      }
   })
   let coutside = [];
   let out_amount = [];
   let out_times = [];
   outside.forEach((out, index)=>{
      if(out.style.backgroundColor == 'green'){
           coutside.push((out.getAttribute('data-id')));
           out_amount.push(Number(document.querySelector(`#out${index+1}_amount`).value))
           out_times.push(Number(document.querySelector(`#out${index+1}_times`).value))
      }
   })

   let singlebet = {bet:csingles,amount:single_amount,times:single_times};
   let splitbet1 = {bet:csplits1,amount:split1_amount,times:split1_times};
   let splitbet2 = {bet:csplits2,amount:split2_amount,times:split2_times};
   let cornerbet = {bet:ccorner,amount:corner_amount,times:corner_times};
   let streetbet = {bet:cstreet,amount:street_amount,times:street_times};
   let linebet = {bet:clines,amount:line_amount,times:line_times};
   let outsidebet = {bet:coutside,amount:out_amount,times:out_times};

   let strategyObj = {
      single:singlebet,
      split1:splitbet1,
      split2:splitbet2,
      corner:cornerbet,
      street:streetbet,
      line:linebet,
      outside:outsidebet
   };
   singleul.innerHTML = "";
   splitul.innerHTML = "";
   cornerul.innerHTML = "";
   streetul.innerHTML = "";
   lineul.innerHTML = "";
   outsideul.innerHTML = "";
   let mystrat ;
   if(strategyObj.single.bet.length > 0){
      strategyObj.single.bet.forEach((bet)=>{
         mystrat = document.createElement('li');
         mystrat.className = `span${bet}`;
         text = document.createTextNode(bet);
         mystrat.appendChild(text);
         singleul.appendChild(mystrat);
      })
   }
   if(strategyObj.split1.bet.length > 0){
      strategyObj.split1.bet.forEach((bet)=>{
         mystrat = document.createElement('li');
         mystrat.className = `span${bet}`;
         text = document.createTextNode(bet);
         mystrat.appendChild(text);
         splitul.appendChild(mystrat);
      })
   }
   if(strategyObj.split2.bet.length > 0){
      strategyObj.split2.bet.forEach((bet)=>{
         mystrat = document.createElement('li');
         mystrat.className = `span${bet}`;
         text = document.createTextNode(bet);
         mystrat.appendChild(text);
         splitul.appendChild(mystrat);
      })
   }
   if(strategyObj.corner.bet.length > 0){
      strategyObj.corner.bet.forEach((bet)=>{
         mystrat = document.createElement('li');
         mystrat.className = `span${bet}`;
         text = document.createTextNode(bet);
         mystrat.appendChild(text);
         cornerul.appendChild(mystrat);
      })
   }
   if(strategyObj.street.bet.length > 0){
      strategyObj.street.bet.forEach((bet)=>{
         mystrat = document.createElement('li');
         mystrat.className = `span${bet}`;
         text = document.createTextNode(bet);
         mystrat.appendChild(text);
         streetul.appendChild(mystrat);
      })
   }
   if(strategyObj.line.bet.length > 0){
      strategyObj.line.bet.forEach((bet)=>{
         mystrat = document.createElement('li');
         mystrat.className = `span${bet}`;
         text = document.createTextNode(bet);
         mystrat.appendChild(text);
         lineul.appendChild(mystrat);
      })
   }
   if(strategyObj.outside.bet.length > 0){
      strategyObj.outside.bet.forEach((bet)=>{
         mystrat = document.createElement('li');
         mystrat.className = `span${bet}`;
         text = document.createTextNode(bet);
         mystrat.appendChild(text);
         outsideul.appendChild(mystrat);
      })
   }

 //  console.log(strategyObj);
 localStorage.setItem('strategy', JSON.stringify(strategyObj));
   if(localStorage.getItem('strategy')){
      document.querySelector('.pattern_save').innerHTML = 'Pattern Saved!';
      setTimeout(()=>{
       document.querySelector('.pattern_save').innerHTML = '';
      }, 5000);
   }
        
}

document.getElementById('x').addEventListener('input', function changef(x){
   document.getElementById('fail').value=parseInt(x.target.value);
})

document.getElementById('y').addEventListener('input', function changep(x){
   document.getElementById('play').value=parseInt(x.target.value);
})

document.getElementById("runbot").addEventListener('click', ()=>{
   let strategy = JSON.parse(localStorage.getItem("strategy"));
   let settings = JSON.parse(localStorage.getItem("settings"));
   chrome.tabs.query({active:true, currentWindow:true},function(tabs){
      if(tabs[0].url && tabs[0].url.includes("livecasino.betway.com.gh/frontend/evo/r2/")){
          chrome.tabs.sendMessage(tabs[0].id,{
             type : "bet",
             settings : settings,
             strategy : strategy
          },(res)=>{
          if(!chrome.runtime.lastError)
              console.log(res)
          });
          }
      })
})

document.getElementById("stopbot").addEventListener('click', ()=>{
   chrome.tabs.query({active:true, currentWindow:true},function(tabs){
      if(tabs[0].url && tabs[0].url.includes("livecasino.betway.com.gh/frontend/evo/r2/")){
          chrome.tabs.sendMessage(tabs[0].id,{
             type : "stop",
          },(res)=>{
          if(!chrome.runtime.lastError)
              console.log(res)
          });
          }
      })
})

document.getElementById("reset").addEventListener('click', ()=>{
   localStorage.removeItem('settings');
   localStorage.removeItem('strategy');
   chrome.tabs.query({active:true, currentWindow:true},function(tabs){
      if(tabs[0].url && tabs[0].url.includes("livecasino.betway.com.gh/frontend/evo/r2/")){
          chrome.tabs.sendMessage(tabs[0].id,{
             type : "reset",
          },(res)=>{
          if(!chrome.runtime.lastError)
              console.log(res)
          });
          }
      })
})