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
    
      
      
    
      const element = document.getElementById("8ecef0c1-41bb-4202-b559-6ad6fe6d66e0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8ecef0c1-41bb-4202-b559-6ad6fe6d66e0' but no matching script tag was found.")
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
                    
                  const docs_json = '{"2315a7c5-daf8-4643-ac12-2baa675d45d1":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"20630"},"glyph":{"id":"20629"},"group":null,"hover_glyph":null,"view":{"id":"20632"}},"id":"20631","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"formatter":{"id":"20640"},"group":null,"major_label_policy":{"id":"20641"},"ticker":{"id":"20603"}},"id":"20602","type":"LinearAxis"},{"attributes":{"source":{"id":"20630"}},"id":"20632","type":"CDSView"},{"attributes":{},"id":"20615","type":"UndoTool"},{"attributes":{},"id":"20613","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20619","type":"PolyAnnotation"},{"attributes":{},"id":"20640","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20633","type":"Title"},{"attributes":{"overlay":{"id":"20618"}},"id":"20612","type":"BoxZoomTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20643"},"selection_policy":{"id":"20642"}},"id":"20630","type":"ColumnDataSource"},{"attributes":{},"id":"20610","type":"ResetTool"},{"attributes":{"toolbars":[{"id":"20620"}],"tools":[{"id":"20610"},{"id":"20611"},{"id":"20612"},{"id":"20613"},{"id":"20614"},{"id":"20615"},{"id":"20616"},{"id":"20617"}]},"id":"20648","type":"ProxyToolbar"},{"attributes":{"children":[[{"id":"20593"},0,0]]},"id":"20647","type":"GridBox"},{"attributes":{},"id":"20598","type":"LinearScale"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20629","type":"Scatter"},{"attributes":{},"id":"20641","type":"AllLabels"},{"attributes":{"axis":{"id":"20602"},"coordinates":null,"group":null,"ticker":null},"id":"20605","type":"Grid"},{"attributes":{},"id":"20603","type":"BasicTicker"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20637"},"group":null,"major_label_policy":{"id":"20638"},"ticker":{"id":"20607"}},"id":"20606","type":"LinearAxis"},{"attributes":{"overlay":{"id":"20619"}},"id":"20614","type":"LassoSelectTool"},{"attributes":{},"id":"20638","type":"AllLabels"},{"attributes":{"children":[{"id":"20649"},{"id":"20647"}]},"id":"20650","type":"Column"},{"attributes":{"below":[{"id":"20602"}],"center":[{"id":"20605"},{"id":"20609"}],"height":288,"left":[{"id":"20606"}],"output_backend":"webgl","renderers":[{"id":"20631"}],"title":{"id":"20633"},"toolbar":{"id":"20620"},"toolbar_location":null,"width":432,"x_range":{"id":"20594"},"x_scale":{"id":"20598"},"y_range":{"id":"20596"},"y_scale":{"id":"20600"}},"id":"20593","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20642","type":"UnionRenderers"},{"attributes":{},"id":"20594","type":"DataRange1d"},{"attributes":{},"id":"20643","type":"Selection"},{"attributes":{},"id":"20596","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20618","type":"BoxAnnotation"},{"attributes":{},"id":"20637","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"20617","type":"HoverTool"},{"attributes":{},"id":"20611","type":"PanTool"},{"attributes":{"tools":[{"id":"20610"},{"id":"20611"},{"id":"20612"},{"id":"20613"},{"id":"20614"},{"id":"20615"},{"id":"20616"},{"id":"20617"}]},"id":"20620","type":"Toolbar"},{"attributes":{"axis":{"id":"20606"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20609","type":"Grid"},{"attributes":{"toolbar":{"id":"20648"},"toolbar_location":"above"},"id":"20649","type":"ToolbarBox"},{"attributes":{},"id":"20600","type":"LinearScale"},{"attributes":{},"id":"20607","type":"BasicTicker"},{"attributes":{},"id":"20616","type":"SaveTool"}],"root_ids":["20650"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"2315a7c5-daf8-4643-ac12-2baa675d45d1","root_ids":["20650"],"roots":{"20650":"8ecef0c1-41bb-4202-b559-6ad6fe6d66e0"}}];
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