(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("a8e92d42-3c00-4df1-ac60-f6aa1841731e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a8e92d42-3c00-4df1-ac60-f6aa1841731e' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.1.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"b7919c34-7853-4be5-b93d-0a2f16c0a2ac":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20909","type":"PanTool"},{"attributes":{"children":[[{"id":"20891"},0,0]]},"id":"20975","type":"GridBox"},{"attributes":{"source":{"id":"20939"}},"id":"20944","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20967"},"selection_policy":{"id":"20966"}},"id":"20933","type":"ColumnDataSource"},{"attributes":{},"id":"20896","type":"LinearScale"},{"attributes":{},"id":"20905","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20947","type":"Circle"},{"attributes":{},"id":"20966","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"20917"}},"id":"20912","type":"LassoSelectTool"},{"attributes":{},"id":"20969","type":"Selection"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20934","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"20927"},"glyph":{"id":"20928"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20930"},"nonselection_glyph":{"id":"20929"},"view":{"id":"20932"}},"id":"20931","type":"GlyphRenderer"},{"attributes":{},"id":"20901","type":"BasicTicker"},{"attributes":{},"id":"20911","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20929","type":"Circle"},{"attributes":{},"id":"20967","type":"Selection"},{"attributes":{},"id":"20968","type":"UnionRenderers"},{"attributes":{},"id":"20970","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20941","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20942","type":"Line"},{"attributes":{"overlay":{"id":"20916"}},"id":"20910","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20935","type":"Line"},{"attributes":{"tools":[{"id":"20908"},{"id":"20909"},{"id":"20910"},{"id":"20911"},{"id":"20912"},{"id":"20913"},{"id":"20914"},{"id":"20915"}]},"id":"20918","type":"Toolbar"},{"attributes":{},"id":"20913","type":"UndoTool"},{"attributes":{},"id":"20892","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"20976"},"toolbar_location":"above"},"id":"20977","type":"ToolbarBox"},{"attributes":{"source":{"id":"20927"}},"id":"20932","type":"CDSView"},{"attributes":{"children":[{"id":"20977"},{"id":"20975"}]},"id":"20978","type":"Column"},{"attributes":{},"id":"20894","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"20955","type":"Title"},{"attributes":{},"id":"20962","type":"BasicTickFormatter"},{"attributes":{},"id":"20965","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20917","type":"PolyAnnotation"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"20959"},"group":null,"major_label_policy":{"id":"20960"},"ticker":{"id":"20905"}},"id":"20904","type":"LinearAxis"},{"attributes":{},"id":"20963","type":"AllLabels"},{"attributes":{},"id":"20959","type":"BasicTickFormatter"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20969"},"selection_policy":{"id":"20968"}},"id":"20939","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"20900"},"coordinates":null,"group":null,"ticker":null},"id":"20903","type":"Grid"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20916","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20948","type":"Circle"},{"attributes":{},"id":"20914","type":"SaveTool"},{"attributes":{},"id":"20898","type":"LinearScale"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"20931"},{"id":"20937"}]},"id":"20953","type":"LegendItem"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"20951","type":"Span"},{"attributes":{"toolbars":[{"id":"20918"}],"tools":[{"id":"20908"},{"id":"20909"},{"id":"20910"},{"id":"20911"},{"id":"20912"},{"id":"20913"},{"id":"20914"},{"id":"20915"}]},"id":"20976","type":"ProxyToolbar"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20971"},"selection_policy":{"id":"20970"}},"id":"20945","type":"ColumnDataSource"},{"attributes":{},"id":"20908","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20930","type":"Circle"},{"attributes":{"callback":null},"id":"20915","type":"HoverTool"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"20962"},"group":null,"major_label_policy":{"id":"20963"},"ticker":{"id":"20901"}},"id":"20900","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"20933"},"glyph":{"id":"20934"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20936"},"nonselection_glyph":{"id":"20935"},"view":{"id":"20938"}},"id":"20937","type":"GlyphRenderer"},{"attributes":{"above":[{"id":"20952"}],"below":[{"id":"20900"}],"center":[{"id":"20903"},{"id":"20907"}],"height":500,"left":[{"id":"20904"}],"output_backend":"webgl","renderers":[{"id":"20931"},{"id":"20937"},{"id":"20943"},{"id":"20949"},{"id":"20951"}],"title":{"id":"20955"},"toolbar":{"id":"20918"},"toolbar_location":null,"width":500,"x_range":{"id":"20892"},"x_scale":{"id":"20896"},"y_range":{"id":"20894"},"y_scale":{"id":"20898"}},"id":"20891","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20964","type":"UnionRenderers"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20940","type":"Line"},{"attributes":{},"id":"20971","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"20939"},"glyph":{"id":"20940"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20942"},"nonselection_glyph":{"id":"20941"},"view":{"id":"20944"}},"id":"20943","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20965"},"selection_policy":{"id":"20964"}},"id":"20927","type":"ColumnDataSource"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"20949"},{"id":"20943"}]},"id":"20954","type":"LegendItem"},{"attributes":{"source":{"id":"20945"}},"id":"20950","type":"CDSView"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20946","type":"Circle"},{"attributes":{"source":{"id":"20933"}},"id":"20938","type":"CDSView"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"20953"},{"id":"20954"}],"location":"center_right","orientation":"horizontal"},"id":"20952","type":"Legend"},{"attributes":{},"id":"20960","type":"AllLabels"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20936","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20928","type":"Circle"},{"attributes":{"axis":{"id":"20904"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20907","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"20945"},"glyph":{"id":"20946"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20948"},"nonselection_glyph":{"id":"20947"},"view":{"id":"20950"}},"id":"20949","type":"GlyphRenderer"}],"root_ids":["20978"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"b7919c34-7853-4be5-b93d-0a2f16c0a2ac","root_ids":["20978"],"roots":{"20978":"a8e92d42-3c00-4df1-ac60-f6aa1841731e"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();