define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["strut.etch_extension/align"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"#\" \n	class=\"btn btn-small etch-";
  if (stack1 = helpers.button) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.button; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"icon-align-";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i></a>";
  return buffer;
  });

this["JST"]["strut.etch_extension/colorChooser"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input class=\"color-chooser colorpicker etch-";
  if (stack1 = helpers.button) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.button; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />";
  return buffer;
  });

this["JST"]["strut.etch_extension/defaultButton"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"#\" \n	class=\"btn btn-small etch-";
  if (stack1 = helpers.button) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.button; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span>";
  if (stack1 = helpers.display) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.display; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></a>";
  return buffer;
  });

this["JST"]["strut.etch_extension/fontFamilySelection"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"btn-group\">\n	<button class=\"btn btn-inverse dropdown-toggle btn-small fontFamilyBtn\" data-toggle=\"dropdown\" title=\"Choose the font family\"><span class=\"text\">Lato</span><span class=\"caret\"></span></button>\n	<ul class=\"dropdown-menu menuBarOption\" data-option=\"fontFamily\">\n		<li>\n                  <a class=\"lato\" href=\"#\" data-value=\"'Lato', sans-serif\">Lato</a>\n                  <a class=\"leaguegothic\" href=\"#\" data-value=\"'League Gothic', sans-serif\">League Gothic</a>\n                  <a class=\"droidsansmono\" href=\"#\" data-value=\"'Droid Sans Mono', monospace\">Droid Sans Mono</a>\n                  <a class=\"ubuntu\" href=\"#\" data-value=\"'Ubuntu', sans-serif\">Ubuntu</a>\n                  <a class=\"abril\" href=\"#\" data-value=\"'Abril Fatface', cursive\">Abril</a>\n                  <a class=\"hammersmith\" href=\"#\" data-value=\"'Hammersmith One', sans-serif\">Hammersmith One</a>\n                  <a class=\"fredoka\" href=\"#\" data-value=\"'Fredoka One', cursive\">Fredoka One</a>\n                  <a class=\"gorditas\" href=\"#\" data-value=\"'Gorditas', cursive\">Gorditas</a>\n                  <a class=\"pressstart\" href=\"#\" data-value=\"'PressStart2P', cursive\">Press Start 2P</a>\n		</li>\n	</ul>\n</div>";
  });

this["JST"]["strut.etch_extension/fontSizeSelection"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"btn-group\">\n	<a class=\"btn btn-small btn-inverse dropdown-toggle\" data-toggle=\"dropdown\" title=\"Choose the font size\"><span class=\"text fontSizeReadout\">72</span>\n		<span class=\"caret\"></span></a>\n	<ul class=\"dropdown-menu menuBarOption\" data-option=\"fontSize\">\n		<li>\n                  <a href=\"#\" data-value=\"144\">144</a>\n                  <a href=\"#\" data-value=\"96\">96</a>\n                  <a href=\"#\" data-value=\"72\">72</a>\n			<a href=\"#\" data-value=\"64\">64</a>\n                  <a href=\"#\" data-value=\"48\">48</a>\n                  <a href=\"#\" data-value=\"36\">36</a>\n                  <a href=\"#\" data-value=\"24\">24</a>\n                  <a href=\"#\" data-value=\"16\">16</a>\n                  <a href=\"#\" data-value=\"12\">12</a>\n                  <a href=\"#\" data-value=\"8\">8</a>\n		</li>\n     	</ul>\n</div>";
  });

this["JST"]["strut.header/Header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"navbar navbar-inverse span12\">\n	<div class=\"navbar-inner\">\n		<ul class=\"nav\">\n			<li class=\"logo-holder\">\n			</li>\n			<li class=\"divider-vertical\">\n			</li>\n		</ul>\n		<ul class=\"nav\">\n			<li class=\"create-comp-buttons\">\n				<div class=\"btn-group iconBtns\">\n				</div>\n			</li>\n		</ul>\n		<ul class=\"nav theme-buttons\">\n		</ul>\n		<ul class=\"nav pull-right\">\n			<li class=\"divider-vertical\">\n			</li>\n			<li class=\"mode-buttons\">\n			</li>\n		</ul>\n	</div>\n</div>";
  });

this["JST"]["strut.logo_button/Logo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a class=\"btn logo btn-plast dropdown-toggle\" data-toggle=\"dropdown\">\n	<span class=\"logo-bg\"></span>\n    <span class=\"caret\"></span>\n</a>\n<ul class=\"dropdown-menu\">\n</ul>";
  });

this["JST"]["strut.presentation_generator.bespoke/BespokeTemplate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<style>\n	";
  if (stack1 = helpers.customStylesheet) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customStylesheet; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</style>\n	<style>\n	";
  stack2 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.customBackgrounds),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.bgs)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</style>\n	";
  stack2 = self.invokePartial(partials.PerSlideSurfaceStylesheet, 'PerSlideSurfaceStylesheet', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	<div id=\"main\" class=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.isBGClass || depth0.isBGClass),stack1 ? stack1.call(depth0, depth0.surface, options) : helperMissing.call(depth0, "isBGClass", depth0.surface, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "strut-surface ";
  if (stack2 = helpers.cannedTransition) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.cannedTransition; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n		<article class=\"innerBg\">\n			";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.slides),stack1 == null || stack1 === false ? stack1 : stack1.models)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth1),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</article>\n	</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		";
  stack1 = self.invokePartial(partials.CustomBgStylesheet, 'CustomBgStylesheet', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  if (stack1 = helpers.surface) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.surface; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  return buffer;
  }

function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, options;
  buffer += "\n				";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0, depth2),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  return buffer;
  }
function program7(depth0,data,depth1,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n					<section class=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.determineBG || depth1.determineBG),stack1 ? stack1.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineBG", depth1, depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " slideContainer strut-slide-";
  if (stack2 = helpers.index) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.index; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"width: 1024px; height: 768px;\" data-bespoke-state=\"strut-slide-";
  if (stack2 = helpers.index) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.index; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2);
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.determineSurface || depth1.determineSurface),stack1 ? stack1.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineSurface", depth1, depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n						<div class=\"themedArea\">\n              			";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.marked || depth0.marked),stack1 ? stack1.call(depth0, depth0.markdown, options) : helperMissing.call(depth0, "marked", depth0.markdown, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n              			</div>\n						";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  if (stack2 = helpers.components) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.components; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.components) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n					</section>\n				";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n							";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.renderComponent || depth0.renderComponent),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "renderComponent", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n						";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["strut.presentation_generator.handouts/HandoutsTemplate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, options, self=this, helperMissing=helpers.helperMissing, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n<style type=\"text/css\">\n";
  if (stack1 = helpers.customStylesheet) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customStylesheet; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</style>\n\n<div class=\"notes-handout\">\n";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.slides),stack1 == null || stack1 === false ? stack1 : stack1.models)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth1),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n";
  return buffer;
  }
function program2(depth0,data,depth2) {
  
  var buffer = "", stack1, options;
  buffer += "\n";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0, depth2),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"notes\">\n	Notes:\n</div>\n</div>\n";
  return buffer;
  }
function program3(depth0,data,depth1,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n<div class=\"slide-and-notes\">\n<div class=\"slide ";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.determineBG || depth1.determineBG),stack1 ? stack1.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineBG", depth1, depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " slideContainer\" style=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.slideBGImg || depth1.slideBGImg),stack1 ? stack1.call(depth0, depth1, options) : helperMissing.call(depth0, "slideBGImg", depth1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n<div class=\"reveal themedArea\">\n";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.marked || depth0.marked),stack1 ? stack1.call(depth0, depth0.markdown, options) : helperMissing.call(depth0, "marked", depth0.markdown, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  if (stack2 = helpers.components) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.components; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.components) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.renderComponent || depth0.renderComponent),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "renderComponent", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/ComponentContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "rotate(";
  if (stack1 = helpers.rotate) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rotate; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "rad)";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "skewX(";
  if (stack1 = helpers.skewX) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skewX; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "rad)";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "skewY(";
  if (stack1 = helpers.skewY) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.skewY; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "rad)";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.round || depth0.round),stack1 ? stack1.call(depth0, ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.width), options) : helperMissing.call(depth0, "round", ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.width), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "px";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.round || depth0.round),stack1 ? stack1.call(depth0, ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.height), options) : helperMissing.call(depth0, "round", ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.height), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "px";
  return buffer;
  }

  buffer += "<div class=\"componentContainer ";
  if (stack1 = helpers.customClasses) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customClasses; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"top: ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.round || depth0.round),stack1 ? stack1.call(depth0, depth0['y'], options) : helperMissing.call(depth0, "round", depth0['y'], options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "px; left: ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.round || depth0.round),stack1 ? stack1.call(depth0, depth0['x'], options) : helperMissing.call(depth0, "round", depth0['x'], options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "px; -webkit-transform: ";
  stack2 = helpers['if'].call(depth0, depth0.rotate, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.skewX, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.skewY, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "; -moz-transform: ";
  stack2 = helpers['if'].call(depth0, depth0.rotate, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.skewX, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.skewY, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "; transform: ";
  stack2 = helpers['if'].call(depth0, depth0.rotate, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.skewX, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.skewY, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "; width: ";
  stack2 = helpers['if'].call(depth0, depth0.scale, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "; height: ";
  stack2 = helpers['if'].call(depth0, depth0.scale, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ";\">\n";
  stack2 = self.invokePartial(partials.TransformContainer, 'TransformContainer', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/Image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, options, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<img src=\""
    + escapeExpression(((stack1 = depth1.uri),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></img>\n</div>\n</div>\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/ImpressTemplate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "\n	<script>\n		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { // Detect mobile browsers & use memory optimized styling if on mobile (hide all but the previous & next slides). Can prevent crashes when presentation contains many images and/or 3d elements.\n		  	var root = document.documentElement;\n			root.className += ' mobile';\n		} else {\n			var root = document.documentElement;\n			root.className += ' desktop';\n		}\n\n		function getPreviousSibling(element){\n			var p = element;\n			do p = p.previousSibling;\n			while (p && p.nodeType != 1);\n			return p;\n		}\n		\n		document.addEventListener('impress:stepleave',function(event){\n			prev = document.getElementsByClassName('prev')[0];\n			if(typeof prev != 'undefined')\n				prev.classList.remove('prev'); // Remove prev class from old prev slide\n			current = document.getElementsByClassName('active')[0]; // Get current slide\n			prev = getPreviousSibling(current); // Get prev slide\n			prev.className += ' prev'; // Mark prev slide with class\n		});\n	</script>\n\n	<style>\n		.step { display:none; } /* Start by not showing slides to prevent mobile Crash at the start */\n		.desktop .step { display:block; } /* Desktops should be able to handle all slides */\n		.step.active,.step.present,.step.active + .step,.step.prev { display:block; } /* Limit mobile to only show the current slide, the next slide, and the previous slide */\n	</style>\n";
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n<style type=\"text/css\">\n";
  if (stack1 = helpers.customStylesheet) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customStylesheet; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</style>\n<style>\n";
  stack2 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.customBackgrounds),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.bgs)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</style>\n";
  stack2 = self.invokePartial(partials.PerSlideSurfaceStylesheet, 'PerSlideSurfaceStylesheet', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<!-- This is a work around / hack to get the user's browser to download the fonts \n if they decide to save the presentation. -->\n<div style=\"visibility: hidden; width: 0px; height: 0px\">\n<img src=\"css/Lato-Bold.woff\" />\n<img src=\"css/HammersmithOne.woff\" />\n<img src=\"css/Droid-Sans-Mono.woff\" />\n<img src=\"css/Gorditas-Regular.woff\" />\n<img src=\"css/FredokaOne-Regular.woff\" />\n<img src=\"css/Ubuntu.woff\" />\n<img src=\"css/Ubuntu-Bold.woff\" />\n<img src=\"css/PressStart2P-Regular.woff\" />\n<img src=\"css/Lato-BoldItalic.woff\" />\n<img src=\"css/AbrilFatface-Regular.woff\" />\n<img src=\"css/Lato-Regular.woff\" />\n</div>\n\n<div class=\"fallback-message\">\n    <p>Your browser <b>doesn't support the features required</b> by impress.js, so you are presented with a simplified version of this presentation.</p>\n    <p>For the best experience please use the latest <b>Chrome</b>, <b>Safari</b> or <b>Firefox</b> browser.</p>\n</div>\n\n<div class=\"bg ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.isBGClass || depth0.isBGClass),stack1 ? stack1.call(depth0, depth0.surface, options) : helperMissing.call(depth0, "isBGClass", depth0.surface, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "strut-surface\">\n<div class=\"bg innerBg\">\n<div id=\"impress\">\n	";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.slides),stack1 == null || stack1 === false ? stack1 : stack1.models)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(8, program8, data, depth1),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	<div id=\"overview\" class=\"step\" data-state=\"strut-slide-overview\" data-x=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.scaleX || depth0.scaleX),stack1 ? stack1.call(depth0, depth0.overviewX, options) : helperMissing.call(depth0, "scaleX", depth0.overviewX, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" data-y=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.scaleY || depth0.scaleY),stack1 ? stack1.call(depth0, depth0.overviewY, options) : helperMissing.call(depth0, "scaleY", depth0.overviewY, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" data-scale=\"9\"></div>\n	";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	";
  stack1 = self.invokePartial(partials.CustomBgStylesheet, 'CustomBgStylesheet', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  if (stack1 = helpers.surface) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.surface; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  return buffer;
  }

function program8(depth0,data,depth2) {
  
  var buffer = "", stack1, options;
  buffer += "\n		";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth0, depth2),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	";
  return buffer;
  }
function program9(depth0,data,depth1,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n			<div class=\"step\" data-state=\"strut-slide-";
  if (stack1 = helpers.index) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.index; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.determineSurface || depth1.determineSurface),stack1 ? stack1.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineSurface", depth1, depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" data-x=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.scaleX || depth0.scaleX),stack1 ? stack1.call(depth0, depth0['x'], options) : helperMissing.call(depth0, "scaleX", depth0['x'], options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" data-y=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.scaleY || depth0.scaleY),stack1 ? stack1.call(depth0, depth0['y'], options) : helperMissing.call(depth0, "scaleY", depth0['y'], options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" ";
  stack2 = helpers['if'].call(depth0, depth0.rotateX, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "  ";
  stack2 = helpers['if'].call(depth0, depth0.rotateY, {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.rotateZ, {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0['z'], {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.impScale, {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">\n			<div class=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.determineBG || depth1.determineBG),stack1 ? stack1.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineBG", depth1, depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " slideContainer strut-slide-";
  if (stack2 = helpers.index) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.index; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"width: 1024px; height: 768px;\">\n			<div class=\"themedArea\">\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.marked || depth0.marked),stack1 ? stack1.call(depth0, depth0.markdown, options) : helperMissing.call(depth0, "marked", depth0.markdown, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			</div>\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data};
  if (stack2 = helpers.components) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.components; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.components) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			</div>\n		";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "data-rotate-x=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.toDeg || depth0.toDeg),stack1 ? stack1.call(depth0, depth0.rotateX, options) : helperMissing.call(depth0, "toDeg", depth0.rotateX, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "data-rotate-y=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.toDeg || depth0.toDeg),stack1 ? stack1.call(depth0, depth0.rotateY, options) : helperMissing.call(depth0, "toDeg", depth0.rotateY, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "data-rotate-z=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.toDeg || depth0.toDeg),stack1 ? stack1.call(depth0, depth0.rotateZ, options) : helperMissing.call(depth0, "toDeg", depth0.rotateZ, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-z=\"";
  if (stack1 = helpers['z']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['z']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-scale=\"";
  if (stack1 = helpers.impScale) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.impScale; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.renderComponent || depth0.renderComponent),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "renderComponent", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.mobileVersion) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.mobileVersion; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.mobileVersion) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"hint\">\n    <p>Use a spacebar or arrow keys to navigate</p>\n</div>\n</div>\n</div>";
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/SVGContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<div class=\"componentContainer\" style=\"top: ";
  if (stack1 = helpers['y']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['y']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px; left: ";
  if (stack1 = helpers['x']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['x']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px; width: "
    + escapeExpression(((stack1 = ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "px; height: "
    + escapeExpression(((stack1 = ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "px;\">\n";
  stack2 = self.invokePartial(partials.TransformContainer, 'TransformContainer', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/SVGImage"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = self.invokePartial(partials.SVGContainer, 'SVGContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<img src=\"";
  if (stack1 = helpers.src) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.src; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"width: 100%; height: 100%\"></img>\n</div>\n</div>";
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/Shape"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.shapeSvg) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.shapeSvg; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.shapeSvg) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/TextBox"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, options, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div style=\"font-size: ";
  if (stack1 = helpers.size) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.size; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\" class=\"antialias\">\n";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n</div>\n</div>\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/TransformContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "scale(";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.round || depth0.round),stack1 ? stack1.call(depth0, ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1['x']), options) : helperMissing.call(depth0, "round", ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1['x']), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ", ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.round || depth0.round),stack1 ? stack1.call(depth0, ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1['y']), options) : helperMissing.call(depth0, "round", ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1['y']), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ")";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"transformContainer\" style=\"-webkit-transform: ";
  stack1 = helpers['if'].call(depth0, depth0.scale, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\n-moz-transform: ";
  stack1 = helpers['if'].call(depth0, depth0.scale, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ";\ntransform: ";
  stack1 = helpers['if'].call(depth0, depth0.scale, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/Video"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, options, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<video controls>\n	<source src=\"";
  if (stack1 = helpers.src) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.src; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"";
  if (stack1 = helpers.srcType) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.srcType; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" preload=\"metadata\"></source>\n</video>\n</div>\n</div>\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/WebFrame"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var stack1, options, self=this, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<iframe width=\"960\" height=\"768\" src=\"";
  if (stack1 = helpers.src) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.src; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></iframe>\n</div>\n</div>\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator.impress/Youtube"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression;


  stack1 = self.invokePartial(partials.SVGContainer, 'SVGContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<object width=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" height=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><param name=\"movie\" value=\"http://www.youtube.com/v/";
  if (stack2 = helpers.shortSrc) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.shortSrc; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "&hl=en&fs=1\"><param name=\"allowFullScreen\" value=\"true\"><embed src=\"http://www.youtube.com/v/";
  if (stack2 = helpers.shortSrc) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.shortSrc; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "&hl=en&fs=1\" type=\"application/x-shockwave-flash\" allowfullscreen=\"true\" width=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.width)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" height=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.scale),stack1 == null || stack1 === false ? stack1 : stack1.height)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></object>\n</div>\n</div>";
  return buffer;
  });

this["JST"]["strut.presentation_generator.impress/YoutubeContainer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<div class=\"componentContainer\" style=\"top: ";
  if (stack1 = helpers['y']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['y']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px; left: ";
  if (stack1 = helpers['x']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['x']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\">\n";
  stack1 = self.invokePartial(partials.TransformContainer, 'TransformContainer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["JST"]["strut.presentation_generator.reveal/RevealTemplate"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n  <style type=\"text/css\">\n    ";
  if (stack1 = helpers.customStylesheet) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.customStylesheet; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </style>\n  ";
  stack1 = self.invokePartial(partials.PerSlideSurfaceStylesheet, 'PerSlideSurfaceStylesheet', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  \n    <div class=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.isBGClass || depth0.isBGClass),stack1 ? stack1.call(depth0, depth0.surface, options) : helperMissing.call(depth0, "isBGClass", depth0.surface, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "reveal strut-surface\">\n      <div class=\"bg innerBg\">\n      <div class=\"slides\">\n        ";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.slides),stack1 == null || stack1 === false ? stack1 : stack1.models)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth1),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </div>\n      </div>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  if (stack1 = helpers.surface) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.surface; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  return buffer;
  }

function program4(depth0,data,depth2) {
  
  var buffer = "", stack1, options;
  buffer += "\n        ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0, depth2),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program5(depth0,data,depth1,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n          <section class=\"";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.determineBG || depth1.determineBG),stack1 ? stack1.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineBG", depth1, depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " slideContainer strut-slide-";
  if (stack2 = helpers.index) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.index; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" style=\"width: 1024px; height: 768px;\" data-state=\"strut-slide-";
  if (stack2 = helpers.index) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.index; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2);
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.determineSurface || depth1.determineSurface),stack1 ? stack1.call(depth0, depth1, depth3, options) : helperMissing.call(depth0, "determineSurface", depth1, depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n            <div class=\"themedArea\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.marked || depth0.marked),stack1 ? stack1.call(depth0, depth0.markdown, options) : helperMissing.call(depth0, "marked", depth0.markdown, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  if (stack2 = helpers.components) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.components; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.components) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          </section>\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n              ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.renderComponent || depth0.renderComponent),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "renderComponent", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["strut.presentation_generator/Button"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	"
    + escapeExpression(((stack1 = ((stack1 = depth0.chosen),stack1 == null || stack1 === false ? stack1 : stack1.shortname)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	"
    + escapeExpression(((stack1 = ((stack1 = depth0.chosen),stack1 == null || stack1 === false ? stack1 : stack1.displayName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n";
  return buffer;
  }

  buffer += "<button class=\"btn btn-success act\"><i class=\"icon-play icon-white\"/><span class=\"chosen\">\n";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.chosen),stack1 == null || stack1 === false ? stack1 : stack1.shortname), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</span></button>\n";
  return buffer;
  });

this["JST"]["strut.presentation_generator/CustomBgStylesheet"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	.";
  if (stack1 = helpers.klass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.klass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " {\n		background: ";
  if (stack1 = helpers.style) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.style; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\n	}\n";
  return buffer;
  }

  stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  });

this["JST"]["strut.presentation_generator/PerSlideSurfaceStylesheet"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	.strut-surface {\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.getBGImgStyle || depth0.getBGImgStyle),stack1 ? stack1.call(depth0, depth0.surface, options) : helperMissing.call(depth0, "getBGImgStyle", depth0.surface, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	}\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	.slideContainer {\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.getBGImgStyle || depth0.getBGImgStyle),stack1 ? stack1.call(depth0, depth0.background, options) : helperMissing.call(depth0, "getBGImgStyle", depth0.background, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	}\n";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n	";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.attributes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.attributes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.attributes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.isBGImg || depth0.isBGImg),stack1 ? stack1.call(depth0, depth0.surface, options) : helperMissing.call(depth0, "isBGImg", depth0.surface, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data};
  stack2 = ((stack1 = helpers.isBGImg || depth0.isBGImg),stack1 ? stack1.call(depth0, depth0.background, options) : helperMissing.call(depth0, "isBGImg", depth0.background, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		.strut-surface > .strut-slide-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " {\n			/*this only works for bg images or custom bgs*/\n			/*for bg classes we'll have to introduce a data api*/\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.getBGImgStyle || depth0.getBGImgStyle),stack1 ? stack1.call(depth0, depth0.surface, options) : helperMissing.call(depth0, "getBGImgStyle", depth0.surface, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		}\n		";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		.slideContainer.strut-slide-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " {\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.getBGImgStyle || depth0.getBGImgStyle),stack1 ? stack1.call(depth0, depth0.background, options) : helperMissing.call(depth0, "getBGImgStyle", depth0.background, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		}\n		";
  return buffer;
  }

  buffer += "<style>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.isBGImg || depth0.isBGImg),stack1 ? stack1.call(depth0, depth0.surface, options) : helperMissing.call(depth0, "isBGImg", depth0.surface, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.isBGImg || depth0.isBGImg),stack1 ? stack1.call(depth0, depth0.background, options) : helperMissing.call(depth0, "isBGImg", depth0.background, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.slides),stack1 == null || stack1 === false ? stack1 : stack1.models)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</style>";
  return buffer;
  });

this["JST"]["strut.slide_components/Component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"content-scale\">\n<div class=\"content\"></div>\n</div>\n<span class=\"topLabel label\"> \n	<span class=\"skewx\" data-delta=\"skewX\">↔</span>\n	<span class=\"align\" data-option=\"x\">↹</span>\n</span>\n<span class=\"leftLabel label\"> \n	<span class=\"align\" data-option=\"y\">↹</span>\n	<span class=\"skewy\" data-delta=\"skewY\">↔</span>\n</span>\n<span class=\"rightLabel label rotate\" data-delta=\"rotate\">↻</span>\n<span class=\"scale label\" data-delta=\"scale\">↔</span>\n<span class=\"close-btn-red-20 removeBtn\" title=\"Remove\"></span>\n<div class=\"positioningCtrls form-inline\">\n	<span class=\"label leftposition\">→</span>\n	<input class=\"position\" type=\"text\" data-option=\"x\" value=\"";
  if (stack1 = helpers['x']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['x']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n	<span class=\"label bottomposition\">↑</span>\n	<input class=\"position\" type=\"text\" data-option=\"y\" value=\"";
  if (stack1 = helpers['y']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['y']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n</div>\n";
  return buffer;
  });

this["JST"]["strut.slide_components/ShapesDropdown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n<li><a class=\"shape\" data-index=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><img src=\"";
  if (stack2 = helpers.src) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.src; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" width=\"100%\" height=\"100%\"></img></a></li>\n";
  return buffer;
  }

  buffer += "<a class=\"btn btn-plast dropdown-toggle\" data-toggle=\"dropdown\">\n	<i class=\"icon-star icon-white\"></i>\n	";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, depth0.title, options) : helperMissing.call(depth0, "lang", depth0.title, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</a>\n<ul class=\"dropdown-menu horizontalDropdown\" role=\"menu\" style=\"min-width: 127px; width: 127px\">\n";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.shapes) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.shapes; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.shapes) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["JST"]["strut.slide_editor/Button"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"btn-group iconBtns\">\n	<a class=\"btn btn-plast\">\n		<i class=\"icon-th-list icon-white\"></i>\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "slides", options) : helperMissing.call(depth0, "lang", "slides", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</a>\n</div>";
  return buffer;
  });

this["JST"]["strut.slide_editor/Tablets"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"tablets-content\">\n</div>\n<div class=\"tablets-toggle btn btn-plast\">\n	<span class=\"caret whiteCaret\"></span>\n</div>";
  });

this["JST"]["strut.slide_snapshot/SlideDrawer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.renderComponent || depth0.renderComponent),stack1 ? stack1.call(depth0, depth0, "Video WebFrame", options) : helperMissing.call(depth0, "renderComponent", depth0, "Video WebFrame", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }

  buffer += "<div class=\"themedArea\">\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.marked || depth0.marked),stack1 ? stack1.call(depth0, depth0.markdown, options) : helperMissing.call(depth0, "marked", depth0.markdown, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.components) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.components; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.components) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["strut.slide_snapshot/SlideSnapshot"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"overlay\"></div>\n<div class=\"slideDrawer slideContainer\"></div>\n<span class=\"close-btn-red-20 removeBtn\" title=\"Remove\"></span>\n<span class=\"badge badge-inverse\"> </span>";
  });

this["JST"]["strut.slide_snapshot/TransitionSlideSnapshot"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"content-container\">\n	<div class=\"content\">\n		<div class=\"slideDrawer slideContainer\"></div>\n		<div class=\"back\"></div>\n		<div class=\"top\"></div><div class=\"bottom\"></div><div class=\"left\"></div><div class=\"right\"></div>\n	</div>\n</div>\n\n<div class=\"topLabel form-inline\">\n	<span class=\"label rotates\" data-delta=\"rotateY\">↻Y</span>\n	<input type=\"text\" data-option=\"rotateY\" value=\"";
  if (stack1 = helpers.rotateY) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rotateY; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></input>\n</div>\n<div class=\"leftLabel form-inline\">\n	<span class=\"label rotates\" data-delta=\"rotateX\">↻X</span>\n	<input type=\"text\" data-option=\"rotateX\" value=\"";
  if (stack1 = helpers.rotateX) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rotateX; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></input>\n</div>\n<div class=\"rightLabel form-inline\">\n	<span class=\"label rotates\" data-delta=\"rotateZ\">↻Z</span>\n	<input type=\"text\" data-option=\"rotateZ\" value=\"";
  if (stack1 = helpers.rotateZ) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rotateZ; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></input>\n</div>\n<div class=\"positioningCtrls form-inline\">\n	<span class=\"label layer\">z</span>\n	<input class=\"position\" type=\"text\" data-option=\"z\" value=\"";
  if (stack1 = helpers['z']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['z']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n	<span class=\"label scales\">↔</span>\n	<input class=\"position\" type=\"text\" data-option=\"scale\" value=\"";
  if (stack1 = helpers.impScale) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.impScale; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n</div>\n<span class=\"badge badge-inverse\"> </span>\n";
  return buffer;
  });

this["JST"]["strut.splash/Splash"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div></div>";
  });

this["JST"]["strut.storage/ProviderTab"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div></div>";
  });

this["JST"]["strut.storage/StorageModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<li class=\"providerTab\"><a data-provider=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n		";
  return buffer;
  }

  buffer += "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3 class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<ul class=\"nav nav-tabs\">\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.tabs) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.tabs; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.tabs) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n	<div class=\"tabContent\">\n	</div>\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\n</div>";
  return buffer;
  });

this["JST"]["strut.themes/BackgroundChooserDropdown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<li><a class=\"";
  if (stack1 = helpers.klass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.klass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " thumbnail\" alt=\"";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-class=\"";
  if (stack1 = helpers.klass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.klass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a></li>\n			";
  return buffer;
  }

  buffer += "<a class=\"btn btn-plast dropdown-toggle\" data-toggle=\"dropdown\">\n	<i class=\"icon-tint icon-white\"></i>\n	";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, depth0.title, options) : helperMissing.call(depth0, "lang", depth0.title, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</a>\n<ul class=\"dropdown-menu\" role=\"menu\">\n	<li class=\"dropdown-submenu\">\n		<a tabindex=\"-1\" href=\"#\">All Slides</a>\n		<ul class=\"dropdown-menu horizontalDropdown allSlides\" style=\"min-width: 127px; width: 127px\">\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.backgrounds) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.backgrounds; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.backgrounds) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<li><a class=\"transparentPattern thumbnail\" data-class=\"bg-transparent\"></a></li>\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\n		</ul>\n	</li>\n	<li class=\"dropdown-submenu\">\n		<a tabindex=\"-1\" href=\"#\">Selected Slide</a>\n		<ul class=\"dropdown-menu horizontalDropdown\" style=\"min-width: 127px; width: 127px\">\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.backgrounds) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.backgrounds; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.backgrounds) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<li><a class=\"transparentPattern thumbnail\" data-class=\"bg-transparent\"></a></li>\n			<li><a class=\"nobg thumbnail\" data-class=\"bg-default\"></a></li>\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\n		</ul>\n	</li>\n</ul>\n";
  return buffer;
  });

this["JST"]["strut.themes/ColorChooserModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3 class=\"title\">Custom Color</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<input type='text' class=\"color-chooser pull-right\" />\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\n</div>";
  });

this["JST"]["strut.themes/SurfaceChooserDropdown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<li><a class=\"";
  if (stack1 = helpers.klass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.klass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " thumbnail\" alt=\"";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-class=\"";
  if (stack1 = helpers.klass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.klass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a></li>\n			";
  return buffer;
  }

  buffer += "<a class=\"btn btn-plast dropdown-toggle\" data-toggle=\"dropdown\">\n	<i class=\"icon-tint icon-white\"></i>\n	";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, depth0.title, options) : helperMissing.call(depth0, "lang", depth0.title, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</a>\n<ul class=\"dropdown-menu\" role=\"menu\">\n	<li class=\"dropdown-submenu\">\n		<a tabindex=\"-1\" href=\"#\">All Slides</a>\n		<ul class=\"dropdown-menu horizontalDropdown allSlides\" style=\"min-width: 127px; width: 127px\">\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.backgrounds) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.backgrounds; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.backgrounds) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<li><a class=\"nobg thumbnail\" data-class=\"bg-default\"></a></li>\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\n		</ul>\n	</li>\n	<li class=\"dropdown-submenu\">\n		<a tabindex=\"-1\" href=\"#\">Selected Slide</a>\n		<ul class=\"dropdown-menu horizontalDropdown\" style=\"min-width: 127px; width: 127px\">\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack2 = helpers.backgrounds) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.backgrounds; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.backgrounds) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<li><a class=\"nobg thumbnail\" data-class=\"bg-default\"></a></li>\n			<li><a class=\"bg-img thumbnail\" data-class=\"bg-img\"><i class=\"icon-picture\"></i></a></li>\n			<li><a class=\"bg-custom thumbnail\" data-class=\"bg-custom\"><i class=\"icon-pencil\"></i></a></li>\n		</ul>\n	</li>\n</ul>\n";
  return buffer;
  });

this["JST"]["strut.transition_editor/Button"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"btn-group iconBtns\">\n	<a class=\"btn btn-plast\">\n		<i class=\"icon-th-large icon-white\"></i>\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.lang || depth0.lang),stack1 ? stack1.call(depth0, "overview", options) : helperMissing.call(depth0, "lang", "overview", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</a>\n</div>";
  return buffer;
  });

this["JST"]["strut.transition_editor/CannedTransitions"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<li class=\"span4\">\n		<a href=\"#\" data-name=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"thumbnail";
  stack1 = helpers['if'].call(depth0, depth0.active, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n			<img src=\"";
  if (stack1 = helpers.img) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.img; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"";
  if (stack1 = helpers.style) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.style; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></img>\n		</a>\n	</li>\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

  buffer += "<ul class=\"thumbnails\">\n	";
  stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n<span class=\"bespoke-link\">\n	<a href=\"https://github.com/markdalgleish/bespoke.js\" target=\"_blank\">Bespoke.js</a>\n</span>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/CodeEditor"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<textarea class=\"codeInput\">";
  if (stack1 = helpers.placeholder) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.placeholder; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">Save</a>\n	<a href=\"#\" class=\"btn btn-danger cancel\">Cancel</a>\n</div>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/FileBrowser"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n	<li data-fileName=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"><a>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + " <button class=\"close pull-right\">×</button></a></li>\n	";
  return buffer;
  }

  buffer += "<input type=\"text\" class=\"fileName\"></input>\n<ul class=\"nav nav-pills nav-stacked\">\n	";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.files) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.files; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.files) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/InputRequestModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3 class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<div class=\"errors\"></div>\n	<form class=\"form-inline\">\n		<label>";
  if (stack1 = helpers.prompt) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prompt; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ":&nbsp;</label><input type=\"text\" />\n	</form>\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#!\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\n</div>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/ItemImportModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "<div data-option=\"browse\" class=\"btn\">Browse</div>";
  }

function program3(depth0,data) {
  
  
  return "<div data-option=\"search\" class=\"btn\">Search</div>";
  }

function program5(depth0,data) {
  
  
  return "<div class=\"droparea\">Drag & Drop</div>";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <img class=\"preview\" width=\"166\" height=\"140\" style=\"padding:2px;margin: 0 auto; position: relative; z-index: 1; display:inline-block\" src=\"";
  if (stack1 = helpers.path) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.path; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        ";
  return buffer;
  }

  buffer += "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<div class=\"alert alert-error dispNone\">\n  		<button class=\"close\" data-dismiss=\"alert\">×</button>\n  		The image URL you entered appears to be incorrect\n	</div>\n	<h4>URL/File/Keyword:</h4><div class=\"form-inline\">\n	<input type=\"text\" name=\"itemUrl\"></input>\n	&nbsp;";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.browsable) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.browsable; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.browsable) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	     ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  if (stack1 = helpers.searchable) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.searchable; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.searchable) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n    	<input type=\"file\" style=\"display:none\"></input>\n    	<h4>Preview:</h4>\n	<ul class=\"thumbnails\">\n		<li class=\"span4\">\n			<div class=\"thumbnail\" style=\"width: 368px; height: 276px; position: relative;overflow-y:auto;\">\n				";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.browsable) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.browsable; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.browsable) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data};
  if (stack1 = helpers.pics) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.pics; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.pics) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n			<div class=\"progressprogressloading dispNone\" style=\"height:60px;padding-left:80px\">\n  				<img src=\"../../img/extend/loading.gif\">\n			</div>\n		</li>\n	</ul>\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#\" class=\"btn btn-primary ok btn-inverse\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n</div>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/List"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "\n	<li></li>\n	";
  }

  buffer += "<ul>\n	";
  stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/PopoverTextbox"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " <input type=\"textbox\" placeholder=\"custom1 custom2\"></input>\n<div>\n<a class=\"btn btn-plast ok\">Ok</a>\n<a class=\"btn btn-danger cancel\">Cancel</a>\n</div>";
  return buffer;
  });

this["JST"]["tantaman.web.widgets/TabbedModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<li class=\"providerTab\" data-provider=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><a>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n		";
  return buffer;
  }

  buffer += "<div class=\"modal-header\">\n	<button class=\"close\" data-dismiss=\"modal\">×</button>\n	<h3 class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n</div>\n<div class=\"modal-body\" style=\"overflow: hidden\">\n	<ul class=\"nav nav-tabs\">\n		";
  stack2 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</ul>\n	<div class=\"tabContent\">\n	</div>\n</div>\n<div class=\"modal-footer\">\n	<a href=\"#!\" class=\"btn btn-primary ok btn-inverse\">Ok</a>\n</div>";
  return buffer;
  });

return this["JST"];

});