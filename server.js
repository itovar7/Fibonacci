const express = require('express');
const app = express();
const request = require('request');
const async = require('async');

app.get('/', (req, res) => {
    var num =req.query.num;
    var f1 = 1, f2 = 1, pos = 1, ultimo1=0, ultimo2=0;
    var cadena="";
    //construyo la serie de fibonnacci hast el numero 
    while (num > f1 && num > f2) {
        //1,1,2,3,5,8
        if (f1 < f2) {
            f1 += f2;
        } else{
            f2 += f1;   
        }
            //Tomo los dos ultimos valores del ciclo
            ultimo1=f1;
            ultimo2=f2;
        pos++;
    }
    if ((num == f1) || (num == f2)){
        if (ultimo1>ultimo2){
            res.send(res.json({ N: ultimo1,"N-1":ultimo2 }));
        }else{
            res.send(res.json({ N: ultimo2,"N-1":ultimo1 }));
        }
    }
    else{
        cadena="El numero " + num + " no pertenece a la serie de Fibonacci";
    }
    res.send(cadena);
});
app.listen('8888', () => {
    console.log('Listening on port 8888');
})