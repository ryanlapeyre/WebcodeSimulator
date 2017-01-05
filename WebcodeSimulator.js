function clearWindow()
{
    var CSS = document.getElementById("styleWindow");
    var HTML = document.getElementById("hypertextWindow");
    var iFrame = document.getElementById("displayWindow").contentWindow.document;
    iFrame.open();
    iFrame.write("");
    iFrame.close();
    CSS.value = "";
    HTML.value = "";
    return;
}

function launchWindow()
{
    var CSS = document.getElementById("styleWindow").value;
    var HTML = document.getElementById("hypertextWindow").value;
    var iFrame = document.getElementById("displayWindow").contentWindow.document;
    iFrame.open();
    iFrame.write("<html><head><style>"+CSS+"</style></head><body>"+HTML+"</body></html>");
    iFrame.close();
    return;
}

function styleOn()
{
    var CSS = document.getElementById("styleWindow").value;
    var HTML = document.getElementById("hypertextWindow").value;
    var iFrame = document.getElementById("displayWindow").contentWindow.document;
    iFrame.open();
    iFrame.write("<html><head><style>"+CSS+"</style></head><body>"+HTML+"</body></html>");
    iFrame.close();
    return true;
}
function styleOff()
{
    var HTML = document.getElementById("hypertextWindow").value;
    var iFrame = document.getElementById("displayWindow").contentWindow.document;
    iFrame.open();
    iFrame.write("<html><head><style></style></head><body>"+HTML+"</body></html>");
    iFrame.close();
    return false;

}
var isOn = true; // static variable in JavaScript
function executeMain()
{

    if(isOn == true)
    {
        isOn = styleOff();
        return;
    }

    isOn = styleOn();
    return;
}


