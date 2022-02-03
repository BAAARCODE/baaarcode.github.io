c = document.getElementById("barcode");
var ctx = c.getContext("2d");

var title = document.getElementById("title");
var titlediv = document.getElementById("titlediv");

setTimeout(function() { // Courtesy of Tim Down: stackoverflow.com/a/4238971
    title.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(title);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(title);
        textRange.collapse(false);
        textRange.select();
    }
}, 0);

var defaultMultiplier = 2;

c.height = titlediv.clientHeight / 2;

title.addEventListener("input", drawBarcode, false);

// From a string, outputs an array of Code128 binary code strings for each character in the string.
function stringToBarcodeBinary(input)
{
    var sequence = ['11010010000']; // Code B beginning sequence: Code B has the most characters in the latin alphabet
    var checksum = 104;

    for (var i = 0; i < input.length; i++)
    {
        var letterValue = input.charCodeAt(i) - 32;
        if (letterValue < codes.length)
        {
            sequence.push("" + codes[Math.max(letterValue, 0)]);
            checksum += Math.max(letterValue, 0) * (i + 1);
        }
    }

    checksum = checksum % 103

    sequence.push("" + codes[checksum]);
    sequence.push("" + 1100011101011); // "Stop" sequence

    return sequence;
}

drawBarcode();

// Draws barcode from title text.
function drawBarcode() 
{
    input = title.textContent;

    ctx.imageSmoothingEnabled = false;

    var sequence = stringToBarcodeBinary(input);
    
    c.width = titlediv.clientWidth;

    // Width of one "line" in the barcode; auto-adapts to length.
    multiplier = c.width / (11 * sequence.length + 2);

    ctx.fillStyle = "#000000";

    for (var i = 0; i < sequence.length; i++)
    {
        for (var j = 0; j < sequence[i].length; j++)
        {
            if (sequence[i].charAt(j) == '1')
            {
                ctx.fillRect((i * 11 + j) * multiplier, 0, multiplier, c.height);
            }
        }
    }
}