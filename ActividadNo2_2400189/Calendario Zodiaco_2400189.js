<!DOCTYPE html>
<html<html>
    <head>
        <title>Signo zodiacal y horóscopo</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <script>
 
function algoritmo()
{
    let dia, mes;
    dia = parseInt (document.formulario1.dia.value);
    mes = parseInt (document.formulario1.mes.value);
    if((dia>=21&&mes==3)||(dia<=20&&mes==4))
    {
        alert('Signo: Aries');
        alert('Hor\u00F3scopo: Escribe el hor\u00F3scopo aqu\u00ED.');
    }
    if((dia>=24&&mes==9)||(dia<=23&&mes==10))
    {
        alert('Signo: Libra');
        alert('Hor\u00F3scopo: Escribe el hor\u00F3scopo aqu\u00ED.');
    }
    if((dia>=21&&mes==4)||(dia<=21&&mes==5))
    {
        alert('Signo: Tauro');
        alert('Hor\u00F3scopo: Escribe el hor\u00F3scopo aqu\u00ED.');
    }
    if((dia>=24&&mes==10)||(dia<=22&&mes==11))
    {
        alert('Signo: Escorpio');
        alert('Hor\u00F3scopo: Escribe el hor\u00F3scopo aqu\u00ED.');
    }
    if((dia>=22&&mes==5)||(dia<=21&&mes==6))
    {
        alert('Signo: Geminis');
        alert('Hor\u00F3scopo: Escribe el hor\u00F3scopo aqu\u00ED.');
    }
    if((dia>=23&&mes==11)||(dia<=21&&mes==12))
    {
        alert('Signo: Sagitario');
        alert('Hor\u00F3scopo: Escribe el hor\u00F3scopo aqu\u00ED.');
    }
    if((dia>=21&&mes==6)||(dia<=23&&mes==7))
    {
        alert('Signo: Cancer');
        alert('Hor\u00F3scopo: Escribe el hor\u00F3scopo aqu\u00ED.');
    }
    if((dia>=22&&mes==12)||(dia<=20&&mes==1))
    {
        alert('Signo: Capricornio');
        alert('Hor\u00F3scopo: Escribe el hor\u00F3scopo aqu\u00ED.');
    }
    if((dia>=24&&mes==7)||(dia<=23&&mes==8))
    {
        alert('Signo: Leo');
        alert('Hor\u00F3scopo: Escribe el hor\u00F3scopo aqu\u00ED.');
    }
    if((dia>=21&&mes==1)||(dia<=19&&mes==2))
    {
        alert('Signo: Acuario');
        alert('Hor\u00F3scopo: Escribe el hor\u00F3scopo aqu\u00ED.');
    }
    if((dia>=24&&mes==8)||(dia<=23&&mes==9))
    {
        alert('Signo: Virgo');
        alert('Hor\u00F3scopo: Escribe el hor\u00F3scopo aqu\u00ED.');
    }
    if((dia>=20&&mes==2)||(dia<=20&&mes==3))
    {
        alert('Signo: Piscis');
        alert('Hor\u00F3scopo: Escribe el hor\u00F3scopo aqu\u00ED.');
    }
}
 
        </script>
    </head>
    <body>
        <form name="formulario1">
            <table style="text-align: left; margin-left: auto; margin-right: auto;">
                <tbody>
                    <tr>
                        <td>
                            <label for="dia">Ingresa el valor de dia:</label>
                        </td>
                        <td>
                            <input name="dia" required="required" step="1" type="number" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="mes">Ingresa el valor de mes:</label>
                        </td>
                        <td>
                            <input name="mes" required="required" step="1" type="number" />
                        </td>
                    </tr>
                    <tr align="center">
                        <td colspan="2" rowspan="1">
                            <input value="Procesar" type="button" onclick="algoritmo();" />
                            <input type="reset" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </body>