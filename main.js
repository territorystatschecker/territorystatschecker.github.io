var viewport = document.querySelector("meta[name=viewport]"); viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);

const hpm= [1,1.5,2,2.5,3.2,4,5,6.2,7.4,8.6,9.8,11];
const dmgm= [1,1.4,1.8,2.2,2.6,3,3.4,3.8,4.2,4.6,5,5.4];
const defv= ["10%","40%","55%","62.5%","70%","75%","79%","82%","84%","86%","88%","90%"];
const asv= ["0.5x","0.8x","1.0x","1.25x","1.6x","2.0x","2.5x","3.0x","3.6x","3.8x","4.2x","4.7x"];

var f= 0;

function ncheck()
{

if(f==0)
{
var hp= parseInt(300000 * hpm[Number(document.getElementById("hpn").value)] * (1 + 0.3 * Number(document.getElementById("consn").value)));

var lowdmg= parseInt(1000 * dmgm[Number(document.getElementById("damagen").value)] * (1 + 0.3 * Number(document.getElementById("consn").value)));

var highdmg= parseInt(1500 * dmgm[Number(document.getElementById("damagen").value)] * (1 + 0.3 * Number(document.getElementById("consn").value)));

if((hp<300000000)&&(highdmg<500000))
{
document.getElementById("nresult").innerHTML="HQ Guild Tower Stats: <br><br>" + "<font color='#AA0000'>" + hp + " </font><font color='#AAAAAA'>(</font><font color='#FFAA00'>" + defv[Number(document.getElementById("defn").value)] + "</font><font color='#AAAAAA'>) - </font><font color='#FF5555'>" + lowdmg + "-" + highdmg + " <font color='#AAAAAA'>(</font><font color='#55FFFF'>" + asv[Number(document.getElementById("asn").value)] + "</font><font color='#AAAAAA'>)</font>";
}
else
{
document.getElementById("nresult").innerHTML="<font color='#FF5555'>Invalid Input!</font>";
}
}

if(f==1)
{
if((document.getElementById("damagent").value>=0)&&(document.getElementById("damagent").value<12)&&(document.getElementById("asnt").value>=0)&&(document.getElementById("asnt").value<12)&&(document.getElementById("hpnt").value>=0)&&(document.getElementById("hpnt").value<12)&&(document.getElementById("defnt").value>=0)&&(document.getElementById("defnt").value<12))
{
var hp= parseInt(300000 * hpm[Number(document.getElementById("hpnt").value)] * (1 + 0.3 * Number(document.getElementById("consn").value)));

var lowdmg= parseInt(1000 * dmgm[Number(document.getElementById("damagent").value)] * (1 + 0.3 * Number(document.getElementById("consn").value)));

var highdmg= parseInt(1500 * dmgm[Number(document.getElementById("damagent").value)] * (1 + 0.3 * Number(document.getElementById("consn").value)));

if((hp<300000000)&&(highdmg<500000))
{
document.getElementById("nresult").innerHTML="HQ Guild Tower Stats: <br><br>" + "<font color='#AA0000'>" + hp + " </font><font color='#AAAAAA'>(</font><font color='#FFAA00'>" + defv[Number(document.getElementById("defnt").value)] + "</font><font color='#AAAAAA'>) - </font><font color='#FF5555'>" + lowdmg + "-" + highdmg + " <font color='#AAAAAA'>(</font><font color='#55FFFF'>" + asv[Number(document.getElementById("asnt").value)] + "</font><font color='#AAAAAA'>)</font>";
}
else
{
document.getElementById("nresult").innerHTML="<font color='#FF5555'>Invalid Input!</font>";
}
}
else
{
document.getElementById("nresult").innerHTML="<font color='#FF5555'>Invalid Input!</font>";
}
}

}

function hqcheck()
{

if(f==0)
{
var hp= parseInt(300000 * (1.5 + 0.25 * (Number(document.getElementById("conshq").value) + Number(document.getElementById("ext").value))) * (1 + 0.3 * Number(document.getElementById("conshq").value)) * hpm[Number(document.getElementById("hphq").value)]);

var lowdmg= parseInt(1000 * (1.5 + 0.25 * (Number(document.getElementById("conshq").value) + Number(document.getElementById("ext").value))) * (1 + 0.3 * Number(document.getElementById("conshq").value)) * dmgm[Number(document.getElementById("damagehq").value)]);

var highdmg= parseInt(1500 * (1.5 + 0.25 * (Number(document.getElementById("conshq").value) + Number(document.getElementById("ext").value))) * (1 + 0.3 * Number(document.getElementById("conshq").value)) * dmgm[Number(document.getElementById("damagehq").value)]);

if((hp<300000000)&&(highdmg<500000))
{
document.getElementById("hqresult").innerHTML="HQ Guild Tower Stats: <br><br>" + "<font color='#AA0000'>" + hp + " </font><font color='#AAAAAA'>(</font><font color='#FFAA00'>" + defv[Number(document.getElementById("defhq").value)] + "</font><font color='#AAAAAA'>) - </font><font color='#FF5555'>" + lowdmg + "-" + highdmg + " <font color='#AAAAAA'>(</font><font color='#55FFFF'>" + asv[Number(document.getElementById("ashq").value)] + "</font><font color='#AAAAAA'>)</font>";
}
else
{
document.getElementById("hqresult").innerHTML="<font color='#FF5555'>Invalid Input!</font>";
}
}

if(f==1)
{
if((document.getElementById("damagehqt").value>=0)&&(document.getElementById("damagehqt").value<12)&&(document.getElementById("ashqt").value>=0)&&(document.getElementById("ashqt").value<12)&&(document.getElementById("hphqt").value>=0)&&(document.getElementById("hphqt").value<12)&&(document.getElementById("defhqt").value>=0)&&(document.getElementById("defhqt").value<12))
{
var hp= parseInt(300000 * (1.5 + 0.25 * (Number(document.getElementById("conshq").value) + Number(document.getElementById("ext").value))) * (1 + 0.3 * Number(document.getElementById("conshq").value)) * hpm[Number(document.getElementById("hphqt").value)]);

var lowdmg= parseInt(1000 * (1.5 + 0.25 * (Number(document.getElementById("conshq").value) + Number(document.getElementById("ext").value))) * (1 + 0.3 * Number(document.getElementById("conshq").value)) * dmgm[Number(document.getElementById("damagehqt").value)]);

var highdmg= parseInt(1500 * (1.5 + 0.25 * (Number(document.getElementById("conshq").value) + Number(document.getElementById("ext").value))) * (1 + 0.3 * Number(document.getElementById("conshq").value)) * dmgm[Number(document.getElementById("damagehqt").value)]);

if((hp<300000000)&&(highdmg<500000))
{
document.getElementById("hqresult").innerHTML="HQ Guild Tower Stats: <br><br>" + "<font color='#AA0000'>" + hp + " </font><font color='#AAAAAA'>(</font><font color='#FFAA00'>" + defv[Number(document.getElementById("defhqt").value)] + "</font><font color='#AAAAAA'>) - </font><font color='#FF5555'>" + lowdmg + "-" + highdmg + " <font color='#AAAAAA'>(</font><font color='#55FFFF'>" + asv[Number(document.getElementById("ashqt").value)] + "</font><font color='#AAAAAA'>)</font>";
}
else
{
document.getElementById("hqresult").innerHTML="<font color='#FF5555'>Invalid Input!</font>";
}
}
else
{
document.getElementById("hqresult").innerHTML="<font color='#FF5555'>Invalid Input!</font>";
}
}

}

function tichange()
{
f=1;
document.getElementById("damagehq").style.display="none";
document.getElementById("damagehqt").style.display="block";
document.getElementById("ashq").style.display="none";
document.getElementById("ashqt").style.display="block";
document.getElementById("hphq").style.display="none";
document.getElementById("hphqt").style.display="block";
document.getElementById("defhq").style.display="none";
document.getElementById("defhqt").style.display="block";
document.getElementById("damagen").style.display="none";
document.getElementById("damagent").style.display="block";
document.getElementById("asn").style.display="none";
document.getElementById("asnt").style.display="block";
document.getElementById("hpn").style.display="none";
document.getElementById("hpnt").style.display="block";
document.getElementById("defn").style.display="none";
document.getElementById("defnt").style.display="block";
}
