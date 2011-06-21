"use strict";
function runCode(id) {
	var x = document.getElementById(id);
	if (x != null) {
		x.value = x.editor.getValue();
		eval(x.value);
	} else {
		console.warn(id + ' element not found.');
	}
}
function runCodeClick(ev) {
	runCode(this.dataset['code']);
}
(function(){
	var cm_settings = {
		lineNumbers: true,
		mode: 'javascript',
		theme: 'default',
		matchBrackets: true
	};
	var i,end,t;
	var ts = document.getElementsByClassName('codearea');
	for (i=0,end=ts.length; i<end; ++i) {
		ts[i].editor = CodeMirror.fromTextArea(ts[i], cm_settings);
	}
	cm_settings.mode = 'none';
	ts = document.getElementsByClassName('result');
	for (i=0,end=ts.length; i<end; ++i) {
		ts[i].editor = CodeMirror.fromTextArea(ts[i], cm_settings);
	}

	/* Adding onclick to runcode */
	ts = document.getElementsByClassName('run');
	for (i=0,end=ts.length; i<end; ++i) {
		ts[i].addEventListener('click', runCodeClick);
	}
}());

