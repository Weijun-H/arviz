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
    
      
      
    
      const element = document.getElementById("fa55371e-83c4-4114-9f84-8a8acfc9e5ff");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fa55371e-83c4-4114-9f84-8a8acfc9e5ff' but no matching script tag was found.")
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
                    
                  const docs_json = '{"a7189c6a-2f00-4648-a503-7415a4f1e57d":{"defs":[],"roots":{"references":[{"attributes":{"children":[[{"id":"21167"},0,0]]},"id":"21224","type":"GridBox"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21220"},"selection_policy":{"id":"21219"}},"id":"21203","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"21226"},{"id":"21224"}]},"id":"21227","type":"Column"},{"attributes":{"overlay":{"id":"21192"}},"id":"21186","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"21191","type":"HoverTool"},{"attributes":{},"id":"21185","type":"PanTool"},{"attributes":{},"id":"21215","type":"AllLabels"},{"attributes":{"source":{"id":"21203"}},"id":"21208","type":"CDSView"},{"attributes":{},"id":"21214","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21205","type":"Circle"},{"attributes":{},"id":"21174","type":"LinearScale"},{"attributes":{},"id":"21220","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21209","type":"Span"},{"attributes":{},"id":"21170","type":"DataRange1d"},{"attributes":{},"id":"21168","type":"DataRange1d"},{"attributes":{},"id":"21172","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21206","type":"Circle"},{"attributes":{"below":[{"id":"21176"}],"center":[{"id":"21179"},{"id":"21183"}],"height":500,"left":[{"id":"21180"}],"output_backend":"webgl","renderers":[{"id":"21207"},{"id":"21209"}],"title":{"id":"21210"},"toolbar":{"id":"21194"},"toolbar_location":null,"width":500,"x_range":{"id":"21168"},"x_scale":{"id":"21172"},"y_range":{"id":"21170"},"y_scale":{"id":"21174"}},"id":"21167","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"21225"},"toolbar_location":"above"},"id":"21226","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21204","type":"Circle"},{"attributes":{},"id":"21218","type":"AllLabels"},{"attributes":{"axis":{"id":"21180"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21183","type":"Grid"},{"attributes":{"axis_label":"ESS for quantiles","coordinates":null,"formatter":{"id":"21214"},"group":null,"major_label_policy":{"id":"21215"},"ticker":{"id":"21181"}},"id":"21180","type":"LinearAxis"},{"attributes":{},"id":"21177","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"21194"}],"tools":[{"id":"21184"},{"id":"21185"},{"id":"21186"},{"id":"21187"},{"id":"21188"},{"id":"21189"},{"id":"21190"},{"id":"21191"}]},"id":"21225","type":"ProxyToolbar"},{"attributes":{},"id":"21181","type":"BasicTicker"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21193","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21192","type":"BoxAnnotation"},{"attributes":{"tools":[{"id":"21184"},{"id":"21185"},{"id":"21186"},{"id":"21187"},{"id":"21188"},{"id":"21189"},{"id":"21190"},{"id":"21191"}]},"id":"21194","type":"Toolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"21203"},"glyph":{"id":"21204"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21206"},"nonselection_glyph":{"id":"21205"},"view":{"id":"21208"}},"id":"21207","type":"GlyphRenderer"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21217"},"group":null,"major_label_policy":{"id":"21218"},"ticker":{"id":"21177"}},"id":"21176","type":"LinearAxis"},{"attributes":{},"id":"21217","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"text":"sigma"},"id":"21210","type":"Title"},{"attributes":{"axis":{"id":"21176"},"coordinates":null,"group":null,"ticker":null},"id":"21179","type":"Grid"},{"attributes":{"overlay":{"id":"21193"}},"id":"21188","type":"LassoSelectTool"},{"attributes":{},"id":"21189","type":"UndoTool"},{"attributes":{},"id":"21190","type":"SaveTool"},{"attributes":{},"id":"21187","type":"WheelZoomTool"},{"attributes":{},"id":"21219","type":"UnionRenderers"},{"attributes":{},"id":"21184","type":"ResetTool"}],"root_ids":["21227"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"a7189c6a-2f00-4648-a503-7415a4f1e57d","root_ids":["21227"],"roots":{"21227":"fa55371e-83c4-4114-9f84-8a8acfc9e5ff"}}];
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