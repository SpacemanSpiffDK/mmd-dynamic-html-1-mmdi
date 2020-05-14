// JS by Dan Høegh
// UCN MMD 2020

function menuOn(){
    const nav = document.querySelector('header > nav');
    nav.classList.add('active');
}

function menuOff(){
    const nav = document.querySelector('header > nav');
    nav.classList.remove('active');
}


// Function for filtering items 
function filter(elm, filterName) {
    // remove class active from all filter buttons
    const filterLinks = document.querySelectorAll('#filterTool > a');
    for (let i = 0; i < filterLinks.length; i++){
        filterLinks[i].classList.remove('active');
    }
    // add class active to the filterbutton that has been clicked on 
    elm.classList.add('active');

    const items = document.querySelectorAll('#filterItems > div');
    for (let i = 0; i < items.length; i++){
        let showItem = false;
        const itemClasses = items[i].classList;
        for (let j = 0; j < itemClasses.length; j++){
            if (itemClasses[j] == filterName){
                showItem = true;
            }
        }
        if (showItem) {
            itemClasses.remove('hidden');
        } else {
            itemClasses.add('hidden');
        }
    }
}

function filterShowAll(elm){
    // remove class active from all filter buttons
    const filterLinks = document.querySelectorAll('#filterTool > a');
    for (let i = 0; i < filterLinks.length; i++){
        filterLinks[i].classList.remove('active');
    }
    // add class active to the filterbutton that has been clicked on 
    elm.classList.add('active');
    
    const items = document.querySelectorAll('#filterItems > div');
    for (let i = 0; i < items.length; i++){
        items[i].classList.remove('hidden');
    }
}