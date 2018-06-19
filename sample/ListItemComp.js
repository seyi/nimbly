var ListItemComp = function($,Mustache,TXMBase) {

	const defaults = {
		"tagName":"list-item-test"
		,"templates":{
			"t4m_template_3":`
				<li class="list-item-test">testing list items</li>
			`
		}
		,"loadingTemplate":null
		,"initList":[]
		,"uiBindings":{
		}
		,"dataBindings":{
		}
		,"data":{
		}
		,"delayInit":false
	};

	class componentClass extends TXMBase {

		constructor(data, options) {
			super("ListItemComp", defaults, data || {}, options || {});
		};

		_fetchDummyData(resolve, reject) {
			var self = this;
			setTimeout(function() {
				self.data.chained_update = true;
				resolve();
			},100);
		};
	};

	return componentClass;
};

if (typeof module === "undefined") {
	window["ListItemComp"] = ListItemComp($,Mustache,TXMBase);
} else {
	module.exports = function($,Mustache,TXMBase) {
		return ListItemComp($,Mustache,TXMBase);
	};
}