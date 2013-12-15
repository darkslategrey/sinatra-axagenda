Ext.data.JsonP.Extensible_calendar_form_field_CalendarCombo({"tagname":"class","name":"Extensible.calendar.form.field.CalendarCombo","autodetected":{"aliases":true,"alternateClassNames":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"CalendarCombo.js","href":"CalendarCombo.html#Extensible-calendar-form-field-CalendarCombo"}],"extends":"Ext.form.field.ComboBox","aliases":{"widget":["extensible.calendarcombo"]},"alternateClassNames":[],"mixins":[],"requires":["Extensible.calendar.data.CalendarMappings"],"uses":[],"members":[{"name":"defaultCls","tagname":"property","owner":"Extensible.calendar.form.field.CalendarCombo","id":"property-defaultCls","meta":{"private":true}},{"name":"fieldLabel","tagname":"property","owner":"Extensible.calendar.form.field.CalendarCombo","id":"property-fieldLabel","meta":{"private":true}},{"name":"forceSelection","tagname":"property","owner":"Extensible.calendar.form.field.CalendarCombo","id":"property-forceSelection","meta":{"private":true}},{"name":"hiddenCalendarCls","tagname":"property","owner":"Extensible.calendar.form.field.CalendarCombo","id":"property-hiddenCalendarCls","meta":{"private":true}},{"name":"queryMode","tagname":"property","owner":"Extensible.calendar.form.field.CalendarCombo","id":"property-queryMode","meta":{"private":true}},{"name":"selectOnFocus","tagname":"property","owner":"Extensible.calendar.form.field.CalendarCombo","id":"property-selectOnFocus","meta":{"private":true}},{"name":"triggerAction","tagname":"property","owner":"Extensible.calendar.form.field.CalendarCombo","id":"property-triggerAction","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Extensible.calendar.form.field.CalendarCombo","id":"method-constructor","meta":{}},{"name":"afterRender","tagname":"method","owner":"Extensible.calendar.form.field.CalendarCombo","id":"method-afterRender","meta":{"private":true}},{"name":"getListItemTpl","tagname":"method","owner":"Extensible.calendar.form.field.CalendarCombo","id":"method-getListItemTpl","meta":{"private":true}},{"name":"initComponent","tagname":"method","owner":"Extensible.calendar.form.field.CalendarCombo","id":"method-initComponent","meta":{"private":true}},{"name":"refreshColorCls","tagname":"method","owner":"Extensible.calendar.form.field.CalendarCombo","id":"method-refreshColorCls","meta":{"private":true}},{"name":"setValue","tagname":"method","owner":"Extensible.calendar.form.field.CalendarCombo","id":"method-setValue","meta":{"private":true}}],"code_type":"ext_define","id":"class-Extensible.calendar.form.field.CalendarCombo","short_doc":"A custom combo used for choosing from the list of available calendars to assign an event to. ...","component":false,"superclasses":["Ext.form.field.ComboBox"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.form.field.ComboBox<div class='subclass '><strong>Extensible.calendar.form.field.CalendarCombo</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Extensible.calendar.data.CalendarMappings' rel='Extensible.calendar.data.CalendarMappings' class='docClass'>Extensible.calendar.data.CalendarMappings</a></div><h4>Files</h4><div class='dependency'><a href='source/CalendarCombo.html#Extensible-calendar-form-field-CalendarCombo' target='_blank'>CalendarCombo.js</a></div></pre><div class='doc-contents'><p>A custom combo used for choosing from the list of available calendars to assign an event to. You must\npass a populated calendar store as the store config or the combo will not work.</p>\n\n<p>This is pretty much a standard combo that is simply pre-configured for the options needed by the\ncalendar components. The default configs are as follows:\n    fieldLabel: 'Calendar',\n    triggerAction: 'all',\n    queryMode: 'local',\n    forceSelection: true,\n    width: 200</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-defaultCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.form.field.CalendarCombo'>Extensible.calendar.form.field.CalendarCombo</span><br/><a href='source/CalendarCombo.html#Extensible-calendar-form-field-CalendarCombo-property-defaultCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.form.field.CalendarCombo-property-defaultCls' class='name expandable'>defaultCls</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<p>Defaults to: <code>'x-cal-default'</code></p></div></div></div><div id='property-fieldLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.form.field.CalendarCombo'>Extensible.calendar.form.field.CalendarCombo</span><br/><a href='source/CalendarCombo.html#Extensible-calendar-form-field-CalendarCombo-property-fieldLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.form.field.CalendarCombo-property-fieldLabel' class='name expandable'>fieldLabel</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Calendar'</code></p></div></div></div><div id='property-forceSelection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.form.field.CalendarCombo'>Extensible.calendar.form.field.CalendarCombo</span><br/><a href='source/CalendarCombo.html#Extensible-calendar-form-field-CalendarCombo-property-forceSelection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.form.field.CalendarCombo-property-forceSelection' class='name expandable'>forceSelection</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-hiddenCalendarCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.form.field.CalendarCombo'>Extensible.calendar.form.field.CalendarCombo</span><br/><a href='source/CalendarCombo.html#Extensible-calendar-form-field-CalendarCombo-property-hiddenCalendarCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.form.field.CalendarCombo-property-hiddenCalendarCls' class='name expandable'>hiddenCalendarCls</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'ext-cal-hidden'</code></p></div></div></div><div id='property-queryMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.form.field.CalendarCombo'>Extensible.calendar.form.field.CalendarCombo</span><br/><a href='source/CalendarCombo.html#Extensible-calendar-form-field-CalendarCombo-property-queryMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.form.field.CalendarCombo-property-queryMode' class='name expandable'>queryMode</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'local'</code></p></div></div></div><div id='property-selectOnFocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.form.field.CalendarCombo'>Extensible.calendar.form.field.CalendarCombo</span><br/><a href='source/CalendarCombo.html#Extensible-calendar-form-field-CalendarCombo-property-selectOnFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.form.field.CalendarCombo-property-selectOnFocus' class='name expandable'>selectOnFocus</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-triggerAction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.form.field.CalendarCombo'>Extensible.calendar.form.field.CalendarCombo</span><br/><a href='source/CalendarCombo.html#Extensible-calendar-form-field-CalendarCombo-property-triggerAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.form.field.CalendarCombo-property-triggerAction' class='name expandable'>triggerAction</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'all'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.form.field.CalendarCombo'>Extensible.calendar.form.field.CalendarCombo</span><br/><a href='source/CalendarCombo.html#Extensible-calendar-form-field-CalendarCombo-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Extensible.calendar.form.field.CalendarCombo-method-constructor' class='name expandable'>Extensible.calendar.form.field.CalendarCombo</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Extensible.calendar.form.field.CalendarCombo\" rel=\"Extensible.calendar.form.field.CalendarCombo\" class=\"docClass\">Extensible.calendar.form.field.CalendarCombo</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The config object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Extensible.calendar.form.field.CalendarCombo\" rel=\"Extensible.calendar.form.field.CalendarCombo\" class=\"docClass\">Extensible.calendar.form.field.CalendarCombo</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-afterRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.form.field.CalendarCombo'>Extensible.calendar.form.field.CalendarCombo</span><br/><a href='source/CalendarCombo.html#Extensible-calendar-form-field-CalendarCombo-method-afterRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.form.field.CalendarCombo-method-afterRender' class='name expandable'>afterRender</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-getListItemTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.form.field.CalendarCombo'>Extensible.calendar.form.field.CalendarCombo</span><br/><a href='source/CalendarCombo.html#Extensible-calendar-form-field-CalendarCombo-method-getListItemTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.form.field.CalendarCombo-method-getListItemTpl' class='name expandable'>getListItemTpl</a>( <span class='pre'>displayField</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>displayField</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.form.field.CalendarCombo'>Extensible.calendar.form.field.CalendarCombo</span><br/><a href='source/CalendarCombo.html#Extensible-calendar-form-field-CalendarCombo-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.form.field.CalendarCombo-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-refreshColorCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.form.field.CalendarCombo'>Extensible.calendar.form.field.CalendarCombo</span><br/><a href='source/CalendarCombo.html#Extensible-calendar-form-field-CalendarCombo-method-refreshColorCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.form.field.CalendarCombo-method-refreshColorCls' class='name expandable'>refreshColorCls</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Refresh the color CSS class based on the current field value ...</div><div class='long'><p>Refresh the color CSS class based on the current field value</p>\n<h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-setValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Extensible.calendar.form.field.CalendarCombo'>Extensible.calendar.form.field.CalendarCombo</span><br/><a href='source/CalendarCombo.html#Extensible-calendar-form-field-CalendarCombo-method-setValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extensible.calendar.form.field.CalendarCombo-method-setValue' class='name expandable'>setValue</a>( <span class='pre'>value</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>inherited docs ...</div><div class='long'><p>inherited docs</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div></div></div></div></div>","meta":{}});