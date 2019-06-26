var obj={
    password: "123456",
    checkboxes: "1,2",
    text: "Goodbye, World!"
}


function go()
{
    //пароль
    var p = document.getElementById('pass');
    console.log(p);
    p.value = obj.password;

    //чекбоксы
    var c1 = document.getElementById("check1");
    var c2 = document.getElementById("check2");
    var c3 = document.getElementById("check3");
    var a = obj.checkboxes.split(',');
    c1.removeAttribute('checked');
    c2.removeAttribute('checked');
    c3.removeAttribute('checked');
    console.log(a);
    for(let i = 0; i < a.length; i++)
    {
        switch(a[i])
        {
            case '1':
                c1.setAttribute('checked', 'checked');break;
            case '2':
                c2.setAttribute('checked', 'checked');break;
            case '3':
                c3.setAttribute('checked', 'checked');break;
        }
    }

    //текстовое поле
    var t = document.getElementById('txt');
    t.value = '';
    var a = obj.text.split('');
    console.log(a);
    var i = 0;
    var interval = setInterval(function(){
        if(i >= a.length)
            clearInterval(interval);
        else
        {
            t.value += a[i];
            i++;
        }
    }, 100);
}