// Functions
function Add(a , b , c) {
    return a + b + c; 
}
document.write(Add(2 , 4 , 6 ), "<br>");
document.write("<br>");


function myName(name) {
    document.write("Salam !! " + name);
}
myName("Maham");
document.write("<br>");

function subName(names) {
    document.write("This is a" + names , "<br>");
}
subName("      Car");
subName("      Cat");
subName("      Dog");
document.write("<br>");


function tables(num) {
    for (let i = 1; i<11; i++) {
        document.write(num , "   x   " , i + "   =   " + num*i + "<br>");
    }

}
tables(7);
document.write("<br>");
tables(5);
document.write("<br>");
tables(9);
document.write("<br>");
tables(6);