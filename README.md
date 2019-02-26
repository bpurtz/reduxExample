# reduxExample
A skeleton app for starting up with webpack, react, redux, and react-router


<h2>Install dependencies</h2>
<ol>
  <li>cd client</li>
  <li>npm i</li>
  <li>cd ..</li>
  <li>npm i</li>
</ol>

<h2>Run for development </h2>
<ol>
  <li>npm run dev</li>
</ol>

<h2>Run for production </h2>
<ol>
  <li>npm run build</li>
</ol>

<h2>Note:</h2>
<p>Because we are running in devlopment and we want redux devtools installed, you will need redux dev tools installed when operating in chrome. Before production deployment, you will need to remove lines 15,16 of client/src/store.js. This will disable redux dev tool and then it will work on chrome without that extension.</p>

<p>The packaging tool used is webpack. This tool requires a cli generally. I am not sure if it is required for the project, but if there are errors, chances are you will need to install webpack globally.</p>

