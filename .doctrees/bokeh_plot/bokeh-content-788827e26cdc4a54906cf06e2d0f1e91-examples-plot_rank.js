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
    
      
      
    
      const element = document.getElementById("302aa99b-2173-4006-9cbc-b9d9967291f1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '302aa99b-2173-4006-9cbc-b9d9967291f1' but no matching script tag was found.")
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
                    
                  const docs_json = '{"c72690a0-f258-4d83-9c63-79cf725e43b0":{"defs":[],"roots":{"references":[{"attributes":{},"id":"48151","type":"UnionRenderers"},{"attributes":{},"id":"48031","type":"UndoTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48068","type":"BoxAnnotation"},{"attributes":{},"id":"48152","type":"Selection"},{"attributes":{},"id":"48027","type":"PanTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48069","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"data_source":{"id":"48111"},"glyph":{"id":"48112"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48114"},"nonselection_glyph":{"id":"48113"},"view":{"id":"48116"}},"id":"48115","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48171"},"selection_policy":{"id":"48170"}},"id":"48125","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"48067","type":"HoverTool"},{"attributes":{"children":[[{"id":"48009"},0,0],[{"id":"48045"},0,1]]},"id":"48177","type":"GridBox"},{"attributes":{},"id":"48026","type":"ResetTool"},{"attributes":{"source":{"id":"48111"}},"id":"48116","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48131","type":"Span"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48034","type":"BoxAnnotation"},{"attributes":{},"id":"48050","type":"LinearScale"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48119","type":"VBar"},{"attributes":{},"id":"48032","type":"SaveTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48124","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48120","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48121","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48126","type":"VBar"},{"attributes":{},"id":"48153","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"48118"},"glyph":{"id":"48119"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48121"},"nonselection_glyph":{"id":"48120"},"view":{"id":"48123"}},"id":"48122","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48169"},"selection_policy":{"id":"48168"}},"id":"48118","type":"ColumnDataSource"},{"attributes":{},"id":"48154","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48035","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48082","type":"VBar"},{"attributes":{"overlay":{"id":"48034"}},"id":"48028","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"48033","type":"HoverTool"},{"attributes":{},"id":"48144","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"48118"}},"id":"48123","type":"CDSView"},{"attributes":{},"id":"48145","type":"AllLabels"},{"attributes":{"overlay":{"id":"48035"}},"id":"48030","type":"LassoSelectTool"},{"attributes":{},"id":"48147","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48089","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48081","type":"VBar"},{"attributes":{},"id":"48148","type":"AllLabels"},{"attributes":{},"id":"48155","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"48079"},"glyph":{"id":"48080"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48082"},"nonselection_glyph":{"id":"48081"},"view":{"id":"48084"}},"id":"48083","type":"GlyphRenderer"},{"attributes":{},"id":"48156","type":"Selection"},{"attributes":{},"id":"48029","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48117","type":"Span"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48164"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48165"},"ticker":{"id":"48053"}},"id":"48052","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48150"},"selection_policy":{"id":"48149"}},"id":"48079","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48088","type":"VBar"},{"attributes":{"axis":{"id":"48052"},"coordinates":null,"group":null,"ticker":null},"id":"48055","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48092","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48152"},"selection_policy":{"id":"48151"}},"id":"48086","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"48052"}],"center":[{"id":"48055"},{"id":"48059"},{"id":"48117"},{"id":"48124"},{"id":"48131"},{"id":"48138"}],"height":331,"left":[{"id":"48056"}],"output_backend":"webgl","renderers":[{"id":"48115"},{"id":"48122"},{"id":"48129"},{"id":"48136"}],"title":{"id":"48141"},"toolbar":{"id":"48070"},"toolbar_location":null,"width":496,"x_range":{"id":"48010"},"x_scale":{"id":"48048"},"y_range":{"id":"48012"},"y_scale":{"id":"48050"}},"id":"48045","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"48079"}},"id":"48084","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48087","type":"VBar"},{"attributes":{"source":{"id":"48086"}},"id":"48091","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48113","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48167"},"selection_policy":{"id":"48166"}},"id":"48111","type":"ColumnDataSource"},{"attributes":{"source":{"id":"48132"}},"id":"48137","type":"CDSView"},{"attributes":{},"id":"48161","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"48179"},{"id":"48177"}]},"id":"48180","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"48132"},"glyph":{"id":"48133"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48135"},"nonselection_glyph":{"id":"48134"},"view":{"id":"48137"}},"id":"48136","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48094","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48086"},"glyph":{"id":"48087"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48089"},"nonselection_glyph":{"id":"48088"},"view":{"id":"48091"}},"id":"48090","type":"GlyphRenderer"},{"attributes":{},"id":"48060","type":"ResetTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48099","type":"Span"},{"attributes":{},"id":"48162","type":"AllLabels"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48095","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48134","type":"VBar"},{"attributes":{},"id":"48053","type":"BasicTicker"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48173"},"selection_policy":{"id":"48172"}},"id":"48132","type":"ColumnDataSource"},{"attributes":{},"id":"48149","type":"UnionRenderers"},{"attributes":{"source":{"id":"48093"}},"id":"48098","type":"CDSView"},{"attributes":{},"id":"48164","type":"BasicTickFormatter"},{"attributes":{},"id":"48150","type":"Selection"},{"attributes":{"tools":[{"id":"48026"},{"id":"48027"},{"id":"48028"},{"id":"48029"},{"id":"48030"},{"id":"48031"},{"id":"48032"},{"id":"48033"}]},"id":"48036","type":"Toolbar"},{"attributes":{"ticks":[0,1,2,3]},"id":"48107","type":"FixedTicker"},{"attributes":{"ticks":[0,1,2,3]},"id":"48139","type":"FixedTicker"},{"attributes":{},"id":"48165","type":"AllLabels"},{"attributes":{"tools":[{"id":"48060"},{"id":"48061"},{"id":"48062"},{"id":"48063"},{"id":"48064"},{"id":"48065"},{"id":"48066"},{"id":"48067"}]},"id":"48070","type":"Toolbar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48154"},"selection_policy":{"id":"48153"}},"id":"48093","type":"ColumnDataSource"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48161"},"group":null,"major_label_policy":{"id":"48162"},"ticker":{"id":"48139"}},"id":"48056","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48096","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48101","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48093"},"glyph":{"id":"48094"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48096"},"nonselection_glyph":{"id":"48095"},"view":{"id":"48098"}},"id":"48097","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48106","type":"Span"},{"attributes":{"axis":{"id":"48056"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48059","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48102","type":"VBar"},{"attributes":{"source":{"id":"48100"}},"id":"48105","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48141","type":"Title"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48080","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48135","type":"VBar"},{"attributes":{},"id":"48065","type":"UndoTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48156"},"selection_policy":{"id":"48155"}},"id":"48100","type":"ColumnDataSource"},{"attributes":{},"id":"48066","type":"SaveTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48103","type":"VBar"},{"attributes":{"overlay":{"id":"48068"}},"id":"48062","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48112","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48100"},"glyph":{"id":"48101"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48103"},"nonselection_glyph":{"id":"48102"},"view":{"id":"48105"}},"id":"48104","type":"GlyphRenderer"},{"attributes":{},"id":"48061","type":"PanTool"},{"attributes":{},"id":"48063","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"48069"}},"id":"48064","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48114","type":"VBar"},{"attributes":{"toolbars":[{"id":"48036"},{"id":"48070"}],"tools":[{"id":"48026"},{"id":"48027"},{"id":"48028"},{"id":"48029"},{"id":"48030"},{"id":"48031"},{"id":"48032"},{"id":"48033"},{"id":"48060"},{"id":"48061"},{"id":"48062"},{"id":"48063"},{"id":"48064"},{"id":"48065"},{"id":"48066"},{"id":"48067"}]},"id":"48178","type":"ProxyToolbar"},{"attributes":{},"id":"48166","type":"UnionRenderers"},{"attributes":{},"id":"48167","type":"Selection"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48128","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48127","type":"VBar"},{"attributes":{},"id":"48168","type":"UnionRenderers"},{"attributes":{},"id":"48169","type":"Selection"},{"attributes":{"axis":{"id":"48018"},"coordinates":null,"group":null,"ticker":null},"id":"48021","type":"Grid"},{"attributes":{"toolbar":{"id":"48178"},"toolbar_location":"above"},"id":"48179","type":"ToolbarBox"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48085","type":"Span"},{"attributes":{},"id":"48014","type":"LinearScale"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48133","type":"VBar"},{"attributes":{"source":{"id":"48125"}},"id":"48130","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48138","type":"Span"},{"attributes":{},"id":"48170","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"48125"},"glyph":{"id":"48126"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48128"},"nonselection_glyph":{"id":"48127"},"view":{"id":"48130"}},"id":"48129","type":"GlyphRenderer"},{"attributes":{},"id":"48171","type":"Selection"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48147"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48148"},"ticker":{"id":"48019"}},"id":"48018","type":"LinearAxis"},{"attributes":{},"id":"48019","type":"BasicTicker"},{"attributes":{},"id":"48016","type":"LinearScale"},{"attributes":{"below":[{"id":"48018"}],"center":[{"id":"48021"},{"id":"48025"},{"id":"48085"},{"id":"48092"},{"id":"48099"},{"id":"48106"}],"height":331,"left":[{"id":"48022"}],"output_backend":"webgl","renderers":[{"id":"48083"},{"id":"48090"},{"id":"48097"},{"id":"48104"}],"title":{"id":"48109"},"toolbar":{"id":"48036"},"toolbar_location":null,"width":496,"x_range":{"id":"48010"},"x_scale":{"id":"48014"},"y_range":{"id":"48012"},"y_scale":{"id":"48016"}},"id":"48009","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"48010","type":"DataRange1d"},{"attributes":{},"id":"48172","type":"UnionRenderers"},{"attributes":{},"id":"48048","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48109","type":"Title"},{"attributes":{},"id":"48173","type":"Selection"},{"attributes":{},"id":"48012","type":"DataRange1d"},{"attributes":{"axis":{"id":"48022"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48025","type":"Grid"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48144"},"group":null,"major_label_policy":{"id":"48145"},"ticker":{"id":"48107"}},"id":"48022","type":"LinearAxis"}],"root_ids":["48180"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"c72690a0-f258-4d83-9c63-79cf725e43b0","root_ids":["48180"],"roots":{"48180":"302aa99b-2173-4006-9cbc-b9d9967291f1"}}];
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