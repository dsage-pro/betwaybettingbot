window.onload = function(){
    let interval;
    let interval2;
   chrome.runtime.onMessage.addListener((obj, sender, sendResponse)=>{
    const type = obj.type;
    if(type === "game"){    
        location.href = document.querySelectorAll('iframe')[0].src;
    }else if(type === "set"){
        localStorage.setItem("amount", Number(document.querySelector('.amount--bb99f').children[1].innerHTML.split(',').join("")));
    }else if(type === "bet"){
        const settings = obj.settings ?? null;
        const strategy = obj.strategy ?? null;
        if(settings){
            localStorage.setItem("settings", JSON.stringify(settings))
        }
        if(strategy){ 
             localStorage.setItem("strategy", JSON.stringify(strategy))
        }
        if(!interval){
            interval = setInterval(playgame, 3000);
            interval2 = setInterval(strate, 1000);
        }
        console.log(interval);
    }else if(type === "reset"){
        clearInterval(interval);
        clearInterval(interval2);
        interval = null;
        interval2 = null;
        localStorage.removeItem('settings');
        localStorage.removeItem('strategy');
        console.log("reset");
    }else if(type === "stop"){
        clearInterval(interval);
        clearInterval(interval2);
        interval = null;
        interval2 = null;
        console.log("stop");
    }
    sendResponse(localStorage.setItem("settings", JSON.stringify(settings))); 
})

 function playgame(){
    let strategy;
    let settings;
    if(localStorage.getItem("strategy")){
     strategy = JSON.parse(localStorage.getItem("strategy"));
    }
    if(localStorage.getItem("settings")){
     settings = JSON.parse(localStorage.getItem("settings"));
    }
    let win_number = Number(document.querySelector('.winningNumber--a408f').getAttribute("data-winning-number")) ?? "";
    let code = document.querySelector('.winningNumber--a408f lineargradient').id ?? '';
    let amount = Number(document.querySelector('.amount--bb99f').children[1].innerHTML.split(',').join(""));
    let myamount = localStorage.getItem("amount");
    let player = document.querySelector(".decisionTimerContainer--91887.bottomSpaceForTrafficLight--ceb20") ?? "";
    let player2 = document.querySelectorAll(".chipstack--b299f.hidden--3fd36") ?? null
    localStorage.setItem("amount", JSON.stringify(amount)) 
    if(player ?? !player2){
     if(!settings.played){
     if(settings.x > 0){
       settings.x -= 1;
       localStorage.setItem("settings", JSON.stringify(settings))
       settings.playedColor = strategy.outside.bet[0];
       settings.winNumber = win_number;
       settings.code = code;
       settings.played = true;
       localStorage.setItem('settings', JSON.stringify(settings));
     }else{
         if(settings.y > 0){
        settings.y -= 1;
        for(let x in strategy){
            if(strategy[x].bet.length > 0){
                for(let y in strategy[x].bet){
                    let mybetamount;
                    let mybet = strategy[x].bet[y];
                    if(settings.amount){
                        let new_amount = strategy[x].amount[y] ?? strategy[x].amount;
                        let new_bet = strategy[x].times[y] ?? strategy[x].times;
                        switch(new_amount){
                            case 50: mybetamount = 205;
                            break;
                            case 250: mybetamount = 208;
                            break;
                            case 500: mybetamount = 210;
                            break;
                            case 2500: mybetamount = 212;
                            break;
                            case 12500: mybetamount = 214;
                            break;
                            case 50000: mybetamount = 216;
                            break;
                            default: mybetamount = 50; 
                        }
                        if(settings.value == 'lose'){
                            new_bet *= 2;
                            console.log(new_bet);
                            strategy[x].times[y] *= 2;
                            localStorage.setItem('strategy', JSON.stringify(strategy));
                            document.querySelectorAll('path')[mybetamount].dispatchEvent(new CustomEvent('click'));
                            for(let x=1; x<new_bet; x++){
                            // document.querySelectorAll(`[data-value="${mybetamount}"]`)[0].dispatchEvent(new CustomEvent('click',{bubbles:true}));
                            document.querySelectorAll(`[data-bet-spot-id="${mybet}"]`)[0].dispatchEvent(new CustomEvent('click',{bubbles:true}));
                           }                         
                        }else{
                            new_bet = 1;
                            strategy[x].times[y] = 1;
                            localStorage.setItem('strategy', JSON.stringify(strategy));
                            console.log(new_bet);
                            document.querySelectorAll('path')[mybetamount].dispatchEvent(new CustomEvent('click'));
                            // document.querySelectorAll(`[data-value="${mybetamount}"]`)[0].dispatchEvent(new CustomEvent('click',{bubbles:true}));
                            document.querySelectorAll(`[data-bet-spot-id="${mybet}"]`)[0].dispatchEvent(new CustomEvent('click',{bubbles:true}));
                        }
                        settings.playedColor = strategy[x].bet[y];
                        settings.winNumber = win_number;
                        settings.code = code;
                        settings.played = true;
                        localStorage.setItem('settings', JSON.stringify(settings));
                 }    
              }
           }
         }
       }
     }
   }
   }
 }
 function strate(){
    let settings;
    let strategy;
    if(localStorage.getItem("strategy")){
     strategy = JSON.parse(localStorage.getItem("strategy"));
    }
    if(localStorage.getItem("settings")){
       settings = JSON.parse(localStorage.getItem("settings"));
    }
    let win_number = Number(document.querySelector('.winningNumber--a408f').getAttribute("data-winning-number")) ?? "";
    let myred = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
    let myblack = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
    if(win_number){
        switch(win_number){
            case 0: mycolor = 'red';case 1: mycolor = 'red';break;case 2:mycolor = 'red';break;case 3: mycolor = 'red';break;case 4: mycolor = 'black';break;case 5: mycolor = 'black';break;case 6: mycolor = 'red';break;
            case 7: mycolor = 'red';break;case 8: mycolor = 'black';break;case 9: mycolor = 'red';break;case 10: mycolor = 'red';break;case 11: mycolor = 'red';break;case 12: mycolor = 'red';break;
            case 13: mycolor = 'red';break;case 14: mycolor = 'red';break;case 15: mycolor = 'red';break;case 16: mycolor = 'red';break;case 17: mycolor = 'red';break;case 18: mycolor = 'red';break;
            case 19: mycolor = 'black';break;case 20: mycolor = 'red';break;case 21: mycolor = 'red';break;case 22: mycolor = 'red';break;case 23: mycolor = 'red';break;case 24: mycolor = 'red';break;
            case 25: mycolor = 'black';break;case 26: mycolor = 'red';break;case 27: mycolor = 'red';break;case 28: mycolor = 'red';break;case 29: mycolor = 'black';break;case 30: mycolor = 'black';break;
            case 31: mycolor = 'red';break;case 32: mycolor = 'red';break;case 33: mycolor = 'red';break;case 34: mycolor = 'red';break;case 35: mycolor = 'black';break;case 36: mycolor = 'red';break;
            default: mycolor = 'red'; 
        }
        strategy.outside.bet[0] = mycolor;
        localStorage.setItem('strategy', JSON.stringify(strategy));
        if(win_number != settings.winNumber && settings.played){
        settings.played = false;
        switch(settings.playedColor){
            case 'red': settings.value = myred.includes(win_number) ? 'win':'lose';break;
            case 'black':settings.value = myblack.includes(win_number) ? 'win': 'lose';break;
            default: settings.value = 'win';
        }
        localStorage.setItem('settings', JSON.stringify(settings));
       }
    }
    // sendResponse(localStorage.setItem("settings", JSON.stringify(settings)));
 }
};

