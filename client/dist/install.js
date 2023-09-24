Html Webpack Plugin:
<pre>
  Error: document is not defined
  
  - loader.js:17 eval
    [install.js?.]/[html-webpack-plugin]/lib/loader.js:17:18
  
  - install.js:19 Object../node_modules/html-webpack-plugin/lib/loader.js!./src/js/install.js
    C:/Users/natei/BootCamp/week19/PWA_text_editor/client/src/js/install.js:19:1
  
  - install.js:94 
    C:/Users/natei/BootCamp/week19/PWA_text_editor/client/src/js/install.js:94:102
  
  - install.js:97 
    C:/Users/natei/BootCamp/week19/PWA_text_editor/client/src/js/install.js:97:12
  
  - node:vm:141 Script.runInContext
    node:vm:141:12
  
  - index.js:191 HtmlWebpackPlugin.evaluateCompilationResult
    [client]/[html-webpack-plugin]/index.js:191:28
  
  - index.js:373 
    [client]/[html-webpack-plugin]/index.js:373:26
  
  - task_queues:96 processTicksAndRejections
    node:internal/process/task_queues:96:5
  
  - async Promise.all
  
  - async Promise.all
  
</pre>