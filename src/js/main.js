window.onload = function() {
  var colorSelect = '';
  var scene = new Kinetic.Stage({
    container: "kinetic",
    width: 1024,
    height: 800
  });
  var drawing = new Kinetic.Layer({
    y: 20,
    scale: 0.6
  });
  for(var key in datas) {
        var path = new Kinetic.Path({
          data: datas[key].path,
          fill: '#eee',
          stroke: '#555',
          strokeWidth: 1
        });

        path.on("click", function(){
        	if(colorSelect==''){
        		this.setFill(colorSelect);
        		drawing.drawScene();
        	}
        });
        drawing.add(path);
    }

  scene.add(drawing);

};