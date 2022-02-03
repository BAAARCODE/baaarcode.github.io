var maintext = "baaarcode";
var timeIncrement = 100;
for (var i = 1; i <= maintext.length; i++)
{
    setBarcodeText(maintext.substring(0, i), timeIncrement * i);
}

function setBarcodeText(text, timeout)
{
    setTimeout(function(){
        title.innerText = text;
        drawBarcode();
        if (timeout == timeIncrement * maintext.length)
        {
            console.log("ok");
            title.contentEditable = true;
            title.focus();
            document.execCommand('selectAll', false, null);
            document.getSelection().collapseToEnd();
        }
    }, timeout);
}