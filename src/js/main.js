window.onload = function() {
    var colorSelect = '';
    var scene = new Kinetic.Stage({
        container: "kinetic",
        width: 1024,
        height: 550
    });
    var drawing = new Kinetic.Layer({
        y: 20,
        scale: 0.6
    });
    var colorSelection = new Kinetic.Layer({});
    for(var key in datas) {
        var path = new Kinetic.Path({
            data: datas[key].path,
            fill: '#FFF', 
            stroke: '#000',
            strokeWidth: 3
        });

        path.on("click", function(){
            if(colorSelect!=''){
                this.setFill(colorSelect);
                drawing.drawScene();
            }
        });
        drawing.add(path);
    }
    console.log(maPalette.length);
    for(var colorize in maPalette){
        console.log(maPalette[colorize]);
        var colorRect = new Kinetic.Rect({
            fill: maPalette[colorize],
            width: 60,
            height : 60,
            stroke: '#000',
            strokeWidth: 2,
            x: 700+Math.floor(colorize/5)*60,
            y: 50+(colorize%5)*60
        });
        colorRect.on("click", function(){
            console.log(this);
            colorSelect=this.fill();
        });
        colorSelection.add(colorRect);
    }

    scene.add(drawing);
    scene.add(colorSelection);
};