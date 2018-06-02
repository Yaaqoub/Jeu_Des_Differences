function radioBut(){
    var typeFigures = document.getElementsByName("TypeFigures");

    if(typeFigures[0].checked)
        return 0;
    else if (typeFigures[1].checked)
        return 1;
    else if (typeFigures[2].checked)
        return 2;
    else if (typeFigures[3].checked)
        return 3;
    else if (typeFigures[4].checked)
        return 4;
    else if (typeFigures[5].checked)
        return 5;
}

differences = function () {
    //private
    figuresSVG = [genererRect, genererPolygon, genererLine, genererEllipse, genererCircle];

    erreursSVG = [erreursRect, erreursLine, erreursEllipse, erreursCircle];

    couleurs = ["red","green","blue"];

    function myRandom(min, max) {
        return Math.round(Math.random() * 1000000000) % (max - min + 1) + min;
    }

    function genererRect(width, height) {
        rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        rect.setAttribute("x", myRandom(0,width-10));
        rect.setAttribute("y", myRandom(0,height-10));
        rect.setAttribute("width", myRandom(10,50));
        rect.setAttribute("height", myRandom(10,50));
        rect.setAttribute("stroke", couleurs[myRandom(0,2)]);
        rect.setAttribute("stroke-width", myRandom(1,3));
        rect.setAttribute("fill", "rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
        return rect;
    }

    function genererPolygon(width, height) {
        polygon = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
        polygon.setAttribute("points",
            myRandom(0,width-10)+","+myRandom(0,height-10)+" "+
            myRandom(0,width-10)+","+myRandom(0,height-10)+" "+
            myRandom(0,width-10)+","+myRandom(0,height-10));
        polygon.setAttribute("stroke", couleurs[myRandom(0,2)]);
        polygon.setAttribute("stroke-width", myRandom(1,3));
        polygon.setAttribute("fill", "rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
        return polygon;
    }

    function genererLine(width, height) {
        line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute("x1", myRandom(0,width-10));
        line.setAttribute("y1", myRandom(0,height-10));
        line.setAttribute("x2", myRandom(10,500));
        line.setAttribute("y2", myRandom(10,500));
        line.setAttribute("stroke", couleurs[myRandom(0,2)]);
        line.setAttribute("stroke-width", myRandom(1,3));
        line.setAttribute("fill", "rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
        return line;
    }

    function genererEllipse(width, height) {
        ellipse = document.createElementNS("http://www.w3.org/2000/svg", 'ellipse');
        ellipse.setAttribute("cx", myRandom(0,width-10));
        ellipse.setAttribute("cy", myRandom(0,height-10));
        ellipse.setAttribute("rx", myRandom(10,120));
        ellipse.setAttribute("ry", myRandom(10,50));
        ellipse.setAttribute("stroke", couleurs[myRandom(0,2)]);
        ellipse.setAttribute("stroke-width", myRandom(1,3));
        ellipse.setAttribute("fill", "rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
        return ellipse;
    }

    function genererCircle(width, height) {
        circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        circle.setAttribute("cx", myRandom(0,width-10));
        circle.setAttribute("cy", myRandom(0,height-10));
        circle.setAttribute("r", myRandom(10,50));
        circle.setAttribute("stroke", couleurs[myRandom(0,2)]);
        circle.setAttribute("stroke-width", myRandom(1,3));
        circle.setAttribute("fill", "rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
        return circle;
    }

    function erreursRect(width, height) {
        rectE = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        rectE.setAttribute('id', add_id());
        rectE.setAttribute('class', 'rectErr');
        rectE.setAttribute('onclick', 'foundE(this.id)');
        rectE.setAttribute("x", myRandom(0,width-10));
        rectE.setAttribute("y", myRandom(0,height-10));
        rectE.setAttribute("width", myRandom(10,50));
        rectE.setAttribute("height", myRandom(10,50));
        rectE.setAttribute("stroke", couleurs[myRandom(0,2)]);
        rectE.setAttribute("stroke-width", myRandom(1,3));
        rectE.setAttribute("fill", "rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
        return rectE;
    }

    function erreursLine(width, height) {
        lineE = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        lineE.setAttribute('id', add_id());
        lineE.setAttribute('class', 'lineErr');
        lineE.setAttribute('onclick', 'foundE(this.id)');
        lineE.setAttribute("x1", myRandom(0,width-10));
        lineE.setAttribute("y1", myRandom(0,height-10));
        lineE.setAttribute("x2", myRandom(10,500));
        lineE.setAttribute("y2", myRandom(10,500));
        lineE.setAttribute("stroke", couleurs[myRandom(0,2)]);
        lineE.setAttribute("stroke-width", myRandom(1,3));
        lineE.setAttribute("fill", "rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
        return lineE;
    }

    function erreursEllipse(width, height) {
        ellipseE = document.createElementNS("http://www.w3.org/2000/svg", 'ellipse');
        ellipseE.setAttribute('id', add_id());
        ellipseE.setAttribute('class', 'ellipseErr');
        ellipseE.setAttribute('onclick', 'foundE(this.id)');
        ellipseE.setAttribute("cx", myRandom(0,width-10));
        ellipseE.setAttribute("cy", myRandom(0,height-10));
        ellipseE.setAttribute("rx", myRandom(10,120));
        ellipseE.setAttribute("ry", myRandom(10,50));
        ellipseE.setAttribute("stroke", couleurs[myRandom(0,2)]);
        ellipseE.setAttribute("stroke-width", myRandom(1,3));
        ellipseE.setAttribute("fill", "rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
        return ellipseE;
    }

    function erreursCircle(width, height) {
        circleE = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        circleE.setAttribute('id', add_id());
        circleE.setAttribute('class', 'circleErr');
        circleE.setAttribute('onclick', 'foundE(this.id)');
        circleE.setAttribute("cx", myRandom(0,width-10));
        circleE.setAttribute("cy", myRandom(0,height-10));
        circleE.setAttribute("r", myRandom(10,50));
        circleE.setAttribute("stroke", couleurs[myRandom(0,2)]);
        circleE.setAttribute("stroke-width", myRandom(1,3));
        circleE.setAttribute("fill", "rgb("+myRandom(0,255)+","+myRandom(0,255)+","+myRandom(0,255)+")");
        return circleE;
    }

    //public
    return {
        genererSVG:function(width,height,nbFigs){
            svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
            svg.setAttribute("width", width);
            svg.setAttribute("height", height);
            for (i=0;i<nbFigs;i++) {
                if(radioBut() == 0){
                    svg.appendChild(figuresSVG[4](width,height));
                }
                if(radioBut() == 1){
                    svg.appendChild(figuresSVG[3](width,height));
                }
                if(radioBut() == 2){
                    svg.appendChild(figuresSVG[2](width,height));
                }
                if(radioBut() == 3){
                    svg.appendChild(figuresSVG[1](width,height));
                }
                if(radioBut() == 4){
                    svg.appendChild(figuresSVG[0](width,height));
                }
                if(radioBut() == 5){
                    svg.appendChild(figuresSVG[0](width,height));
                    svg.appendChild(figuresSVG[2](width,height));
                    svg.appendChild(figuresSVG[4](width,height));
                }
            }
            return svg;
        }
    };
}();

var id;

function progressBar(){
    var nbrE = document.getElementById("nbrErr").value;
    var t;
    if(typeBut() == 11)
        t = nbrE * 5;
    else if(typeBut() == 12)
        t = nbrE * 10;
    var elem = document.getElementById("myBar");
    var width = 0;
    id = setInterval(frame, (t * 10));
    function frame(){
        if (width == 100){
            clearInterval(id);
            //document.getElementById("alertTest").style.visibility="visible";
            alert("Game Over !!");
            window.location.reload();
        }else {
            width++;
            elem.style.width = width + '%';
        }
    }
    //document.getElementById("nbrErreurP").innerHTML = "Time : " + (nbrE * 5);
}

var add_id = (function() {
    var counter = 0;

    return function() {
        counter++;
        //alert(counter);
        return counter;
    };
})();

var errCounter = (function() {
    var eC = 0;

    return function() {
        eC++;
        //alert(eC);
        return eC;
    };
})();

var barCounter = (function() {
    var eC = 0;

    return function() {
        eC++;
        return eC;
    };
})();

function foundE(id_test){
    var nbrE = document.getElementById("nbrErr").value;
    var sound = document.getElementById("MonSon");
    document.getElementById(id_test).style.visibility = 'hidden';
    errCounter();
    document.getElementById("barTextId").innerHTML = barCounter() + " / " + nbrE;
    sound.play();
    if(errCounter() == nbrE*2){
        //alert("Félicitation");
        document.getElementById("alertTest").style.visibility="visible";
        clearInterval(id);
    }
}

function typeBut(){
    var TypeE = document.getElementsByName("TypeE");

    if(TypeE[0].checked)
        return 11;
    else if (TypeE[1].checked)
        return 12;
}

function play(){
    var x = document.getElementById("nbr").value;
    var w = document.getElementById("width").value;
    var h = document.getElementById("height").value;
    var nbrE = document.getElementById("nbrErr").value;

    svg=differences.genererSVG(w,h,x);
    var clone = svg.cloneNode(true);

    for (i=0;i<nbrE;i++){
        if (typeBut() == 11){
            if (radioBut() == 0)
                svg.appendChild(erreursSVG[0](w,h));
            else if (radioBut() == 1)
                svg.appendChild(erreursSVG[1](w,h));
            else if (radioBut() == 2)
                svg.appendChild(erreursSVG[3](w,h));
            else if (radioBut() == 3)
                svg.appendChild(erreursSVG[2](w,h));
            else if (radioBut() == 4)
                svg.appendChild(erreursSVG[2](w,h));
            else if (radioBut() == 5)
                svg.appendChild(erreursSVG[2](w,h));
        }
        else if (typeBut() == 12){
            if (radioBut() == 0)
                svg.appendChild(erreursSVG[3](w,h));
            else if (radioBut() == 1)
                svg.appendChild(erreursSVG[2](w,h));
            else if (radioBut() == 2)
                svg.appendChild(erreursSVG[1](w,h));
            else if (radioBut() == 3)
                svg.appendChild(erreursSVG[1](w,h));
            else if (radioBut() == 4)
                svg.appendChild(erreursSVG[0](w,h));
            else if (radioBut() == 5)
                svg.appendChild(erreursSVG[0](w,h));
        }
    }
    document.getElementsByClassName("svg1")[0].appendChild(svg);
    document.getElementsByClassName("svg2")[0].appendChild(clone);
}