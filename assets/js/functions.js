
function showModal(){
    let modal = document.querySelector('.modal');

    modal.style.display = "block";

    function visible(){
        modal.style.opacity = "1";
        modal.style.transition = "1s ease all";
    }

    setTimeout(visible, 500);
}

function hideModal(){
    let modal = document.querySelector('.modal');

    modal.style.opacity = "0";
    modal.style.transition = "0.5s ease all";

    function hide(){
        modal.style.display = "none";
    }

    setTimeout(hide, 500);
}

function removeLoader(){
    let pageloader = document.querySelector('.loader');

    pageloader.style.opacity = "0";

    function finalRemove(){
        pageloader.style.display = "none";

    }

    setTimeout(finalRemove, 1000);
}


function createNewEle(elementTag, attributes, styles){

    var newEleme = document.createElement(elementTag);

    if(typeof(attributes) === "object" && attributes !== null){

        var newElemeAtt = Object.keys(attributes);
        var newElemeAttVal = [];
    
        for(var et = 0; et < newElemeAtt.length; et++){
            newElemeAttVal.push(attributes[newElemeAtt[et]])
        }
    
        // console.log(newElemeAtt, newElemeAttVal)
    
        for(var i = 0; i < newElemeAtt.length; i++){
            newEleme.setAttribute(newElemeAtt[i], newElemeAttVal[i]);
    
        }
    }

    if(typeof(styles) === "object" && styles !== null){

        var styleKeys = Object.keys(styles);
        var styleValues = [];

        for(var st = 0; st < styleKeys.length; st++){
            styleValues.push(styles[styleKeys[st]]);
        }

        var ElementStyle = "";

        // console.log(styleKeys, styleValues);

        for(var b = 0; b < styleKeys.length; b++){

            var arrStyleKey = styleKeys[b].split("");
            var newKey = "";

            for(var y = 0; y < arrStyleKey.length; y++){

                if(arrStyleKey[y] === "_"){
                    arrStyleKey[y] = "-";
                }

            }

            for(x in arrStyleKey){
                newKey += arrStyleKey[x];
            }

            // console.log(newKey);
            
            ElementStyle += newKey + ": " + styleValues[b] + "; ";
        }

        newEleme.setAttribute('style', ElementStyle)

    }

    
    // console.log(newEleme);
    return newEleme;


}

