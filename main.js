const hpm= [1,1.5,2,2.5,3.2,4,5,6.2,7.4,8.6,9.8,11];
const dmgm= [1,1.4,1.8,2.2,2.6,3,3.4,3.8,4.2,4.6,5,5.4];
const defv= ["10%","40%","55%","62.5%","70%","75%","79%","82%","84%","86%","88%","90%"];
const asv= ["0.5x","0.8x","1.0x","1.25x","1.6x","2.0x","2.5x","3.0x","3.6x","3.8x","4.2x","4.7x"];

function ncheck()
{

var hp= parseInt(300000 * hpm[Number(document.getElementById("hpn").value)] * (1 + 0.3 * Number(document.getElementById("consn").value)));

var lowdmg= parseInt(1000 * dmgm[Number(document.getElementById("damagen").value)] * (1 + 0.3 * Number(document.getElementById("consn").value)));

var highdmg= parseInt(1500 * dmgm[Number(document.getElementById("damagen").value)] * (1 + 0.3 * Number(document.getElementById("consn").value)));

document.getElementById("nresult").innerHTML="Guild Tower Stats: <br><br>" + "<font color='#AA0000'>" + hp + " </font><font color='#AAAAAA'>(</font><font color='#FFAA00'>" + defv[Number(document.getElementById("defn").value)] + "</font><font color='#AAAAAA'>) - </font><font color='#FF5555'>" + lowdmg + "-" + highdmg + " <font color='#AAAAAA'>(</font><font color='#55FFFF'>" + asv[Number(document.getElementById("asn").value)] + "</font><font color='#AAAAAA'>)</font>";
}

function hqcheck()
{

var hp= parseInt(300000 * (1.5 + 0.25 * (Number(document.getElementById("conshq").value) + Number(document.getElementById("ext").value))) * (1 + 0.3 * Number(document.getElementById("conshq").value)) * hpm[Number(document.getElementById("hphq").value)]);

var lowdmg= parseInt(1000 * (1.5 + 0.25 * (Number(document.getElementById("conshq").value) + Number(document.getElementById("ext").value))) * (1 + 0.3 * Number(document.getElementById("conshq").value)) * dmgm[Number(document.getElementById("damagehq").value)]);

var highdmg= parseInt(1500 * (1.5 + 0.25 * (Number(document.getElementById("conshq").value) + Number(document.getElementById("ext").value))) * (1 + 0.3 * Number(document.getElementById("conshq").value)) * dmgm[Number(document.getElementById("damagehq").value)]);

document.getElementById("hqresult").innerHTML="HQ Guild Tower Stats: <br><br>" + "<font color='#AA0000'>" + hp + " </font><font color='#AAAAAA'>(</font><font color='#FFAA00'>" + defv[Number(document.getElementById("defhq").value)] + "</font><font color='#AAAAAA'>) - </font><font color='#FF5555'>" + lowdmg + "-" + highdmg + " <font color='#AAAAAA'>(</font><font color='#55FFFF'>" + asv[Number(document.getElementById("ashq").value)] + "</font><font color='#AAAAAA'>)</font>";
}
