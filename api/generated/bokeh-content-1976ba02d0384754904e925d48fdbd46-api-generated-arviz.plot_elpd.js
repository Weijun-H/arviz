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
    
      
      
    
      const element = document.getElementById("3beb773d-73a0-4c76-8623-9aa6f47dd2b9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3beb773d-73a0-4c76-8623-9aa6f47dd2b9' but no matching script tag was found.")
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
                    
                  const docs_json = '{"7d7a7f01-d9b1-433d-8cc1-5144a5cb3f62":{"defs":[],"roots":{"references":[{"attributes":{"children":[{"id":"17353"},{"id":"17351"}]},"id":"17354","type":"Column"},{"attributes":{},"id":"17341","type":"BasicTickFormatter"},{"attributes":{},"id":"17300","type":"DataRange1d"},{"attributes":{},"id":"17311","type":"BasicTicker"},{"attributes":{},"id":"17320","type":"SaveTool"},{"attributes":{"coordinates":null,"data_source":{"id":"17334"},"glyph":{"id":"17333"},"group":null,"hover_glyph":null,"view":{"id":"17336"}},"id":"17335","type":"GlyphRenderer"},{"attributes":{},"id":"17344","type":"BasicTickFormatter"},{"attributes":{},"id":"17342","type":"AllLabels"},{"attributes":{"source":{"id":"17334"}},"id":"17336","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17337","type":"Title"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17347"},"selection_policy":{"id":"17346"}},"id":"17334","type":"ColumnDataSource"},{"attributes":{},"id":"17302","type":"LinearScale"},{"attributes":{"axis":{"id":"17310"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17313","type":"Grid"},{"attributes":{},"id":"17307","type":"BasicTicker"},{"attributes":{},"id":"17304","type":"LinearScale"},{"attributes":{"overlay":{"id":"17323"}},"id":"17318","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"17321","type":"HoverTool"},{"attributes":{"below":[{"id":"17306"}],"center":[{"id":"17309"},{"id":"17313"}],"height":288,"left":[{"id":"17310"}],"output_backend":"webgl","renderers":[{"id":"17335"}],"title":{"id":"17337"},"toolbar":{"id":"17324"},"toolbar_location":null,"width":432,"x_range":{"id":"17298"},"x_scale":{"id":"17302"},"y_range":{"id":"17300"},"y_scale":{"id":"17304"}},"id":"17297","subtype":"Figure","type":"Plot"},{"attributes":{"tools":[{"id":"17314"},{"id":"17315"},{"id":"17316"},{"id":"17317"},{"id":"17318"},{"id":"17319"},{"id":"17320"},{"id":"17321"}]},"id":"17324","type":"Toolbar"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17322","type":"BoxAnnotation"},{"attributes":{},"id":"17347","type":"Selection"},{"attributes":{},"id":"17345","type":"AllLabels"},{"attributes":{"overlay":{"id":"17322"}},"id":"17316","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"formatter":{"id":"17344"},"group":null,"major_label_policy":{"id":"17345"},"ticker":{"id":"17307"}},"id":"17306","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17333","type":"Scatter"},{"attributes":{"toolbar":{"id":"17352"},"toolbar_location":"above"},"id":"17353","type":"ToolbarBox"},{"attributes":{},"id":"17319","type":"UndoTool"},{"attributes":{},"id":"17315","type":"PanTool"},{"attributes":{},"id":"17346","type":"UnionRenderers"},{"attributes":{},"id":"17314","type":"ResetTool"},{"attributes":{"axis":{"id":"17306"},"coordinates":null,"group":null,"ticker":null},"id":"17309","type":"Grid"},{"attributes":{"children":[[{"id":"17297"},0,0]]},"id":"17351","type":"GridBox"},{"attributes":{"toolbars":[{"id":"17324"}],"tools":[{"id":"17314"},{"id":"17315"},{"id":"17316"},{"id":"17317"},{"id":"17318"},{"id":"17319"},{"id":"17320"},{"id":"17321"}]},"id":"17352","type":"ProxyToolbar"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17341"},"group":null,"major_label_policy":{"id":"17342"},"ticker":{"id":"17311"}},"id":"17310","type":"LinearAxis"},{"attributes":{},"id":"17317","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17323","type":"PolyAnnotation"},{"attributes":{},"id":"17298","type":"DataRange1d"}],"root_ids":["17354"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"7d7a7f01-d9b1-433d-8cc1-5144a5cb3f62","root_ids":["17354"],"roots":{"17354":"3beb773d-73a0-4c76-8623-9aa6f47dd2b9"}}];
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