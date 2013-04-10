/**
 * Returns the name of the current XPage so for example
 * http://myserver/mydb.nsf/MyXPage.xsp will return /MyXPage.xsp
 */
function getCurrentXPage() {
	if (!viewScope.containsKey("currentxpage")) {
		var url = context.getUrl();
		url = @Left(url, ".xsp") + ".xsp";
		url = @Right(url, ".nsf/");
		viewScope.currentxpage = "/" + url;
	}
	return viewScope.currentxpage;
}

function $A(object) {
	if (typeof object === 'undefined' || object === null) {
		return [];
	}
	if (typeof object === 'string') {
		return [object];
	}
	if (typeof object.toArray !== 'undefined') {
		return object.toArray();
	}
	if (object.constructor === Array) {
		return object;
	}
	return [object];
}
