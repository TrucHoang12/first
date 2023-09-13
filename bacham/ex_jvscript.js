/*
document.write(" XIN CHAO CAC BAN NHA!");
alert( "Chao ban ");
var namsinh=prompt(" Ban sinh nam bao nhieu ?");
var traloi=confirm(" Ban co muon tinh tuoi khong?");
if (traloi==true)
    document.write("<h1>Ban duoc "+(2022-namsinh)+" tuoi</h1>");
else   
    document.write("<h1>Chao ban</h1>");

    var arrMaVung = new Array("08","04","72","65","64");  
    var arrTenVung = new Array(5);
    arrTenVung[0]="HCM";
    arrTenVung[1]="Hà Nội";
    arrTenVung[2]="Long An";
    arrTenVung[3]="Bình Dương";
    arrTenVung[4]="Vũng Tàu";
    for (i=0;i<5;i++)
    document.write(arrMaVung[i]+" "+arrTenVung[i]+"<br>");
*/
/*
alert("Ban muon giai bai nao");
alert("1.Bien luan phuong trinh bac nhat\n2.Hien thi bang cuu chuong theo nguoi dung nhap\n3.Bien luan phuong trinh bac hai\n4.Phuong trinh bac ba");
var input = prompt("Nhap so bai ban muon lam:");
if (input == 1){
    var a,b;
    do{
        a = prompt("Nhap a: ");
    }while(a<=0);
    b = prompt("Nhap b: ");//nhan du lieu nhap tu ban phim
    document.write("Ket qua: x = "+b/a);
}
if (input == 2){
    var nhap = prompt("Nhap so di: ");
    for(var i=1; i<11; i++){
        document.writeln(nhap+" * "+i+" = "+(nhap*i)+";  "); 
    }
}
if (input == 3){
    var a = prompt(" Nhap a: ");
    var b = prompt( "Nhap b: ");
    var c = prompt( "Nhap c: ");
    if ( a == 0){
        document.writeln("Ket qua: x = "+b/a);
        if (b == 0){
            if (c == 0){
                document.writeln("Phuong trinh vo so nghiem!");
            }
            else{
                document.writeln("Phuong trinh vo nghiem");
            }
        }
    }
    else{
        var delta = b*b - 4*a*c;
        if (delta > 0){
            document.writeln("Ket qua: Phuong trinh co 2 nghiem phan biet<br>x1 = "+(-b-Math.sqrt(delta))/(2*a)+"<br>x2 = "+(-b+Math.sqrt(delta))/(2*a));
        }
        else if (delta == 0){
            document.writeln("Ket qua: Phuong trinh co nghiem kep:<br>x1 = x2 = "+(-b/(2*a)));
        }
        else{
            document.writeln("Ket qua: Phuong trinh vo nghiem!");
        }
    }
}
if (input == 4){
    var a = prompt("Nhap a: ");
    var b = prompt("Nhap b: ");
    var c = prompt("Nhap c: ");
    var d = prompt("Nhap d: ");
    if (a == 0){
        if (b == 0){
            if (c == 0){
                if (d == 0){
                    document.writeln(" Phuong trinh vo so nghiem!");
                }
                else{
                    document.writeln( "Phuong trinh vo nghiem!");
                }
            }
        }
    }
}
*/


//document.write(`Ket qua:  x= ${(c - b) / a}<br>`);

