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
    
      
      
    
      const element = document.getElementById("b2e4d174-6519-438a-af92-2d1a4d787297");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b2e4d174-6519-438a-af92-2d1a4d787297' but no matching script tag was found.")
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
                    
                  const docs_json = '{"dd997800-1a7b-455c-92cb-5a407175d635":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20512","type":"UnionRenderers"},{"attributes":{},"id":"20439","type":"DataRange1d"},{"attributes":{},"id":"20448","type":"BasicTicker"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20475","type":"Line"},{"attributes":{},"id":"20460","type":"UndoTool"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"20513"},"selection_policy":{"id":"20512"}},"id":"20492","type":"ColumnDataSource"},{"attributes":{},"id":"20441","type":"DataRange1d"},{"attributes":{"overlay":{"id":"20463"}},"id":"20457","type":"BoxZoomTool"},{"attributes":{},"id":"20511","type":"Selection"},{"attributes":{},"id":"20455","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20489","type":"Circle"},{"attributes":{"overlay":{"id":"20464"}},"id":"20459","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20464","type":"PolyAnnotation"},{"attributes":{},"id":"20505","type":"AllLabels"},{"attributes":{"tools":[{"id":"20455"},{"id":"20456"},{"id":"20457"},{"id":"20458"},{"id":"20459"},{"id":"20460"},{"id":"20461"},{"id":"20462"}]},"id":"20465","type":"Toolbar"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20481","type":"Line"},{"attributes":{},"id":"20504","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20482","type":"Line"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20463","type":"BoxAnnotation"},{"attributes":{"toolbars":[{"id":"20465"}],"tools":[{"id":"20455"},{"id":"20456"},{"id":"20457"},{"id":"20458"},{"id":"20459"},{"id":"20460"},{"id":"20461"},{"id":"20462"}]},"id":"20518","type":"ProxyToolbar"},{"attributes":{"children":[[{"id":"20438"},0,0]]},"id":"20517","type":"GridBox"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20483","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"20474"},"glyph":{"id":"20475"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20477"},"nonselection_glyph":{"id":"20476"},"view":{"id":"20479"}},"id":"20478","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"formatter":{"id":"20501"},"group":null,"major_label_policy":{"id":"20502"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"20452"}},"id":"20451","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"20492"},"glyph":{"id":"20493"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20495"},"nonselection_glyph":{"id":"20494"},"view":{"id":"20497"}},"id":"20496","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.2},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20495","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"20480"},"glyph":{"id":"20481"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20483"},"nonselection_glyph":{"id":"20482"},"view":{"id":"20485"}},"id":"20484","type":"GlyphRenderer"},{"attributes":{"source":{"id":"20486"}},"id":"20491","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20487","type":"Circle"},{"attributes":{"toolbar":{"id":"20518"},"toolbar_location":"above"},"id":"20519","type":"ToolbarBox"},{"attributes":{},"id":"20506","type":"UnionRenderers"},{"attributes":{},"id":"20443","type":"LinearScale"},{"attributes":{},"id":"20461","type":"SaveTool"},{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"20509"},"selection_policy":{"id":"20508"}},"id":"20480","type":"ColumnDataSource"},{"attributes":{"source":{"id":"20474"}},"id":"20479","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20494","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"20511"},"selection_policy":{"id":"20510"}},"id":"20486","type":"ColumnDataSource"},{"attributes":{},"id":"20452","type":"BasicTicker"},{"attributes":{},"id":"20507","type":"Selection"},{"attributes":{},"id":"20456","type":"PanTool"},{"attributes":{"below":[{"id":"20447"}],"center":[{"id":"20450"},{"id":"20454"}],"height":360,"left":[{"id":"20451"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"20478"},{"id":"20484"},{"id":"20490"},{"id":"20496"}],"title":{"id":"20498"},"toolbar":{"id":"20465"},"toolbar_location":null,"width":720,"x_range":{"id":"20439"},"x_scale":{"id":"20443"},"y_range":{"id":"20441"},"y_scale":{"id":"20445"}},"id":"20438","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"20492"}},"id":"20497","type":"CDSView"},{"attributes":{},"id":"20502","type":"AllLabels"},{"attributes":{},"id":"20508","type":"UnionRenderers"},{"attributes":{},"id":"20509","type":"Selection"},{"attributes":{"axis":{"id":"20451"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20454","type":"Grid"},{"attributes":{},"id":"20501","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"20447"},"coordinates":null,"group":null,"ticker":null},"id":"20450","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20476","type":"Line"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"20507"},"selection_policy":{"id":"20506"}},"id":"20474","type":"ColumnDataSource"},{"attributes":{},"id":"20513","type":"Selection"},{"attributes":{"source":{"id":"20480"}},"id":"20485","type":"CDSView"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20477","type":"Line"},{"attributes":{},"id":"20510","type":"UnionRenderers"},{"attributes":{"coordinates":null,"formatter":{"id":"20504"},"group":null,"major_label_policy":{"id":"20505"},"ticker":{"id":"20448"}},"id":"20447","type":"LinearAxis"},{"attributes":{},"id":"20445","type":"LinearScale"},{"attributes":{"callback":null},"id":"20462","type":"HoverTool"},{"attributes":{},"id":"20458","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20486"},"glyph":{"id":"20487"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20489"},"nonselection_glyph":{"id":"20488"},"view":{"id":"20491"}},"id":"20490","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20488","type":"Circle"},{"attributes":{"fill_color":{"value":"#fa7c17"},"hatch_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20493","type":"Circle"},{"attributes":{"coordinates":null,"group":null},"id":"20498","type":"Title"},{"attributes":{"children":[{"id":"20519"},{"id":"20517"}]},"id":"20520","type":"Column"}],"root_ids":["20520"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"dd997800-1a7b-455c-92cb-5a407175d635","root_ids":["20520"],"roots":{"20520":"b2e4d174-6519-438a-af92-2d1a4d787297"}}];
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