chrome.tabs.onActivated.addListener(tab=>{
    chrome.tabs.get(tab.tabId , current_tab_info=>{
        if(/^https:\/\/www\.whatsapp/.test(current_tab_info.url)){
            chrome.tabs.executeScript(null , {file:'./Myforeground.js'});
            chrome.tabs.insertCSS(null , {file:'./MyStyles.css'});
        }
    })
})