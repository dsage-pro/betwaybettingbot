// chrome.action.onClicked.addListener((tab)=>{
//     // chrome.scripting.executeScript({
//     //     target:{tadId:tab.id},
//     //     function: myfun
//     // });
//     console.log(chrome.runtime)
//     console.log('hello');
// })

// chrome.tabs.onUpdated.addListener((tabId, tab)=>{
//     if(tab.title && tab.title.includes(".betway.com.ng")){
//         chrome.tabs.sendMessage(tabId,{
//             type: "game"
//         }).then((res)=>{
//             console.log(res)
//         });
//     }
// })
chrome.tabs.onUpdated.addListener((tabId, tab)=>{
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
    if(tabs[0].url && tabs[0].url.includes(".betway.com.ng/lobby/livecasino/launchgame/Livecasino/")){
        chrome.tabs.sendMessage(tabs[0].id,{
            type: "game"
        },(res)=>{
        if(!chrome.runtime.lastError)
            console.log(res)
        });
        }
    })
})

chrome.tabs.onUpdated.addListener((tabId, tab)=>{
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
    if(tabs[0].url && tabs[0].url.includes("livecasino.betway.com.gh/frontend/evo/r2/")){
        chrome.tabs.sendMessage(tabs[0].id,{
            type: "set"
        },(res)=>{
        if(!chrome.runtime.lastError)
            console.log(res)
        });
        }
    })
})

// chrome.action.onClicked.dispatch()
// console.log(chrome.windows);
// chrome.windows.getCurrent().then((win)=>{
//     console.log(win)
// })
// chrome.windows.CreateType.POPUP;
// // chrome.windows.create();

// console.log(chrome.action)
// console.log(chrome.scripting)
// function myfun(){
//     document.body.style.backgroundColor = 'red';
//     console.log('Hello');
// }
// chrome.action.onClicked.addListener((tab)=>{
//     chrome.scripting.executeScript({
//         target:{tadId:tab.id},
//         function: myfun
//     });
// })
// // chrome.action.onClicked.dispatch()