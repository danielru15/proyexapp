import type { ISourceOptions } from "tsparticles-engine"
import type { RecursivePartial } from "tsparticles-engine";


// Define your style object
const canvasStyles: RecursivePartial<CSSStyleDeclaration> = {
  position: "absolute",
  top: "0",
  bottom:"0",
  left:"0" ,
  right:"0",
  height: "100vh",
  pointerEvents:"none !important",
  zIndex:"none"
};

export const options: ISourceOptions = {
  
   "fps_limit":60,
   "interactivity":{
      "detectsOn":"parent",
      "events":{
         "onClick":{
            "enable":true,
            "mode":"push"
         },
         "onHover":{
            "enable":false,
            "mode":"repulse"
         },
         "resize":false
      },
      "modes":{
         "push":{
            "particles_nb":4
         },
         "repulse":{
            "distance":100,
            "duration":0.4
         }
      }
   },
   "particles":{
      "color":{
         "value":"#ffffff"
      },
      "links":{
         "color":"#ffffff",
         "distance":150,
         "enable":true,
         "opacity":0.4,
         "width":1
      },
      "move":{
         "bounce":false,
         "direction":"none",
         "enable":true,
         "outMode":"out",
         "random":false,
         "speed":2,
         "straight":false
      },
      "number":{
         "density":{
            "enable":true,
            "area":800
         },
         "value":60
      },
      "opacity":{
         "value":0.5
      },
      "shape":{
         "type":"circle"
      },
      "size":{
         "random":true,
         "value":5
      }
   },
   "detectRetina":true,
   "style": canvasStyles,
}