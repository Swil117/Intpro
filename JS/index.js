let stringdata;
stringdata = fetch('https://api.adviceslip.com/advice', {
  method: 'get'
}).then(function(response){
  alert(response);
});
let stringdata1;
stringdata1 = fetch('https://api.adviceslip.com/advice', {
  method: 'get'
}).then(function(response){
  alert(response);
    });
let stringdata2;
stringdata2 = fetch('https://api.adviceslip.com/advice', {
  method: 'get'
}).then(function(response){
  alert(response);
    });
let stringdata3;
stringdata3 = fetch('https://api.adviceslip.com/advice', {
  method: 'get'
}).then(function(response){
  alert(response);
    });
let stringdata4;
stringdata4 = fetch('https://api.adviceslip.com/advice', {
  method: 'get'
}).then(function(response){
  alert(response);
    });
let stringdata5;
stringdata5 = fetch('https://api.adviceslip.com/advice', {
  method: 'get'
}).then(function(response){
  alert(response);
    });
let stringdata6;
stringdata6 = fetch('https://api.adviceslip.com/advice', {
  method: 'get'
}).then(function(response){
  alert(response);
    });
let stringdata7;
stringdata7 = fetch('https://api.adviceslip.com/advice', {
  method: 'get'
}).then(function(response){
  alert(response);
    });
let stringdata8;
stringdata8 = fetch('https://api.adviceslip.com/advice', {
  method: 'get'
}).then(function(response){
  alert(response);
    });
stringdata1.toString();
var ready = $(document).ready(function () {

  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default

    data: {
      items: [

       {text: stringdata1.toLocaleString(), count: "11"},
        {text: "Php", count: "170"},
        {text: "Ruby", count: "123"},
        {text: "D", count: "12"},
        {text: "Python", count: "170"},
        {text: "C/C++", count: "382"},
        {text: "Pascal", count: "10"},
        {text: "Something", count: "170"},


      ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      {
       name: "central-click",
        options: {
          text: "(you know what....)",
          style: {
            "font-size": "12px",
            "font-style": "italic",
            "font-family": "Source Sans Pro, sans-serif",
            //"font-weight": "700",
            "text-anchor": "middle",
            "fill": "white"
          },
          attr: {dy: "65px"},
          centralClick: function() {
            alert("Some good advice, right?");
          }
        }
      },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "count",
              classed: {count: true},
              style: {
                "font-size": "28px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "20px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "50px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "40px"}
            }
          ]
        }
      }]
  });
});